import createChart from '../src/index';

// 示例 1: 基础折线图
function basicLineChart() {
  const chart = createChart();

  chart
    // 配置标题
    .title(title => {
      title.text('基础折线图示例').subtext('使用 echarts-chain 生成').left('center');
    })
    // 配置提示框
    .tooltip(tooltip => {
      tooltip.trigger('axis').axisPointer({ type: 'cross' });
    })
    // 配置图例
    .legend(legend => {
      legend.data(['销量', '成本']).top('bottom');
    })
    // 配置网格
    .grid('main')
    .left('10%')
    .right('10%')
    .bottom('15%')
    .containLabel(true)
    .quit()
    // 配置 X 轴
    .xAxis('category')
    .type('category')
    .boundaryGap(false)
    .data(['周一', '周二', '周三', '周四', '周五', '周六', '周日'])
    .quit()
    // 配置 Y 轴
    .yAxis('value')
    .type('value')
    .quit()
    // 配置系列1
    .series('sales')
    .name('销量')
    .type('line')
    .data([120, 132, 101, 134, 90, 230, 210])
    .smooth(true)
    .quit()
    // 配置系列2
    .series('cost')
    .name('成本')
    .type('line')
    .data([80, 90, 70, 100, 60, 150, 140])
    .smooth(true)
    .quit();

  return chart.toConfig();
}

// 示例 2: 柱状图
function basicBarChart() {
  const chart = createChart();

  chart
    .title(title => {
      title.text('月度销售数据').left('center');
    })
    .tooltip({ trigger: 'axis' })
    // 全局文本样式
    .textStyle({ fontSize: 12 })
    .xAxis('month')
    .type('category')
    .data(['1月', '2月', '3月', '4月', '5月', '6月'])
    .quit()
    .yAxis('value')
    .type('value')
    .quit()
    .series('bar')
    .name('销售额')
    .type('bar')
    .data([2500, 3200, 2800, 3500, 4200, 3900])
    .showBackground(true)
    .backgroundStyle({ color: 'rgba(84,112,198,0.1)' })
    .barMaxWidth(40)
    .itemStyle({
      color: '#5470c6',
      borderRadius: [5, 5, 0, 0],
    })
    .quit();

  return chart.toConfig();
}

// 示例 3: 使用条件配置
function conditionalChart() {
  const chart = createChart();
  const showLegend = true;
  const dataType = 'line'; // 'line' or 'bar'

  chart
    .title(title => {
      title.text('条件配置示例').left('center');
    })
    .when(showLegend, chart =>
      chart.legend(legend => {
        legend.data(['数据1', '数据2']).top('bottom');
      })
    )
    .xAxis('x')
    .type('category')
    .data(['A', 'B', 'C', 'D', 'E'])
    .quit()
    .yAxis('y')
    .type('value')
    .quit()
    .series('data1')
    .name('数据1')
    .type(dataType)
    .data([10, 20, 30, 40, 50])
    .when(dataType === 'line', series => {
      series.smooth(true);
    })
    .quit()
    .series('data2')
    .name('数据2')
    .type(dataType)
    .data([15, 25, 35, 45, 55])
    .quit();

  return chart.toConfig();
}

// 示例 4: 批量配置
function batchConfiguration() {
  const chart = createChart();

  chart.options({
    title: {
      text: '批量配置示例',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Data',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
      },
    ],
  });

  return chart.toConfig();
}

