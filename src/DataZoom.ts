import { ChainedMap } from './ChainedMap';

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
   * 设置数据阴影样式
   */
  dataBackground(config: Record<string, any>): this {
    return this.set('dataBackground', config);
  }

  /**
   * 设置选中区域样式
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
   * 设置手柄样式
   */
  handleStyle(config: Record<string, any>): this {
    return this.set('handleStyle', config);
  }

  /**
   * 设置移动手柄样式
   */
  moveHandleIcon(value: string): this {
    return this.set('moveHandleIcon', value);
  }

  /**
   * 设置移动手柄大小
   */
  moveHandleSize(value: number): this {
    return this.set('moveHandleSize', value);
  }

  /**
   * 设置移动手柄样式
   */
  moveHandleStyle(config: Record<string, any>): this {
    return this.set('moveHandleStyle', config);
  }

  /**
   * 设置文本样式
   */
  textStyle(config: Record<string, any>): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置高亮样式
   */
  emphasis(config: Record<string, any>): this {
    return this.set('emphasis', config);
  }
}
