import { ChainedMap } from './ChainedMap';

/**
 * Toolbox - 工具栏配置类
 */
export class Toolbox<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'show',
      'orient',
      'itemSize',
      'itemGap',
      'showTitle',
      'left',
      'top',
      'right',
      'bottom',
      'width',
      'height',
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  orient!: (value: 'horizontal' | 'vertical') => this;
  itemSize!: (value: number) => this;
  itemGap!: (value: number) => this;
  showTitle!: (value: boolean) => this;
  left!: (value: string | number) => this;
  top!: (value: string | number) => this;
  right!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;

  /**
   * 设置工具配置
   */
  feature(config: Record<string, any>): this {
    return this.set('feature', config);
  }

  /**
   * 设置图标样式
   */
  iconStyle(config: Record<string, any>): this {
    return this.set('iconStyle', config);
  }

  /**
   * 设置高亮样式
   */
  emphasis(config: Record<string, any>): this {
    return this.set('emphasis', config);
  }

  /**
   * 设置提示框
   */
  tooltip(config: Record<string, any>): this {
    return this.set('tooltip', config);
  }
}
