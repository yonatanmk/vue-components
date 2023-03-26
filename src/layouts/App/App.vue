<template>
  <div class="App">
    <FilterBar>
      <Search label="Search People" placeholder="Name" :search="peopleSearch" @onSearch="handlePeopleSearch"/>
      <Multiselect v-model="countryFilters" :options="countryOptions" />
    </FilterBar>
    <div className="App__container">
      <Table :rows="peopleRows" :columns="peopleColumns" :filters="peopleFilters" defaultSortField="name" backupSortField="name"/>
    </div>
    <FilterBar>
      <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
    </FilterBar>
    <div className="App__container">
      <Table :rows="songRows" :columns="songColumns" :filters="songFilters" defaultSortField="name" backupSortField="name"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import uniq from 'lodash/uniq';
import FilterBar from '../../components/FilterBar';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { peopleRows, peopleColumns, songRows, songColumns } from './data';
import type { ITableColumn, ISortOrder, IFilter } from '../../interfaces'
import { FILTER_TYPES } from '../../util';
// import Multiselect from 'vue-multiselect'
import Multiselect from '@vueform/multiselect'

export default defineComponent({
  name: 'App',
  components: {
    FilterBar,
    Search,
    Table,
    Multiselect,
  },
  data() {
    return {
      peopleSearch: '',
      peopleRows,
      peopleColumns,
      songSearch: '',
      songRows,
      songColumns,
      countryFilters: [],
    }
  },
  mounted() {
    console.log(this.countryOptions)
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
    },
    countryOptions() {
      return uniq(peopleRows.map(row => row.country)).map(value => ({
        label: value,
        value,
      }));
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
