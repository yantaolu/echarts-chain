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
      'alignTicks',
      'position',
      'offset',
      'type',
      'name',
      'nameLocation',
      'nameTextStyle',
      'nameGap',
      'nameRotate',
      'nameTruncate',
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
      'startValue',
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
      'data',
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
  /**
   * 是否显示坐标轴 | Show the axis
   * @param value - 是否显示 | Whether to display the axis
   */
  show!: (value: boolean) => this;
  /**
   * 所属网格索引 | Index of the target grid
   * @param value - 网格索引 | Grid component index
   */
  gridIndex!: (value: number) => this;
  /**
   * 坐标轴位置 | Axis position within grid
   * @param value - 位置（如 'top'/'bottom'/'left'/'right'）| Position string
   */
  position!: (value: 'top' | 'bottom' | 'left' | 'right') => this;
  /**
   * 位置偏移 | Position offset in pixels
   * @param value - 偏移量 | Offset value
   */
  offset!: (value: number) => this;
  /**
   * 坐标轴类型 | Axis type
   * @param value - 'value'/'category'/'time'/'log' | Axis type
   */
  type!: (value: 'value' | 'category' | 'time' | 'log') => this;
  /**
   * 坐标轴名称 | Axis name text
   * @param value - 名称文本 | Name string
   */
  name!: (value: string) => this;
  /**
   * 名称位置 | Name position
   * @param value - 'start'/'middle'/'center'/'end' | Position of name
   */
  nameLocation!: (value: 'start' | 'middle' | 'center' | 'end') => this;
  /**
   * 坐标轴名称文本样式 | Axis name text style
   * @param value - 文本样式 | Text style
   */
  nameTextStyle!: (value: Record<string, any>) => this;
  /**
   * 名称与轴线间距 | Gap between name and axis
   * @param value - 间距像素 | Gap in pixels
   */
  nameGap!: (value: number) => this;
  /**
   * 名称旋转角度 | Rotation of axis name
   * @param value - 角度（度）| Angle in degrees
   */
  nameRotate!: (value: number) => this;
  /**
   * 名称截断配置 | Name truncate configuration
   * @param value - 截断相关配置 | Truncation config
   */
  nameTruncate!: (value: { maxWidth?: number; ellipsis?: string }) => this;
  /**
   * 是否反向 | Invert axis direction
   * @param value - 开启反向 | Enable inverse direction
   */
  inverse!: (value: boolean) => this;
  /**
   * 边界留白 | Boundary gap at both ends
   * @param value - 布尔或两端间距 | Boolean or tuple gap
   */
  boundaryGap!: (value: boolean | [string | number, string | number]) => this;

  /**
   * 最小值 | Minimum value
   * @param value - 数值/特殊字符串 'dataMin' 或函数 | Number/string 'dataMin' or function
   */
  min!: (value: 'dataMin' | number | string | Date | ((...args: any[]) => any)) => this;
  /**
   * 最大值 | Maximum value
   * @param value - 数值/特殊字符串 'dataMax' 或函数 | Number/string 'dataMax' or function
   */
  max!: (value: 'dataMax' | number | string | Date | ((...args: any[]) => any)) => this;
  /**
   * 不强制包含零 | Scale without forcing zero
   * @param value - 是否启用 | Whether to enable
   */
  scale!: (value: boolean) => this;
  /**
   * 分割段数 | Number of segments
   * @param value - 段数 | Segment count
   */
  splitNumber!: (value: number) => this;
  /**
   * 最小刻度间隔 | Minimum interval
   * @param value - 间隔 | Interval value
   */
  minInterval!: (value: number) => this;
  /**
   * 最大刻度间隔 | Maximum interval
   * @param value - 间隔 | Interval value
   */
  maxInterval!: (value: number) => this;
  /**
   * 指定刻度间隔 | Specify tick interval
   * @param value - 间隔 | Interval value
   */
  interval!: (value: number) => this;
  /**
   * 对数轴底数 | Log axis base
   * @param value - 底数 | Base value
   */
  logBase!: (value: number) => this;
  /**
   * 起始值 | Start value
   * @param value - 数值或日期对象 | Number or Date object
   */
  startValue!: (value: number | Date) => this;
  /**
   * 禁用交互 | Silence mouse interaction
   * @param value - 是否禁用 | Whether to disable
   */
  silent!: (value: boolean) => this;
  /**
   * 触发事件 | Enable axis events
   * @param value - 是否触发 | Whether to trigger
   */
  triggerEvent!: (value: boolean) => this;
  /**
   * 开启动画 | Enable animation
   * @param value - 是否启用 | Whether to enable
   */
  animation!: (value: boolean) => this;
  /**
   * 动画阈值 | Animation threshold
   * @param value - 阈值 | Threshold value
   */
  animationThreshold!: (value: number) => this;
  /**
   * 动画时长 | Animation duration
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDuration!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 动画缓动 | Animation easing
   * @param value - 缓动名称 | Easing name
   */
  animationEasing!: (value: string) => this;
  /**
   * 动画延迟 | Animation delay
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDelay!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 更新动画时长 | Update animation duration
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDurationUpdate!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 更新动画缓动 | Update animation easing
   * @param value - 缓动名称 | Easing name
   */
  animationEasingUpdate!: (value: string) => this;
  /**
   * 更新动画延迟 | Update animation delay
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDelayUpdate!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 对齐刻度 | Align ticks across axes
   * @param value - 是否对齐 | Whether to align
   */
  alignTicks!: (value: boolean) => this;

  /**
   * 设置坐标轴数据 | Set axis data
   * @param value - 数据数组 | Data array
   */
  data!: (value: any[]) => this;

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
   * 关联的极坐标索引 | Associated polar coordinate index
   * @param value - 极坐标索引 | Polar index
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
   * 关联的极坐标索引 | Associated polar coordinate index
   * @param value - 极坐标索引 | Polar index
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
   * 关联的平行坐标索引 | Associated parallel coordinate index
   * @param value - 平行坐标系索引 | Parallel system index
   */
  parallelIndex!: (value: number) => this;

  /**
   * 维度索引 | Dimension index
   * @param value - 维度序号 | Dimension ordinal
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
   * 位置与尺寸 | Position and size
   */
  /**
   * 左侧位置 | Left position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  left!: (value: string | number) => this;
  /**
   * 右侧位置 | Right position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  right!: (value: string | number) => this;
  /**
   * 顶部位置 | Top position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  top!: (value: string | number) => this;
  /**
   * 底部位置 | Bottom position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  bottom!: (value: string | number) => this;
  /**
   * 组件宽度 | Component width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  width!: (value: string | number) => this;
  /**
   * 组件高度 | Component height
   * @param value - 像素或百分比 | Pixels or percentage
   */
  height!: (value: string | number) => this;
  /**
   * 关联的坐标系索引 | Associated coordinate system index
   * @param value - 坐标系索引 | Coordinate system index
   */
  polarIndex!: (value: number) => this;
}
