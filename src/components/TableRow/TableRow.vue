<template>
    <tr :class="rowClass">
      <TableCell 
        v-for="(col, i) in columns"
        :key="i"
        :fieldName="col.field"
        :row="row"
        :column="col"
        :isHeader="isHeader"
      />
    </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces';
import TableCell from '../TableCell';

export default defineComponent({
  name: 'TableRow',
  components: {
    TableCell,
  },
  props: {
    class: String,
    row: Object,
    columns: {
      type: Object as PropType<ITableColumn[]>,
      required: true,
    } ,
    isHeader: Boolean,
  },
  created() {
    console.log('Row')
    console.log({columns: this.columns})
  },
  computed: {
    rowClass() {
      return {
        Row: true,
        [this.class || '']: !!this.class,
      }
    },
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
