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
      'data',
      'icon',
      'textStyle',
      'tooltip',
      'pageIcons',
      'emphasis',
      'selector',
      'selectorItemGap',
      'selectorPosition',
      'selectorButtonGap',
      'selectorLabel',
    ]);
  }

  /**
   * 是否显示图例 | Show legend
   * @param value - 是否显示 | Whether to display
   */
  show!: (value: boolean) => this;
  /**
   * 图例类型 | Legend type
   * @param value - 'plain' | 'scroll'
   */
  type!: (value: 'plain' | 'scroll') => this;
  /**
   * 左侧位置 | Left position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  left!: (value: string | number) => this;
  /**
   * 顶部位置 | Top position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  top!: (value: string | number) => this;
  /**
   * 右侧位置 | Right position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  right!: (value: string | number) => this;
  /**
   * 底部位置 | Bottom position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  bottom!: (value: string | number) => this;
  /**
   * 宽度 | Legend width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  width!: (value: string | number) => this;
  /**
   * 高度 | Legend height
   * @param value - 像素或百分比 | Pixels or percentage
   */
  height!: (value: string | number) => this;
  /**
   * 布局方向 | Orientation
   * @param value - 'horizontal' | 'vertical'
   */
  orient!: (value: 'horizontal' | 'vertical') => this;
  /**
   * 对齐方式 | Alignment
   * @param value - 'auto' | 'left' | 'right'
   */
  align!: (value: 'auto' | 'left' | 'right') => this;
  /**
   * 内边距 | Padding
   * @param value - 像素或数组 | Pixels or array
   */
  padding!: (value: number | number[]) => this;
  /**
   * 图例项间距 | Item gap
   * @param value - 间距像素 | Gap in pixels
   */
  itemGap!: (value: number) => this;
  /**
   * 图例项宽度 | Item width
   * @param value - 像素值 | Width in pixels
   */
  itemWidth!: (value: number) => this;
  /**
   * 图例项高度 | Item height
   * @param value - 像素值 | Height in pixels
   */
  itemHeight!: (value: number) => this;
  /**
   * 图例图标旋转 | Symbol rotate
   * @param value - 角度或继承 | Angle or 'inherit'
   */
  symbolRotate!: (value: number | 'inherit') => this;
  /**
   * 文本格式化 | Formatter
   * @param value - 字符串或回调 | String or function
   */
  formatter!: (value: string | ((...args: any[]) => any)) => this;
  /**
   * 选择模式 | Selected mode
   * @param value - 布尔或模式 | Boolean/'single'/'multiple'
   */
  selectedMode!: (value: boolean | 'single' | 'multiple') => this;
  /**
   * 非激活颜色 | Inactive color
   * @param value - 颜色 | Color string
   */
  inactiveColor!: (value: string) => this;
  /**
   * 非激活边框颜色 | Inactive border color
   * @param value - 颜色 | Color string
   */
  inactiveBorderColor!: (value: string) => this;
  /**
   * 非激活边框宽度 | Inactive border width
   * @param value - 像素值 | Width in pixels
   */
  inactiveBorderWidth!: (value: number) => this;
  /**
   * 选中状态 | Selected state map
   * @param value - 名称到选中 | Record of name->selected
   */
  selected!: (value: Record<string, boolean>) => this;
  /**
   * 背景颜色 | Background color
   * @param value - 颜色 | Color string
   */
  backgroundColor!: (value: string) => this;
  /**
   * 边框颜色 | Border color
   * @param value - 颜色 | Color string
   */
  borderColor!: (value: string) => this;
  /**
   * 边框宽度 | Border width
   * @param value - 像素值 | Width in pixels
   */
  borderWidth!: (value: number) => this;
  /**
   * 边框圆角 | Border radius
   * @param value - 像素或数组 | Pixels or array
   */
  borderRadius!: (value: number | number[]) => this;
  /**
   * 阴影模糊 | Shadow blur
   * @param value - 像素值 | Blur in pixels
   */
  shadowBlur!: (value: number) => this;
  /**
   * 阴影颜色 | Shadow color
   * @param value - 颜色 | Color string
   */
  shadowColor!: (value: string) => this;
  /**
   * 阴影水平偏移 | Shadow offset X
   * @param value - 像素值 | Offset in pixels
   */
  shadowOffsetX!: (value: number) => this;
  /**
   * 阴影垂直偏移 | Shadow offset Y
   * @param value - 像素值 | Offset in pixels
   */
  shadowOffsetY!: (value: number) => this;
  /**
   * 滚动数据索引 | Scroll data index
   * @param value - 索引 | Index
   */
  scrollDataIndex!: (value: number) => this;
  /**
   * 页面按钮与图例项距离 | Page button item gap
   * @param value - 像素值 | Gap in pixels
   */
  pageButtonItemGap!: (value: number) => this;
  /**
   * 页面按钮间距 | Page button gap
   * @param value - 像素值 | Gap in pixels
   */
  pageButtonGap!: (value: number) => this;
  /**
   * 页面按钮位置 | Page button position
   * @param value - 'start' | 'end'
   */
  pageButtonPosition!: (value: 'start' | 'end') => this;
  /**
   * 页面文本格式化 | Page formatter
   * @param value - 字符串或回调 | String or function
   */
  pageFormatter!: (value: string | ((...args: any[]) => any)) => this;
  /**
   * 页面图标颜色 | Page icon color
   * @param value - 颜色 | Color string
   */
  pageIconColor!: (value: string) => this;
  /**
   * 页面图标失效颜色 | Page icon inactive color
   * @param value - 颜色 | Color string
   */
  pageIconInactiveColor!: (value: string) => this;
  /**
   * 页面图标尺寸 | Page icon size
   * @param value - 像素或数组 | Pixels or array
   */
  pageIconSize!: (value: number | number[]) => this;
  /**
   * 页签文本样式 | Legend page text style
   * @param value - 文本样式 | Text style
   */
  pageTextStyle!: (value: ScrollableLegendComponentOption['pageTextStyle']) => this;
  /**
   * 开启动画 | Enable animation
   * @param value - 是否启用 | Whether to enable
   */
  animation!: (value: boolean) => this;
  /**
   * 更新动画时长 | Animation duration update
   * @param value - 毫秒 | Milliseconds
   */
  animationDurationUpdate!: (value: number) => this;

  /**
   * 图例数据 | Legend data
   * @param value - 数据或数据项 | Names or DataItem objects
   */
  data!: (value: LegendComponentOption['data']) => this;

  /**
   * 图例项图标 | Legend item icon
   * @param value - 图标类型 | Icon type
   */
  icon!: (value: LegendComponentOption['icon']) => this;

  /**
   * 文本样式 | Legend text style
   * @param config - 文本样式 | Text style
   */
  textStyle!: (config: LegendComponentOption['textStyle']) => this;

  /**
   * 提示框 | Legend tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: LegendComponentOption['tooltip']) => this;

  /**
   * 页面按钮图标 | Scroll legend page icons
   * @param config - 图标配置 | Icons config
   */
  pageIcons!: (config: ScrollableLegendComponentOption['pageIcons']) => this;

  /**
   * 高亮状态 | Emphasis style
   * @param config - 高亮样式 | Emphasis style
   */
  emphasis!: (config: LegendComponentOption['emphasis']) => this;

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
