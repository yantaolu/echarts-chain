/**
 * ChainedMap - 链式 Map 操作基类
 * 提供链式调用的基础能力
 */
export class ChainedMap<Parent = any> {
  public parent?: Parent;
  public store: Map<string, any>;

  constructor(parent?: Parent) {
    this.parent = parent;
    this.store = new Map();
  }

  /**
   * 扩展当前实例
   * @param methods - 要扩展的方法名数组
   */
  extend(methods: string[]): this {
    methods.forEach(method => {
      (this as any)[method] = (value: any) => this.set(method, value);
    });
    return this;
  }

  /**
   * 设置键值对
   * @param key - 键
   * @param value - 值
   */
  set(key: string, value: any): this {
    this.store.set(key, value);
    return this;
  }

  /**
   * 获取值
   * @param key - 键
   */
  get(key: string): any {
    return this.store.get(key);
  }

  /**
   * 判断是否存在某个键
   * @param key - 键
   */
  has(key: string): boolean {
    return this.store.has(key);
  }

  /**
   * 删除某个键
   * @param key - 键
   */
  delete(key: string): this {
    this.store.delete(key);
    return this;
  }

  /**
   * 清空所有数据
   */
  clear(): this {
    this.store.clear();
    return this;
  }

  /**
   * 批量合并配置
   * @param obj - 配置对象
   * @param omit - 要忽略的键
   */
  merge(obj: Record<string, any>, omit: string[] = []): this {
    Object.keys(obj).forEach(key => {
      if (omit.includes(key)) return;

      const value = obj[key];
      if (typeof (this as any)[key] === 'function') {
        (this as any)[key](value);
      } else {
        this.set(key, value);
      }
    });
    return this;
  }

  /**
   * 批量设置配置
   * @param obj - 配置对象
   */
  batch(obj: Record<string, any>): this {
    Object.keys(obj).forEach(key => {
      this.set(key, obj[key]);
    });
    return this;
  }

  /**
   * 条件设置
   * @param condition - 条件
   * @param whenTrue - 条件为真时执行
   * @param whenFalse - 条件为假时执行
   */
  when(
    condition: boolean,
    whenTrue: (instance: this) => void,
    whenFalse?: (instance: this) => void
  ): this {
    if (condition) {
      whenTrue(this);
    } else if (whenFalse) {
      whenFalse(this);
    }
    return this;
  }

  /**
   * 返回父级
   */
  quit(): Parent {
    return this.parent as Parent;
  }

  /**
   * 转换为普通对象
   */
  toConfig(): Record<string, any> {
    const config: Record<string, any> = {};
    this.store.forEach((value, key) => {
      config[key] = value && typeof value.toConfig === 'function' ? value.toConfig() : value;
    });
    return config;
  }

  /**
   * 获取所有键
   */
  keys(): string[] {
    return Array.from(this.store.keys());
  }

  /**
   * 获取所有值
   */
  values(): any[] {
    return Array.from(this.store.values());
  }

  /**
   * 获取所有条目
   */
  entries(): [string, any][] {
    return Array.from(this.store.entries());
  }
}
