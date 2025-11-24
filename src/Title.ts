import { ChainedMap } from './ChainedMap';
import type { TitleComponentOption } from './types';

/**
 * Title - 标题配置类
 */
export class Title<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'show',
      'text',
      'link',
      'target',
      'subtext',
      'sublink',
      'subtarget',
      'left',
      'top',
      'right',
      'bottom',
      'padding',
      'itemGap',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'borderRadius',
      'shadowBlur',
      'shadowColor',
      'shadowOffsetX',
      'shadowOffsetY',
      // object setters covered by extend
      'textStyle',
      'subtextStyle',
      'triggerEvent',
    ]);
  }

  /**
   * 是否显示标题 | Show title
   * @param value - 是否显示 | Whether to display
   */
  show!: (value: boolean) => this;
  /**
   * 标题文本 | Title text
   * @param value - 文本 | Text
   */
  text!: (value: string) => this;
  /**
   * 标题链接 | Title link
   * @param value - URL 字符串 | URL string
   */
  link!: (value: string) => this;
  /**
   * 链接目标 | Link target
   * @param value - 'self' | 'blank'
   */
  target!: (value: 'self' | 'blank') => this;
  /**
   * 副标题文本 | Subtitle text
   * @param value - 文本 | Text
   */
  subtext!: (value: string) => this;
  /**
   * 副标题链接 | Subtitle link
   * @param value - URL 字符串 | URL string
   */
  sublink!: (value: string) => this;
  /**
   * 副标题链接目标 | Subtitle link target
   * @param value - 'self' | 'blank'
   */
  subtarget!: (value: 'self' | 'blank') => this;
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
   * 内边距 | Padding
   * @param value - 像素或数组 | Pixels or array
   */
  padding!: (value: number | number[]) => this;
  /**
   * 组件间距 | Item gap
   * @param value - 像素值 | Gap in pixels
   */
  itemGap!: (value: number) => this;
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
   * 文本样式 | Title text style
   * @param config - 文本样式 | Text style
   */
  textStyle!: (config: TitleComponentOption['textStyle']) => this;

  /**
   * 副标题文本样式 | Subtitle text style
   * @param config - 文本样式 | Text style
   */
  subtextStyle!: (config: TitleComponentOption['subtextStyle']) => this;

  /**
   * 触发事件 | Trigger events
   * @param value - 是否触发 | Whether to trigger
   */
  triggerEvent!: (value: boolean) => this;
}
