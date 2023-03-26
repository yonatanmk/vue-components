<template>
    <table :class="tableClass">
      <thead>
        <TableRow class="row__header" :row="headerRow" :columns="headerColumns" isHeader/>
      </thead>
      <tbody>
        <TableRow v-for="(row, i) in filteredRows" :key="i" :row="row" :columns="sortedColumns" />
      </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'
import TableRow from '../TableRow';
import HeaderCell from '../HeaderCell';
import { SORT_ORDERS, filterRows } from '../../util';

export default defineComponent({
  name: 'FilterBar',
  components: {
    TableRow,
  },
  props: {
    class: String,
    rows: {
      type: Array,
      required: true,
      // default: () => []
    } ,
    columns: {
      type: Object as PropType<ITableColumn[]>,
      required: true,
    } ,
    filters: {
      type: Array as PropType<IFilter[]>,
      // required: true,
      default: () => []
    } ,
  },
  created() {
    console.log('TABLE')
    // console.log({rows: this.rows})
  },
  computed: {
    tableClass(): {[key: string]: boolean} {
      return {
        Table: true,
        [this.class || '']: !!this.class,
      }
    },
    sortedColumns(): ITableColumn[] {
      return [...this.columns].sort((a, b) => a.index > b.index ? 1 : -1);
    },
    filteredRows(): any[] {
      return this.filters && this.filters.length > 0 ? filterRows(this.rows, this.filters)  : this.rows;
    },
    headerRow(): ITableHeaderRow {
      return this.columns.reduce((agg: Partial<ITableHeaderRow>, col) => {
        return {
          ...agg,
          [col.field]: {
            props: {
              name: col.name,
              field: col.field,
              // sortPredicate,
              // sortOrder,
            }
          },
        }
      }, {
        // sortPredicate,
        // sortOrder,
      } as Partial<ITableHeaderRow>) as ITableHeaderRow;
    },
    headerColumns(): ITableColumn[] {
      return this.sortedColumns.map(col => ({
        ...col,
        component: HeaderCell,
      }))
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Table {
  width: 100%;
  border-collapse: collapse
}
</style>
