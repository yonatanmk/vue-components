<template>
  <FilterBar>
    <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
  </FilterBar>
  <Table :rows="songRows" :columns="songColumns"/>
  <!-- <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
  <p>songSearch: {{songSearch}}</p> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterBar from '../../components/FilterBar';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { peopleRows, peopleColumns, songRows, songColumns } from './data';

export default defineComponent({
  name: 'App',
  components: {
    FilterBar,
    Search,
    Table,
  },
  data() {
    return {
      songSearch: '',
      songRows,
      songColumns,
    }
  },
  methods: {
    handleSongSearch(val: string) {
      // console.log('handleSongSearch: ' + val)
      this.songSearch = val
    }
  }
});
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
