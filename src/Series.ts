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
      'leaves',
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
  /**
   * 系列类型 | Series type
   * @param value - 系列类型名称 | Type name
   */
  type!: (value: string) => this;
  /**
   * 组件唯一 id | Component id
   * @param value - 标识字符串 | Identifier
   */
  id!: (value: string) => this;
  /**
   * 系列名称 | Series name
   * @param value - 名称 | Name
   */
  name!: (value: string) => this;
  /**
   * 坐标系类型 | Coordinate system
   * @param value - 如 'cartesian2d'/'polar'/'geo' 等 | e.g. 'cartesian2d', 'polar', 'geo'
   */
  coordinateSystem!: (value: string) => this;
  /**
   * X 轴索引 | X axis index
   * @param value - 轴索引 | Axis index
   */
  xAxisIndex!: (value: number) => this;
  /**
   * Y 轴索引 | Y axis index
   * @param value - 轴索引 | Axis index
   */
  yAxisIndex!: (value: number) => this;
  /**
   * 极坐标索引 | Polar index
   * @param value - 组件索引 | Component index
   */
  polarIndex!: (value: number) => this;
  /**
   * 平行坐标索引 | Parallel index
   * @param value - 组件索引 | Component index
   */
  parallelIndex!: (value: number) => this;
  /**
   * 单轴索引 | SingleAxis index
   * @param value - 组件索引 | Component index
   */
  singleAxisIndex!: (value: number) => this;
  /**
   * 雷达坐标系索引 | Radar index
   * @param value - 组件索引 | Component index
   */
  radarIndex!: (value: number) => this;
  /**
   * 地理坐标系索引 | Geo index
   * @param value - 组件索引 | Component index
   */
  geoIndex!: (value: number) => this;
  /**
   * 日历坐标系索引 | Calendar index
   * @param value - 组件索引 | Component index
   */
  calendarIndex!: (value: number) => this;
  /**
   * 堆叠标识 | Stack key
   * @param value - 相同值用于同组堆叠 | Same key stacks together
   */
  stack!: (value: string) => this;
  /**
   * 鼠标样式 | Cursor style
   * @param value - CSS cursor | CSS cursor string
   */
  cursor!: (value: string) => this;
  /**
   * 图例悬停联动 | Legend hover link
   * @param value - 是否开启 | Whether to enable
   */
  legendHoverLink!: (value: boolean) => this;
  /**
   * 连接空数据 | Connect nulls
   * @param value - 是否连接 | Whether to connect
   */
  connectNulls!: (value: boolean) => this;
  /**
   * 裁剪到坐标系 | Clip to coord area
   * @param value - 是否裁剪 | Whether to clip
   */
  clip!: (value: boolean) => this;
  /**
   * 阶梯线设置 | Step line
   * @param value - 布尔或模式 | Boolean or 'start'/'middle'/'end'
   */
  step!: (value: boolean | 'start' | 'middle' | 'end') => this;
  /**
   * 平滑曲线 | Smooth line
   * @param value - 布尔或系数(0~1) | Boolean or factor (0~1)
   */
  smooth!: (value: boolean | number) => this;
  /**
   * 单调约束 | Monotone constraint
   * @param value - 'x' | 'y' | 'none'
   */
  smoothMonotone!: (value: 'x' | 'y' | 'none') => this;
  /**
   * 标记类型 | Symbol type
   * @param value - 如 'circle'/'rect' 等 | e.g. 'circle', 'rect'
   */
  symbol!: (value: string) => this;
  /**
   * 标记大小 | Symbol size
   * @param value - 数值/数组/回调 | Number/array/callback
   */
  symbolSize!: (value: number | number[] | ((...args: any[]) => any)) => this;
  /**
   * 标记旋转角度 | Symbol rotate
   * @param value - 角度（度）| Angle in degrees
   */
  symbolRotate!: (value: number) => this;
  /**
   * 保持图形比例 | Keep aspect
   * @param value - 是否保持 | Whether to keep
   */
  symbolKeepAspect!: (value: boolean) => this;
  /**
   * 标记偏移 | Symbol offset
   * @param value - [x, y] 像素或百分比 | [x, y] pixels or percentage
   */
  symbolOffset!: (value: [number | string, number | string]) => this;
  /**
   * 显示标记 | Show symbol
   * @param value - 是否显示 | Whether to show
   */
  showSymbol!: (value: boolean) => this;
  /**
   * 显示所有标记 | Show all symbols
   * @param value - 布尔或 'auto' | Boolean or 'auto'
   */
  showAllSymbol!: (value: boolean | 'auto') => this;
  /**
   * 采样策略 | Sampling strategy
   * @param value - 策略名称 | Strategy name
   */
  sampling!: (value: string) => this;
  /**
   * 数据维度 | Data dimensions
   * @param value - 维度数组 | Dimension array
   */
  dimensions!: (value: any[]) => this;
  /**
   * 维度编码映射 | Encode mapping
   * @param value - 字段到轴/视觉的映射 | Field to axis/visual mapping
   */
  encode!: (value: Record<string, any>) => this;
  /**
   * 数据行列布局 | Series layout by
   * @param value - 'column' | 'row'
   */
  seriesLayoutBy!: (value: 'column' | 'row') => this;
  /**
   * 数据集索引 | Dataset index
   * @param value - 索引 | Index
   */
  datasetIndex!: (value: number) => this;
  /**
   * 颜色取值方式 | Color by
   * @param value - 'series' | 'data'
   */
  colorBy!: (value: 'series' | 'data') => this;
  /**
   * 渐进渲染阈值 | Progressive threshold
   * @param value - 数据量阈值 | Threshold
   */
  progressiveThreshold!: (value: number) => this;
  /**
   * 渐进渲染步数 | Progressive step
   * @param value - 步数 | Step
   */
  progressive!: (value: number) => this;
  /**
   * 大数据优化 | Large optimization
   * @param value - 是否启用 | Whether to enable
   */
  large!: (value: boolean) => this;
  /**
   * 大数据阈值 | Large threshold
   * @param value - 阈值 | Threshold
   */
  largeThreshold!: (value: number) => this;
  /**
   * 开启动画 | Enable animation
   * @param value - 是否启用 | Whether to enable
   */
  animation!: (value: boolean) => this;
  /**
   * 动画阈值 | Animation threshold
   * @param value - 阈值 | Threshold
   */
  animationThreshold!: (value: number) => this;
  /**
   * 动画时长 | Animation duration
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDuration!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 动画缓动 | Animation easing
   * @param value - 缓动名称 | Easing name
   */
  animationEasing!: (value: string) => this;
  /**
   * 动画延迟 | Animation delay
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDelay!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 更新动画时长 | Update animation duration
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDurationUpdate!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 更新动画缓动 | Update animation easing
   * @param value - 缓动名称 | Easing name
   */
  animationEasingUpdate!: (value: string) => this;
  /**
   * 更新动画延迟 | Update animation delay
   * @param value - 毫秒或回调 | Milliseconds or callback
   */
  animationDelayUpdate!: (value: number | ((...args: any[]) => any)) => this;
  /**
   * 通用动画过渡 | Universal transition
   * @param value - 布尔或配置 | Boolean or config
   */
  universalTransition!: (value: boolean | Record<string, any>) => this;
  /**
   * 画布层级 | Z-level
   * @param value - 层级 | Level
   */
  zlevel!: (value: number) => this;
  /**
   * 组件层叠顺序 | Z-order
   * @param value - 顺序值 | Z-order value
   */
  z!: (value: number) => this;
  /**
   * 禁用交互 | Silent
   * @param value - 是否禁用 | Whether to disable
   */
  silent!: (value: boolean) => this;
  /**
   * 选择模式 | Selected mode
   * @param value - 布尔或模式 | Boolean/'single'/'multiple'
   */
  selectedMode!: (value: boolean | 'single' | 'multiple') => this;
  /**
   * 中心点 | Center
   * @param value - [x, y] 像素或百分比 | [x, y] pixels or percentage
   */
  center!: (value: [string | number, string | number]) => this;
  /**
   * 半径 | Radius
   * @param value - 半径或范围 | Radius or [inner, outer]
   */
  radius!: (value: number | string | [string | number, string | number]) => this;
  /**
   * 玫瑰图类型 | Rose type
   * @param value - 布尔或 'radius'/'area' | Boolean or type
   */
  roseType!: (value: boolean | 'radius' | 'area') => this;
  /**
   * 避免标签重叠 | Avoid label overlap
   * @param value - 是否开启 | Whether to enable
   */
  avoidLabelOverlap!: (value: boolean) => this;
  /**
   * 总和为 0 时仍显示 | Still show when zero sum
   * @param value - 是否显示 | Whether to show
   */
  stillShowZeroSum!: (value: boolean) => this;
  /**
   * 最小扇区角度 | Min angle
   * @param value - 角度（度）| Angle in degrees
   */
  minAngle!: (value: number) => this;
  /**
   * 顺时针绘制 | Clockwise
   * @param value - 是否顺时针 | Whether clockwise
   */
  clockwise!: (value: boolean) => this;
  /**
   * 起始角度 | Start angle
   * @param value - 角度（度）| Angle in degrees
   */
  startAngle!: (value: number) => this;
  /**
   * 结束角度 | End angle
   * @param value - 角度（度）| Angle in degrees
   */
  endAngle!: (value: number) => this;
  /**
   * 分隔段数 | Split number
   * @param value - 段数 | Count
   */
  splitNumber!: (value: number) => this;
  /**
   * 地图名称 | Map name
   * @param value - 地图类型 | Map type/name
   */
  map!: (value: string) => this;
  /**
   * 热力图 - 点大小 | Heatmap point size
   * @param value - 像素大小 | Size in pixels
   */
  pointSize!: (value: number) => this;
  /**
   * 热力图 - 模糊大小 | Heatmap blur size
   * @param value - 像素大小 | Size in pixels
   */
  blurSize!: (value: number) => this;
  /**
   * 热力图 - 最大不透明度 | Max opacity
   * @param value - 0~1 不透明度 | Opacity 0~1
   */
  maxOpacity!: (value: number) => this;
  /**
   * 热力图 - 最小不透明度 | Min opacity
   * @param value - 0~1 不透明度 | Opacity 0~1
   */
  minOpacity!: (value: number) => this;
  /**
   * 涟漪散点 - 触发时机 | EffectScatter trigger
   * @param value - 在渲染或高亮触发 | 'render' or 'emphasis'
   */
  showEffectOn!: (value: 'render' | 'emphasis') => this;
  /**
   * 关系图布局 | Graph layout
   * @param value - 'none' | 'circular' | 'force'
   */
  layout!: (value: 'none' | 'circular' | 'force') => this;
  /**
   * 力引导（graph）| Graph force layout
   * @param value - 力引导配置 | Force config
   */
  force!: (value: GraphSeriesOption['force']) => this;
  /**
   * 关系图/地图 - 漫游 | Roam
   * @param value - 布尔或模式 | Boolean or 'scale'/'move'
   */
  roam!: (value: boolean | 'scale' | 'move') => this;
  /**
   * 关系图 - 节点可拖拽 | Draggable nodes
   * @param value - 是否可拖拽 | Whether draggable
   */
  draggable!: (value: boolean) => this;
  /**
   * 关系图 - 高亮邻接 | Focus node adjacency
   * @param value - 是否高亮邻接 | Whether to focus adjacency
   */
  focusNodeAdjacency!: (value: boolean) => this;
  /**
   * 分类集合（graph）| Graph categories
   * @param value - 分类数组 | Categories array
   */
  categories!: (value: GraphSeriesOption['categories']) => this;
  /**
   * 关系图 - 环形布局参数 | Circular layout
   * @param value - 布局配置 | Layout config
   */
  circular!: (value: GraphSeriesOption['circular']) => this;
  // sankey
  /**
   * 桑基图 - 节点间距 | Node gap
   * @param value - 像素值 | Gap in pixels
   */
  nodeGap!: (value: number) => this;
  /**
   * 桑基图 - 节点对齐 | Node align
   * @param value - 对齐方式 | 'left' | 'right' | 'center'
   */
  nodeAlign!: (value: 'left' | 'right' | 'center') => this;
  /**
   * 方向设置（sankey/tree）
   * @param value - sankey 使用 'horizontal'/'vertical'；tree 使用 'LR'/'RL'/'TB'/'BT'
   */
  orient!: (value: 'horizontal' | 'vertical' | 'LR' | 'RL' | 'TB' | 'BT' | string) => this;
  // funnel
  /**
   * 漏斗图 - 最小值 | Min value
   * @param value - 数值 | Number
   */
  min!: (value: number) => this;
  /**
   * 漏斗图 - 最大值 | Max value
   * @param value - 数值 | Number
   */
  max!: (value: number) => this;
  /**
   * 漏斗图 - 最小尺寸 | Min size
   * @param value - 百分比字符串 | Percentage string
   */
  minSize!: (value: string) => this;
  /**
   * 漏斗图 - 最大尺寸 | Max size
   * @param value - 百分比字符串 | Percentage string
   */
  maxSize!: (value: string) => this;
  /**
   * 漏斗图 - 排序 | Sort order
   * @param value - 排序方式 | 'descending' | 'ascending' | 'none'
   */
  sort!: (value: 'descending' | 'ascending' | 'none') => this;
  /**
   * 漏斗图 - 项间距 | Gap between items
   * @param value - 像素值 | Gap in pixels
   */
  gap!: (value: number) => this;
  // treemap/sunburst
  /**
   * 旭日/矩形树图 - 叶节点深度 | Leaf depth
   * @param value - 深度层级 | Depth level
   */
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
   * 树图 - 叶子节点样式 | Tree leaves style
   * @param config - 叶子节点的标签/样式配置 | Leaves style config
   */
  leaves!: (config: Record<string, any>) => this;
  /**
   * 桑基图 - 节点宽度 | Node width
   * @param value - 像素值 | Width in pixels
   */
  nodeWidth!: (value: number) => this;
  /**
   * 桑基图 - 布局迭代次数 | Layout iterations
   * @param value - 次数 | Iterations
   */
  layoutIterations!: (value: number) => this;
  /**
   * 地图系列 - 名称字段 | Name property
   * @param value - 字段名 | Field name
   */
  nameProperty!: (value: string) => this;
  /**
   * 线图 - 折线模式 | Polyline
   * @param value - 是否启用折线 | Whether polyline
   */
  polyline!: (value: boolean) => this;
  /**
   * 线图 - 特效 | Effect
   * @param value - 特效配置 | Effect config
   */
  effect!: (value: LinesSeriesOption['effect']) => this;
  /**
   * 地图系列 - 名称映射 | Name map
   * @param value - 名称映射表 | Mapping table
   */
  nameMap!: (value: MapSeriesOption['nameMap']) => this;
  /**
   * 地图系列 - 数值计算 | Map value calculation
   * @param value - 计算策略 | Calculation strategy
   */
  mapValueCalculation!: (value: MapSeriesOption['mapValueCalculation']) => this;
  /**
   * 地图系列 - 缩放限制 | Scale limit
   * @param value - 最小/最大缩放 | { min, max }
   */
  scaleLimit!: (value: MapSeriesOption['scaleLimit']) => this;
  /**
   * 地图系列 - 初始缩放 | Initial zoom
   * @param value - 缩放等级 | Zoom level
   */
  zoom!: (value: number) => this;
  /**
   * 地图系列 - 布局中心 | Layout center
   * @param value - 中心坐标 | [x, y]
   */
  layoutCenter!: (value: [string | number, string | number]) => this;
  /**
   * 地图系列 - 布局尺寸 | Layout size
   * @param value - 尺寸或百分比 | Size or percentage
   */
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
  /**
   * 柱状图 - 柱宽 | Bar width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  barWidth!: (value: number | string) => this;
  /**
   * 柱状图 - 最大柱宽 | Max bar width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  barMaxWidth!: (value: number | string) => this;
  /**
   * 柱状图 - 最小柱宽 | Min bar width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  barMinWidth!: (value: number | string) => this;
  /**
   * 柱状图 - 最小柱高 | Min bar height
   * @param value - 像素值 | Height in pixels
   */
  barMinHeight!: (value: number) => this;
  /**
   * 柱状图 - 柱间距 | Bar gap
   * @param value - 百分比字符串 | Percentage string
   */
  barGap!: (value: string) => this;
  /**
   * 柱状图 - 类目间距 | Category gap
   * @param value - 百分比字符串 | Percentage string
   */
  barCategoryGap!: (value: string) => this;
  /**
   * 柱状图 - 显示背景 | Show background
   * @param value - 是否显示 | Whether to show
   */
  showBackground!: (value: boolean) => this;
  /**
   * 背景样式 | Background style for bars
   * @param value - 样式配置 | Style config
   */
  backgroundStyle!: (value: BarSeriesOption['backgroundStyle']) => this;
  /**
   * 柱状图 - 堆叠策略 | Stack strategy
   * @param value - 同符号或全部 | 'samesign' | 'all'
   */
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
  data!: (value: any[]) => this;

  /**
   * 设置标签 | Set label
   * @param config - 标签配置 | Label config
   */
  label!: (config: SeriesLabelUnion) => this;

  /**
   * 设置标注点 | Set markPoint
   * @param config - 标注点配置 | MarkPoint config
   */
  markPoint!: (config: MarkPointOption) => this;

  /**
   * 设置标线 | Set markLine
   * @param config - 标线配置 | MarkLine config
   */
  markLine!: (config: MarkLineOption) => this;

  /**
   * 设置标域 | Set markArea
   * @param config - 标域配置 | MarkArea config
   */
  markArea!: (config: MarkAreaOption) => this;

  /**
   * 设置高亮样式 | Set emphasis state
   * @param config - 高亮状态样式 | Emphasis state style
   */
  emphasis!: (config: Record<string, any>) => this;

  /**
   * 设置选中样式 | Set selected state
   * @param config - 选中状态样式 | Selected state style
   */
  select!: (config: Record<string, any>) => this;

  /**
   * 设置淡出样式 | Set blur state
   * @param config - 淡出状态样式 | Blur state style
   */
  blur!: (config: Record<string, any>) => this;

  /**
   * 设置线条样式 | Set line style
   * @param config - 线条样式配置 | Line style config
   */
  lineStyle!: (config: LineStyleUnion) => this;

  /**
   * 设置区域样式 | Set area style
   * @param config - 区域样式配置 | Area style config
   */
  areaStyle!: (config: AreaStyleUnion) => this;

  /**
   * 设置图形样式 | Set item style
   * @param config - 图形样式配置 | Item style config
   */
  itemStyle!: (config: ItemStyleUnion) => this;

  /**
   * 设置提示框 | Set tooltip
   * @param config - 提示框配置 | Tooltip config
   */
  tooltip!: (config: TooltipOption) => this;

  /**
   * 设置端点标签 | Set endLabel
   * @param config - 端点标签配置 | EndLabel config
   */
  endLabel!: (config: import('./types').LineSeriesOption['endLabel']) => this;

  /**
   * 设置标签布局 | Set labelLayout
   * @param config - 布局配置或回调 | Layout config or callback
   */
  labelLayout!: (config: Record<string, any> | LabelLayoutOptionCallback) => this;

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
