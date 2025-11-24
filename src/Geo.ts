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
   * 地图类型 | Map type
   * @param value - 地图名称 | Map name
   */
  map!: (value: string) => this;

  /**
   * 是否可缩放平移 | Enable roam behavior
   * @param value - 布尔或模式 | Boolean or 'scale'/'move'
   */
  roam!: (value: boolean | 'scale' | 'move') => this;

  /**
   * 地图中心点 | Map center
   * @param value - 经度/纬度 | [lng, lat]
   */
  center!: (value: [number, number]) => this;

  /**
   * 初始缩放等级 | Initial zoom level
   * @param value - 缩放等级 | Zoom level
   */
  zoom!: (value: number) => this;

  /**
   * 缩放限制 | Scale limit
   * @param value - 最小/最大缩放 | { min, max }
   */
  scaleLimit!: (value: { min?: number; max?: number }) => this;

  /**
   * 名称映射 | Name mapping
   * @param value - 地名映射表 | Mapping table
   */
  nameMap!: (value: Record<string, string>) => this;

  /**
   * 名称属性字段 | Name property field
   * @param value - 字段名 | Field name
   */
  nameProperty!: (value: string) => this;

  /**
   * 布局中心 | Layout center
   * @param value - 中心坐标 | [x, y]
   */
  layoutCenter!: (value: [string | number, string | number]) => this;

  /**
   * 布局尺寸 | Layout size
   * @param value - 尺寸或百分比 | Size or percentage
   */
  layoutSize!: (value: number | string) => this;

  /**
   * 边界坐标 | Bounding coordinates
   * @param value - 左下/右上坐标 | [[minLng, minLat],[maxLng,maxLat]]
   */
  boundingCoords!: (value: [[number, number], [number, number]]) => this;

  /**
   * 长宽比缩放 | Aspect scale
   * @param value - 比例 | Scale ratio
   */
  aspectScale!: (value: number) => this;

  /**
   * 初始选中 | Selected by default
   * @param value - 是否选中 | Selected
   */
  selected!: (value: boolean) => this;

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
   * 禁用交互 | Silence mouse interaction
   * @param value - 是否禁用 | Whether to disable
   */
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
   * 选中样式 | Geo select style
   * @param config - 选中样式 | Select style
   */
  select!: (config: GeoComponentOption['select']) => this;

  /**
   * 淡出样式 | Geo blur style
   * @param config - 淡出样式 | Blur style
   */
  blur!: (config: Record<string, any>) => this;

  /**
   * 配置区域 | Regions
   * @param value - 区域数组 | Regions array
   */
  regions!: (value: any[]) => this;

  /**
   * 提示框 | Tooltip for geo
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: Record<string, any>) => this;
}