// 示例 5: 复杂配置 - 多系列、多坐标轴
function complexChart() {
  const chart = createChart();

  chart
    .title(title => {
      title.text('复杂图表示例').subtext('多坐标轴、多系列').left('center');
    })
    .tooltip(tooltip => {
      tooltip.trigger('axis').axisPointer({ type: 'cross' });
    })
    // 顶层 axisPointer（跨轴联动示例）
    .axisPointer({ link: [{ xAxisIndex: 'all' }] })
    .legend(legend => {
      legend.data(['蒸发量', '降水量', '平均温度']).top('bottom');
    })
    .grid('main')
    .left('10%')
    .right('10%')
    .bottom('15%')
    .top('15%')
    .containLabel(true)
    .quit()
    // 第一个 X 轴
    .xAxis('months')
    .type('category')
    .data(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'])
    .axisPointer({ type: 'shadow' })
    .minorTick({ show: true })
    .minorSplitLine({ show: true })
    .quit()
    // 第一个 Y 轴
    .yAxis('rainfall')
    .type('value')
    .name('水量')
    .position('left')
    .axisLabel({ formatter: '{value} ml' })
    .quit()
    // 第二个 Y 轴
    .yAxis('temperature')
    .type('value')
    .name('温度')
    .position('right')
    .axisLabel({ formatter: '{value} °C' })
    .quit()
    // 系列1: 柱状图
    .series('evaporation')
    .name('蒸发量')
    .type('bar')
    .yAxisIndex(0)
    .data([2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3])
    .quit()
    // 系列2: 柱状图
    .series('precipitation')
    .name('降水量')
    .type('bar')
    .yAxisIndex(0)
    .data([2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3])
    .quit()
    // 系列3: 折线图
    .series('temperature')
    .name('平均温度')
    .type('line')
    .yAxisIndex(1)
    .data([2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2])
    .smooth(true)
    .quit()
    // 添加区域缩放
    .dataZoom('slider')
    .type('slider')
    .start(0)
    .end(100)
    .quit()
    .dataZoom('inside')
    .type('inside')
    .start(0)
    .end(100)
    .quit();

  return chart.toConfig();
}

// 运行示例
console.log('=== 示例 1: 基础折线图 ===');
console.log(JSON.stringify(basicLineChart(), null, 2));

console.log('\n=== 示例 2: 柱状图 ===');
console.log(JSON.stringify(basicBarChart(), null, 2));

console.log('\n=== 示例 3: 条件配置 ===');
console.log(JSON.stringify(conditionalChart(), null, 2));

console.log('\n=== 示例 4: 批量配置 ===');
console.log(JSON.stringify(batchConfiguration(), null, 2));

console.log('\n=== 示例 5: 复杂图表 ===');
console.log(JSON.stringify(complexChart(), null, 2));

// 示例 6: 日历坐标 + 热力图
function calendarChart() {
  const chart = createChart();

  chart
    .title(t => t.text('日历热力图').left('center'))
    .calendar('cal')
    .range(['2023-01-01', '2023-12-31'])
    .cellSize([15, 15])
    .left('center')
    .quit()
    .series('heat')
    .type('heatmap')
    .coordinateSystem('calendar')
    .data([
      ['2023-01-01', 10],
      ['2023-02-01', 20],
      ['2023-03-01', 35],
    ])
    .quit();

  return chart.toConfig();
}

// 示例 7: 平行坐标
function parallelChart() {
  const chart = createChart();

  chart
    .title(t => t.text('平行坐标示例').left('center'))
    .parallel('p1')
    .left(80)
    .right(80)
    .quit()
    .parallelAxis('pa0')
    .dim(0)
    .quit()
    .series('parallel')
    .type('parallel')
    .data([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 6: 日历坐标 ===');
console.log(JSON.stringify(calendarChart(), null, 2));

console.log('\n=== 示例 7: 平行坐标 ===');
console.log(JSON.stringify(parallelChart(), null, 2));

// 示例 8: 单轴 + 主题河流
function singleAxisChart() {
  const chart = createChart();

  chart
    .title(t => t.text('单轴主题河流').left('center'))
    .singleAxis('sa')
    .type('time')
    .top(50)
    .bottom(50)
    .axisLabel({ interval: 0 })
    .quit()
    .series('river')
    .type('themeRiver')
    .data([
      ['2015-03-01', 10, 'a'],
      ['2015-03-02', 15, 'a'],
      ['2015-03-03', 12, 'a'],
      ['2015-03-01', 5, 'b'],
      ['2015-03-02', 8, 'b'],
      ['2015-03-03', 6, 'b'],
    ])
    .quit();

  return chart.toConfig();
}

// 示例 9: 时间轴
function timelineChart() {
  const chart = createChart();

  chart
    .timeline(t => t.axisType('category').autoPlay(true).playInterval(1000).data(['一月', '二月']))
    .options({
      options: [
        {
          title: { text: '一月' },
          series: [{ name: '月数据', type: 'bar', data: [5, 20, 36, 10, 10, 20] }],
        },
        {
          title: { text: '二月' },
          series: [{ name: '月数据', type: 'bar', data: [15, 6, 45, 20, 15, 8] }],
        },
      ],
    });

  return chart.toConfig();
}

console.log('\n=== 示例 8: 单轴 ===');
console.log(JSON.stringify(singleAxisChart(), null, 2));

console.log('\n=== 示例 9: 时间轴 ===');
console.log(JSON.stringify(timelineChart(), null, 2));

// 示例 10: 饼图（测试新增系列属性）
function pieChart() {
  const chart = createChart();

  chart
    .title(t => t.text('饼图示例').left('center'))
    .series('pie')
    .type('pie')
    .selectedMode('single')
    .center(['50%', '55%'])
    .radius(['40%', '70%'])
    .roseType('radius')
    .avoidLabelOverlap(true)
    .minAngle(5)
    .clockwise(true)
    .startAngle(90)
    .label({ formatter: '{b}: {d}%' })
    .data([
      { value: 1048, name: 'A' },
      { value: 735, name: 'B' },
      { value: 580, name: 'C' },
      { value: 484, name: 'D' },
      { value: 300, name: 'E' },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 10: 饼图 ===');
console.log(JSON.stringify(pieChart(), null, 2));

// 示例 11: 关系图（graph）
function graphChart() {
  const chart = createChart();

  chart
    .title(t => t.text('关系图示例').left('center'))
    .series('graph')
    .type('graph')
    .layout('force')
    .force({ repulsion: 100 })
    .roam(true)
    .data([{ name: '节点A' }, { name: '节点B' }, { name: '节点C' }])
    .links([
      { source: '节点A', target: '节点B' },
      { source: '节点B', target: '节点C' },
    ])
    .quit();

  return chart.toConfig();
}

// 示例 12: 桑基图（sankey）
function sankeyChart() {
  const chart = createChart();

  chart
    .title(t => t.text('桑基图示例').left('center'))
    .series('sankey')
    .type('sankey')
    .orient('horizontal')
    .nodeGap(12)
    .nodeWidth(20)
    .layoutIterations(32)
    .lineStyle({ color: 'source', curveness: 0.5 })
    .emphasis({ focus: 'adjacency' })
    .data([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    .links([
      { source: 'a', target: 'b', value: 5 },
      { source: 'b', target: 'c', value: 3 },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 11: 关系图 ===');
console.log(JSON.stringify(graphChart(), null, 2));

console.log('\n=== 示例 12: 桑基图 ===');
console.log(JSON.stringify(sankeyChart(), null, 2));

// 示例 13: 仪表盘（gauge）
function gaugeChart() {
  const chart = createChart();

  chart
    .title(t => t.text('仪表盘示例').left('center'))
    .series('gauge')
    .type('gauge')
    .min(0)
    .max(100)
    .startAngle(225)
    .endAngle(-45)
    .splitNumber(10)
    .axisLine({ lineStyle: { width: 10 } })
    .progress({ show: true, roundCap: true })
    .pointer({ show: true, length: '60%', width: 4 })
    .anchor({ show: true, size: 8, showAbove: true })
    .detail({ valueAnimation: true, formatter: '{value}%' })
    .data([{ value: 68 }])
    .quit();

  return chart.toConfig();
}

// 示例 14: 树图（treemap）
function treemapChart() {
  const chart = createChart();

  chart
    .title(t => t.text('树图示例').left('center'))
    .series('treemap')
    .type('treemap')
    .leafDepth(1)
    .upperLabel({ show: true })
    .levels([
      { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
      { itemStyle: { borderColor: '#ccc' } },
    ])
    .breadcrumb({ show: true })
    .data([
      {
        name: 'A',
        value: 10,
        children: [
          { name: 'A1', value: 4 },
          { name: 'A2', value: 6 },
        ],
      },
      {
        name: 'B',
        value: 8,
        children: [
          { name: 'B1', value: 3 },
          { name: 'B2', value: 5 },
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 13: 仪表盘 ===');
console.log(JSON.stringify(gaugeChart(), null, 2));

console.log('\n=== 示例 14: 树图 ===');
console.log(JSON.stringify(treemapChart(), null, 2));

// 示例 15: 地图（map 系列）
function mapSeriesChart() {
  const chart = createChart();

  chart
    .title(t => t.text('地图系列示例').left('center'))
    .series('map')
    .type('map')
    .map('china')
    .roam(true)
    .zoom(1.2)
    .nameMap({ Beijing: '北京' })
    .data([
      { name: '北京', value: 100 },
      { name: '上海', value: 80 },
    ])
    .quit();

  return chart.toConfig();
}

// 示例 16: 路径（lines 系列）
function linesChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Lines 示例').left('center'))
    .series('lines')
    .type('lines')
    .coordinateSystem('geo')
    .polyline(false)
    .effect({ show: true, period: 4, trailLength: 0.2, symbolSize: 6 })
    .data([
      {
        coords: [
          [116.405285, 39.904989],
          [121.472644, 31.231706],
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 15: 地图系列 ===');
console.log(JSON.stringify(mapSeriesChart(), null, 2));

console.log('\n=== 示例 16: Lines 系列 ===');
console.log(JSON.stringify(linesChart(), null, 2));

// 示例 17: 关系图圆形布局
function graphCircularChart() {
  const chart = createChart();

  chart
    .title(t => t.text('关系图（圆形布局）').left('center'))
    .series('graph-c')
    .type('graph')
    .layout('circular')
    .circular({ rotateLabel: true })
    .data([{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }])
    .links([
      { source: 'A', target: 'B' },
      { source: 'B', target: 'C' },
      { source: 'C', target: 'D' },
      { source: 'D', target: 'A' },
    ])
    .quit();

  return chart.toConfig();
}

// 示例 18: 涟漪散点（effectScatter）
function effectScatterChart() {
  const chart = createChart();

  chart
    .title(t => t.text('涟漪散点示例').left('center'))
    .geo('china')
    .map('china')
    .roam(true)
    .quit()
    .series('eff')
    .type('effectScatter')
    .coordinateSystem('geo')
    .showEffectOn('render')
    .rippleEffect({ brushType: 'stroke', scale: 2.5 })
    .symbolSize(12)
    .data([
      { name: '北京', value: [116.405285, 39.904989, 100] },
      { name: '上海', value: [121.472644, 31.231706, 80] },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 17: 关系图（圆形布局） ===');
console.log(JSON.stringify(graphCircularChart(), null, 2));

console.log('\n=== 示例 18: 涟漪散点 ===');
console.log(JSON.stringify(effectScatterChart(), null, 2));

// 示例 19: 关系图（强调样式）
function graphEmphasisChart() {
  const chart = createChart();

  chart
    .title(t => t.text('关系图（强调样式）').left('center'))
    .series('graph-e')
    .type('graph')
    .layout('force')
    .force({ repulsion: 120 })
    .focusNodeAdjacency(true)
    .emphasis({ lineStyle: { width: 5 }, label: { show: true } })
    .data([{ name: 'A' }, { name: 'B' }, { name: 'C' }])
    .links([
      { source: 'A', target: 'B' },
      { source: 'B', target: 'C' },
    ])
    .quit();

  return chart.toConfig();
}

// 示例 20: 地图（强调与选中样式）
function mapEmphasisChart() {
  const chart = createChart();

  chart
    .title(t => t.text('地图（强调与选中）').left('center'))
    .series('map-e')
    .type('map')
    .map('china')
    .emphasis({ label: { show: true }, itemStyle: { areaColor: '#f0f0f0' } })
    .select({ label: { show: true }, itemStyle: { areaColor: '#ffd' } })
    .data([
      { name: '北京', value: 100, selected: true },
      { name: '上海', value: 80 },
    ])
    .quit();

  return chart.toConfig();
}

// 示例 21: Lines（大数据性能配置）
function linesLargeChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Lines（性能）').left('center'))
    .series('lines-large')
    .type('lines')
    .coordinateSystem('geo')
    .large(true)
    .largeThreshold(2000)
    .data([
      {
        coords: [
          [114.305392, 30.592853],
          [113.264385, 23.129112],
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

// 示例 22: 热力图（Geo 热力透明度）
function heatmapGeoChart() {
  const chart = createChart();

  chart
    .title(t => t.text('热力图（Geo）').left('center'))
    .geo('china')
    .map('china')
    .roam(true)
    .quit()
    .series('heatmap')
    .type('heatmap')
    .coordinateSystem('geo')
    .pointSize(8)
    .blurSize(12)
    .maxOpacity(0.8)
    .minOpacity(0.2)
    .data([
      [116.405285, 39.904989, 100],
      [121.472644, 31.231706, 80],
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 19: 关系图（强调样式） ===');
console.log(JSON.stringify(graphEmphasisChart(), null, 2));

console.log('\n=== 示例 20: 地图（强调与选中） ===');
console.log(JSON.stringify(mapEmphasisChart(), null, 2));

console.log('\n=== 示例 21: Lines（性能） ===');
console.log(JSON.stringify(linesLargeChart(), null, 2));

console.log('\n=== 示例 22: 热力图（Geo） ===');
console.log(JSON.stringify(heatmapGeoChart(), null, 2));

/**
 * Graph 分类样式示例
 */
function graphCategoriesChart() {
  const chart = createChart();

  chart
    .title(t => t.text('关系图（分类样式）').left('center'))
    .series('graph-cat')
    .type('graph')
    .layout('force')
    .categories([
      { name: '组1', itemStyle: { color: '#5470c6' } },
      { name: '组2', itemStyle: { color: '#91cc75' } },
    ])
    .data([
      { name: 'A', category: 0 },
      { name: 'B', category: 0 },
      { name: 'C', category: 1 },
      { name: 'D', category: 1 },
    ])
    .links([
      { source: 'A', target: 'C' },
      { source: 'B', target: 'D' },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * Map 布局示例：系列级 vs 坐标系级
 */
function mapLayoutCenterChart() {
  const chart = createChart();

  chart
    .title(t => t.text('地图布局（系列级与坐标系级）').left('center'))
    .geo('china')
    .map('china')
    .layoutCenter(['50%', '55%'])
    .layoutSize('70%')
    .quit()
    .series('map-layout')
    .type('map')
    .map('china')
    .layoutCenter(['50%', '60%'])
    .layoutSize('65%')
    .data([
      { name: '北京', value: 110 },
      { name: '上海', value: 90 },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * Lines 折线多段与恒定速度示例
 */
function linesPolylineSpeedChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Lines（多段与恒速）').left('center'))
    .series('lines-poly')
    .type('lines')
    .coordinateSystem('geo')
    .polyline(true)
    .effect({ show: true, constantSpeed: 30, trailLength: 0.3, symbolSize: 6 })
    .data([
      {
        coords: [
          [116.405285, 39.904989],
          [117.2, 36.65],
          [121.472644, 31.231706],
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 23: 关系图（分类样式） ===');
console.log(JSON.stringify(graphCategoriesChart(), null, 2));

console.log('\n=== 示例 24: 地图布局（系列级与坐标系级） ===');
console.log(JSON.stringify(mapLayoutCenterChart(), null, 2));

console.log('\n=== 示例 25: Lines（多段与恒速） ===');
console.log(JSON.stringify(linesPolylineSpeedChart(), null, 2));

/**
 * 关系图：状态样式（select/blur）
 */
function graphStatesChart() {
  const chart = createChart();

  chart
    .title(t => t.text('关系图（select/blur）').left('center'))
    .series('graph-states')
    .type('graph')
    .layout('force')
    .force({ repulsion: 80 })
    .select({ label: { show: true }, lineStyle: { width: 3 } })
    .blur({ lineStyle: { opacity: 0.2 }, label: { show: false } })
    .data([{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }])
    .links([
      { source: 'A', target: 'B' },
      { source: 'B', target: 'C' },
      { source: 'C', target: 'D' },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * 地图：视觉映射（visualMap）
 */
function mapVisualChart() {
  const chart = createChart();

  chart
    .title(t => t.text('地图（视觉映射）').left('center'))
    .visualMap('cont')
    .type('continuous')
    .min(0)
    .max(200)
    .inRange({ color: ['#e0ffff', '#006edd'] })
    .quit()
    .series('map-vm')
    .type('map')
    .map('china')
    .data([
      { name: '北京', value: 120 },
      { name: '上海', value: 80 },
      { name: '广州', value: 60 },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * Lines：特效 period/symbol 演示
 */
function linesEffectVariantsChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Lines（period/symbol）').left('center'))
    .series('lines-eff')
    .type('lines')
    .coordinateSystem('geo')
    .polyline(false)
    .effect({ show: true, period: 6, symbol: 'arrow', symbolSize: 8, trailLength: 0.1 })
    .data([
      {
        coords: [
          [116.405285, 39.904989],
          [121.472644, 31.231706],
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 26: 关系图（select/blur） ===');
console.log(JSON.stringify(graphStatesChart(), null, 2));

console.log('\n=== 示例 27: 地图（视觉映射） ===');
console.log(JSON.stringify(mapVisualChart(), null, 2));

console.log('\n=== 示例 28: Lines（period/symbol） ===');
console.log(JSON.stringify(linesEffectVariantsChart(), null, 2));

/**
 * Toolbox + Brush 示例：矩形/多边形刷选
 */
function toolboxBrushChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Toolbox + Brush').left('center'))
    .toolbox(tb =>
      tb.show(true).feature({
        brush: { type: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'] },
        restore: {},
        dataZoom: {},
      })
    )
    .brush({
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 'all',
      throttleType: 'debounce',
      throttleDelay: 300,
    })
    .xAxis('x')
    .type('category')
    .data(['A', 'B', 'C', 'D', 'E'])
    .quit()
    .yAxis('y')
    .type('value')
    .quit()
    .series('scatter')
    .type('scatter')
    .data([
      [0, 10],
      [1, 20],
      [2, 15],
      [3, 30],
      [4, 25],
    ])
    .quit();

  return chart.toConfig();
}

/**
 * Graphic 示例：中心文字水印
 */
function graphicChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Graphic').left('center'))
    .graphic([
      {
        type: 'text',
        left: 'center',
        top: 'middle',
        style: { text: 'echarts-chain', fontSize: 26, fontWeight: 'bold', fill: '#999' },
      },
    ])
    .series('bar')
    .type('bar')
    .data([5, 20, 36, 10, 10, 20])
    .quit();

  return chart.toConfig();
}

/**
 * Dataset 示例：encode 映射
 */
function datasetChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Dataset + Encode').left('center'))
    .dataset({
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
      ],
    })
    .series('bar-2015')
    .type('bar')
    .seriesLayoutBy('row')
    .encode({ x: 'product', y: '2015' })
    .quit()
    .series('bar-2016')
    .type('bar')
    .seriesLayoutBy('row')
    .encode({ x: 'product', y: '2016' })
    .quit();

  return chart.toConfig();
}

/**
 * Aria 示例：可访问性文本
 */
function ariaChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Aria 示例').left('center'))
    .aria({
      enabled: true,
      decal: { show: true },
      description: '这是一幅用于展示无障碍文本的示例图',
    })
    .series('line')
    .type('line')
    .data([150, 230, 224, 218, 135, 147, 260])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 29: Toolbox + Brush ===');
console.log(JSON.stringify(toolboxBrushChart(), null, 2));

console.log('\n=== 示例 30: Graphic ===');
console.log(JSON.stringify(graphicChart(), null, 2));

console.log('\n=== 示例 31: Dataset + Encode ===');
console.log(JSON.stringify(datasetChart(), null, 2));

console.log('\n=== 示例 32: Aria ===');
console.log(JSON.stringify(ariaChart(), null, 2));

/**
 * 关系图：分层状态样式（节点/边）
 */
function graphLayeredStatesChart() {
  const chart = createChart();

  chart
    .title(t => t.text('关系图（分层状态样式）').left('center'))
    .series('graph-layered')
    .type('graph')
    .layout('force')
    .force({ repulsion: 100 })
    .emphasis({ label: { show: true }, edgeLabel: { show: true }, lineStyle: { width: 4 } })
    .select({ label: { show: true }, edgeLabel: { show: true }, lineStyle: { width: 3 } })
    .blur({ label: { show: false }, edgeLabel: { show: false }, lineStyle: { opacity: 0.2 } })
    .data([{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }])
    .links([
      { source: 'A', target: 'B' },
      { source: 'B', target: 'C' },
      { source: 'C', target: 'D' },
      { source: 'D', target: 'A' },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * 地图：缩放限制 + zoom 联动
 */
function mapScaleZoomChart() {
  const chart = createChart();

  chart
    .title(t => t.text('地图（缩放限制 + zoom）').left('center'))
    .geo('china')
    .map('china')
    .scaleLimit({ min: 0.8, max: 2 })
    .zoom(1.1)
    .quit()
    .series('map-sz')
    .type('map')
    .map('china')
    .scaleLimit({ min: 0.9, max: 1.8 })
    .zoom(1.2)
    .data([
      { name: '北京', value: 100 },
      { name: '上海', value: 90 },
      { name: '广州', value: 80 },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * Lines：period 与 constantSpeed 对比（双系列）
 */
function linesEffectCompareChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Lines（period vs constantSpeed）').left('center'))
    .series('lines-period')
    .type('lines')
    .coordinateSystem('geo')
    .effect({ show: true, period: 5, symbol: 'arrow', symbolSize: 8, trailLength: 0.2 })
    .data([
      {
        coords: [
          [116.4, 39.9],
          [121.47, 31.23],
        ],
      },
    ])
    .quit()
    .series('lines-speed')
    .type('lines')
    .coordinateSystem('geo')
    .effect({ show: true, constantSpeed: 40, symbol: 'arrow', symbolSize: 8, trailLength: 0.2 })
    .data([
      {
        coords: [
          [114.3, 30.59],
          [113.26, 23.12],
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * Dataset：transform 过滤示例
 */
function datasetTransformChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Dataset Transform（过滤）').left('center'))
    .dataset([
      {
        id: 'raw',
        source: [
          ['product', '2015', '2016', '2017'],
          ['A', 43.3, 85.8, 93.7],
          ['B', 83.1, 73.4, 55.1],
          ['C', 86.4, 65.2, 82.5],
          ['D', 72.4, 53.9, 39.1],
        ],
      },
      {
        id: 'filtered',
        transform: {
          type: 'filter',
          config: { dimension: '2016', '>=': 70 },
        },
        fromDatasetId: 'raw',
      },
    ])
    .series('bar-filtered')
    .type('bar')
    .datasetIndex(1)
    .seriesLayoutBy('row')
    .encode({ x: 'product', y: '2016' })
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 33: 关系图（分层状态） ===');
console.log(JSON.stringify(graphLayeredStatesChart(), null, 2));

console.log('\n=== 示例 34: 地图（缩放限制 + zoom） ===');
console.log(JSON.stringify(mapScaleZoomChart(), null, 2));

console.log('\n=== 示例 35: Lines（period vs constantSpeed） ===');
console.log(JSON.stringify(linesEffectCompareChart(), null, 2));

console.log('\n=== 示例 36: Dataset Transform（过滤） ===');
console.log(JSON.stringify(datasetTransformChart(), null, 2));

/**
 * Tree：基础树图（边形状/折叠/初始层级）
 */
function treeBasicChart() {
  const chart = createChart();

  chart
    .title(t => t.text('Tree（基础）').left('center'))
    .series('tree-basic')
    .type('tree')
    // 使用新增的树图专有属性
    .edgeShape('polyline')
    .expandAndCollapse(true)
    .initialTreeDepth(2)
    .orient('LR')
    .leaves({ label: { position: 'right' }, itemStyle: { color: '#5470c6' } })
    .label({ position: 'left', verticalAlign: 'middle', align: 'right' })
    .lineStyle({ color: '#aaa' })
    .data([
      {
        name: '根',
        children: [
          { name: '子 1', children: [{ name: '子 1-1' }, { name: '子 1-2' }] },
          { name: '子 2', children: [{ name: '子 2-1' }, { name: '子 2-2' }] },
        ],
      },
    ])
    .quit();

  return chart.toConfig();
}

/**
 * PictorialBar：基础象形柱图（符号位置/边界数据）
 */
function pictorialBarBasicChart() {
  const chart = createChart();

  chart
    .title(t => t.text('PictorialBar（基础）').left('center'))
    .xAxis('x')
    .type('category')
    .data(['A', 'B', 'C', 'D'])
    .quit()
    .yAxis('y')
    .type('value')
    .quit()
    .series('pb-basic')
    .type('pictorialBar')
    .symbol('roundRect')
    .symbolPosition('end')
    .symbolBoundingData(100)
    .symbolRepeat(true)
    .symbolRepeatDirection('end')
    .symbolClip(true)
    .symbolPatternSize(12)
    .itemStyle({ color: '#91cc75' })
    .data([30, 80, 60, 40])
    .quit();

  return chart.toConfig();
}

console.log('\n=== 示例 37: Tree（基础） ===');
console.log(JSON.stringify(treeBasicChart(), null, 2));

console.log('\n=== 示例 38: PictorialBar（基础） ===');
console.log(JSON.stringify(pictorialBarBasicChart(), null, 2));
