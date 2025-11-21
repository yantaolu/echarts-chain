import { ChainedMap } from './ChainedMap';

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
  handleStyle!: (value: Record<string, any>) => this;
  indicatorIcon!: (value: string) => this;
  indicatorSize!: (value: number | string) => this;
  indicatorStyle!: (value: Record<string, any>) => this;

  /**
   * 设置文本样式
   */
  textStyle(config: Record<string, any>): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置分段
   */
  pieces(value: any[]): this {
    return this.set('pieces', value);
  }

  /**
   * 设置类别
   */
  categories(value: any[]): this {
    return this.set('categories', value);
  }

  /**
   * 设置范围内的视觉元素
   */
  inRange(config: Record<string, any>): this {
    return this.set('inRange', config);
  }

  /**
   * 设置范围外的视觉元素
   */
  outOfRange(config: Record<string, any>): this {
    return this.set('outOfRange', config);
  }

  /**
   * 设置控制器
   */
  controller(config: Record<string, any>): this {
    return this.set('controller', config);
  }
}
