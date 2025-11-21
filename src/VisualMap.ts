import { ChainedMap } from './ChainedMap';
import type { VisualMapComponentOption } from './types';
import type { PiecewiseVisualMapOption, ContinousVisualMapOption } from './types';

/**
 * VisualMap - 视觉映射配置类
 */
export class VisualMap<Parent = any> extends ChainedMap<Parent> {
  public name: string;

  constructor(parent?: Parent, name: string = '') {
    super(parent);
    this.name = name;
    this.extend([
      'show',
      'type',
      'min',
      'max',
      'range',
      'calculable',
      'realtime',
      'inverse',
      'precision',
      'itemWidth',
      'itemHeight',
      'align',
      'text',
      'textGap',
      'showLabel',
      'itemGap',
      'seriesIndex',
      'dimension',
      'left',
      'top',
      'right',
      'bottom',
      'orient',
      'padding',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'color',
      'formatter',
      'handleIcon',
      'handleSize',
      'handleStyle',
      'indicatorIcon',
      'indicatorSize',
      'indicatorStyle',
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  type!: (value: 'continuous' | 'piecewise') => this;
  min!: (value: number) => this;
  max!: (value: number) => this;
  range!: (value: [number, number]) => this;
  calculable!: (value: boolean) => this;
  realtime!: (value: boolean) => this;
  inverse!: (value: boolean) => this;
  precision!: (value: number) => this;
  itemWidth!: (value: number) => this;
  itemHeight!: (value: number) => this;
  align!: (value: 'auto' | 'left' | 'right') => this;
  text!: (value: [string, string]) => this;
  textGap!: (value: number) => this;
  showLabel!: (value: boolean) => this;
  itemGap!: (value: number) => this;
  seriesIndex!: (value: number | number[]) => this;
  dimension!: (value: number | string) => this;
  left!: (value: string | number) => this;
  top!: (value: string | number) => this;
  right!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  orient!: (value: 'horizontal' | 'vertical') => this;
  padding!: (value: number | number[]) => this;
  backgroundColor!: (value: string) => this;
  borderColor!: (value: string) => this;
  borderWidth!: (value: number) => this;
  color!: (value: string[]) => this;
  formatter!: (value: string | ((...args: any[]) => any)) => this;
  handleIcon!: (value: string) => this;
  handleSize!: (value: number | string) => this;
  /**
   * 手柄样式 | Handle style
   * @param value - 样式配置 | Style config
   */
  handleStyle!: (value: ContinousVisualMapOption['handleStyle']) => this;
  indicatorIcon!: (value: string) => this;
  indicatorSize!: (value: number | string) => this;
  /**
   * 指示器样式 | Indicator style
   * @param value - 样式配置 | Style config
   */
  indicatorStyle!: (value: ContinousVisualMapOption['indicatorStyle']) => this;

  /**
   * 设置文本样式 | Set text style
   * @param config - 文本样式 | Text style
   */
  textStyle(config: VisualMapComponentOption['textStyle']): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置分段 | Set pieces (piecewise)
   * @param value - 分段配置 | Pieces config
   */
  pieces(value: PiecewiseVisualMapOption['pieces']): this {
    return this.set('pieces', value);
  }

  /**
   * 设置类别 | Set categories (piecewise)
   * @param value - 类别数组 | Categories
   */
  categories(value: PiecewiseVisualMapOption['categories']): this {
    return this.set('categories', value);
  }

  /**
   * 设置范围内的视觉元素 | In-range visuals
   * @param config - 视觉配置 | Visual config
   */
  inRange(config: VisualMapComponentOption['inRange']): this {
    return this.set('inRange', config);
  }

  /**
   * 设置范围外的视觉元素 | Out-of-range visuals
   * @param config - 视觉配置 | Visual config
   */
  outOfRange(config: VisualMapComponentOption['outOfRange']): this {
    return this.set('outOfRange', config);
  }

  /**
   * 设置控制器 | Controller style
   * @param config - 控制器样式 | Controller config
   */
  controller(config: VisualMapComponentOption['controller']): this {
    return this.set('controller', config);
  }
}
