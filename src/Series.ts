import { ChainedMap } from './ChainedMap';
import type {
  GraphSeriesOption,
  LinesSeriesOption,
  MapSeriesOption,
  GaugeSeriesOption,
  EffectScatterSeriesOption,
  TreemapSeriesOption,
  SunburstSeriesOption,
  FunnelSeriesOption,
  PieSeriesOption,
  BoxplotSeriesOption,
  ParallelSeriesOption,
  BarSeriesOption,
} from './types';
import type {
  SeriesLabelUnion,
  ItemStyleUnion,
  LineStyleUnion,
  AreaStyleUnion,
  LabelLineUnion,
  MarkPointOption,
  MarkLineOption,
  MarkAreaOption,
  TooltipOption,
  LabelLayoutOptionCallback,
} from './types';

/**
 * Series - 系列配置类
 */
export class Series<Parent = any> extends ChainedMap<Parent> {
  constructor(parent: Parent, name: string) {
    super(parent);
    this.extend([
      'type',
      'id',
      'name',
      'coordinateSystem',
      'xAxisIndex',
      'yAxisIndex',
      'polarIndex',
      'parallelIndex',
      'singleAxisIndex',
      'radarIndex',
      'geoIndex',
      'calendarIndex',
      'stack',
      'cursor',
      'legendHoverLink',
      'connectNulls',
      'clip',
      'step',
      'smooth',
      'smoothMonotone',
      'symbol',
      'symbolSize',
      'symbolRotate',
      'symbolKeepAspect',
      'symbolOffset',
      'showSymbol',
      'showAllSymbol',
      'sampling',
      'dimensions',
      'encode',
      'seriesLayoutBy',
      'datasetIndex',
      'colorBy',
      'progressiveThreshold',
      'progressive',
      'large',
      'largeThreshold',
      'animation',
      'animationThreshold',
      'animationDuration',
      'animationEasing',
      'animationDelay',
      'animationDurationUpdate',
      'animationEasingUpdate',
      'animationDelayUpdate',
      'universalTransition',
      'zlevel',
      'z',
      'silent',
      'selectedMode',
      'center',
      'radius',
      'roseType',
      'avoidLabelOverlap',
      'stillShowZeroSum',
      'minAngle',
      'clockwise',
      'startAngle',
      'endAngle',
      'splitNumber',
      'map',
      // heatmap
      'pointSize',
      'blurSize',
      'maxOpacity',
      'minOpacity',
      // effectScatter
      'showEffectOn',
      // graph
      'layout',
      'force',
      'roam',
      'draggable',
      'focusNodeAdjacency',
      'categories',
      'circular',
      // sankey
      'nodeGap',
      'nodeAlign',
      'orient',
      // funnel
      'min',
      'max',
      'minSize',
      'maxSize',
      'sort',
      'gap',
      'funnelAlign',
      // treemap
      'leafDepth',
      'upperLabel',
      'levels',
      'nodeClick',
      // tree
      'edgeShape',
      'edgeForkPosition',
      'expandAndCollapse',
      'initialTreeDepth',
      // sankey specific
      'nodeWidth',
      'layoutIterations',
      // map series specific
      'nameProperty',
      // lines
      'polyline',
      'effect',
      // map series specific
      'nameMap',
      'mapValueCalculation',
      'scaleLimit',
      'zoom',
      'layoutCenter',
      'layoutSize',
      // pictorialBar
      'symbolPosition',
      'symbolBoundingData',
      'symbolRepeat',
      'symbolRepeatDirection',
      'symbolClip',
      'symbolMargin',
      'symbolPatternSize',
      'barWidth',
      'barMaxWidth',
      'barMinWidth',
      'barMinHeight',
      'barGap',
      'barCategoryGap',
      'showBackground',
      'backgroundStyle',
      'stackStrategy',
      // boxplot
      'boxWidth',
      // pie extras
      'padAngle',
      'minShowLabelAngle',
      'selectedOffset',
      'percentPrecision',
      'animationType',
      'animationTypeUpdate',
      'showEmptyCircle',
      'emptyCircleStyle',
      // parallel
      'inactiveOpacity',
      'activeOpacity',
      'realtime',
      // common object setters covered by extend
      'data',
      'label',
      'markPoint',
      'markLine',
      'markArea',
      'emphasis',
      'select',
      'blur',
      'lineStyle',
      'areaStyle',
      'itemStyle',
      'tooltip',
      'endLabel',
      'labelLayout',
      'labelLine',
      // gauge specific
      'progress',
      'pointer',
      'anchor',
      'detail',
      'title',
      'axisLine',
      'axisTick',
      'axisLabel',
      'splitLine',
      // effectScatter
      'rippleEffect',
      // graph
      'edgeSymbol',
      'edgeSymbolSize',
      'edgeLabel',
      'links',
      'breadcrumb',
    ]);
    this.set('name', name);
  }

