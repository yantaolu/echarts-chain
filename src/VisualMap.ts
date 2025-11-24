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
      // object setters covered by extend
      'textStyle',
      'pieces',
      'categories',
      'inRange',
      'outOfRange',
      'controller',
    ]);
  }

  /**
   * 是否显示视觉映射 | Show visualMap
   * @param value - 是否显示 | Whether to display
   */
  show!: (value: boolean) => this;
  /**
   * 类型 | Type
   * @param value - 'continuous' | 'piecewise'
   */
  type!: (value: 'continuous' | 'piecewise') => this;
  /**
   * 最小值 | Min value
   * @param value - 数值 | Number
   */
  min!: (value: number) => this;
  /**
   * 最大值 | Max value
   * @param value - 数值 | Number
   */
  max!: (value: number) => this;
  /**
   * 映射范围 | Mapping range
   * @param value - [最小, 最大] | [min, max]
   */
  range!: (value: [number, number]) => this;
  /**
   * 可拖拽 | Calculable
   * @param value - 是否可拖拽 | Whether calculable
   */
  calculable!: (value: boolean) => this;
  /**
   * 实时更新 | Realtime
   * @param value - 是否实时 | Whether realtime
   */
  realtime!: (value: boolean) => this;
  /**
   * 反转映射 | Inverse mapping
   * @param value - 是否反转 | Whether inverse
   */
  inverse!: (value: boolean) => this;
  /**
   * 精度 | Precision
   * @param value - 小数位 | Decimal places
   */
  precision!: (value: number) => this;
  /**
   * 项宽度 | Item width
   * @param value - 像素值 | Width in pixels
   */
  itemWidth!: (value: number) => this;
  /**
   * 项高度 | Item height
   * @param value - 像素值 | Height in pixels
   */
  itemHeight!: (value: number) => this;
  /**
   * 对齐 | Align
   * @param value - 'auto' | 'left' | 'right'
   */
  align!: (value: 'auto' | 'left' | 'right') => this;
  /**
   * 文本 | Text
   * @param value - [高端, 低端] 文本 | [high, low] labels
   */
  text!: (value: [string, string]) => this;
  /**
   * 文本间距 | Text gap
   * @param value - 像素值 | Gap in pixels
   */
  textGap!: (value: number) => this;
  /**
   * 显示标签 | Show label
   * @param value - 是否显示 | Whether to show
   */
  showLabel!: (value: boolean) => this;
  /**
   * 项间距 | Item gap
   * @param value - 像素值 | Gap in pixels
   */
  itemGap!: (value: number) => this;
  /**
   * 系列索引 | Series index
   * @param value - 单个或多个索引 | Single or multiple indexes
   */
  seriesIndex!: (value: number | number[]) => this;
  /**
   * 维度 | Dimension
   * @param value - 维度序号或名称 | Index or name
   */
  dimension!: (value: number | string) => this;
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
   * 布局方向 | Orientation
   * @param value - 'horizontal' | 'vertical'
   */
  orient!: (value: 'horizontal' | 'vertical') => this;
  /**
   * 内边距 | Padding
   * @param value - 像素或数组 | Pixels or array
   */
  padding!: (value: number | number[]) => this;
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
   * 颜色列表 | Color list
   * @param value - 颜色数组 | Array of colors
   */
  color!: (value: string[]) => this;
  /**
   * 文本格式化 | Formatter
   * @param value - 字符串或回调 | String or function
   */
  formatter!: (value: string | ((...args: any[]) => any)) => this;
  /**
   * 手柄图标 | Handle icon
   * @param value - 图标字符串 | Icon string
   */
  handleIcon!: (value: string) => this;
  /**
   * 手柄大小 | Handle size
   * @param value - 像素或字符串 | Number or string
   */
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
   * 文本样式 | Text style
   * @param config - 文本样式 | Text style
   */
  textStyle!: (config: VisualMapComponentOption['textStyle']) => this;

  /**
   * 分段配置 | Pieces (piecewise)
   * @param value - 分段配置 | Pieces config
   */
  pieces!: (value: PiecewiseVisualMapOption['pieces']) => this;

  /**
   * 类别数组 | Categories (piecewise)
   * @param value - 类别数组 | Categories
   */
  categories!: (value: PiecewiseVisualMapOption['categories']) => this;

  /**
   * 范围内视觉元素 | In-range visuals
   * @param config - 视觉配置 | Visual config
   */
  inRange!: (config: VisualMapComponentOption['inRange']) => this;

  /**
   * 范围外视觉元素 | Out-of-range visuals
   * @param config - 视觉配置 | Visual config
   */
  outOfRange!: (config: VisualMapComponentOption['outOfRange']) => this;

  /**
   * 控制器样式 | Controller style
   * @param config - 控制器样式 | Controller config
   */
  controller!: (config: VisualMapComponentOption['controller']) => this;
}
