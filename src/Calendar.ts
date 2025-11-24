import { ChainedMap } from './ChainedMap';
import type { CalendarOption } from './types';

/**
 * Calendar - 日历坐标系配置
 */
export class Calendar<Parent = any> extends ChainedMap<Parent> {
  constructor(parent?: Parent) {
    super(parent);
    this.extend([
      'range',
      'orient',
      'cellSize',
      'left',
      'right',
      'top',
      'bottom',
      'width',
      'height',
      'silent',
      'firstDay',
      // object setters covered by extend
      'splitLine',
      'itemStyle',
      'dayLabel',
      'monthLabel',
      'yearLabel',
    ]);
  }

  // 实现由 extend 动态创建
  /**
   * 日期范围 | Date range
   * @param value - 年/月/具体日期或区间 | Year/Month/Date or range
   */
  range!: (value: string | [string, string] | number | [number, number]) => this;
  /**
   * 排列方向 | Orientation
   * @param value - 'horizontal' | 'vertical'
   */
  orient!: (value: 'horizontal' | 'vertical') => this;
  /**
   * 单元格尺寸 | Cell size
   * @param value - 像素或 [宽, 高] | Pixels or [width, height]
   */
  cellSize!: (value: number | [number, number]) => this;
  /**
   * 左侧位置 | Left position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  left!: (value: string | number) => this;
  /**
   * 右侧位置 | Right position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  right!: (value: string | number) => this;
  /**
   * 顶部位置 | Top position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  top!: (value: string | number) => this;
  /**
   * 底部位置 | Bottom position
   * @param value - 像素或百分比 | Pixels or percentage
   */
  bottom!: (value: string | number) => this;
  /**
   * 组件宽度 | Component width
   * @param value - 像素或百分比 | Pixels or percentage
   */
  width!: (value: string | number) => this;
  /**
   * 组件高度 | Component height
   * @param value - 像素或百分比 | Pixels or percentage
   */
  height!: (value: string | number) => this;
  /**
   * 禁用交互 | Silence mouse interaction
   * @param value - 是否禁用 | Whether to disable
   */
  silent!: (value: boolean) => this;
  /**
   * 一周起始日 | First day of week
   * @param value - 0~6（周日~周六）| 0~6 (Sun~Sat)
   */
  firstDay!: (value: number) => this;

  /**
   * 分隔线样式 | Calendar split line
   * @param config - 分隔线样式 | SplitLine style
   */
  splitLine!: (config: CalendarOption['splitLine']) => this;

  /**
   * 图形样式 | Calendar item style
   * @param config - 图形样式 | Item style
   */
  itemStyle!: (config: CalendarOption['itemStyle']) => this;

  /**
   * 日标签样式 | Day label
   * @param config - 标签样式 | Label style
   */
  dayLabel!: (config: CalendarOption['dayLabel']) => this;

  /**
   * 月标签样式 | Month label
   * @param config - 标签样式 | Label style
   */
  monthLabel!: (config: CalendarOption['monthLabel']) => this;

  /**
   * 年标签样式 | Year label
   * @param config - 标签样式 | Label style
   */
  yearLabel!: (config: CalendarOption['yearLabel']) => this;
}
