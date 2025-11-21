import { EChartsChain } from './EChartsChain';
import { ChainedMap } from './ChainedMap';
import { ChainedSet } from './ChainedSet';
import { Orderable } from './Orderable';
import { Title } from './Title';
import { Legend } from './Legend';
import { Grid } from './Grid';
import { Axis, XAxis, YAxis } from './Axis';
import { Series } from './Series';
import { Tooltip } from './Tooltip';
import { Toolbox } from './Toolbox';
import { DataZoom } from './DataZoom';
import { VisualMap } from './VisualMap';

/**
 * 创建 EChartsChain 实例
 */
function createChart(): EChartsChain {
  return new EChartsChain();
}

// 导出
export default createChart;
export {
  createChart,
  EChartsChain,
  ChainedMap,
  ChainedSet,
  Orderable,
  Title,
  Legend,
  Grid,
  Axis,
  XAxis,
  YAxis,
  Series,
  Tooltip,
  Toolbox,
  DataZoom,
  VisualMap,
};
