import { ChainedMap } from './ChainedMap';
import type { TimelineComponentOption } from './types';

/**
 * Timeline - 时间轴组件配置
 */
export class Timeline<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'axisType',
      'orient',
      'autoPlay',
      'loop',
      'realtime',
      'currentIndex',
      'controlPosition',
      'playInterval',
      // object setters covered by extend
      'data',
      'label',
      'lineStyle',
      'itemStyle',
      'checkpointStyle',
      'controlStyle',
      'tooltip',
    ]);
  }

  /**
   * 轴类型 | Axis type
   * @param value - 'time' | 'value' | 'category'
   */
  axisType!: (value: 'time' | 'value' | 'category') => this;

  /**
   * 布局方向 | Orientation
   * @param value - 'horizontal' | 'vertical'
   */
  orient!: (value: 'horizontal' | 'vertical') => this;

  /**
   * 自动播放 | Auto play
   * @param value - 是否自动播放 | Whether to auto play
   */
  autoPlay!: (value: boolean) => this;

  /**
   * 是否循环 | Loop play
   * @param value - 是否循环 | Whether to loop
   */
  loop!: (value: boolean) => this;

  /**
   * 是否实时更新 | Realtime update
   * @param value - 是否实时 | Whether realtime
   */
  realtime!: (value: boolean) => this;

  /**
   * 当前索引 | Current index
   * @param value - 索引 | Index
   */
  currentIndex!: (value: number) => this;

  /**
   * 控件位置 | Control position
   * @param value - 'left' | 'right' | 'top' | 'bottom'
   */
  controlPosition!: (value: 'left' | 'right' | 'top' | 'bottom') => this;

  /**
   * 播放间隔 | Play interval
   * @param value - 毫秒 | Milliseconds
   */
  playInterval!: (value: number) => this;

  /**
   * 数据项 | Timeline data
   * @param value - 数据数组 | Data array
   */
  data!: (value: TimelineComponentOption['data']) => this;

  /**
   * 标签样式 | Timeline label style
   * @param config - 标签样式配置 | Label style config
   */
  label!: (config: TimelineComponentOption['label']) => this;
  /**
   * 线样式 | Timeline line style
   * @param config - 线样式配置 | Line style config
   */
  lineStyle!: (config: TimelineComponentOption['lineStyle']) => this;
  /**
   * 项样式 | Timeline item style
   * @param config - 项样式配置 | Item style config
   */
  itemStyle!: (config: TimelineComponentOption['itemStyle']) => this;
  /**
   * 检查点样式 | Timeline checkpoint style
   * @param config - 检查点样式配置 | Checkpoint style config
   */
  checkpointStyle!: (config: TimelineComponentOption['checkpointStyle']) => this;
  /**
   * 控件样式 | Timeline control style
   * @param config - 控件样式配置 | Control style config
   */
  controlStyle!: (config: TimelineComponentOption['controlStyle']) => this;
  /**
   * 提示框 | Timeline tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: TimelineComponentOption['tooltip']) => this;
}
