import type {
  TitleOption,
  TooltipOption,
  TimelineOption,
  DatasetOption,
  AriaOption,
  AxisPointerOption,
  BrushOption,
  GraphicComponentLooseOption,
  MarkPointOption,
  MarkLineOption,
  MarkAreaOption,
  LabelLayoutOptionCallback,
  ScrollableLegendOption,
  // series options
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  PictorialBarSeriesOption,
  TreeSeriesOption,
  GraphSeriesOption,
  LinesSeriesOption,
  GaugeSeriesOption,
  SankeySeriesOption,
  MapSeriesOption,
  EffectScatterSeriesOption,
  TreemapSeriesOption,
  SunburstSeriesOption,
  FunnelSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  HeatmapSeriesOption,
  ParallelSeriesOption,
  ScatterSeriesOption,
  ThemeRiverSeriesOption,
  RadarSeriesOption,
  // coordinate/component options
  ParallelCoordinateSystemOption,
  PolarOption,
  CalendarOption,
} from 'echarts/types/dist/shared';
import type {
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  ToolboxComponentOption,
  TimelineComponentOption,
  GeoComponentOption,
  RadarComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
  RadiusAxisComponentOption,
  AngleAxisComponentOption,
  SingleAxisComponentOption,
  SliderDataZoomComponentOption,
  VisualMapComponentOption,
} from 'echarts/types/dist/option';

import type { PiecewiseVisualMapOption, ContinousVisualMapOption } from 'echarts/types/dist/shared';

// 系列通用联合类型 | Common union types for series
export type SeriesLabelUnion =
  | BarSeriesOption['label']
  | LineSeriesOption['label']
  | PieSeriesOption['label']
  | PictorialBarSeriesOption['label']
  | TreeSeriesOption['label']
  | GraphSeriesOption['label']
  | LinesSeriesOption['label']
  | SankeySeriesOption['label']
  | MapSeriesOption['label']
  | BoxplotSeriesOption['label']
  | CandlestickSeriesOption['label']
  | HeatmapSeriesOption['label']
  | RadarSeriesOption['label']
  | ParallelSeriesOption['label']
  | EffectScatterSeriesOption['label']
  | SunburstSeriesOption['label']
  | TreemapSeriesOption['label']
  | ThemeRiverSeriesOption['label'];

export type ItemStyleUnion =
  | BarSeriesOption['itemStyle']
  | LineSeriesOption['itemStyle']
  | PieSeriesOption['itemStyle']
  | PictorialBarSeriesOption['itemStyle']
  | TreeSeriesOption['itemStyle']
  | GraphSeriesOption['itemStyle']
  | GaugeSeriesOption['itemStyle']
  | SankeySeriesOption['itemStyle']
  | MapSeriesOption['itemStyle']
  | BoxplotSeriesOption['itemStyle']
  | CandlestickSeriesOption['itemStyle']
  | HeatmapSeriesOption['itemStyle']
  | RadarSeriesOption['itemStyle']
  | EffectScatterSeriesOption['itemStyle']
  | SunburstSeriesOption['itemStyle']
  | TreemapSeriesOption['itemStyle']
  | ThemeRiverSeriesOption['itemStyle'];

export type LineStyleUnion =
  | LineSeriesOption['lineStyle']
  | LinesSeriesOption['lineStyle']
  | TreeSeriesOption['lineStyle']
  | GraphSeriesOption['lineStyle']
  | RadarSeriesOption['lineStyle']
  | SankeySeriesOption['lineStyle']
  | ParallelSeriesOption['lineStyle'];

export type AreaStyleUnion = LineSeriesOption['areaStyle'] | RadarSeriesOption['areaStyle'];

export type LabelLineUnion = PieSeriesOption['labelLine'] | FunnelSeriesOption['labelLine'];

// 顶层类型导出 | Re-export top-level component types
export type {
  TitleOption,
  TooltipOption,
  TimelineOption,
  DatasetOption,
  AriaOption,
  AxisPointerOption,
  BrushOption,
  GraphicComponentLooseOption,
  MarkPointOption,
  MarkLineOption,
  MarkAreaOption,
  LabelLayoutOptionCallback,
  ScrollableLegendOption,
  ParallelCoordinateSystemOption,
  PolarOption,
  CalendarOption,
};

export type {
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  ToolboxComponentOption,
  TimelineComponentOption,
  GeoComponentOption,
  RadarComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
  RadiusAxisComponentOption,
  AngleAxisComponentOption,
  SingleAxisComponentOption,
  SliderDataZoomComponentOption,
  VisualMapComponentOption,
};

export type { PiecewiseVisualMapOption, ContinousVisualMapOption };

// 系列类型导出 | Re-export series options
export type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  PictorialBarSeriesOption,
  TreeSeriesOption,
  GraphSeriesOption,
  LinesSeriesOption,
  GaugeSeriesOption,
  SankeySeriesOption,
  MapSeriesOption,
  EffectScatterSeriesOption,
  TreemapSeriesOption,
  SunburstSeriesOption,
  FunnelSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  HeatmapSeriesOption,
  ParallelSeriesOption,
  ScatterSeriesOption,
  ThemeRiverSeriesOption,
  RadarSeriesOption,
};
