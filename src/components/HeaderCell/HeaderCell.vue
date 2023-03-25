<template>
  <div :class="cellClass">
    <button :onClick="onHeaderClick">
      <p>{{name}}</p>
      <!-- <ArrowIcon /> -->
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'

export default defineComponent({
  name: 'HeaderCell',
  props: {
    name: String,
    field: String,
  },
  created() {
    // console.log('Header Cell')
  },
  computed: {
    cellClass() {
      return {
        HeaderCell: true,
      }
    },
  },
  methods: {
    onHeaderClick() {
      // const target = e.target as HTMLInputElement
      // this.$emit('onSearch', target.value)
      console.log('HEADER CLICK: ' + this.name)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/variables/_palette";
@import "../../styles/variables/_mixins";

.HeaderCell {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }

  button {
    @include table-cell-padding;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    height: 100%;
    width: 100%;

    &:hover {
      cursor: pointer;
      color: #0B95FF;
    }

    svg {
      height: 1rem;
      width: 1rem;
      margin-left: 4px;
    }
  }

  &__unsorted {
    p {
      transform: translateX(10px)
    }

    svg {
      visibility: hidden;
    }
  }
}

</style>
