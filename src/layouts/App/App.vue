<template>
  <div class="App">
    <FilterBar>
      <Search label="Search People" placeholder="Name" :search="peopleSearch" @onSearch="handlePeopleSearch"/>
    </FilterBar>
    <div className="App__container">
      <Table :rows="peopleRows" :columns="peopleColumns" :filters="peopleFilters"/>
    </div>
    <!-- <Table :rows="peopleRows" :columns="peopleColumns"/> -->
    <FilterBar>
      <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
    </FilterBar>
    <div className="App__container">
      <Table :rows="songRows" :columns="songColumns" :filters="songFilters"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterBar from '../../components/FilterBar';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { peopleRows, peopleColumns, songRows, songColumns } from './data';
import type { ITableColumn, ITableHeaderRow, ISortOrder, IFilter } from '../../interfaces'
import { FILTER_TYPES } from '../../util';

export default defineComponent({
  name: 'App',
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
#app {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  &__container {
    padding: 2rem;
  }
}
</style>
