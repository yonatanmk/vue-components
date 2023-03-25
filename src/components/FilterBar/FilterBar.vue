<template>
    <div className="FilterBar">
      <p className="FilterBar__title">Filters</p>
      <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterBar',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/variables/_palette";
.FilterBar {
  background-color: #2F2963;
  height: 4rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  &__title {
    color: $table-header-gray;
  }

  p { 
    margin: 0 2rem 0 0;
    font-weight: bold;
    font-size: 32px;
    transform: translateY(-2px);
  }

  & > * {
    margin-right: 2rem;
  }
}
</style>
