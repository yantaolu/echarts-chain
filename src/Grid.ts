import { ChainedMap } from './ChainedMap';

/**
 * Grid - 网格配置类
 */
export class Grid<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'show',
      'left',
      'top',
      'right',
      'bottom',
      'width',
      'height',
      'containLabel',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'shadowBlur',
      'shadowColor',
      'shadowOffsetX',
      'shadowOffsetY',
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  left!: (value: string | number) => this;
  top!: (value: string | number) => this;
  right!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;
  containLabel!: (value: boolean) => this;
  backgroundColor!: (value: string) => this;
  borderColor!: (value: string) => this;
  borderWidth!: (value: number) => this;
  shadowBlur!: (value: number) => this;
  shadowColor!: (value: string) => this;
  shadowOffsetX!: (value: number) => this;
  shadowOffsetY!: (value: number) => this;

  /**
   * 设置提示框
   */
  tooltip(config: Record<string, any>): this {
    return this.set('tooltip', config);
  }
}
