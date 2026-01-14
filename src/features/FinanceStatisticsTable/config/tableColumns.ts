import type { IStatistics } from "src/entities/Finance";

export const tableColumns = [
  {
    name: 'name',
    align: 'left',
    label: 'Показатель',
    field: (row: IStatistics) => row.name,
  },
  {
    name: 'currentDay',
    align: 'right',
    label: 'Текущий день',
    field: (row: IStatistics) => row.currentDay,
  },
  {
    name: 'previousDay',
    align: 'right',
    label: 'Вчера',
    format: (value: number, row: IStatistics) => `${row?.previousDay} ${row?.percent}%`,
  },
  {
    name: 'weekDay',
    align: 'right',
    label: 'Этот день недели',
    field: (row: IStatistics) => row.weekDay,
  },
]