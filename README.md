# echarts-chain

[![npm version](https://img.shields.io/npm/v/echarts-chain.svg)](https://www.npmjs.com/package/echarts-chain)

一个受 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 启发的 ECharts 配置链式生成工具。通过链式 API 提供更优雅、更灵活的方式来构建 ECharts 配置。

## ✨ 特性

- 🔗 **链式 API**: 流畅的链式调用，代码更优雅
- 🎯 **类型安全**: 提供 TypeScript 类型定义
- 📦 **模块化**: 清晰的模块划分，易于扩展
- 🔄 **可复用**: 配置可以轻松复用和组合
- 🎨 **灵活配置**: 支持条件配置、批量配置等多种方式
- 🚀 **零依赖**: 核心库无任何依赖

## 📦 安装

使用任意包管理器安装：

```bash
pnpm add echarts echarts-chain
# 或者
npm i echarts echarts-chain
yarn add echarts echarts-chain
```

## 🚀 快速开始

支持三种使用方式：ESM、CommonJS、UMD。

- ESM（现代打包器）：

  ```ts
  import createChart, { EChartsChain } from 'echarts-chain';
  // 结合 ECharts
  import * as echarts from 'echarts';

  /**
   * 创建并渲染基础折线图
   */
  function renderBasicLine(dom: HTMLElement) {
    const chart = echarts.init(dom);

    const options = createChart()
      .title(t => t.text('基础折线图').left('center'))
      .xAxis('x')
      .type('category')
      .data(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
      .quit()
      .yAxis('y')
      .type('value')
      .quit()
      .series('sales')
      .name('销量')
      .type('line')
      .data([120, 200, 150, 80, 70])
      .quit()
      .toConfig();

    chart.setOption(options);
  }
  ```

- CommonJS（Node 或旧环境）：

  ```js
  const createChart = require('echarts-chain').default;
  const echarts = require('echarts');

  /**
   * 创建并渲染柱状图
   */
  function renderBar(dom) {
    const chart = echarts.init(dom);
    const options = createChart()
      .title(t => t.text('月度销售数据').left('center'))
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
      .quit()
      .toConfig();
    chart.setOption(options);
  }
  ```

- UMD（浏览器直接引入）：
  ```html
  <script src="https://unpkg.com/echarts/dist/echarts.min.js"></script>
  <script src="https://unpkg.com/echarts-chain/dist/index.min.js"></script>
  <script>
    /**
     * 创建并渲染折线图（UMD）
     */
    function renderLine(dom) {
      var chart = echarts.init(dom);
      var options = EChartsChain.createChart()
        .title(function (t) {
          t.text('UMD 示例').left('center');
        })
        .xAxis('x')
        .type('category')
        .data(['A', 'B', 'C', 'D'])
        .quit()
        .yAxis('y')
        .type('value')
        .quit()
        .series('s1')
        .name('数据')
        .type('line')
        .data([10, 20, 30, 40])
        .quit()
        .toConfig();
      chart.setOption(options);
    }
  </script>
  ```

## 🧩 使用示例

以下示例均来自库的链式 API，便于直接复制使用。

```ts
import createChart from 'echarts-chain';

/**
 * 示例 1：基础折线图
 */
function basicLineChart() {
  const chart = createChart();
  chart
    .title(title => {
      title.text('基础折线图示例').subtext('使用 echarts-chain 生成').left('center');
    })
    .tooltip(tooltip => {
      tooltip.trigger('axis').axisPointer({ type: 'cross' });
    })
    .legend(legend => {
      legend.data(['销量', '成本']).top('bottom');
    })
    .grid('main')
    .left('10%')
    .right('10%')
    .bottom('15%')
    .containLabel(true)
    .quit()
    .xAxis('category')
    .type('category')
    .boundaryGap(false)
    .data(['周一', '周二', '周三', '周四', '周五', '周六', '周日'])
    .quit()
    .yAxis('value')
    .type('value')
    .quit()
    .series('sales')
    .name('销量')
    .type('line')
    .data([120, 132, 101, 134, 90, 230, 210])
    .smooth(true)
    .quit()
    .series('cost')
    .name('成本')
    .type('line')
    .data([80, 90, 70, 100, 60, 150, 140])
    .smooth(true)
    .quit();
  return chart.toConfig();
}

/**
 * 示例 2：柱状图
 */
function basicBarChart() {
  const chart = createChart();
  chart
    .title(t => t.text('月度销售数据').left('center'))
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
    .itemStyle({ color: '#5470c6', borderRadius: [5, 5, 0, 0] })
    .quit();
  return chart.toConfig();
}

/**
 * 示例 3：条件配置 when
 */
function conditionalChart() {
  const chart = createChart();
  const showLegend = true;
  const dataType: 'line' | 'bar' = 'line';
  chart
    .title(t => t.text('条件配置示例').left('center'))
    .when(showLegend, c => c.legend(l => l.data(['数据1', '数据2']).top('bottom')))
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
    .when(dataType === 'line', s => s.smooth(true))
    .quit()
    .series('data2')
    .name('数据2')
    .type(dataType)
    .data([15, 25, 35, 45, 55])
    .quit();
  return chart.toConfig();
}

/**
 * 示例 4：批量配置 options
 */
function batchConfiguration() {
  const chart = createChart();
  chart.options({
    title: { text: '批量配置示例', left: 'center' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ name: 'Data', type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }],
  });
  return chart.toConfig();
}

/**
 * 示例 5：复杂图表（多轴/多系列/区域缩放）
 */
function complexChart() {
  const chart = createChart();
  chart
    .title(t => t.text('复杂图表示例').subtext('多坐标轴、多系列').left('center'))
    .tooltip(tp => tp.trigger('axis').axisPointer({ type: 'cross' }))
    .legend(l => l.data(['蒸发量', '降水量', '平均温度']).top('bottom'))
    .grid('main')
    .left('10%')
    .right('10%')
    .bottom('15%')
    .top('15%')
    .containLabel(true)
    .quit()
    .xAxis('months')
    .type('category')
    .data(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'])
    .axisPointer({ type: 'shadow' })
    .quit()
    .yAxis('rainfall')
    .type('value')
    .name('水量')
    .position('left')
    .axisLabel({ formatter: '{value} ml' })
    .quit()
    .yAxis('temperature')
    .type('value')
    .name('温度')
    .position('right')
    .axisLabel({ formatter: '{value} °C' })
    .quit()
    .series('evaporation')
    .name('蒸发量')
    .type('bar')
    .yAxisIndex(0)
    .data([2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3])
    .quit()
    .series('precipitation')
    .name('降水量')
    .type('bar')
    .yAxisIndex(0)
    .data([2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3])
    .quit()
    .series('temperature')
    .name('平均温度')
    .type('line')
    .yAxisIndex(1)
    .data([2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2])
    .smooth(true)
    .quit()
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
```

## 🧠 API 速览

- `createChart()`：创建链式对象，最终通过 `.toConfig()` 输出 ECharts 配置
- 顶层配置：`title(fn|obj)`, `legend(fn|obj)`, `tooltip(fn|obj)`, `toolbox(fn|obj)`, `dataset(obj)`, `aria(obj)`
- 结构化配置：`grid(name?)`, `xAxis(name?)`, `yAxis(name?)`, `series(name)`，每个子对象支持链式细粒度设置
- 批量与条件：`options(obj)` 批量合并；`when(cond, thenFn, elseFn?)` 条件配置
- 返回父级：`quit()` 回到上一层链式对象；数组类容器统一通过 `.toConfig()` 合并到最终配置
- 实用方法：`toJSON(space?)` 将配置序列化；`fromConfig(obj)` 从已有配置反向构建；`clone()` 深拷贝当前链

## 📄 类型与构建

- ESM 构建输出在 `es/`，CJS 在 `lib/`，UMD 在 `dist/`
- 每个目录都包含 TypeScript 类型声明（`.d.ts`）
