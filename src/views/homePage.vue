<template>
  <div>
    homePage
    {{ count }}
    {{ state.b }}
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    console.log(store.state.name);
    const count = ref(0);
    const state = reactive({
      a: 0,
      b: 0
    });
    return {
      count,
      state
    };
  }
};
</script>

<style></style>