  // 实现由 extend 动态创建
  type!: (value: string) => this;
  id!: (value: string) => this;
  name!: (value: string) => this;
  coordinateSystem!: (value: string) => this;
  xAxisIndex!: (value: number) => this;
  yAxisIndex!: (value: number) => this;
  polarIndex!: (value: number) => this;
  parallelIndex!: (value: number) => this;
  singleAxisIndex!: (value: number) => this;
  radarIndex!: (value: number) => this;
  geoIndex!: (value: number) => this;
  calendarIndex!: (value: number) => this;
  stack!: (value: string) => this;
  cursor!: (value: string) => this;
  legendHoverLink!: (value: boolean) => this;
  connectNulls!: (value: boolean) => this;
  clip!: (value: boolean) => this;
  step!: (value: boolean | 'start' | 'middle' | 'end') => this;
  smooth!: (value: boolean | number) => this;
  smoothMonotone!: (value: 'x' | 'y' | 'none') => this;
  symbol!: (value: string) => this;
  symbolSize!: (value: number | number[] | ((...args: any[]) => any)) => this;
  symbolRotate!: (value: number) => this;
  symbolKeepAspect!: (value: boolean) => this;
  symbolOffset!: (value: [number | string, number | string]) => this;
  showSymbol!: (value: boolean) => this;
  showAllSymbol!: (value: boolean | 'auto') => this;
  sampling!: (value: string) => this;
  dimensions!: (value: any[]) => this;
  encode!: (value: Record<string, any>) => this;
  seriesLayoutBy!: (value: 'column' | 'row') => this;
  datasetIndex!: (value: number) => this;
  colorBy!: (value: 'series' | 'data') => this;
  progressiveThreshold!: (value: number) => this;
  progressive!: (value: number) => this;
  large!: (value: boolean) => this;
  largeThreshold!: (value: number) => this;
  animation!: (value: boolean) => this;
  animationThreshold!: (value: number) => this;
  animationDuration!: (value: number | ((...args: any[]) => any)) => this;
  animationEasing!: (value: string) => this;
  animationDelay!: (value: number | ((...args: any[]) => any)) => this;
  animationDurationUpdate!: (value: number | ((...args: any[]) => any)) => this;
  animationEasingUpdate!: (value: string) => this;
  animationDelayUpdate!: (value: number | ((...args: any[]) => any)) => this;
  universalTransition!: (value: boolean | Record<string, any>) => this;
  zlevel!: (value: number) => this;
  z!: (value: number) => this;
  silent!: (value: boolean) => this;
  selectedMode!: (value: boolean | 'single' | 'multiple') => this;
  center!: (value: [string | number, string | number]) => this;
  radius!: (value: number | string | [string | number, string | number]) => this;
  roseType!: (value: boolean | 'radius' | 'area') => this;
  avoidLabelOverlap!: (value: boolean) => this;
  stillShowZeroSum!: (value: boolean) => this;
  minAngle!: (value: number) => this;
  clockwise!: (value: boolean) => this;
  startAngle!: (value: number) => this;
  endAngle!: (value: number) => this;
  splitNumber!: (value: number) => this;
  map!: (value: string) => this;
  // heatmap
  pointSize!: (value: number) => this;
  blurSize!: (value: number) => this;
  maxOpacity!: (value: number) => this;
  minOpacity!: (value: number) => this;
  // effectScatter
  showEffectOn!: (value: 'render' | 'emphasis') => this;
  // graph
  layout!: (value: 'none' | 'circular' | 'force') => this;
  /**
   * 力引导（graph）| Graph force layout
   * @param value - 力引导配置 | Force config
   */
  force!: (value: GraphSeriesOption['force']) => this;
  roam!: (value: boolean | 'scale' | 'move') => this;
  draggable!: (value: boolean) => this;
  focusNodeAdjacency!: (value: boolean) => this;
  /**
   * 分类集合（graph）| Graph categories
   * @param value - 分类数组 | Categories array
   */
  categories!: (value: GraphSeriesOption['categories']) => this;
  circular!: (value: GraphSeriesOption['circular']) => this;
  // sankey
  nodeGap!: (value: number) => this;
  nodeAlign!: (value: 'left' | 'right' | 'center') => this;
  /**
   * 方向设置（sankey/tree）
   * @param value - sankey 使用 'horizontal'/'vertical'；tree 使用 'LR'/'RL'/'TB'/'BT'
   */
  orient!: (value: 'horizontal' | 'vertical' | 'LR' | 'RL' | 'TB' | 'BT' | string) => this;
  // funnel
  min!: (value: number) => this;
  max!: (value: number) => this;
  minSize!: (value: string) => this;
  maxSize!: (value: string) => this;
  sort!: (value: 'descending' | 'ascending' | 'none') => this;
  gap!: (value: number) => this;
  // treemap/sunburst
  leafDepth!: (value: number) => this;
  /**
   * 上层标签（treemap）| Treemap upper label
   * @param value - 标签配置 | Label config
   */
  upperLabel!: (value: TreemapSeriesOption['upperLabel']) => this;
  /**
   * 层级配置（treemap/sunburst）| Levels config
   * @param value - 层级数组 | Levels array
   */
  levels!: (value: TreemapSeriesOption['levels'] | SunburstSeriesOption['levels']) => this;
  /**
   * 节点点击行为（treemap/sunburst）| Node click behavior
   * @param value - 行为配置 | Behavior config
   */
  nodeClick!: (value: TreemapSeriesOption['nodeClick'] | SunburstSeriesOption['nodeClick']) => this;
  /**
   * 树图 - 边形状
   * @param value - 连接边的形状类型
   */
  edgeShape!: (value: 'polyline' | 'curve') => this;
  /**
   * 树图 - 分叉位置
   * @param value - 分叉位置（可用百分比、数值）
   */
  edgeForkPosition!: (value: '50%' | string | number) => this;
  /**
   * 树图 - 展开折叠
   * @param value - 是否允许节点展开与折叠
   */
  expandAndCollapse!: (value: boolean) => this;
  /**
   * 树图 - 初始层级
   * @param value - 初始展示的树深度
   */
  initialTreeDepth!: (value: number) => this;
  /**
   * 树图 - 叶子节点样式
   * @param config - 叶子节点的标签/样式配置
   */
  leaves(config: Record<string, any>): this {
    return this.set('leaves', config);
  }
  // sankey specific
  nodeWidth!: (value: number) => this;
  layoutIterations!: (value: number) => this;
  // map series specific
  nameProperty!: (value: string) => this;
  // lines
  polyline!: (value: boolean) => this;
  effect!: (value: LinesSeriesOption['effect']) => this;
  // map series specific
  nameMap!: (value: MapSeriesOption['nameMap']) => this;
  mapValueCalculation!: (value: MapSeriesOption['mapValueCalculation']) => this;
  scaleLimit!: (value: MapSeriesOption['scaleLimit']) => this;
  zoom!: (value: number) => this;
  layoutCenter!: (value: [string | number, string | number]) => this;
  layoutSize!: (value: number | string) => this;
  /**
   * 象形柱图 - 符号位置
   * @param value - 符号相对柱体的位置
   */
  symbolPosition!: (value: 'start' | 'end' | 'center') => this;
  /**
   * 象形柱图 - 符号边界数据
   * @param value - 用于计算符号边界的参考数据
   */
  symbolBoundingData!: (value: number | [number, number]) => this;
  /**
   * 象形柱图 - 符号重复
   * @param value - 是否重复或重复次数
   */
  symbolRepeat!: (value: boolean | number | string) => this;
  /**
   * 象形柱图 - 符号重复方向
   * @param value - 从柱体开始（start）或末端（end）
   */
  symbolRepeatDirection!: (value: 'start' | 'end') => this;
  /**
   * 象形柱图 - 符号裁剪
   * @param value - 是否根据数据值裁剪符号
   */
  symbolClip!: (value: boolean) => this;
  /**
   * 象形柱图 - 符号间距
   * @param value - 符号之间的间距
   */
  symbolMargin!: (value: number | string) => this;
  /**
   * 象形柱图 - 模式尺寸
   * @param value - 符号模式的尺寸
   */
  symbolPatternSize!: (value: number) => this;
  barWidth!: (value: number | string) => this;
  barMaxWidth!: (value: number | string) => this;
  barMinWidth!: (value: number | string) => this;
  barMinHeight!: (value: number) => this;
  barGap!: (value: string) => this;
  barCategoryGap!: (value: string) => this;
  showBackground!: (value: boolean) => this;
  /**
   * 背景样式 | Background style for bars
   * @param value - 样式配置 | Style config
   */
  /**
   * 背景样式 | Background style for bars
   * @param value - 样式配置 | Style config
   */
  /**
   * 背景样式 | Background style for bars
   * @param value - 样式配置 | Style config
   */
  backgroundStyle!: (value: BarSeriesOption['backgroundStyle']) => this;
  stackStrategy!: (value: 'samesign' | 'all') => this;

