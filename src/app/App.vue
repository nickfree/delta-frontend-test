<script setup lang="ts">
import { FinanceStatisticsTable } from 'src/features/FinanceStatisticsTable';
</script>

<template>
  <div :class="$style['app']">
    <FinanceStatisticsTable />
  </div>
</template>

<style lang="scss" module>
.app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
}
</style>
