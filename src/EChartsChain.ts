import { ChainedMap } from './ChainedMap';
import { Orderable } from './Orderable';
import { Title } from './Title';
import { Legend } from './Legend';
import { Grid } from './Grid';
import { XAxis, YAxis } from './Axis';
import { Series } from './Series';
import { Tooltip } from './Tooltip';
import { Toolbox } from './Toolbox';
import { DataZoom } from './DataZoom';
import { VisualMap } from './VisualMap';

/**
 * EChartsChain - ECharts 配置链式生成主类
 * 提供类似 webpack-chain 的链式 API 来生成 ECharts 配置
 */
export class EChartsChain extends ChainedMap {
  public xAxes: Orderable<this>;
  public yAxes: Orderable<this>;
  public seriesList: Orderable<this>;
  public dataZooms: Orderable<this>;
  public visualMaps: Orderable<this>;
  public grids: Orderable<this>;

  constructor() {
    super();

    // 初始化有序配置
    this.xAxes = new Orderable(this);
    this.yAxes = new Orderable(this);
    this.seriesList = new Orderable(this);
    this.dataZooms = new Orderable(this);
    this.visualMaps = new Orderable(this);
    this.grids = new Orderable(this);

    // 扩展基础配置
    this.extend([
      'backgroundColor',
      'color',
      'animation',
      'animationThreshold',
      'animationDuration',
      'animationEasing',
      'animationDelay',
      'animationDurationUpdate',
      'animationEasingUpdate',
      'animationDelayUpdate',
      'stateAnimation',
      'blendMode',
      'hoverLayerThreshold',
      'useUTC',
    ]);
  }

  // 实现由 extend 动态创建
  backgroundColor!: (value: string) => this;
  color!: (value: string[]) => this;
  animation!: (value: boolean) => this;
  animationThreshold!: (value: number) => this;
  animationDuration!: (value: number | ((...args: any[]) => any)) => this;
  animationEasing!: (value: string) => this;
  animationDelay!: (value: number | ((...args: any[]) => any)) => this;
  animationDurationUpdate!: (value: number | ((...args: any[]) => any)) => this;
  animationEasingUpdate!: (value: string) => this;
  animationDelayUpdate!: (value: number | ((...args: any[]) => any)) => this;
  stateAnimation!: (value: Record<string, any>) => this;
  blendMode!: (value: string) => this;
  hoverLayerThreshold!: (value: number) => this;
  useUTC!: (value: boolean) => this;

  /**
   * 配置标题
   * @param config - 配置函数或配置对象
   */
  title(config: ((title: Title<this>) => void) | Record<string, any>): this {
    if (!this.has('title')) {
      this.set('title', new Title(this));
    }
    const title = this.get('title') as Title<this>;

    if (typeof config === 'function') {
      config(title);
    } else if (typeof config === 'object') {
      title.merge(config);
    }

    return this;
  }

  /**
   * 配置图例
   * @param config - 配置函数或配置对象
   */
  legend(config: ((legend: Legend<this>) => void) | Record<string, any>): this {
    if (!this.has('legend')) {
      this.set('legend', new Legend(this));
    }
    const legend = this.get('legend') as Legend<this>;

    if (typeof config === 'function') {
      config(legend);
    } else if (typeof config === 'object') {
      legend.merge(config);
    }

    return this;
  }

  /**
   * 配置网格
   * @param name - 网格名称
   */
  grid(name: string = 'default'): Grid<this> {
    let grid = this.grids.get(name) as Grid<this> | undefined;
    if (!grid) {
      grid = new Grid(this);
      this.grids.set(name, grid);
    }
    return grid;
  }

  /**
   * 配置X轴
   * @param name - 轴名称
   */
  xAxis(name: string = 'default'): XAxis<this> {
    let xAxis = this.xAxes.get(name) as XAxis<this> | undefined;
    if (!xAxis) {
      xAxis = new XAxis(this);
      this.xAxes.set(name, xAxis);
    }
    return xAxis;
  }

  /**
   * 配置Y轴
   * @param name - 轴名称
   */
  yAxis(name: string = 'default'): YAxis<this> {
    let yAxis = this.yAxes.get(name) as YAxis<this> | undefined;
    if (!yAxis) {
      yAxis = new YAxis(this);
      this.yAxes.set(name, yAxis);
    }
    return yAxis;
  }

  /**
   * 配置系列
   * @param name - 系列名称
   */
  series(name: string): Series<this> {
    if (!name) {
      throw new Error('Series name is required');
    }

    let series = this.seriesList.get(name) as Series<this> | undefined;
    if (!series) {
      series = new Series(this, name);
      this.seriesList.set(name, series);
    }
    return series;
  }

  /**
   * 配置提示框
   * @param config - 配置函数或配置对象
   */
  tooltip(config: ((tooltip: Tooltip<this>) => void) | Record<string, any>): this {
    if (!this.has('tooltip')) {
      this.set('tooltip', new Tooltip(this));
    }
    const tooltip = this.get('tooltip') as Tooltip<this>;

    if (typeof config === 'function') {
      config(tooltip);
    } else if (typeof config === 'object') {
      tooltip.merge(config);
    }

    return this;
  }

  /**
   * 配置工具栏
   * @param config - 配置函数或配置对象
   */
  toolbox(config: ((toolbox: Toolbox<this>) => void) | Record<string, any>): this {
    if (!this.has('toolbox')) {
      this.set('toolbox', new Toolbox(this));
    }
    const toolbox = this.get('toolbox') as Toolbox<this>;

    if (typeof config === 'function') {
      config(toolbox);
    } else if (typeof config === 'object') {
      toolbox.merge(config);
    }

    return this;
  }

