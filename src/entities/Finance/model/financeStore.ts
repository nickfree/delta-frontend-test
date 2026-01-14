import { defineStore } from 'pinia';
import { ref } from 'vue';
import { statisticsData } from '../config';
import type { IStatistics } from '../types';

export const useFinanceStore = defineStore('financeStore', () => {
  const statistics = ref<IStatistics[]>(statisticsData);

  return {
    statistics,
  };
});