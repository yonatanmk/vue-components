<template>
  <component :is="tag" :class="cellClass">
    <component v-if="component && field" :is="component" v-bind="field.props"/>
    <p v-else>{{text}}</p>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn } from '../../interfaces'

export default defineComponent({
  name: 'TableCell',
  props: {
    className: String,
    row: {
      type: Object,
      required: true,
    },
    column: {
      type: Object as PropType<ITableColumn>,
      required: true,
    },
    fieldName: {
      type: String,
      required: true,
    },
    component: Object as PropType<any>,
    isHeader: Boolean,
  },
  created() {
    // console.log('Cell')
  },
  computed: {
    cellClass(): {[key: string]: boolean} {
      return {
        Cell: true,
        [this.className || '']: !!this.className,
        Cell__header: this.isHeader,
      }
    },
    tag(): string {
      return this.isHeader ? 'th' : 'td'
    },
    field(): string {
      return this.row[this.fieldName]
    },
    text(): string | number {
      return this.column.formatFunction ? this.column.formatFunction(this.row) : this.field;
    },
  }
});
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
