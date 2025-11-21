import { ChainedMap } from './ChainedMap';

/**
 * Series - 系列配置类
 */
export class Series<Parent = any> extends ChainedMap<Parent> {
  constructor(parent: Parent, name: string) {
    super(parent);
    this.extend([
      'type',
      'id',
      'name',
      'coordinateSystem',
      'xAxisIndex',
      'yAxisIndex',
      'polarIndex',
      'geoIndex',
      'calendarIndex',
      'stack',
      'cursor',
      'legendHoverLink',
      'connectNulls',
      'clip',
      'step',
      'smooth',
      'smoothMonotone',
      'symbol',
      'symbolSize',
      'symbolRotate',
      'symbolKeepAspect',
      'symbolOffset',
      'showSymbol',
      'showAllSymbol',
      'sampling',
      'dimensions',
      'encode',
      'seriesLayoutBy',
      'datasetIndex',
      'colorBy',
      'progressiveThreshold',
      'progressive',
      'large',
      'largeThreshold',
      'animation',
      'animationThreshold',
      'animationDuration',
      'animationEasing',
      'animationDelay',
      'animationDurationUpdate',
      'animationEasingUpdate',
      'animationDelayUpdate',
      'universalTransition',
      'zlevel',
      'z',
      'silent',
    ]);
    this.set('name', name);
  }

  // 实现由 extend 动态创建
  type!: (value: string) => this;
  id!: (value: string) => this;
  name!: (value: string) => this;
  coordinateSystem!: (value: string) => this;
  xAxisIndex!: (value: number) => this;
  yAxisIndex!: (value: number) => this;
  polarIndex!: (value: number) => this;
  geoIndex!: (value: number) => this;
  calendarIndex!: (value: number) => this;
  stack!: (value: string) => this;
  cursor!: (value: string) => this;
  legendHoverLink!: (value: boolean) => this;
  connectNulls!: (value: boolean) => this;
  clip!: (value: boolean) => this;
  step!: (value: boolean | 'start' | 'middle' | 'end') => this;
  smooth!: (value: boolean | number) => this;
  smoothMonotone!: (value: 'x' | 'y' | 'none') => this;
  symbol!: (value: string) => this;
  symbolSize!: (value: number | number[] | ((...args: any[]) => any)) => this;
  symbolRotate!: (value: number) => this;
  symbolKeepAspect!: (value: boolean) => this;
  symbolOffset!: (value: [number | string, number | string]) => this;
  showSymbol!: (value: boolean) => this;
  showAllSymbol!: (value: boolean | 'auto') => this;
  sampling!: (value: string) => this;
  dimensions!: (value: any[]) => this;
  encode!: (value: Record<string, any>) => this;
  seriesLayoutBy!: (value: 'column' | 'row') => this;
  datasetIndex!: (value: number) => this;
  colorBy!: (value: 'series' | 'data') => this;
  progressiveThreshold!: (value: number) => this;
  progressive!: (value: number) => this;
  large!: (value: boolean) => this;
  largeThreshold!: (value: number) => this;
  animation!: (value: boolean) => this;
  animationThreshold!: (value: number) => this;
  animationDuration!: (value: number | ((...args: any[]) => any)) => this;
  animationEasing!: (value: string) => this;
  animationDelay!: (value: number | ((...args: any[]) => any)) => this;
  animationDurationUpdate!: (value: number | ((...args: any[]) => any)) => this;
  animationEasingUpdate!: (value: string) => this;
  animationDelayUpdate!: (value: number | ((...args: any[]) => any)) => this;
  universalTransition!: (value: boolean | Record<string, any>) => this;
  zlevel!: (value: number) => this;
  z!: (value: number) => this;
  silent!: (value: boolean) => this;

  /**
   * 设置系列数据
   */
  data(value: any[]): this {
    return this.set('data', value);
  }

  /**
   * 设置标签
   */
  label(config: Record<string, any>): this {
    return this.set('label', config);
  }

  /**
   * 设置标注
   */
  markPoint(config: Record<string, any>): this {
    return this.set('markPoint', config);
  }

  /**
   * 设置标线
   */
  markLine(config: Record<string, any>): this {
    return this.set('markLine', config);
  }

  /**
   * 设置标域
   */
  markArea(config: Record<string, any>): this {
    return this.set('markArea', config);
  }

  /**
   * 设置高亮样式
   */
  emphasis(config: Record<string, any>): this {
    return this.set('emphasis', config);
  }

  /**
   * 设置选中样式
   */
  select(config: Record<string, any>): this {
    return this.set('select', config);
  }

  /**
   * 设置淡出样式
   */
  blur(config: Record<string, any>): this {
    return this.set('blur', config);
  }

  /**
   * 设置线条样式
   */
  lineStyle(config: Record<string, any>): this {
    return this.set('lineStyle', config);
  }

  /**
   * 设置区域样式
   */
  areaStyle(config: Record<string, any>): this {
    return this.set('areaStyle', config);
  }

  /**
   * 设置柱状图样式
   */
  itemStyle(config: Record<string, any>): this {
    return this.set('itemStyle', config);
  }

  /**
   * 设置提示框
   */
  tooltip(config: Record<string, any>): this {
    return this.set('tooltip', config);
  }

  /**
   * 设置端点标签
   */
  endLabel(config: Record<string, any>): this {
    return this.set('endLabel', config);
  }

  /**
   * 设置标签布局
   */
  labelLayout(config: Record<string, any>): this {
    return this.set('labelLayout', config);
  }

  /**
   * 设置标签线
   */
  labelLine(config: Record<string, any>): this {
    return this.set('labelLine', config);
  }
}
