<script setup lang="ts">
  import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { Chart } from 'src/shared';
import { useFinanceStore } from 'src/entities/Finance';
import { tableColumns } from '../config';

const { statistics } = storeToRefs(useFinanceStore());

const activeRowName = ref<string | null>(null);
const activeRow = ref<any>(null);

const chartData = computed(() => ([ 
  activeRow.value?.currentDay, 
  activeRow.value?.previousDay, 
  activeRow.value?.weekDay
]));

const onRowClick = (rowProps: any) => {
  activeRowName.value = rowProps.key;
  activeRow.value = rowProps.row;
}
</script>

<template>
  <q-table
    :class="$style['table']"
    :rows="statistics"
    :columns="(tableColumns as any)"
    row-key="code"
    :hide-pagination="true"
    separator="cell"
    :rows-per-page-options="[0]"
  >
    <template v-slot:body="props">
    <!-- Основная строка данных -->
    <q-tr :props="props" @click="onRowClick(props)">
      <q-td 
        v-for="col in props.cols" 
        :key="col.name" 
        :props="props"
        :class="[
          $style['table__cell'],
          col.name === 'name' && props.row.tabbed && $style['table__cell_tabbed'],
          col.name === 'previousDay' && [
            $style['table__cell_previous-day'], 
            props.row.percent > 0 && $style['table__cell_positive'], 
            props.row.percent < 0 && $style['table__cell_negative']
          ],
          col.name === 'weekDay' && props.row.weekDayColor === 'positive' && $style['table__cell_positive'],
          col.name === 'weekDay' && props.row.weekDayColor === 'negative' && $style['table__cell_negative']
        ]"
      >
        <template v-if="col.name !== 'previousDay'">
          {{ col.value }}
        </template>

        <template v-else>
          <span :class="$style['table__cell-content_left']">{{ props.row.previousDay }}</span>

          <span 
            :class="[
              $style['table__cell-content_right'],
              props.row.percent < 0 && $style['table__cell_negative-text'],
              props.row.percent > 0 && $style['table__cell_positive-text']
            ]"
          >{{ props.row.percent }}%</span>
        </template>
      </q-td>
    </q-tr>

    <q-tr v-if="props.key === activeRowName" :props="props">
      <q-td colspan="100%">
        <div class="text-left q-pa-md" style="height: 300px">
          <Chart 
            :categoties="['currentDay', 'previousDay', 'weekDay']"
            :data="chartData"
          />
        </div>
      </q-td>
    </q-tr>
  </template>
  </q-table>
</template>

<style lang="scss" module>
.table {
  box-shadow: none !important;

  thead th {
    border-width: 4px !important;
    border-color: #fff !important;
    background-color: #f5f5f5 !important;

    text-align: center;
  }

  &__cell {
    border-width: 4px !important;
    border-color: #fff !important;

    background-color: #f5f5f5 !important;

    &_tabbed {
      padding-left: 30px !important;
    }

    &_previous-day {
      display: flex;
    }

    &_positive {
      background-color: #ecf7e7 !important;

      &-text {
        color: #00b74a !important;
      }
    }

    &_negative {
      background-color: #fee6e6 !important;

      &-text {
        color: #ff4f4f !important;
      }
    }

    &-content {
      &_left {
        // margin-right: 10px;
        flex-grow: 1;
      }

      &_right {
        width: 40px;
        text-align: right;

        font-weight: 600;
      }
    }
  }
}
</style>