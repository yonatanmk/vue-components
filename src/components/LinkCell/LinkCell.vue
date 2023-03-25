<template>
  <div className="LinkCell">
    <a :href="url">{{text}}</a>  
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'LinkCell',
  props: {
    text: String,
    url: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
