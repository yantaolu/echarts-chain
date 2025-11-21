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
      'handleStyle',
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
   * 设置背景样式
   */
  backgroundColor(value: string): this {
    return this.set('backgroundColor', value);
  }

  /**
   * 设置数据阴影样式 | Data shadow style
   * @param config - 阴影样式 | Shadow style
   */
  dataBackground(config: Record<string, any>): this {
    return this.set('dataBackground', config);
  }

  /**
   * 设置选中区域样式 | Selected data shadow style
   * @param config - 阴影样式 | Shadow style
   */
  selectedDataBackground(config: Record<string, any>): this {
    return this.set('selectedDataBackground', config);
  }

  /**
   * 设置填充颜色
   */
  fillerColor(value: string): this {
    return this.set('fillerColor', value);
  }

  /**
   * 设置边框颜色
   */
  borderColor(value: string): this {
    return this.set('borderColor', value);
  }

  /**
   * 设置手柄样式
   */
  handleIcon(value: string): this {
    return this.set('handleIcon', value);
  }

  /**
   * 设置手柄大小
   */
  handleSize(value: number | string): this {
    return this.set('handleSize', value);
  }

  /**
   * 设置手柄样式 | Handle style
   * @param config - 样式配置 | Style config
   */
  handleStyle!: (config: SliderDataZoomComponentOption['handleStyle']) => this;

  /**
   * 设置移动手柄图标 | Move handle icon
   * @param value - 图标 | Icon
   */
  moveHandleIcon(value: SliderDataZoomComponentOption['moveHandleIcon']): this {
    return this.set('moveHandleIcon', value);
  }

  /**
   * 设置移动手柄大小
   */
  moveHandleSize(value: number): this {
    return this.set('moveHandleSize', value);
  }

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
