import { ChainedMap } from './ChainedMap';
import type { TooltipOption } from './types';

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
      // object setters covered by extend
      'tooltip',
    ]);
  }

  /**
   * 是否显示网格 | Show grid
   * @param value - 是否显示 | Whether to display
   */
  show!: (value: boolean) => this;
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
   * 宽度 | Grid width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  width!: (value: string | number) => this;
  /**
   * 高度 | Grid height
   * @param value - 像素或百分比 | Pixels or percentage
   */
  height!: (value: string | number) => this;
  /**
   * 包含标签 | Contain axis labels
   * @param value - 是否包含 | Whether to contain labels
   */
  containLabel!: (value: boolean) => this;
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
   * 设置提示框 | Set tooltip for grid
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: TooltipOption) => this;
}
