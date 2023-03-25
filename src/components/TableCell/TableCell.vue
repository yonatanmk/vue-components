<template>
  <component :is="tag" :class="cellClass">
    <component v-if="component" :is="component" v-bind="field.props"/>
    <p v-else>{{text}}</p>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'
// import HeaderCell from '../HeaderCell';

// type IHeaderCellComponent = InstanceType<typeof HeaderCell>

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
    component: Object as PropType<any>,
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
    tag() {
      return this.isHeader ? 'th' : 'td'
    },
    // subComponent() {
    //   return this.component ? this.component : null;
    // },
    field() {
      return this.row[this.fieldName]
    },
    text() {
      return this.isHeader ?this.field.props.name :  this.field;
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