  /**
   * 漏斗图 - 对齐 | Funnel align
   * @param value - 对齐方式 | Align
   */
  funnelAlign!: (value: FunnelSeriesOption['funnelAlign']) => this;

  /**
   * 箱型图 - 箱宽 | Box width
   * @param value - 宽度或区间 | Width or range
   */
  boxWidth!: (value: BoxplotSeriesOption['boxWidth']) => this;

  /**
   * 饼图 - 扇区内边距角度 | Pad angle
   * @param value - 角度 | Angle
   */
  padAngle!: (value: PieSeriesOption['padAngle']) => this;
  /**
   * 饼图 - 显示标签的最小角度 | Min label angle
   * @param value - 角度 | Angle
   */
  minShowLabelAngle!: (value: PieSeriesOption['minShowLabelAngle']) => this;
  /**
   * 饼图 - 选中偏移 | Selected offset
   * @param value - 偏移量 | Offset
   */
  selectedOffset!: (value: PieSeriesOption['selectedOffset']) => this;
  /**
   * 饼图 - 百分比精度 | Percent precision
   * @param value - 精度 | Precision
   */
  percentPrecision!: (value: PieSeriesOption['percentPrecision']) => this;
  /**
   * 饼图 - 初始动画类型 | Animation type
   * @param value - 类型 | Type
   */
  animationType!: (value: PieSeriesOption['animationType']) => this;
  /**
   * 饼图 - 更新动画类型 | Animation type update
   * @param value - 类型 | Type
   */
  animationTypeUpdate!: (value: PieSeriesOption['animationTypeUpdate']) => this;
  /**
   * 饼图 - 显示空心圆 | Show empty circle
   * @param value - 是否显示 | Show
   */
  showEmptyCircle!: (value: PieSeriesOption['showEmptyCircle']) => this;
  /**
   * 饼图 - 空心圆样式 | Empty circle style
   * @param value - 样式配置 | Style
   */
  emptyCircleStyle!: (value: PieSeriesOption['emptyCircleStyle']) => this;

