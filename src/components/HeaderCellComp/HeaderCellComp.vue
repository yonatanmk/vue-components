<template>
  <div :class="cellClass">
    <button :onClick="onHeaderClick">
      <p>{{name}}</p>
      <Icon v-if="isSorted" :icon="arrowIcon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed, inject } from 'vue';
import { Icon } from '@iconify/vue'
import { SORT_ORDERS } from '../../util';
import type { ISortOrder } from '../../interfaces'

interface IHeaderCellProps {
  name: string;
  field: string;
}

interface ISortProps {
  getSortOrder: () => ISortOrder,
  setSortOrder: (arg: ISortOrder) => void,
  getSortField: () =>string,
  setSortField: (arg: string) => void,
}

const props = defineProps<IHeaderCellProps>();

// const getSortOrder = inject('getSortOrder') as () => ISortOrder
// const setSortOrder = inject('setSortOrder') as (arg: ISortOrder) => void
// const getSortField = inject('getSortField') as () => string
// const setSortField = inject('setSortField') as (arg: string) => void

const { getSortOrder, setSortOrder, getSortField, setSortField } = inject('sortProps') as ISortProps

const cellClass = computed(() => ({
  HeaderCellComp: true,
}))

const sortOrder = computed(() => getSortOrder())
const sortField = computed(() => getSortField())
const isSorted = computed(() => props.field === sortField.value)
const arrowIcon = computed(() => sortOrder.value === SORT_ORDERS.ASC ? 'bi:arrow-down' : 'bi:arrow-up')

const onHeaderClick = () => {
  if (isSorted.value) {
    toggleSortOrder()
  } else {
    emitSortField(props.field)
    emitSortOrder(SORT_ORDERS.ASC)
  }
}

const toggleSortOrder = () => {
  emitSortOrder(sortOrder.value === SORT_ORDERS.ASC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC)
}

const emitSortOrder = (arg: ISortOrder) => {
  setSortOrder(arg)
}

const emitSortField = (arg: string) => {
  setSortField(arg)
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/variables/_palette";
@import "../../styles/variables/_mixins";

.HeaderCellComp {
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
