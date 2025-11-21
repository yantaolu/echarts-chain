import { ChainedMap } from './ChainedMap';
import type {
  LegendComponentOption,
  ScrollableLegendOption as ScrollableLegendComponentOption,
} from './types';

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
      // object setters covered by extend
      'selector',
      'selectorItemGap',
      'selectorPosition',
      'selectorButtonGap',
      'selectorLabel',
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
  /**
   * 页签文本样式 | Legend page text style
   * @param value - 文本样式 | Text style
   */
  pageTextStyle!: (value: ScrollableLegendComponentOption['pageTextStyle']) => this;
  animation!: (value: boolean) => this;
  animationDurationUpdate!: (value: number) => this;

  /**
   * 设置图例数据 | Set legend data
   * @param value - 数据或数据项 | Names or DataItem objects
   */
  data(value: LegendComponentOption['data']): this {
    return this.set('data', value);
  }

  /**
   * 设置图例项图标 | Set legend item icon
   * @param value - 图标类型 | Icon type
   */
  icon(value: LegendComponentOption['icon']): this {
    return this.set('icon', value as string);
  }

  /**
   * 设置文本样式 | Set legend text style
   * @param config - 文本样式 | Text style
   */
  textStyle(config: LegendComponentOption['textStyle']): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置提示框 | Set legend tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip(config: LegendComponentOption['tooltip']): this {
    return this.set('tooltip', config);
  }

  /**
   * 设置页面按钮图标 | Set scroll legend page icons
   * @param config - 图标配置 | Icons config
   */
  pageIcons(config: ScrollableLegendComponentOption['pageIcons']): this {
    return this.set('pageIcons', config);
  }

  /**
   * 设置高亮状态 | Set emphasis style
   * @param config - 高亮样式 | Emphasis style
   */
  emphasis(config: LegendComponentOption['emphasis']): this {
    return this.set('emphasis', config);
  }

  /**
   * 设置选择器 | Set selector
   * @param value - 选择器配置 | Selector config
   */
  selector!: (value: LegendComponentOption['selector']) => this;

  /**
   * 设置选择器按钮距离 | Selector item gap
   * @param value - 距离 | Gap
   */
  selectorItemGap!: (value: LegendComponentOption['selectorItemGap']) => this;

  /**
   * 设置选择器位置 | Selector position
   * @param value - 位置 | Position
   */
  selectorPosition!: (value: LegendComponentOption['selectorPosition']) => this;

  /**
   * 设置选择器按钮间距 | Selector button gap
   * @param value - 间距 | Gap
   */
  selectorButtonGap!: (value: LegendComponentOption['selectorButtonGap']) => this;

  /**
   * 设置选择器标签 | Selector label
   * @param config - 标签样式 | Label style
   */
  selectorLabel!: (config: LegendComponentOption['selectorLabel']) => this;
}
