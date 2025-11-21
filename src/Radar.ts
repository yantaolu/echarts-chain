import { ChainedMap } from './ChainedMap';
import type { RadarComponentOption } from './types';

/**
 * Radar - 雷达坐标系配置
 */
export class Radar<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'shape',
      'center',
      'radius',
      'startAngle',
      'splitNumber',
      'scale',
      'axisName',
      'axisNameGap',
      'axisNameTextStyle',
    ]);
  }

  /**
   * 指标配置
   */
  indicator(value: any[]): this {
    return this.set('indicator', value);
  }

  /**
   * 坐标系形状
   */
  shape!: (value: 'polygon' | 'circle') => this;

  /**
   * 中心点
   */
  center!: (value: [string | number, string | number]) => this;

  /**
   * 半径
   */
  radius!: (value: number | string | [string | number, string | number]) => this;

  /**
   * 起始角度
   */
  startAngle!: (value: number) => this;

  /**
   * 分割段数
   */
  splitNumber!: (value: number) => this;

  /**
   * 是否是刻度按比例分割
   */
  scale!: (value: boolean) => this;

  /**
   * 轴线样式 | Axis line style
   * @param config - 轴线样式 | AxisLine style
   */
  axisLine(config: RadarComponentOption['axisLine']): this {
    return this.set('axisLine', config);
  }

  /**
   * 分隔线样式 | Split line style
   * @param config - 分隔线样式 | SplitLine style
   */
  splitLine(config: RadarComponentOption['splitLine']): this {
    return this.set('splitLine', config);
  }

  /**
   * 分隔区域样式 | Split area style
   * @param config - 分隔区域样式 | SplitArea style
   */
  splitArea(config: RadarComponentOption['splitArea']): this {
    return this.set('splitArea', config);
  }

  /**
   * 轴刻度样式
   */
  axisTick(config: Record<string, any>): this {
    return this.set('axisTick', config);
  }

  /**
   * 轴标签样式 | Axis label style
   */
  axisLabel(config: RadarComponentOption['axisLabel']): this {
    return this.set('axisLabel', config);
  }

  /**
   * 轴名称
   */
  axisName!: (value: string) => this;

  /**
   * 轴名称间距
   */
  axisNameGap!: (value: number) => this;

  /**
   * 轴名称文本样式 | Axis name text style
   * @param value - 文本样式 | Text style
   */
  axisNameTextStyle!: (value: Record<string, any>) => this;
}
