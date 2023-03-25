<template>
  <th v-if="isHeader" :class="cellClass"><p>{{text.props.name}}</p></th>
  <td v-else :class="cellClass">
    <p>{{text}}</p>
  </td>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'

export default defineComponent({
  name: 'TableCell',
  props: {
    class: String,
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
    isHeader: Boolean,
  },
  created() {
    console.log('Cell')
  },
  computed: {
    cellClass() {
      return {
        Cell: true,
        [this.class || '']: !!this.class,
        Cell__header: this.isHeader,
      }
    },
    field() {
      return this.row[this.fieldName]
    },
    text() {
      return this.field;
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
