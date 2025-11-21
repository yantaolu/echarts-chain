import { ChainedMap } from './ChainedMap';
import type { PolarOption } from './types';

/**
 * Polar - 极坐标系配置
 */
export class Polar<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend(['radius', 'center']);
  }

  /**
   * 半径 | Polar radius
   * @param value - 半径或范围 | Radius or range
   */
  radius!: (value: PolarOption['radius']) => this;

  /**
   * 中心点 | Polar center
   * @param value - 中心坐标 | Center coordinates
   */
  center!: (value: PolarOption['center']) => this;
}
