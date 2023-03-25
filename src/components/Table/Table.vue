<template>
    <table :class="tableClass">
      <thead>
        <TableRow class="row__header" :row="headerRow" :columns="headerColumns" isHeader/>
      </thead>
      <tbody>
        <TableRow v-for="(row, i) in rows" :key="i" :row="row" :columns="sortedColumns" />
      </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'
import TableRow from '../TableRow';
import HeaderCell from '../HeaderCell';

export default defineComponent({
  name: 'FilterBar',
  components: {
    TableRow,
  },
  props: {
    class: String,
    rows: {
      type: Array,
      // required: true,
      default: () => []
    } ,
    columns: {
      type: Object as PropType<ITableColumn[]>,
      required: true,
    } ,
  },
  created() {
    console.log('TABLE')
    console.log({rows: this.rows})
  },
  computed: {
    tableClass() {
      return {
        Table: true,
        [this.class || '']: !!this.class,
      }
    },
    sortedColumns() {
      return [...this.columns].sort((a, b) => a.index > b.index ? 1 : -1);
    },
    headerRow() {
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
    headerColumns() {
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
