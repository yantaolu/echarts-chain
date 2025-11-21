import { ChainedMap } from './ChainedMap';

/**
 * Legend - 图例配置类
 */
export class Legend<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'show',
      'type',
      'left',
      'top',
      'right',
      'bottom',
      'width',
      'height',
      'orient',
      'align',
      'padding',
      'itemGap',
      'itemWidth',
      'itemHeight',
      'symbolRotate',
      'formatter',
      'selectedMode',
      'inactiveColor',
      'inactiveBorderColor',
      'inactiveBorderWidth',
      'selected',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'borderRadius',
      'shadowBlur',
      'shadowColor',
      'shadowOffsetX',
      'shadowOffsetY',
      'scrollDataIndex',
      'pageButtonItemGap',
      'pageButtonGap',
      'pageButtonPosition',
      'pageFormatter',
      'pageIconColor',
      'pageIconInactiveColor',
      'pageIconSize',
      'pageTextStyle',
      'animation',
      'animationDurationUpdate',
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  type!: (value: 'plain' | 'scroll') => this;
  left!: (value: string | number) => this;
  top!: (value: string | number) => this;
  right!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;
  orient!: (value: 'horizontal' | 'vertical') => this;
  align!: (value: 'auto' | 'left' | 'right') => this;
  padding!: (value: number | number[]) => this;
  itemGap!: (value: number) => this;
  itemWidth!: (value: number) => this;
  itemHeight!: (value: number) => this;
  symbolRotate!: (value: number | 'inherit') => this;
  formatter!: (value: string | ((...args: any[]) => any)) => this;
  selectedMode!: (value: boolean | 'single' | 'multiple') => this;
  inactiveColor!: (value: string) => this;
  inactiveBorderColor!: (value: string) => this;
  inactiveBorderWidth!: (value: number) => this;
  selected!: (value: Record<string, boolean>) => this;
  backgroundColor!: (value: string) => this;
  borderColor!: (value: string) => this;
  borderWidth!: (value: number) => this;
  borderRadius!: (value: number | number[]) => this;
  shadowBlur!: (value: number) => this;
  shadowColor!: (value: string) => this;
  shadowOffsetX!: (value: number) => this;
  shadowOffsetY!: (value: number) => this;
  scrollDataIndex!: (value: number) => this;
  pageButtonItemGap!: (value: number) => this;
  pageButtonGap!: (value: number) => this;
  pageButtonPosition!: (value: 'start' | 'end') => this;
  pageFormatter!: (value: string | ((...args: any[]) => any)) => this;
  pageIconColor!: (value: string) => this;
  pageIconInactiveColor!: (value: string) => this;
  pageIconSize!: (value: number | number[]) => this;
  pageTextStyle!: (value: Record<string, any>) => this;
  animation!: (value: boolean) => this;
  animationDurationUpdate!: (value: number) => this;

  /**
   * 设置图例数据
   */
  data(value: any[]): this {
    return this.set('data', value);
  }

  /**
   * 设置图标
   */
  icon(value: string): this {
    return this.set('icon', value);
  }

  /**
   * 设置文本样式
   */
  textStyle(config: Record<string, any>): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置提示框
   */
  tooltip(config: Record<string, any>): this {
    return this.set('tooltip', config);
  }

  /**
   * 设置页面按钮配置
   */
  pageIcons(config: Record<string, any>): this {
    return this.set('pageIcons', config);
  }

  /**
   * 设置高亮状态
   */
  emphasis(config: Record<string, any>): this {
    return this.set('emphasis', config);
  }

  /**
   * 设置选择器
   */
  selector(value: any): this {
    return this.set('selector', value);
  }

  /**
   * 设置选择器按钮距离
   */
  selectorItemGap(value: number): this {
    return this.set('selectorItemGap', value);
  }

  /**
   * 设置选择器位置
   */
  selectorPosition(value: string): this {
    return this.set('selectorPosition', value);
  }

  /**
   * 设置选择器按钮样式
   */
  selectorButtonGap(value: number): this {
    return this.set('selectorButtonGap', value);
  }

  /**
   * 设置选择器标签
   */
  selectorLabel(config: Record<string, any>): this {
    return this.set('selectorLabel', config);
  }
}
