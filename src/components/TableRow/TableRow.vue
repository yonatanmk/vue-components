<template>
    <tr :class="rowClass">
      <TableCell 
        v-for="(col, i) in columns"
        :key="i"
        :fieldName="col.field"
        :row="row"
        :column="col"
        :component="col.component"
        :isHeader="isHeader"
      />
    </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn } from '../../interfaces';
import TableCell from '../TableCell';

export default defineComponent({
  name: 'TableRow',
  components: {
    TableCell,
  },
  props: {
    className: String,
    row: Object,
    columns: {
      type: Object as PropType<ITableColumn[]>,
      required: true,
    } ,
    isHeader: Boolean,
  },
  created() {
    // console.log('Row')
    // console.log({columns: this.columns, row: this.row})
  },
  computed: {
    rowClass(): {[key: string]: boolean} {
      return {
        Row: true,
        [this.className || '']: !!this.className,
      }
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
