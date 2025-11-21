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

  // 实现由 extend 动态创建
  left!: (value: string | number) => this;
  right!: (value: string | number) => this;
  top!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;
  layout!: (value: 'horizontal' | 'vertical') => this;
  axisExpandable!: (value: boolean) => this;
  axisExpandCenter!: (value: number) => this;
  axisExpandCount!: (value: number) => this;
  axisExpandWidth!: (value: number) => this;
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
