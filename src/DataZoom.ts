import { ChainedMap } from './ChainedMap';
import type { SliderDataZoomComponentOption } from './types';

/**
 * DataZoom - 区域缩放配置类
 */
export class DataZoom<Parent = any> extends ChainedMap<Parent> {
  public name: string;

  constructor(parent?: Parent, name: string = '') {
    super(parent);
    this.name = name;
    this.extend([
      'show',
      'type',
      'disabled',
      'xAxisIndex',
      'yAxisIndex',
      'radiusAxisIndex',
      'angleAxisIndex',
      'filterMode',
      'start',
      'end',
      'startValue',
      'endValue',
      'minSpan',
      'maxSpan',
      'minValueSpan',
      'maxValueSpan',
      'orient',
      'zoomLock',
      'throttle',
      'rangeMode',
      'zoomOnMouseWheel',
      'moveOnMouseMove',
      'moveOnMouseWheel',
      'preventDefaultMouseMove',
      // object setters covered by extend
      'backgroundColor',
      'dataBackground',
      'selectedDataBackground',
      'fillerColor',
      'borderColor',
      'handleIcon',
      'handleSize',
      'handleStyle',
      'moveHandleIcon',
      'moveHandleSize',
      'moveHandleStyle',
      'textStyle',
      'emphasis',
    ]);
  }

  // 实现由 extend 动态创建
  show!: (value: boolean) => this;
  type!: (value: 'inside' | 'slider') => this;
  disabled!: (value: boolean) => this;
  xAxisIndex!: (value: number | number[]) => this;
  yAxisIndex!: (value: number | number[]) => this;
  radiusAxisIndex!: (value: number | number[]) => this;
  angleAxisIndex!: (value: number | number[]) => this;
  filterMode!: (value: 'filter' | 'weakFilter' | 'empty' | 'none') => this;
  start!: (value: number) => this;
  end!: (value: number) => this;
  startValue!: (value: number | string) => this;
  endValue!: (value: number | string) => this;
  minSpan!: (value: number) => this;
  maxSpan!: (value: number) => this;
  minValueSpan!: (value: number) => this;
  maxValueSpan!: (value: number) => this;
  orient!: (value: 'horizontal' | 'vertical') => this;
  zoomLock!: (value: boolean) => this;
  throttle!: (value: number) => this;
  rangeMode!: (value: [string, string]) => this;
  zoomOnMouseWheel!: (value: boolean | 'shift' | 'ctrl' | 'alt') => this;
  moveOnMouseMove!: (value: boolean | 'shift' | 'ctrl' | 'alt') => this;
  moveOnMouseWheel!: (value: boolean | 'shift' | 'ctrl' | 'alt') => this;
  preventDefaultMouseMove!: (value: boolean) => this;

  /**
   * 背景颜色 | Background color
   * @param value - 颜色 | Color string
   */
  backgroundColor!: (value: string) => this;

  /**
   * 数据阴影样式 | Data shadow style
   * @param config - 阴影样式 | Shadow style
   */
  dataBackground!: (config: Record<string, any>) => this;

  /**
   * 选中区域阴影样式 | Selected data shadow style
   * @param config - 阴影样式 | Shadow style
   */
  selectedDataBackground!: (config: Record<string, any>) => this;

  /**
   * 填充颜色 | Filler color
   * @param value - 颜色 | Color string
   */
  fillerColor!: (value: string) => this;

  /**
   * 边框颜色 | Border color
   * @param value - 颜色 | Color string
   */
  borderColor!: (value: string) => this;

  /**
   * 手柄图标 | Handle icon
   * @param value - 图标字符串 | Icon string
   */
  handleIcon!: (value: string) => this;

  /**
   * 手柄大小 | Handle size
   * @param value - 像素或字符串 | Number or string
   */
  handleSize!: (value: number | string) => this;

  /**
   * 设置手柄样式 | Handle style
   * @param config - 样式配置 | Style config
   */
  handleStyle!: (config: SliderDataZoomComponentOption['handleStyle']) => this;

  /**
   * 移动手柄图标 | Move handle icon
   * @param value - 图标 | Icon
   */
  moveHandleIcon!: (value: SliderDataZoomComponentOption['moveHandleIcon']) => this;

  /**
   * 移动手柄大小 | Move handle size
   * @param value - 像素值 | Size in pixels
   */
  moveHandleSize!: (value: number) => this;

  /**
   * 设置移动手柄样式 | Move handle style
   * @param config - 样式配置 | Style config
   */
  moveHandleStyle!: (config: SliderDataZoomComponentOption['moveHandleStyle']) => this;

  /**
   * 设置文本样式 | Text style
   * @param config - 文本样式 | Text style
   */
  textStyle!: (config: SliderDataZoomComponentOption['textStyle']) => this;

  /**
   * 设置高亮样式 | Emphasis style
   * @param config - 高亮样式 | Emphasis style
   */
  emphasis!: (config: SliderDataZoomComponentOption['emphasis']) => this;
}
