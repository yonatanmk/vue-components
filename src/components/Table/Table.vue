<template>
    <table :class="tableClass">
      <thead>
        <!-- <TableSortContext.Provider value={{ sortPredicate, setSortPredicate, sortOrder, setSortOrder }}>
          <Row className="row__header" row={headerRow} columns={headerColumns} isHeader/>
        </TableSortContext.Provider> -->
        <TableRow class="row__header" :row="headerRow" :columns="columns" isHeader/>
      </thead>
      <tbody>
        <!-- <tr>
          <td>Hello</td>
        </tr> -->
        <!-- {rows.map((row, index) => <Row key={index} row={row} columns={sortedColumns} />)} -->
        <TableRow v-for="(row, i) in rows" :key="i" :row="row" :columns="columns" />
      </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'
import TableRow from '../TableRow';

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
