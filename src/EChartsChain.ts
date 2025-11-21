import { ChainedMap } from './ChainedMap';
import type {
  TitleOption,
  LegendComponentOption,
  TooltipOption,
  ToolboxComponentOption,
  TimelineOption,
  DatasetOption,
  AriaOption,
  AxisPointerOption,
  BrushOption,
  GraphicComponentLooseOption,
} from './types';
import { Orderable } from './Orderable';
import { Title } from './Title';
import { Legend } from './Legend';
import { Grid } from './Grid';
import { XAxis, YAxis, AngleAxis, RadiusAxis, ParallelAxis, SingleAxis } from './Axis';
import { Polar } from './Polar';
import { Radar } from './Radar';
import { Geo } from './Geo';
import { Parallel } from './Parallel';
import { Calendar } from './Calendar';
import { Timeline } from './Timeline';
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
  public angleAxes: Orderable<this>;
  public radiusAxes: Orderable<this>;
  public polars: Orderable<this>;
  public radars: Orderable<this>;
  public geos: Orderable<this>;
  public parallels: Orderable<this>;
  public parallelAxes: Orderable<this>;
  public calendars: Orderable<this>;
  public singleAxes: Orderable<this>;
  public timelineInstance?: Timeline<this>;

  constructor() {
    super();

    // 初始化有序配置
    this.xAxes = new Orderable(this);
    this.yAxes = new Orderable(this);
    this.seriesList = new Orderable(this);
    this.dataZooms = new Orderable(this);
    this.visualMaps = new Orderable(this);
    this.grids = new Orderable(this);
    this.angleAxes = new Orderable(this);
    this.radiusAxes = new Orderable(this);
    this.polars = new Orderable(this);
    this.radars = new Orderable(this);
    this.geos = new Orderable(this);
    this.parallels = new Orderable(this);
    this.parallelAxes = new Orderable(this);
    this.calendars = new Orderable(this);
    this.singleAxes = new Orderable(this);

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
   * 配置标题 | Configure title
   * @param config - 配置函数或标题配置 | Function or Title option
   */
  title(config: ((title: Title<this>) => void) | TitleOption): this {
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
   * 配置图例 | Configure legend
   * @param config - 配置函数或图例配置 | Function or Legend option
   */
  legend(config: ((legend: Legend<this>) => void) | LegendComponentOption): this {
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
   * 配置角度轴（极坐标）
   * @param name - 轴名称
   */
  angleAxis(name: string = 'default'): AngleAxis<this> {
    let axis = this.angleAxes.get(name) as AngleAxis<this> | undefined;
    if (!axis) {
      axis = new AngleAxis(this);
      this.angleAxes.set(name, axis);
    }
    return axis;
  }

  /**
   * 配置半径轴（极坐标）
   * @param name - 轴名称
   */
  radiusAxis(name: string = 'default'): RadiusAxis<this> {
    let axis = this.radiusAxes.get(name) as RadiusAxis<this> | undefined;
    if (!axis) {
      axis = new RadiusAxis(this);
      this.radiusAxes.set(name, axis);
    }
    return axis;
  }

  /**
   * 配置极坐标系
   * @param name - 极坐标名称
   */
  polar(name: string = 'default'): Polar<this> {
    let polar = this.polars.get(name) as Polar<this> | undefined;
    if (!polar) {
      polar = new Polar(this);
      this.polars.set(name, polar);
    }
    return polar;
  }

  /**
   * 配置雷达坐标系
   * @param name - 雷达名称
   */
  radar(name: string = 'default'): Radar<this> {
    let radar = this.radars.get(name) as Radar<this> | undefined;
    if (!radar) {
      radar = new Radar(this);
      this.radars.set(name, radar);
    }
    return radar;
  }

  /**
   * 配置地理坐标系
   * @param name - 地理名称
   */
  geo(name: string = 'default'): Geo<this> {
    let geo = this.geos.get(name) as Geo<this> | undefined;
    if (!geo) {
      geo = new Geo(this);
      this.geos.set(name, geo);
    }
    return geo;
  }

  /**
   * 配置平行坐标系
   */
  parallel(name: string = 'default'): Parallel<this> {
    let parallel = this.parallels.get(name) as Parallel<this> | undefined;
    if (!parallel) {
      parallel = new Parallel(this);
      this.parallels.set(name, parallel);
    }
    return parallel;
  }

  /**
   * 配置平行坐标轴
   */
  parallelAxis(name: string = 'default'): ParallelAxis<this> {
    let axis = this.parallelAxes.get(name) as ParallelAxis<this> | undefined;
    if (!axis) {
      axis = new ParallelAxis(this);
      this.parallelAxes.set(name, axis);
    }
    return axis;
  }

  /**
   * 配置日历坐标系
   */
  calendar(name: string = 'default'): Calendar<this> {
    let calendar = this.calendars.get(name) as Calendar<this> | undefined;
    if (!calendar) {
      calendar = new Calendar(this);
      this.calendars.set(name, calendar);
    }
    return calendar;
  }

  /**
   * 配置单轴坐标系
   */
  singleAxis(name: string = 'default'): SingleAxis<this> {
    let axis = this.singleAxes.get(name) as SingleAxis<this> | undefined;
    if (!axis) {
      axis = new SingleAxis(this);
      this.singleAxes.set(name, axis);
    }
    return axis;
  }

  /**
   * 配置时间轴 | Configure timeline
   * @param config - 配置函数或时间轴配置 | Function or Timeline option
   */
  timeline(config: ((t: Timeline<this>) => void) | TimelineOption): this {
    if (!this.timelineInstance) {
      this.timelineInstance = new Timeline(this);
      this.set('timeline', this.timelineInstance);
    }
    const t = this.timelineInstance as Timeline<this>;
    if (typeof config === 'function') {
      config(t);
    } else if (typeof config === 'object') {
      t.merge(config);
    }
    return this;
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
   * 配置提示框 | Configure tooltip
   * @param config - 配置函数或提示框配置 | Function or Tooltip option
   */
  tooltip(config: ((tooltip: Tooltip<this>) => void) | TooltipOption): this {
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
   * 配置工具栏 | Configure toolbox
   * @param config - 配置函数或工具栏配置 | Function or Toolbox option
   */
  toolbox(config: ((toolbox: Toolbox<this>) => void) | ToolboxComponentOption): this {
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
   * 配置数据集 | Configure dataset
   * @param value - 数据集配置或数组 | Dataset option or array
   */
  dataset(value: DatasetOption | DatasetOption[]): this {
    return this.set('dataset', value);
  }

  /**
   * 配置 aria 辅助功能 | Configure aria
   * @param config - aria 配置 | Aria option
   */
  aria(config: AriaOption): this {
    return this.set('aria', config);
  }

  /**
   * 设置全局文本样式
   * @param config - 文本样式配置
   */
  textStyle(config: Record<string, any>): this {
    return this.set('textStyle', config);
  }

  /**
   * 设置全局坐标轴指示器 | Set global axisPointer
   * @param config - AxisPointer 配置 | AxisPointer option
   */
  axisPointer(config: AxisPointerOption): this {
    return this.set('axisPointer', config);
  }

  /**
   * 设置画布元素（graphic）| Set graphic elements
   * @param value - 配置或数组 | Option or array
   */
  graphic(value: GraphicComponentLooseOption | GraphicComponentLooseOption[]): this {
    return this.set('graphic', value);
  }

  /**
   * 设置交互刷选（brush）| Set brush
   * @param config - 刷选配置 | Brush option
   */
  brush(config: BrushOption): this {
    return this.set('brush', config);
  }

  /**
   * 批量配置
   * @param config - 配置对象
   */
  options(config: Record<string, any>): this {
    return this.fromConfig(config);
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

    // 极坐标
    const polarConfig = this.polars.toConfig();
    if (polarConfig.length > 0) {
      config.polar = polarConfig.length === 1 ? polarConfig[0] : polarConfig;
    }

    // 角度轴/半径轴
    const angleAxisConfig = this.angleAxes.toConfig();
    if (angleAxisConfig.length > 0) {
      config.angleAxis = angleAxisConfig.length === 1 ? angleAxisConfig[0] : angleAxisConfig;
    }
    const radiusAxisConfig = this.radiusAxes.toConfig();
    if (radiusAxisConfig.length > 0) {
      config.radiusAxis = radiusAxisConfig.length === 1 ? radiusAxisConfig[0] : radiusAxisConfig;
    }

    // 雷达
    const radarConfig = this.radars.toConfig();
    if (radarConfig.length > 0) {
      config.radar = radarConfig.length === 1 ? radarConfig[0] : radarConfig;
    }

    // 地理
    const geoConfig = this.geos.toConfig();
    if (geoConfig.length > 0) {
      config.geo = geoConfig.length === 1 ? geoConfig[0] : geoConfig;
    }

    // 平行坐标
    const parallelConfig = this.parallels.toConfig();
    if (parallelConfig.length > 0) {
      config.parallel = parallelConfig.length === 1 ? parallelConfig[0] : parallelConfig;
    }
    const parallelAxisConfig = this.parallelAxes.toConfig();
    if (parallelAxisConfig.length > 0) {
      config.parallelAxis = parallelAxisConfig;
    }

    // 日历
    const calendarConfig = this.calendars.toConfig();
    if (calendarConfig.length > 0) {
      config.calendar = calendarConfig.length === 1 ? calendarConfig[0] : calendarConfig;
    }

    // 单轴
    const singleAxisConfig = this.singleAxes.toConfig();
    if (singleAxisConfig.length > 0) {
      config.singleAxis = singleAxisConfig.length === 1 ? singleAxisConfig[0] : singleAxisConfig;
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

    // 处理极坐标
    if (config.polar) {
      const polars = Array.isArray(config.polar) ? config.polar : [config.polar];
      polars.forEach((polarConfig: any, index: number) => {
        this.polar(`polar${index}`).merge(polarConfig);
      });
    }

    // 处理角度轴
    if (config.angleAxis) {
      const axes = Array.isArray(config.angleAxis) ? config.angleAxis : [config.angleAxis];
      axes.forEach((axisConfig: any, index: number) => {
        this.angleAxis(`angleAxis${index}`).merge(axisConfig);
      });
    }

    // 处理半径轴
    if (config.radiusAxis) {
      const axes = Array.isArray(config.radiusAxis) ? config.radiusAxis : [config.radiusAxis];
      axes.forEach((axisConfig: any, index: number) => {
        this.radiusAxis(`radiusAxis${index}`).merge(axisConfig);
      });
    }

    // 处理雷达
    if (config.radar) {
      const radars = Array.isArray(config.radar) ? config.radar : [config.radar];
      radars.forEach((radarConfig: any, index: number) => {
        this.radar(`radar${index}`).merge(radarConfig);
      });
    }

    // 处理地理坐标
    if (config.geo) {
      const geos = Array.isArray(config.geo) ? config.geo : [config.geo];
      geos.forEach((geoConfig: any, index: number) => {
        this.geo(`geo${index}`).merge(geoConfig);
      });
    }

    // 处理平行坐标
    if (config.parallel) {
      const parallels = Array.isArray(config.parallel) ? config.parallel : [config.parallel];
      parallels.forEach((parallelConfig: any, index: number) => {
        this.parallel(`parallel${index}`).merge(parallelConfig);
      });
    }
    if (config.parallelAxis) {
      const axes = Array.isArray(config.parallelAxis) ? config.parallelAxis : [config.parallelAxis];
      axes.forEach((axisConfig: any, index: number) => {
        this.parallelAxis(`parallelAxis${index}`).merge(axisConfig);
      });
    }

    // 处理日历坐标
    if (config.calendar) {
      const calendars = Array.isArray(config.calendar) ? config.calendar : [config.calendar];
      calendars.forEach((calendarConfig: any, index: number) => {
        this.calendar(`calendar${index}`).merge(calendarConfig);
      });
    }

    // 处理单轴坐标
    if (config.singleAxis) {
      const axes = Array.isArray(config.singleAxis) ? config.singleAxis : [config.singleAxis];
      axes.forEach((axisConfig: any, index: number) => {
        this.singleAxis(`singleAxis${index}`).merge(axisConfig);
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
          'angleAxis',
          'radiusAxis',
          'polar',
          'radar',
          'geo',
          'parallel',
          'parallelAxis',
          'calendar',
          'singleAxis',
          'timeline',
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
