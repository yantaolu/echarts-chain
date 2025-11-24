import { ChainedMap } from './ChainedMap';
import type { ParallelCoordinateSystemOption } from './types';

/**
 * Parallel - 平行坐标系配置
 */
export class Parallel<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'left',
      'right',
      'top',
      'bottom',
      'width',
      'height',
      'layout',
      'axisExpandable',
      'axisExpandCenter',
      'axisExpandCount',
      'axisExpandWidth',
      'axisExpandWindow',
      // object setters covered by extend
      'parallelAxisDefault',
      'areaSelectStyle',
    ]);
  }

  /**
   * 左侧位置 | Left position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  left!: (value: string | number) => this;
  /**
   * 右侧位置 | Right position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  right!: (value: string | number) => this;
  /**
   * 顶部位置 | Top position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  top!: (value: string | number) => this;
  /**
   * 底部位置 | Bottom position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  bottom!: (value: string | number) => this;
  /**
   * 宽度 | Component width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  width!: (value: string | number) => this;
  /**
   * 高度 | Component height
   * @param value - 像素或百分比 | Pixels or percentage
   */
  height!: (value: string | number) => this;
  /**
   * 布局方向 | Orientation
   * @param value - 'horizontal' | 'vertical'
   */
  layout!: (value: 'horizontal' | 'vertical') => this;
  /**
   * 是否可展开 | Axis expandable
   * @param value - 是否 | Whether enabled
   */
  axisExpandable!: (value: boolean) => this;
  /**
   * 展开中心轴索引 | Axis expand center
   * @param value - 轴索引 | Axis index
   */
  axisExpandCenter!: (value: number) => this;
  /**
   * 展开轴数量 | Axis expand count
   * @param value - 数量 | Count
   */
  axisExpandCount!: (value: number) => this;
  /**
   * 展开宽度 | Axis expand width
   * @param value - 像素值 | Width in pixels
   */
  axisExpandWidth!: (value: number) => this;
  /**
   * 展开窗口范围 | Axis expand window
   * @param value - [起始, 结束] | [start, end]
   */
  axisExpandWindow!: (value: [number, number]) => this;

  /**
   * 默认轴样式 | Default axis style
   * @param config - 轴样式 | Axis style
   */
  parallelAxisDefault!: (config: ParallelCoordinateSystemOption['parallelAxisDefault']) => this;

  /**
   * 框选样式 | Area select style
   * @param config - 框选样式 | Area select style
   */
  areaSelectStyle!: (config: Record<string, any>) => this;
}
