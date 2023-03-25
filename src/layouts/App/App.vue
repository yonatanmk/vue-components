<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <FilterBar>
    <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
  </FilterBar>
  <!-- <Search label="Search Songs" placeholder="Name" :search="songSearch" @onSearch="handleSongSearch"/>
  <p>songSearch: {{songSearch}}</p> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterBar from '../../components/FilterBar';
import Search from '../../components/Search';

export default defineComponent({
  name: 'App',
  components: {
    FilterBar,
    Search
  },
  data() {
    return {
      songSearch: ''
    }
  },
  methods: {
    handleSongSearch(val: string) {
      console.log('handleSongSearch: ' + val)
      this.songSearch = val
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
