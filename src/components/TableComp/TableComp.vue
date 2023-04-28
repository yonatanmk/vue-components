<template>
    <table :class="tableClass">
      <thead>
        <TableRowComp 
          className="row__header" 
          :row="headerRow" 
          :columns="headerColumns" 
          isHeader 
          @setSortOrder="setSortOrder" 
          @setSortField="setSortField"
        />
      </thead>
      <tbody>
        <TableRowComp v-for="(row, i) in sortedRows" :key="i" :row="row" :columns="sortedColumns"/>
      </tbody>
    </table>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed, provide } from 'vue';
import orderBy from 'lodash/orderBy';
import type { ITableColumn, ISortOrder, IFilter } from '../../interfaces'
import TableRowComp from '../TableRowComp';
import HeaderCellComp from '../HeaderCellComp';
import { SORT_ORDERS, filterRows } from '../../util';

interface ITableProps {
  className?: string;
  // rows: T[];
  rows: any[];
  columns: ITableColumn[];
  defaultSortField: string;
  backupSortField: string;
  filters?: IFilter[];
}

const props = defineProps<ITableProps>();

const sortOrder = ref(SORT_ORDERS.ASC as ISortOrder)
const sortField = ref(props.defaultSortField || props.columns[0]?.name)

const tableClass = computed(() => ({
  TableComp: true,
  [props.className || '']: !!props.className,
}))

const sortedColumns = computed(() => [...props.columns].sort((a, b) => a.index > b.index ? 1 : -1))
const filteredRows = computed(() => props.filters && props.filters.length > 0 ? filterRows(props.rows, props.filters)  : props.rows)
const sortByColumn = computed(() => props.columns.find(col => col.field === sortField.value) as ITableColumn)
const sortByFunction = computed(() => sortByColumn.value.sortByFunction || sortField.value)
const sortedRows = computed(() => orderBy(
  filteredRows.value,
  [sortByFunction.value, props.defaultSortField || props.backupSortField],
  [sortOrder.value, sortOrder.value]
))
const headerRow = computed(() => props.columns.reduce((agg: any, col) => ({
  ...agg,
  [col.field]: {
    props: {
      name: col.name,
      field: col.field,
    }
  },
}), {} as any))
const headerColumns = computed(() => sortedColumns.value.map(col => ({
  ...col,
  component: HeaderCellComp,
})))

const setSortOrder = (order : ISortOrder) => {
  sortOrder.value = order;
}

const setSortField = (field : string) => {
  sortField.value = field;
}

provide('getSortOrder', () => sortOrder.value)
provide('setSortOrder', setSortOrder)
provide('getSortField', () => sortField.value)
provide('setSortField', setSortField)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.TableComp {
  width: 100%;
  border-collapse: collapse
}
</style>
