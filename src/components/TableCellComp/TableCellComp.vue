<template>
  <component :is="tag" :class="cellClass">
    <component v-if="component && field" :is="component" v-bind="field.props"/>
    <p v-else>{{text}}</p>
  </component>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import type { ITableColumn } from '../../interfaces'

interface ITableCellProps {
  className?: string;
  row: any;
  column: ITableColumn;
  fieldName: string;
  component?: any;
  isHeader?: boolean;
}

const props = defineProps<ITableCellProps>();

const cellClass = computed(() => ({
  Cell: true,
  [props.className || '']: !!props.className,
  Cell__header: !!props.isHeader,
}))
const tag = computed(() => props.isHeader ? 'th' : 'td')
const field = computed(() => props.row[props.fieldName])
const text = computed(() => props.column.formatFunction ? props.column.formatFunction(props.row) : field.value)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/variables/_palette";
@import "../../styles/variables/_mixins";

.Cell {
  @include table-cell-padding;
  width: 100px;
  width: auto;
  box-sizing: border-box;;
  border: 1px solid $table-border-gray;

  p {
    margin: 0;
  }

  &__header {
    background-color: $table-header-gray;
    padding: 0;
  }
}
</style>