  /**
   * 平行坐标 - 非激活透明度 | Inactive opacity
   * @param value - 透明度 | Opacity
   */
  inactiveOpacity!: (value: ParallelSeriesOption['inactiveOpacity']) => this;
  /**
   * 平行坐标 - 激活透明度 | Active opacity
   * @param value - 透明度 | Opacity
   */
  activeOpacity!: (value: ParallelSeriesOption['activeOpacity']) => this;
  /**
   * 平行坐标 - 是否实时更新 | Realtime
   * @param value - 是否 | Enabled
   */
  realtime!: (value: ParallelSeriesOption['realtime'] | boolean) => this;

  /**
   * 设置系列数据 | Set series data
   * @param value - 数据数组（类型随系列而异） | Data array varies by series
   */
  /**
   * 设置系列数据 | Set series data
   * @param value - 数据数组 | Data array
   */
  /**
   * 设置系列数据 | Set series data
   * @param value - 数据数组 | Data array
   */
  data!: (value: any[]) => this;

  /**
   * 设置标签 | Set label
   * @param config - 标签配置 | Label config
   */
  /**
   * 设置标签 | Set label
   * @param config - 标签配置 | Label config
   */
  /**
   * 设置标签 | Set label
   * @param config - 标签配置 | Label config
   */
  /**
   * 设置标签 | Set label
   * @param config - 标签配置 | Label config
   */
  label!: (config: SeriesLabelUnion) => this;

