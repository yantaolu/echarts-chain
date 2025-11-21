import { ChainedMap } from './ChainedMap';
import type { GeoComponentOption } from './types';

/**
 * Geo - 地理坐标系配置
 */
export class Geo<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'map',
      'roam',
      'center',
      'zoom',
      'scaleLimit',
      'nameMap',
      'nameProperty',
      'layoutCenter',
      'layoutSize',
      'boundingCoords',
      'aspectScale',
      'selected',
      'left',
      'right',
      'top',
      'bottom',
      'width',
      'height',
      'silent',
      // object setters covered by extend
      'label',
      'itemStyle',
      'emphasis',
      'select',
      'blur',
      'regions',
      'tooltip',
    ]);
  }

  /**
   * 地图类型
   */
  map!: (value: string) => this;

  /**
   * 是否可缩放平移
   */
  roam!: (value: boolean | 'scale' | 'move') => this;

  /**
   * 地图中心点
   */
  center!: (value: [number, number]) => this;

  /**
   * 初始缩放等级
   */
  zoom!: (value: number) => this;

  /**
   * 缩放限制
   */
  scaleLimit!: (value: { min?: number; max?: number }) => this;

  /**
   * 名称映射
   */
  nameMap!: (value: Record<string, string>) => this;

  /**
   * 名称属性字段
   */
  nameProperty!: (value: string) => this;

  /**
   * 布局中心
   */
  layoutCenter!: (value: [string | number, string | number]) => this;

  /**
   * 布局尺寸
   */
  layoutSize!: (value: number | string) => this;

  /**
   * 边界坐标
   */
  boundingCoords!: (value: [[number, number], [number, number]]) => this;

  /**
   * 长宽比缩放
   */
  aspectScale!: (value: number) => this;

  /**
   * 初始选中
   */
  selected!: (value: boolean) => this;

  /**
   * 位置与尺寸
   */
  left!: (value: string | number) => this;
  right!: (value: string | number) => this;
  top!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;
  silent!: (value: boolean) => this;

  /**
   * 标签样式 | Geo label
   * @param config - 标签配置 | Label config
   */
  label!: (config: GeoComponentOption['label']) => this;

  /**
   * 图形样式 | Geo item style
   * @param config - 图形样式 | Item style
   */
  itemStyle!: (config: GeoComponentOption['itemStyle']) => this;

  /**
   * 高亮样式 | Geo emphasis
   * @param config - 高亮样式 | Emphasis style
   */
  emphasis!: (config: GeoComponentOption['emphasis']) => this;

  /**
   * 选中样式
   */
  select!: (config: GeoComponentOption['select']) => this;

  /**
   * 淡出样式
   */
  blur!: (config: Record<string, any>) => this;

  /**
   * 配置区域
   */
  regions!: (value: any[]) => this;

  /**
   * 提示框
   */
  tooltip!: (config: Record<string, any>) => this;
}
