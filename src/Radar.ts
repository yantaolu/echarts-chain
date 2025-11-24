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
      // object setters covered by extend
      'indicator',
      'axisLine',
      'splitLine',
      'splitArea',
      'axisTick',
      'axisLabel',
    ]);
  }

  /**
   * 指标配置 | Indicators
   * @param value - 指标数组 | Indicator array
   */
  indicator!: (value: any[]) => this;

  /**
   * 坐标系形状 | Radar shape
   * @param value - 'polygon' | 'circle'
   */
  shape!: (value: 'polygon' | 'circle') => this;

  /**
   * 中心点 | Center
   * @param value - [x, y] 像素或百分比 | [x, y] pixels or percentage
   */
  center!: (value: [string | number, string | number]) => this;

  /**
   * 半径 | Radius
   * @param value - 半径/范围 | Radius or range
   */
  radius!: (value: number | string | [string | number, string | number]) => this;

  /**
   * 起始角度 | Start angle
   * @param value - 角度（度）| Angle in degrees
   */
  startAngle!: (value: number) => this;

  /**
   * 分割段数 | Split number
   * @param value - 段数 | Count
   */
  splitNumber!: (value: number) => this;

  /**
   * 刻度按比例分割 | Scale ticks proportionally
   * @param value - 是否 | Whether enabled
   */
  scale!: (value: boolean) => this;

  /**
   * 轴线样式 | Axis line style
   * @param config - 轴线样式 | AxisLine style
   */
  axisLine!: (config: RadarComponentOption['axisLine']) => this;

  /**
   * 分隔线样式 | Split line style
   * @param config - 分隔线样式 | SplitLine style
   */
  splitLine!: (config: RadarComponentOption['splitLine']) => this;

  /**
   * 分隔区域样式 | Split area style
   * @param config - 分隔区域样式 | SplitArea style
   */
  splitArea!: (config: RadarComponentOption['splitArea']) => this;

  /**
   * 轴刻度样式 | Axis tick style
   * @param config - 样式配置 | Style config
   */
  axisTick!: (config: Record<string, any>) => this;

  /**
   * 轴标签样式 | Axis label style
   * @param config - 标签样式 | Label style
   */
  axisLabel!: (config: RadarComponentOption['axisLabel']) => this;

  /**
   * 轴名称 | Axis name
   * @param value - 名称文本 | Name string
   */
  axisName!: (value: string) => this;

  /**
   * 轴名称间距 | Axis name gap
   * @param value - 像素值 | Gap in pixels
   */
  axisNameGap!: (value: number) => this;

  /**
   * 轴名称文本样式 | Axis name text style
   * @param value - 文本样式 | Text style
   */
  axisNameTextStyle!: (value: Record<string, any>) => this;
}
