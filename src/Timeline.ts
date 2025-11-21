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
    ]);
  }

  /**
   * 轴类型
   */
  axisType!: (value: 'time' | 'value' | 'category') => this;

  /**
   * 布局方向
   */
  orient!: (value: 'horizontal' | 'vertical') => this;

  /**
   * 自动播放
   */
  autoPlay!: (value: boolean) => this;

  /**
   * 是否循环
   */
  loop!: (value: boolean) => this;

  /**
   * 是否实时更新
   */
  realtime!: (value: boolean) => this;

  /**
   * 当前索引
   */
  currentIndex!: (value: number) => this;

  /**
   * 控件位置
   */
  controlPosition!: (value: 'left' | 'right' | 'top' | 'bottom') => this;

  /**
   * 播放间隔
   */
  playInterval!: (value: number) => this;

  /**
   * 数据项 | Timeline data
   * @param value - 数据数组 | Data array
   */
  data(value: TimelineComponentOption['data']): this {
    return this.set('data', value);
  }

  /** 样式配置 | Timeline styles */
  label(config: TimelineComponentOption['label']): this {
    return this.set('label', config);
  }
  lineStyle(config: TimelineComponentOption['lineStyle']): this {
    return this.set('lineStyle', config);
  }
  itemStyle(config: TimelineComponentOption['itemStyle']): this {
    return this.set('itemStyle', config);
  }
  checkpointStyle(config: TimelineComponentOption['checkpointStyle']): this {
    return this.set('checkpointStyle', config);
  }
  controlStyle(config: TimelineComponentOption['controlStyle']): this {
    return this.set('controlStyle', config);
  }
  tooltip(config: TimelineComponentOption['tooltip']): this {
    return this.set('tooltip', config);
  }
}
