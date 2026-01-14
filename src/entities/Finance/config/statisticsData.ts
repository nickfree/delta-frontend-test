import type { IStatistics } from '../types';

export const statisticsData: IStatistics[] = [
  {
    code: 'revenue',
    name: 'Выручка, руб.',
    currentDay: 500521,
    previousDay: 480521,
    weekDay: 4805121,
    weekDayColor: 'negative',
    percent: 4,
  },
  {
    code: 'revenueCash',
    name: 'Наличные',
    currentDay: 300000,
    previousDay: 300000,
    weekDay: 300000,
    percent: 0,
    tabbed: true,
  },
  {
    code: 'revenueNoCash',
    name: 'Безналичный расчет',
    currentDay: 100000,
    previousDay: 100000,
    weekDay: 100000,
    percent: 0,
    tabbed: true,
  },
  {
    code: 'revenueCredit',
    name: 'Кредитные карты',
    currentDay: 100521,
    previousDay: 100521,
    weekDay: 100521,
    percent: 0,
    tabbed: true,
  },
  {
    code: 'averageCheck',
    name: 'Средний чек, руб.',
    currentDay: 1300,
    previousDay: 900,
    weekDay: 900,
    weekDayColor: 'positive',
    percent: 44,
  },
  {
    code: 'averageGuest',
    name: 'Средний гость, руб.',
    currentDay: 1200,
    previousDay: 800,
    weekDay: 800,
    weekDayColor: 'positive',
    percent: 50
  },
  {
    code: 'checkDeletions',
    name: 'Удаление из чека (после оплаты), руб.',
    currentDay: 1000,
    previousDay: 1200,
    weekDay: 900,
    weekDayColor: 'positive',
    percent: -9
  },
  {
    code: 'checkDeletions2',
    name: 'Удаление из чека (до оплаты), руб.',
    currentDay: 1300,
    previousDay: 1300,
    weekDay: 900,
    weekDayColor: 'positive',
    percent: 0
  },
  {
    code: 'checkCount',
    name: 'Количество чеков',
    currentDay: 34,
    previousDay: 36,
    weekDay: 34,
    percent: -6
  },
  {
    code: 'guestCount',
    name: 'Количество гостей',
    currentDay: 34,
    previousDay: 36,
    weekDay: 32,
    weekDayColor: 'positive',
    percent: -6
  },
]