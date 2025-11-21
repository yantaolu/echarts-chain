import { ChainedMap } from './ChainedMap';

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
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  text!: (value: string) => this;
  link!: (value: string) => this;
  target!: (value: 'self' | 'blank') => this;
  subtext!: (value: string) => this;
  sublink!: (value: string) => this;
  subtarget!: (value: 'self' | 'blank') => this;
  left!: (value: string | number) => this;
  top!: (value: string | number) => this;
  right!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  padding!: (value: number | number[]) => this;
  itemGap!: (value: number) => this;
  backgroundColor!: (value: string) => this;
  borderColor!: (value: string) => this;
  borderWidth!: (value: number) => this;
  borderRadius!: (value: number | number[]) => this;
  shadowBlur!: (value: number) => this;
  shadowColor!: (value: string) => this;
  shadowOffsetX!: (value: number) => this;
  shadowOffsetY!: (value: number) => this;

  /**
   * 设置文本样式
   */
  textStyle(config: Record<string, any>): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置副标题文本样式
   */
  subtextStyle(config: Record<string, any>): this {
    return this.set('subtextStyle', config);
  }

  /**
   * 触发事件
   */
  triggerEvent(value: boolean): this {
    return this.set('triggerEvent', value);
  }
}