  /**
   * 设置标注点 | Set markPoint
   * @param config - 标注点配置 | MarkPoint config
   */
  /**
   * 设置标注点 | Set markPoint
   * @param config - 标注点配置 | MarkPoint config
   */
  /**
   * 设置标注点 | Set markPoint
   * @param config - 标注点配置 | MarkPoint config
   */
  markPoint!: (config: MarkPointOption) => this;

  /**
   * 设置标线 | Set markLine
   * @param config - 标线配置 | MarkLine config
   */
  /**
   * 设置标线 | Set markLine
   * @param config - 标线配置 | MarkLine config
   */
  /**
   * 设置标线 | Set markLine
   * @param config - 标线配置 | MarkLine config
   */
  markLine!: (config: MarkLineOption) => this;

  /**
   * 设置标域 | Set markArea
   * @param config - 标域配置 | MarkArea config
   */
  /**
   * 设置标域 | Set markArea
   * @param config - 标域配置 | MarkArea config
   */
  /**
   * 设置标域 | Set markArea
   * @param config - 标域配置 | MarkArea config
   */
  markArea!: (config: MarkAreaOption) => this;

  /**
   * 设置高亮样式 | Set emphasis state
   * @param config - 高亮状态样式 | Emphasis state style
   */
  /**
   * 设置高亮样式 | Set emphasis state
   * @param config - 高亮状态样式 | Emphasis state style
   */
  emphasis!: (config: Record<string, any>) => this;

  /**
   * 设置选中样式 | Set selected state
   * @param config - 选中状态样式 | Selected state style
   */
  /**
   * 设置选中样式 | Set selected state
   * @param config - 选中状态样式 | Selected state style
   */
  select!: (config: Record<string, any>) => this;

  /**
   * 设置淡出样式 | Set blur state
   * @param config - 淡出状态样式 | Blur state style
   */
  /**
   * 设置淡出样式 | Set blur state
   * @param config - 淡出状态样式 | Blur state style
   */
  blur!: (config: Record<string, any>) => this;

  /**
   * 设置线条样式 | Set line style
   * @param config - 线条样式配置 | Line style config
   */
  /**
   * 设置线条样式 | Set line style
   * @param config - 线条样式配置 | Line style config
   */
  /**
   * 设置线条样式 | Set line style
   * @param config - 线条样式配置 | Line style config
   */
  /**
   * 设置线条样式 | Set line style
   * @param config - 线条样式配置 | Line style config
   */
  lineStyle!: (config: LineStyleUnion) => this;

  /**
   * 设置区域样式 | Set area style
   * @param config - 区域样式配置 | Area style config
   */
  /**
   * 设置区域样式 | Set area style
   * @param config - 区域样式配置 | Area style config
   */
  /**
   * 设置区域样式 | Set area style
   * @param config - 区域样式配置 | Area style config
   */
  /**
   * 设置区域样式 | Set area style
   * @param config - 区域样式配置 | Area style config
   */
  areaStyle!: (config: AreaStyleUnion) => this;

  /**
   * 设置图形样式 | Set item style
   * @param config - 图形样式配置 | Item style config
   */
  /**
   * 设置图形样式 | Set item style
   * @param config - 图形样式配置 | Item style config
   */
  /**
   * 设置图形样式 | Set item style
   * @param config - 图形样式配置 | Item style config
   */
  /**
   * 设置图形样式 | Set item style
   * @param config - 图形样式配置 | Item style config
   */
  itemStyle!: (config: ItemStyleUnion) => this;

  /**
   * 设置提示框 | Set tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  /**
   * 设置提示框 | Set tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  /**
   * 设置提示框 | Set tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: TooltipOption) => this;

  /**
   * 设置端点标签 | Set endLabel
   * @param config - 端点标签配置 | EndLabel config
   */
  /**
   * 设置端点标签 | Set endLabel
   * @param config - 端点标签配置 | EndLabel config
   */
  /**
   * 设置端点标签 | Set endLabel
   * @param config - 端点标签配置 | EndLabel config
   */
  endLabel!: (config: import('./types').LineSeriesOption['endLabel']) => this;

