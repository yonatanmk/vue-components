<template>
    <div className="NavBar">
      <button v-if="renderBackButton" className="NavBar__Back" @click="goBack">
        <Icon icon="material-symbols:arrow-back-rounded" />
      </button>
    </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
// import { useRoute } from 'vue-router';
// import { Icon } from '@iconify/vue'

// export default defineComponent({
//   name: 'NavBar',
//   components: {
//     Icon,
//   },
//   computed: {
//     route(): string {
//       const route = useRoute()
//       return route.name as string || '';
//     },
//     renderBack(): boolean {
//       return this.route !== 'home';
//     },
//   },
//   methods: {
//     goBack() {
//       this.$router.push('/')
//     }
//   }
// });
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue'

const route = computed(() => useRoute().name as string)
const renderBackButton = computed(() => route.value !== 'home')

const router = useRouter()

const goBack = () => router.push('/')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.NavBar {
  background-color: #C03221;
  height: 4rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  &__Back {
    background-color: transparent;
    padding: 0;
    border: none;
    color: white;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
