import { ChainedMap } from './ChainedMap';

/**
 * Orderable - 可排序的配置管理类
 * 用于管理需要保持顺序的配置项（如 series）
 */
export class Orderable<Parent = any> extends ChainedMap<Parent> {
  public order: string[];

  constructor(parent?: Parent) {
    super(parent);
    this.order = [];
  }

  /**
   * 设置带名称的配置
   * @param name - 配置名称
   * @param value - 配置值
   */
  set(name: string, value: any): this {
    if (!this.has(name)) {
      this.order.push(name);
    }
    return super.set(name, value);
  }

  /**
   * 删除配置
   * @param name - 配置名称
   */
  delete(name: string): this {
    this.order = this.order.filter(item => item !== name);
    return super.delete(name);
  }

  /**
   * 清空所有配置
   */
  clear(): this {
    this.order = [];
    return super.clear();
  }

  /**
   * 在某个配置之前插入
   * @param name - 配置名称
   * @param before - 在此之前
   * @param value - 配置值
   */
  before(name: string, before: string, value: any): this {
    if (this.has(name)) {
      this.delete(name);
    }

    const index = this.order.indexOf(before);
    if (index === -1) {
      this.order.push(name);
    } else {
      this.order.splice(index, 0, name);
    }

    super.set(name, value);
    return this;
  }

  /**
   * 在某个配置之后插入
   * @param name - 配置名称
   * @param after - 在此之后
   * @param value - 配置值
   */
  after(name: string, after: string, value: any): this {
    if (this.has(name)) {
      this.delete(name);
    }

    const index = this.order.indexOf(after);
    if (index === -1) {
      this.order.push(name);
    } else {
      this.order.splice(index + 1, 0, name);
    }

    super.set(name, value);
    return this;
  }

  /**
   * 转换为配置数组
   */
  toConfig(): any[] {
    return this.order
      .map(name => {
        const value = this.get(name);
        return value && typeof value.toConfig === 'function' ? value.toConfig() : value;
      })
      .filter(config => config !== undefined);
  }
}
