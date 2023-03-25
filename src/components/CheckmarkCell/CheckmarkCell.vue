<template>
  <div :class="cellClass">
    <!-- <p>{{affirmative ? 'YES' : 'NO'}}</p> -->
    <!-- <IoCloseOutline /> -->
    <!-- <Icon v-if="affirmative" icon="ic:sharp-check" /> -->
    <Icon v-if="affirmative" icon="zondicons:checkmark" />
    <Icon v-if="!affirmative" icon="mdi:close-thick" />
    <!-- <Icon v-if="!affirmative" icon="ic:sharp-close" /> -->
  </div>
</template>

zondicons:checkmark

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'CheckmarkCell',
  components: {
    Icon,
  },
  props: {
    affirmative: Boolean,
  },
  created() {
    // console.log('CheckmarkCell')
  },
  computed: {
    cellClass() {
      return {
        CheckmarkCell: true,
        CheckmarkCell__affirmative: this.affirmative,
        CheckmarkCell__negative: !this.affirmative,
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/variables/_palette";
@import "../../styles/variables/_mixins";

.CheckmarkCell {
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.5rem;
    width: 2rem;
  }

  &__affirmative {
    color: $success-green;
  }

  &__negative {
    color: $failed-red;
  }
}


</style>
