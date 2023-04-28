<template>
    <tr :class="rowClass">
      <TableCellComp 
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


<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import type { ITableColumn } from '../../interfaces';
import TableCellComp from '../TableCellComp';

interface IRowProps {
  className?: string;
  row: any;
  columns: ITableColumn[];
  isHeader?: boolean
}

const props = defineProps<IRowProps>();

const rowClass = computed(() => ({
  Row: true,
  [props.className || '']: !!props.className,
}))


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
