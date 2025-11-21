/**
 * ChainedSet - 链式 Set 操作基类
 * 用于管理数组类型的配置
 */
export class ChainedSet<Parent = any> {
  public parent?: Parent;
  public store: Set<any>;

  constructor(parent?: Parent) {
    this.parent = parent;
    this.store = new Set();
  }

  /**
   * 添加元素
   * @param value - 值
   */
  add(value: any): this {
    this.store.add(value);
    return this;
  }

  /**
   * 前置添加元素
   * @param value - 值
   */
  prepend(value: any): this {
    const values = Array.from(this.store);
    this.store.clear();
    this.store.add(value);
    values.forEach(v => this.store.add(v));
    return this;
  }

  /**
   * 删除元素
   * @param value - 值
   */
  delete(value: any): this {
    this.store.delete(value);
    return this;
  }

  /**
   * 清空所有元素
   */
  clear(): this {
    this.store.clear();
    return this;
  }

  /**
   * 判断是否包含某个元素
   * @param value - 值
   */
  has(value: any): boolean {
    return this.store.has(value);
  }

  /**
   * 批量合并
   * @param arr - 数组
   */
  merge(arr: any[]): this {
    arr.forEach(value => this.add(value));
    return this;
  }

  /**
   * 条件添加
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
  end(): Parent {
    return this.parent as Parent;
  }

  /**
   * 转换为数组
   */
  toConfig(): any[] {
    return Array.from(this.store);
  }

  /**
   * 获取所有值
   */
  values(): any[] {
    return Array.from(this.store);
  }
}
