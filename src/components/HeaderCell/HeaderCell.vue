<template>
  <div :class="cellClass">
    <button :onClick="onHeaderClick">
      <p>{{name}}</p>
      <Icon v-if="isSorted" :icon="arrowIcon" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue'
import { SORT_ORDERS } from '../../util';
import type { ISortOrder } from '../../interfaces'

export default defineComponent({
  name: 'HeaderCell',
  components: {
    Icon
  },
  props: {
    name: String,
    field: {
      type: String,
      required: true,
    },
  },
  inject: ['getSortOrder', 'setSortOrder', 'getSortField', 'setSortField'],
  created() {
    // console.log('Header Cell')
    // console.log(this.sortOrder)
  },
  computed: {
    cellClass(): {[key: string]: boolean} {
      return {
        HeaderCell: true,
      }
    },
    arrowIcon(): string {
      return this.sortOrder === SORT_ORDERS.ASC ? 'bi:arrow-down' : 'bi:arrow-up';
    },
    sortOrder(): ISortOrder {
      return (this.getSortOrder as () => ISortOrder)()
    },
    sortField(): string {
      return (this.getSortField as () => string)()
    },
    isSorted(): boolean {
      return this.field === this.sortField;
    }
  },
  methods: {
    onHeaderClick() {
      // console.log('HEADER CLICK: ' + this.name)
      // this.toggleSortOrder()
      if (this.isSorted) {
        this.toggleSortOrder()
      } else {
        this.emitSortField(this.field)
        this.emitSortOrder(SORT_ORDERS.ASC)
      }
    },
    toggleSortOrder() {
      this.emitSortOrder(this.sortOrder === SORT_ORDERS.ASC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC)
    },
    emitSortOrder(arg: ISortOrder) {
      (this.setSortOrder as (arg: ISortOrder) => void)(arg)
    },
    emitSortField(arg: string) {
      (this.setSortField as (arg: string) => void)(arg)
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
