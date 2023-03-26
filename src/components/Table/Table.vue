<template>
    <!-- <p>Sort Pred: {{sortField}}</p> -->
    <!-- <p>Sort Order: {{sortOrder}}</p> -->
    <!-- <button @click="toggleSortOrder">TOGGLE</button> -->
    <table :class="tableClass">
      <thead>
        <TableRow 
          class="row__header" 
          :row="headerRow" 
          :columns="headerColumns" 
          isHeader 
          @setSortOrder="setSortOrder" 
          @setSortField="setSortField"
        />
      </thead>
      <tbody>
        <TableRow v-for="(row, i) in filteredRows" :key="i" :row="row" :columns="sortedColumns"/>
      </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ISortOrder, IFilter } from '../../interfaces'
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
    defaultSortField: String,
  },
  created() {
    console.log('TABLE')
    // console.log({rows: this.rows})
  },
  data() {
    return {
      sortOrder: SORT_ORDERS.ASC as ISortOrder,
      sortField: this.defaultSortField || this.columns[0]?.name,
    }
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
    headerRow(): any {
      return this.columns.reduce((agg: any, col) => {
        return {
          ...agg,
          [col.field]: {
            props: {
              name: col.name,
              field: col.field,
            }
          },
        }
      }, {
      } as any);
    },
    headerColumns(): ITableColumn[] {
      return this.sortedColumns.map(col => ({
        ...col,
        component: HeaderCell,
      }))
    }
  },
  methods: {
    setSortOrder(order : ISortOrder) {
      this.sortOrder = order;
    },
    setSortField(field : string) {
      this.sortField = field;
    },
    // toggleSortOrder() {
    //   this.sortOrder = this.sortOrder === SORT_ORDERS.ASC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC
    // }
  },
  provide() {
    return {
      getSortOrder: () => this.sortOrder,
      setSortOrder: this.setSortOrder,
      getSortField: () => this.sortField,
      setSortField: this.setSortField,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Table {
  width: 100%;
  border-collapse: collapse
}
</style>
