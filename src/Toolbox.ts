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

  /**
   * 是否显示工具栏 | Show toolbox
   * @param value - 是否显示 | Whether to display
   */
  show!: (value: boolean) => this;
  /**
   * 布局方向 | Orientation
   * @param value - 'horizontal' | 'vertical'
   */
  orient!: (value: 'horizontal' | 'vertical') => this;
  /**
   * 图标大小 | Item size
   * @param value - 像素值 | Size in pixels
   */
  itemSize!: (value: number) => this;
  /**
   * 图标间距 | Item gap
   * @param value - 像素值 | Gap in pixels
   */
  itemGap!: (value: number) => this;
  /**
   * 显示标题 | Show title
   * @param value - 是否显示 | Whether to show
   */
  showTitle!: (value: boolean) => this;
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
   * 宽度 | Toolbox width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  width!: (value: string | number) => this;
  /**
   * 高度 | Toolbox height
   * @param value - 像素或百分比 | Pixels or percentage
   */
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