  /**
   * 配置区域缩放
   * @param name - 缩放名称
   */
  dataZoom(name: string = 'default'): DataZoom<this> {
    let dataZoom = this.dataZooms.get(name) as DataZoom<this> | undefined;
    if (!dataZoom) {
      dataZoom = new DataZoom(this, name);
      this.dataZooms.set(name, dataZoom);
    }
    return dataZoom;
  }

  /**
   * 配置视觉映射
   * @param name - 映射名称
   */
  visualMap(name: string = 'default'): VisualMap<this> {
    let visualMap = this.visualMaps.get(name) as VisualMap<this> | undefined;
    if (!visualMap) {
      visualMap = new VisualMap(this, name);
      this.visualMaps.set(name, visualMap);
    }
    return visualMap;
  }

  /**
   * 配置数据集
   * @param value - 数据集配置
   */
  dataset(value: any[] | Record<string, any>): this {
    return this.set('dataset', value);
  }

  /**
   * 配置 aria
   * @param config - aria 配置
   */
  aria(config: Record<string, any>): this {
    return this.set('aria', config);
  }

  /**
   * 批量配置
   * @param config - 配置对象
   */
  options(config: Record<string, any>): this {
    return this.merge(config);
  }

  /**
   * 转换为 ECharts 配置对象
   */
  toConfig(): Record<string, any> {
    const config = super.toConfig();

    // 处理坐标轴配置
    const xAxisConfig = this.xAxes.toConfig();
    if (xAxisConfig.length > 0) {
      config.xAxis = xAxisConfig.length === 1 ? xAxisConfig[0] : xAxisConfig;
    }

    const yAxisConfig = this.yAxes.toConfig();
    if (yAxisConfig.length > 0) {
      config.yAxis = yAxisConfig.length === 1 ? yAxisConfig[0] : yAxisConfig;
    }

    // 处理网格配置
    const gridConfig = this.grids.toConfig();
    if (gridConfig.length > 0) {
      config.grid = gridConfig.length === 1 ? gridConfig[0] : gridConfig;
    }

    // 处理系列配置
    const seriesConfig = this.seriesList.toConfig();
    if (seriesConfig.length > 0) {
      config.series = seriesConfig;
    }

    // 处理区域缩放配置
    const dataZoomConfig = this.dataZooms.toConfig();
    if (dataZoomConfig.length > 0) {
      config.dataZoom = dataZoomConfig;
    }

    // 处理视觉映射配置
    const visualMapConfig = this.visualMaps.toConfig();
    if (visualMapConfig.length > 0) {
      config.visualMap = visualMapConfig.length === 1 ? visualMapConfig[0] : visualMapConfig;
    }

    return config;
  }

  /**
   * 导出为 JSON 字符串
   * @param space - 缩进空格数
   */
  toJSON(space: number = 2): string {
    return JSON.stringify(this.toConfig(), null, space);
  }

  /**
   * 从配置对象导入
   * @param config - ECharts 配置对象
   */
  fromConfig(config: Record<string, any>): this {
    // 处理标题
    if (config.title) {
      this.title(title => title.merge(config.title));
    }

    // 处理图例
    if (config.legend) {
      this.legend(legend => legend.merge(config.legend));
    }

    // 处理网格
    if (config.grid) {
      const grids = Array.isArray(config.grid) ? config.grid : [config.grid];
      grids.forEach((gridConfig: any, index: number) => {
        this.grid(`grid${index}`).merge(gridConfig);
      });
    }

    // 处理X轴
    if (config.xAxis) {
      const xAxes = Array.isArray(config.xAxis) ? config.xAxis : [config.xAxis];
      xAxes.forEach((xAxisConfig: any, index: number) => {
        this.xAxis(`xAxis${index}`).merge(xAxisConfig);
      });
    }

    // 处理Y轴
    if (config.yAxis) {
      const yAxes = Array.isArray(config.yAxis) ? config.yAxis : [config.yAxis];
      yAxes.forEach((yAxisConfig: any, index: number) => {
        this.yAxis(`yAxis${index}`).merge(yAxisConfig);
      });
    }

    // 处理系列
    if (config.series) {
      config.series.forEach((seriesConfig: any, index: number) => {
        const name = seriesConfig.name || `series${index}`;
        this.series(name).merge(seriesConfig);
      });
    }

    // 处理提示框
    if (config.tooltip) {
      this.tooltip(tooltip => tooltip.merge(config.tooltip));
    }

    // 处理工具栏
    if (config.toolbox) {
      this.toolbox(toolbox => toolbox.merge(config.toolbox));
    }

    // 处理区域缩放
    if (config.dataZoom) {
      const dataZooms = Array.isArray(config.dataZoom) ? config.dataZoom : [config.dataZoom];
      dataZooms.forEach((dataZoomConfig: any, index: number) => {
        this.dataZoom(`dataZoom${index}`).merge(dataZoomConfig);
      });
    }

    // 处理视觉映射
    if (config.visualMap) {
      const visualMaps = Array.isArray(config.visualMap) ? config.visualMap : [config.visualMap];
      visualMaps.forEach((visualMapConfig: any, index: number) => {
        this.visualMap(`visualMap${index}`).merge(visualMapConfig);
      });
    }

    // 处理其他配置
    const otherKeys = Object.keys(config).filter(
      key =>
        ![
          'title',
          'legend',
          'grid',
          'xAxis',
          'yAxis',
          'series',
          'tooltip',
          'toolbox',
          'dataZoom',
          'visualMap',
        ].includes(key)
    );

    otherKeys.forEach(key => {
      this.set(key, config[key]);
    });

    return this;
  }

  /**
   * 克隆当前配置
   */
  clone(): EChartsChain {
    const cloned = new EChartsChain();
    return cloned.fromConfig(this.toConfig());
  }
}
