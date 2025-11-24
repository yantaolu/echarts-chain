import { ChainedMap } from './ChainedMap';
// ECharts 未导出 TextCommonOption，保持通用 Record 类型

export class TextStyle<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'color',
      'fontStyle',
      'fontWeight',
      'fontFamily',
      'fontSize',
      'align',
      'verticalAlign',
      'lineHeight',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'borderType',
      'borderDashOffset',
      'borderRadius',
      'padding',
      'shadowColor',
      'shadowBlur',
      'shadowOffsetX',
      'shadowOffsetY',
      'width',
      'height',
      'textBorderColor',
      'textBorderWidth',
      'textBorderType',
      'textBorderDashOffset',
      'textShadowColor',
      'textShadowBlur',
      'textShadowOffsetX',
      'textShadowOffsetY',
      'overflow',
      'ellipsis',
      'rich',
      'richInheritPlainLabel',
    ]);
  }

  /**
   * 文本颜色 | Text color
   * @param color - 颜色字符串 | Color string
   */
  color!: (color: string) => this;

  /**
   * 字体风格 | Font style
   * @param style - 'normal' | 'italic' | 'oblique'
   */
  fontStyle!: (style: 'normal' | 'italic' | 'oblique') => this;

  /**
   * 字体粗细 | Font weight
   * @param weight - 'normal' | 'bold' | 'bolder' | 'lighter' | number
   */
  fontWeight!: (weight: 'normal' | 'bold' | 'bolder' | 'lighter' | number) => this;

  /**
   * 字体系列 | Font family
   * @param family - 字体名称 | Font name
   */
  fontFamily!: (family: string) => this;

  /**
   * 字体大小 | Font size
   * @param size - 像素值 | Size in pixels
   */
  fontSize!: (size: number) => this;

  /**
   * 行高 | Line height
   * @param height - 像素值 | Height in pixels
   */
  lineHeight!: (height: number) => this;

  /**
   * 文本对齐方式 | Text horizontal alignment
   * @param align - 'left' | 'center' | 'right'
   */
  align!: (align: 'left' | 'center' | 'right') => this;

  /**
   * 垂直对齐方式 | Text vertical alignment
   * @param verticalAlign - 'top' | 'middle' | 'bottom'
   */
  verticalAlign!: (verticalAlign: 'top' | 'middle' | 'bottom') => this;

  /**
   * 背景颜色 | Background color
   * @param color - 颜色字符串 | Color string
   */
  backgroundColor!: (color: string) => this;

  /**
   * 边框颜色 | Border color
   * @param color - 颜色字符串 | Color string
   */
  borderColor!: (color: string) => this;

  /**
   * 边框宽度 | Border width
   * @param width - 像素值 | Width in pixels
   */
  borderWidth!: (width: number) => this;

  /**
   * 边框类型 | Border type
   * @param type - 'solid' | 'dashed' | 'dotted' | number | number[]
   */
  borderType!: (type: 'solid' | 'dashed' | 'dotted' | number | number[]) => this;

  /**
   * 边框虚线偏移 | Border dash offset
   * @param offset - 像素值 | Offset in pixels
   */
  borderDashOffset!: (offset: number) => this;

  /**
   * 边框圆角 | Border radius
   * @param radius - 像素或数组 | Pixels or array
   */
  borderRadius!: (radius: number | number[]) => this;

  /**
   * 内边距 | Padding
   * @param padding - 像素或数组 | Pixels or array
   */
  padding!: (padding: number | number[]) => this;

  /**
   * 阴影颜色 | Shadow color
   * @param color - 颜色字符串 | Color string
   */
  shadowColor!: (color: string) => this;

  /**
   * 阴影模糊 | Shadow blur
   * @param blur - 像素值 | Blur in pixels
   */
  shadowBlur!: (blur: number) => this;

  /**
   * 阴影水平偏移 | Shadow offset X
   * @param offset - 像素值 | Offset in pixels
   */
  shadowOffsetX!: (offset: number) => this;

  /**
   * 阴影垂直偏移 | Shadow offset Y
   * @param offset - 像素值 | Offset in pixels
   */
  shadowOffsetY!: (offset: number) => this;

  /**
   * 文本块宽度 | Text block width
   * @param width - 像素或百分比 | Pixels or percentage
   */
  width!: (width: number | string) => this;

  /**
   * 文本块高度 | Text block height
   * @param height - 像素或百分比 | Pixels or percentage
   */
  height!: (height: number | string) => this;

  /**
   * 文本边框颜色 | Text border color
   * @param color - 颜色字符串 | Color string
   */
  textBorderColor!: (color: string) => this;

  /**
   * 文本边框宽度 | Text border width
   * @param width - 像素值 | Width in pixels
   */
  textBorderWidth!: (width: number) => this;

  /**
   * 文本边框类型 | Text border type
   * @param type - 'solid' | 'dashed' | 'dotted' | number | number[]
   */
  textBorderType!: (type: 'solid' | 'dashed' | 'dotted' | number | number[]) => this;

  /**
   * 文本边框虚线偏移 | Text border dash offset
   * @param offset - 像素值 | Offset in pixels
   */
  textBorderDashOffset!: (offset: number) => this;

  /**
   * 文本阴影颜色 | Text shadow color
   * @param color - 颜色字符串 | Color string
   */
  textShadowColor!: (color: string) => this;

  /**
   * 文本阴影模糊 | Text shadow blur
   * @param blur - 像素值 | Blur in pixels
   */
  textShadowBlur!: (blur: number) => this;

  /**
   * 文本阴影水平偏移 | Text shadow offset X
   * @param offset - 像素值 | Offset in pixels
   */
  textShadowOffsetX!: (offset: number) => this;

  /**
   * 文本阴影垂直偏移 | Text shadow offset Y
   * @param offset - 像素值 | Offset in pixels
   */
  textShadowOffsetY!: (offset: number) => this;

  /**
   * 溢出处理方式 | Overflow handling mode
   * @param overflow - 'none' | 'truncate' | 'break' | 'breakAll'
   */
  overflow!: (overflow: 'none' | 'truncate' | 'break' | 'breakAll') => this;

  /**
   * 省略符号 | Ellipsis string for truncation
   * @param ellipsis - 文本 | Ellipsis text
   */
  ellipsis!: (ellipsis: string) => this;

  /**
   * 富文本样式 | Rich text styles
   * @param rich - 名称到样式映射 | Name to style mapping
   */
  rich!: (rich: Record<string, any>) => this;

  /**
   * 富文本继承普通标签样式 | Rich text inherits plain label styles
   * @param inherit - 是否继承 | Whether to inherit
   */
  richInheritPlainLabel!: (inherit: boolean) => this;
}
