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
