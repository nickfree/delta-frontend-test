export interface IStatistics {
  code: string;
  name: string;
  currentDay: number;
  previousDay: number;
  weekDay: number;
  weekDayColor?: 'positive' | 'negative';
  percent: number;
  tabbed?: boolean;
}