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
  range!: (value: string | [string, string] | number | [number, number]) => this;
  orient!: (value: 'horizontal' | 'vertical') => this;
  cellSize!: (value: number | [number, number]) => this;
  left!: (value: string | number) => this;
  right!: (value: string | number) => this;
  top!: (value: string | number) => this;
  bottom!: (value: string | number) => this;
  width!: (value: string | number) => this;
  height!: (value: string | number) => this;
  silent!: (value: boolean) => this;
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
