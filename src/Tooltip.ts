import { ChainedMap } from './ChainedMap';

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
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  trigger!: (value: 'item' | 'axis' | 'none') => this;
  showContent!: (value: boolean) => this;
  alwaysShowContent!: (value: boolean) => this;
  triggerOn!: (value: 'mousemove' | 'click' | 'mousemove|click' | 'none') => this;
  showDelay!: (value: number) => this;
  hideDelay!: (value: number) => this;
  enterable!: (value: boolean) => this;
  renderMode!: (value: 'html' | 'richText') => this;
  confine!: (value: boolean) => this;
  appendToBody!: (value: boolean) => this;
  className!: (value: string) => this;
  transitionDuration!: (value: number) => this;
  position!: (value: string | number[] | ((...args: any[]) => any)) => this;
  formatter!: (value: string | ((...args: any[]) => any)) => this;
  backgroundColor!: (value: string) => this;
  borderColor!: (value: string) => this;
  borderWidth!: (value: number) => this;
  padding!: (value: number | number[]) => this;
  textStyle!: (value: Record<string, any>) => this;
  extraCssText!: (value: string) => this;
  order!: (value: 'seriesAsc' | 'seriesDesc' | 'valueAsc' | 'valueDesc') => this;

  /**
   * 设置坐标轴指示器
   */
  axisPointer(config: Record<string, any>): this {
    return this.set('axisPointer', config);
  }
}
