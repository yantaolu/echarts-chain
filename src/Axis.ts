import { ChainedMap } from './ChainedMap';
import type {
  XAXisComponentOption,
  YAXisComponentOption,
  RadiusAxisComponentOption,
  AngleAxisComponentOption,
  SingleAxisComponentOption,
} from './types';
// 使用通用数组类型，因 ECharts 未导出 CategoryAxisBaseOption

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
      'alignTicks',
      // object setters covered by extend
      'axisLine',
      'axisTick',
      'axisLabel',
      'splitLine',
      'splitArea',
      'axisPointer',
      'minorTick',
      'minorSplitLine',
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
  /**
   * 坐标轴名称文本样式 | Axis name text style
   * @param value - 文本样式 | Text style
   */
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
  alignTicks!: (value: boolean) => this;

  /**
   * 设置坐标轴数据 | Set axis data
   * @param value - 数据数组 | Data array
   */
  data(value: any[]): this {
    return this.set('data', value);
  }

  /**
   * 设置坐标轴线 | Set axis line
   * @param config - 轴线样式 | AxisLine style
   */
  axisLine!: (
    config:
      | XAXisComponentOption['axisLine']
      | YAXisComponentOption['axisLine']
      | RadiusAxisComponentOption['axisLine']
      | AngleAxisComponentOption['axisLine']
      | SingleAxisComponentOption['axisLine']
  ) => this;

  /**
   * 设置坐标轴刻度 | Set axis tick
   * @param config - 刻度样式 | AxisTick style
   */
  axisTick!: (
    config:
      | XAXisComponentOption['axisTick']
      | YAXisComponentOption['axisTick']
      | RadiusAxisComponentOption['axisTick']
      | AngleAxisComponentOption['axisTick']
      | SingleAxisComponentOption['axisTick']
  ) => this;

  /**
   * 设置坐标轴标签 | Set axis label
   * @param config - 标签样式 | AxisLabel style
   */
  axisLabel!: (
    config:
      | XAXisComponentOption['axisLabel']
      | YAXisComponentOption['axisLabel']
      | RadiusAxisComponentOption['axisLabel']
      | AngleAxisComponentOption['axisLabel']
      | SingleAxisComponentOption['axisLabel']
  ) => this;

  /**
   * 设置坐标轴分隔线 | Set split line
   * @param config - 分隔线样式 | SplitLine style
   */
  splitLine!: (
    config:
      | XAXisComponentOption['splitLine']
      | YAXisComponentOption['splitLine']
      | RadiusAxisComponentOption['splitLine']
      | AngleAxisComponentOption['splitLine']
      | SingleAxisComponentOption['splitLine']
  ) => this;

  /**
   * 设置坐标轴分隔区域 | Set split area
   * @param config - 分隔区域样式 | SplitArea style
   */
  splitArea!: (
    config:
      | XAXisComponentOption['splitArea']
      | YAXisComponentOption['splitArea']
      | RadiusAxisComponentOption['splitArea']
      | AngleAxisComponentOption['splitArea']
      | SingleAxisComponentOption['splitArea']
  ) => this;

  /**
   * 设置坐标轴指示器 | Set axis pointer
   * @param config - 指示器样式 | AxisPointer style
   */
  axisPointer!: (
    config:
      | XAXisComponentOption['axisPointer']
      | YAXisComponentOption['axisPointer']
      | RadiusAxisComponentOption['axisPointer']
      | AngleAxisComponentOption['axisPointer']
      | SingleAxisComponentOption['axisPointer']
  ) => this;

  /**
   * 设置次刻度 | Set minor tick
   * @param config - 次刻度样式 | MinorTick style
   */
  minorTick!: (
    config:
      | XAXisComponentOption['minorTick']
      | YAXisComponentOption['minorTick']
      | RadiusAxisComponentOption['minorTick']
      | AngleAxisComponentOption['minorTick']
      | SingleAxisComponentOption['minorTick']
  ) => this;

  /**
   * 设置次分隔线 | Set minor split line
   * @param config - 次分隔线样式 | Minor split line style
   */
  minorSplitLine!: (
    config:
      | XAXisComponentOption['minorSplitLine']
      | YAXisComponentOption['minorSplitLine']
      | RadiusAxisComponentOption['minorSplitLine']
      | AngleAxisComponentOption['minorSplitLine']
      | SingleAxisComponentOption['minorSplitLine']
  ) => this;
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

/**
 * AngleAxis - 极坐标系角度轴
 */
export class AngleAxis<Parent = any> extends Axis<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend(['polarIndex']);
  }

  /**
   * 关联的极坐标索引
   */
  polarIndex!: (value: number) => this;
}

/**
 * RadiusAxis - 极坐标系半径轴
 */
export class RadiusAxis<Parent = any> extends Axis<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend(['polarIndex']);
  }

  /**
   * 关联的极坐标索引
   */
  polarIndex!: (value: number) => this;
}

/**
 * ParallelAxis - 平行坐标轴
 */
export class ParallelAxis<Parent = any> extends Axis<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend(['parallelIndex', 'dim']);
  }

  /**
   * 关联的平行坐标索引
   */
  parallelIndex!: (value: number) => this;

  /**
   * 维度索引
   */
  dim!: (value: number) => this;
}

/**
 * SingleAxis - 单轴坐标系
 */
export class SingleAxis<Parent = any> extends Axis<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend(['left', 'right', 'top', 'bottom', 'width', 'height', 'polarIndex']);
  }

  /**
   * 位置与尺寸
   */
  left!: (value: string | number) => this;
  right!: (value: string | number) => this;
  top!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;
  polarIndex!: (value: number) => this;
}
