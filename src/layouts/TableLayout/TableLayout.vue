<template>
  <div class="TableLayout">
    <FilterBar>
      <Search label="Search People" placeholder="Name" :search="peopleSearch" @onSearch="handlePeopleSearch"/>
    </FilterBar>
    <div className="TableLayout__container">
      <Table :rows="peopleRows" :columns="peopleColumns" :filters="peopleFilters" defaultSortField="name" backupSortField="name"/>
    </div>
    <FilterBar>
      <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
    </FilterBar>
    <div className="TableLayout__container">
      <Table :rows="songRows" :columns="songColumns" :filters="songFilters" defaultSortField="name" backupSortField="name"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterBar from '../../components/FilterBar';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { peopleRows, peopleColumns, songRows, songColumns } from './data';
import type { ITableColumn, ISortOrder, IFilter } from '../../interfaces'
import { FILTER_TYPES } from '../../util';

export default defineComponent({
  name: 'TableLayout',
  components: {
    FilterBar,
    Search,
    Table,
  },
  data() {
    return {
      peopleSearch: '',
      peopleRows,
      peopleColumns,
      songSearch: '',
      songRows,
      songColumns,
    }
  },
  computed: {
    songFilters(): IFilter[] {
      return [
        {
          type: FILTER_TYPES.SEARCH,
          field: 'name',
          value: this.songSearch,
        },
      ];
    },
    peopleFilters(): IFilter[] {
      return [
        {
          type: FILTER_TYPES.SEARCH,
          field: 'name',
          value: this.peopleSearch,
        },
      ];
    } 
  },
  methods: {
    handlePeopleSearch(val: string) {
      this.peopleSearch = val
    },
    handleSongSearch(val: string) {
      this.songSearch = val
    }
  }
});
</script>

<style lang="scss">
.TableLayout {
  &__container {
    padding: 2rem;
  }
}
</style>
