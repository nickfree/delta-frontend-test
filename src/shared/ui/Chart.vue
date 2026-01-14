<script setup lang="ts">
import { computed } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";

interface Props {
  data: number[];
  categoties: string[];
}

const props = defineProps<Props>();

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
]);

const options = computed(() => ({
  grid: {
    top: '0px',
    left: '0%',   // Distance from the left side of the container
    right: '0%',  // Distance from the right side
    bottom: '0%', // Distance from the bottom
    containLabel: true // Ensures labels are not clipped by the padding
  },
  xAxis: {
    type: 'category',
    data: props.categoties
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.data,
      type: 'line'
    }
  ]
}));
</script>

<template>
  <v-chart class="chart" :option="options" />
</template>

<style lang="scss" module>

</style>