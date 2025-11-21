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
      'lineHeight',
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

  // 文本颜色
  color!: (color: string) => this;

  // 字体风格
  fontStyle!: (style: 'normal' | 'italic' | 'oblique') => this;

  // 字体粗细
  fontWeight!: (weight: 'normal' | 'bold' | 'bolder' | 'lighter' | number) => this;

  // 字体系列
  fontFamily!: (family: string) => this;

  // 字体大小
  fontSize!: (size: number) => this;

  // 行高
  lineHeight!: (height: number) => this;

  // 文本块的宽度
  width!: (width: number | string) => this;

  // 文本块的高度
  height!: (height: number | string) => this;

  // 文本边框颜色
  textBorderColor!: (color: string) => this;

  // 文本边框宽度
  textBorderWidth!: (width: number) => this;

  // 文本边框类型
  textBorderType!: (type: 'solid' | 'dashed' | 'dotted' | number | number[]) => this;

  // 文本边框虚线偏移
  textBorderDashOffset!: (offset: number) => this;

  // 文本阴影颜色
  textShadowColor!: (color: string) => this;

  // 文本阴影模糊程度
  textShadowBlur!: (blur: number) => this;

  // 文本阴影水平偏移
  textShadowOffsetX!: (offset: number) => this;

  // 文本阴影垂直偏移
  textShadowOffsetY!: (offset: number) => this;

  // 文本超出宽度的处理方式
  overflow!: (overflow: 'none' | 'truncate' | 'break' | 'breakAll') => this;

  // 超出省略符号
  ellipsis!: (ellipsis: string) => this;

  /**
   * 富文本样式 | Rich text styles
   * @param rich - 名称到样式映射 | Name to style mapping
   */
  rich!: (rich: Record<string, any>) => this;

  // 富文本是否继承普通标签样式
  richInheritPlainLabel!: (inherit: boolean) => this;
}
