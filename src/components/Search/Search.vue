<template>
    <div className="Search">
      <label v-if="label" htmlFor="people-search">{{label}}</label>
      <!-- <p>{{search}}</p> -->
      <!-- <input id="people-search" type="text" value="search" onChange={handleSearch} placeholder={placeholder} /> -->
      <input 
        id="people-search" 
        type="text" 
        :value="search"
        @input="handleSearch" 
        :placeholder="placeholder" 
      />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterBar',
  props: {
    label: String,
    placeholder: String,
    search: String,
  },
  created() {
    console.log({label: this.label, search: this.search, placeholder: this.placeholder})
  },
  methods: {
    handleSearch(e: Event) {
      const target = e.target as HTMLInputElement
      this.$emit('onSearch', target.value)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/variables/_palette";
@import "../../styles/variables/_mixins";

.Search {
  display: flex;
  align-items: center;

  input {
    @include input;
  }
  
  label {
    color: $table-header-gray;
    margin-right: 1rem;
    font-size: 24px;
  }
}
</style>
