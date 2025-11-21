import { ChainedMap } from './ChainedMap';

/**
 * Axis - 坐标轴配置基类
 */
export class Axis<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'show',
      'gridIndex',
      'position',
      'offset',
      'type',
      'name',
      'nameLocation',
      'nameTextStyle',
      'nameGap',
      'nameRotate',
      'inverse',
      'boundaryGap',
      'min',
      'max',
      'scale',
      'splitNumber',
      'minInterval',
      'maxInterval',
      'interval',
      'logBase',
      'silent',
      'triggerEvent',
      'animation',
      'animationThreshold',
      'animationDuration',
      'animationEasing',
      'animationDelay',
      'animationDurationUpdate',
      'animationEasingUpdate',
      'animationDelayUpdate',
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  gridIndex!: (value: number) => this;
  position!: (value: string) => this;
  offset!: (value: number) => this;
  type!: (value: 'value' | 'category' | 'time' | 'log') => this;
  name!: (value: string) => this;
  nameLocation!: (value: 'start' | 'middle' | 'center' | 'end') => this;
  nameTextStyle!: (value: Record<string, any>) => this;
  nameGap!: (value: number) => this;
  nameRotate!: (value: number) => this;
  inverse!: (value: boolean) => this;
  boundaryGap!: (value: boolean | [string | number, string | number]) => this;
  min!: (value: number | string | ((...args: any[]) => any)) => this;
  max!: (value: number | string | ((...args: any[]) => any)) => this;
  scale!: (value: boolean) => this;
  splitNumber!: (value: number) => this;
  minInterval!: (value: number) => this;
  maxInterval!: (value: number) => this;
  interval!: (value: number) => this;
  logBase!: (value: number) => this;
  silent!: (value: boolean) => this;
  triggerEvent!: (value: boolean) => this;
  animation!: (value: boolean) => this;
  animationThreshold!: (value: number) => this;
  animationDuration!: (value: number | ((...args: any[]) => any)) => this;
  animationEasing!: (value: string) => this;
  animationDelay!: (value: number | ((...args: any[]) => any)) => this;
  animationDurationUpdate!: (value: number | ((...args: any[]) => any)) => this;
  animationEasingUpdate!: (value: string) => this;
  animationDelayUpdate!: (value: number | ((...args: any[]) => any)) => this;

  /**
   * 设置坐标轴数据
   */
  data(value: any[]): this {
    return this.set('data', value);
  }

  /**
   * 设置坐标轴线
   */
  axisLine(config: Record<string, any>): this {
    return this.set('axisLine', config);
  }

  /**
   * 设置坐标轴刻度
   */
  axisTick(config: Record<string, any>): this {
    return this.set('axisTick', config);
  }

  /**
   * 设置坐标轴标签
   */
  axisLabel(config: Record<string, any>): this {
    return this.set('axisLabel', config);
  }

  /**
   * 设置坐标轴分隔线
   */
  splitLine(config: Record<string, any>): this {
    return this.set('splitLine', config);
  }

  /**
   * 设置坐标轴分隔区域
   */
  splitArea(config: Record<string, any>): this {
    return this.set('splitArea', config);
  }

  /**
   * 设置坐标轴指示器
   */
  axisPointer(config: Record<string, any>): this {
    return this.set('axisPointer', config);
  }
}

/**
 * XAxis - X轴配置类
 */
export class XAxis<Parent = any> extends Axis<Parent> {
  constructor(parent?: Parent) {
    super(parent);
  }
}

/**
 * YAxis - Y轴配置类
 */
export class YAxis<Parent = any> extends Axis<Parent> {
  constructor(parent?: Parent) {
    super(parent);
  }
}
