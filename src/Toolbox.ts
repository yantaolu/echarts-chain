import { ChainedMap } from './ChainedMap';
import type { ToolboxComponentOption } from './types';

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
      // object setters covered by extend
      'feature',
      'iconStyle',
      'emphasis',
      'tooltip',
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
   * 设置工具配置 | Set toolbox features
   * @param config - 工具配置 | Feature config
   */
  feature!: (config: ToolboxComponentOption['feature']) => this;

  /**
   * 设置图标样式 | Set icon style
   * @param config - 图标样式 | Icon style
   */
  iconStyle!: (config: ToolboxComponentOption['iconStyle']) => this;

  /**
   * 设置高亮样式 | Set emphasis style
   * @param config - 高亮样式 | Emphasis style
   */
  emphasis!: (config: ToolboxComponentOption['emphasis']) => this;

  /**
   * 设置提示框 | Set tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: ToolboxComponentOption['tooltip']) => this;
}