  /**
   * 设置标签布局 | Set labelLayout
   * @param config - 布局配置或回调 | Layout config or callback
   */
  /**
   * 设置标签布局 | Set labelLayout
   * @param config - 布局配置或回调 | Layout config or callback
   */
  /**
   * 设置标签布局 | Set labelLayout
   * @param config - 布局配置或回调 | Layout config or callback
   */
  labelLayout!: (config: Record<string, any> | LabelLayoutOptionCallback) => this;

  /**
   * 设置标签线 | Set labelLine
   * @param config - 标签线配置 | Label line config
   */
  /**
   * 设置标签线 | Set labelLine
   * @param config - 标签线配置 | Label line config
   */
  /**
   * 设置标签线 | Set labelLine
   * @param config - 标签线配置 | Label line config
   */
  /**
   * 设置标签线 | Set labelLine
   * @param config - 标签线配置 | Label line config
   */
  labelLine!: (config: LabelLineUnion) => this;

  /**
   * 仪表盘 - 进度样式 | Gauge progress
   * @param config - 进度配置 | Progress config
   */
  progress!: (config: GaugeSeriesOption['progress']) => this;

  /**
   * 仪表盘 - 指针样式 | Gauge pointer
   * @param config - 指针配置 | Pointer config
   */
  pointer!: (config: GaugeSeriesOption['pointer']) => this;

  /**
   * 仪表盘 - 锚点样式 | Gauge anchor
   * @param config - 锚点配置 | Anchor config
   */
  anchor!: (config: GaugeSeriesOption['anchor']) => this;

  /**
   * 仪表盘 - 详情文本 | Gauge detail
   * @param config - 详情配置 | Detail config
   */
  detail!: (config: GaugeSeriesOption['detail']) => this;

  /**
   * 仪表盘 - 标题文本 | Gauge title
   * @param config - 标题配置 | Title config
   */
  title!: (config: GaugeSeriesOption['title']) => this;

  /**
   * 仪表盘 - 轴线样式 | Gauge axisLine
   * @param config - 轴线配置 | AxisLine config
   */
  axisLine!: (config: GaugeSeriesOption['axisLine']) => this;

  /**
   * 仪表盘 - 刻度样式 | Gauge axisTick
   * @param config - 刻度配置 | AxisTick config
   */
  axisTick!: (config: GaugeSeriesOption['axisTick']) => this;

  /**
   * 仪表盘 - 刻度标签样式 | Gauge axisLabel
   * @param config - 标签配置 | AxisLabel config
   */
  axisLabel!: (config: GaugeSeriesOption['axisLabel']) => this;

  /**
   * 仪表盘 - 分隔线样式 | Gauge splitLine
   * @param config - 分隔线配置 | SplitLine config
   */
  splitLine!: (config: GaugeSeriesOption['splitLine']) => this;

  /**
   * 涟漪特效（effectScatter）| Ripple effect
   * @param config - 涟漪特效配置 | Ripple effect config
   */
  rippleEffect!: (config: EffectScatterSeriesOption['rippleEffect']) => this;

  /**
   * 边符号（graph）| Graph edge symbol
   * @param value - 符号或左右符号数组 | Symbol or [left, right]
   */
  edgeSymbol!: (value: GraphSeriesOption['edgeSymbol']) => this;

  /**
   * 边符号大小（graph）| Graph edge symbol size
   * @param value - 大小或左右大小数组 | Size or [left, right]
   */
  edgeSymbolSize!: (value: GraphSeriesOption['edgeSymbolSize']) => this;

  /**
   * 边标签（graph）| Graph edgeLabel
   * @param config - 边标签配置 | EdgeLabel config
   */
  edgeLabel!: (config: GraphSeriesOption['edgeLabel']) => this;

  /**
   * 边集合（graph）| Graph links
   * @param value - 边集合数据 | Links data
   */
  links!: (value: GraphSeriesOption['links']) => this;

  /**
   * 力引导参数（graph: layout=force）| Force layout options alias
   * @param config - 力引导配置 | Force config
   */
  forceAtlas(config: GraphSeriesOption['force']): this {
    return this.set('force', config);
  }

  /**
   * 树图/旭日图 - 面包屑导航 | Breadcrumb
   * @param config - 面包屑配置 | Breadcrumb config
   */
  breadcrumb!: (config: TreemapSeriesOption['breadcrumb']) => this;
}
