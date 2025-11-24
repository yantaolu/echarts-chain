import { ChainedMap } from './ChainedMap';
import type { TooltipComponentOption, AxisPointerOption } from './types';

/**
 * Tooltip - 提示框配置类
 */
export class Tooltip<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'show',
      'trigger',
      'showContent',
      'alwaysShowContent',
      'triggerOn',
      'showDelay',
      'hideDelay',
      'enterable',
      'renderMode',
      'confine',
      'appendToBody',
      'className',
      'transitionDuration',
      'position',
      'formatter',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'padding',
      'textStyle',
      'extraCssText',
      'order',
      'axisPointer',
    ]);
  }

  /**
   * 是否显示提示框 | Show tooltip
   * @param value - 是否显示 | Whether to display
   */
  show!: (value: boolean) => this;
  /**
   * 触发类型 | Trigger type
   * @param value - 'item' | 'axis' | 'none'
   */
  trigger!: (value: 'item' | 'axis' | 'none') => this;
  /**
   * 是否显示内容 | Show content
   * @param value - 是否显示 | Whether to display content
   */
  showContent!: (value: boolean) => this;
  /**
   * 总是显示内容 | Always show content
   * @param value - 是否总是显示 | Always show
   */
  alwaysShowContent!: (value: boolean) => this;
  /**
   * 触发时机 | Trigger on
   * @param value - 'mousemove' | 'click' | 'mousemove|click' | 'none'
   */
  triggerOn!: (value: 'mousemove' | 'click' | 'mousemove|click' | 'none') => this;
  /**
   * 显示延迟 | Show delay
   * @param value - 毫秒 | Milliseconds
   */
  showDelay!: (value: number) => this;
  /**
   * 隐藏延迟 | Hide delay
   * @param value - 毫秒 | Milliseconds
   */
  hideDelay!: (value: number) => this;
  /**
   * 鼠标可进入 | Enterable
   * @param value - 是否可进入 | Whether enterable
   */
  enterable!: (value: boolean) => this;
  /**
   * 渲染模式 | Render mode
   * @param value - 'html' | 'richText'
   */
  renderMode!: (value: 'html' | 'richText') => this;
  /**
   * 是否限制在图表区域 | Confine within chart
   * @param value - 是否限制 | Confine
   */
  confine!: (value: boolean) => this;
  /**
   * 附加到 body | Append to body
   * @param value - 是否附加 | Whether to append
   */
  appendToBody!: (value: boolean) => this;
  /**
   * 自定义类名 | Custom class name
   * @param value - 类名 | Class name
   */
  className!: (value: string) => this;
  /**
   * 过渡时长 | Transition duration
   * @param value - 秒 | Seconds
   */
  transitionDuration!: (value: number) => this;
  /**
   * 位置 | Position
   * @param value - 字符串/坐标/回调 | String/coords/callback
   */
  position!: (value: string | number[] | ((...args: any[]) => any)) => this;
  /**
   * 文本格式化 | Formatter
   * @param value - 字符串或回调 | String or function
   */
  formatter!: (value: string | ((...args: any[]) => any)) => this;
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
   * 内边距 | Padding
   * @param value - 像素或数组 | Pixels or array
   */
  padding!: (value: number | number[]) => this;
  /**
   * 文本样式 | Tooltip text style
   * @param value - 文本样式 | Text style
   */
  textStyle!: (value: TooltipComponentOption['textStyle']) => this;
  /**
   * 额外 CSS 文本 | Extra CSS text
   * @param value - CSS 字符串 | CSS string
   */
  extraCssText!: (value: string) => this;
  /**
   * 排序规则 | Order rule
   * @param value - 系列/数值升降序 | seriesAsc/seriesDesc/valueAsc/valueDesc
   */
  order!: (value: 'seriesAsc' | 'seriesDesc' | 'valueAsc' | 'valueDesc') => this;

  /**
   * 坐标轴指示器 | Axis pointer in tooltip
   * @param config - 指示器配置 | AxisPointer config
   */
  axisPointer!: (config: AxisPointerOption) => this;
}
