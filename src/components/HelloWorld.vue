<template>
  <div class="test">
    <h1 class="test__demo">{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  },
  setup() {
    const i = 0;
  }
};
</script>

<style lang="scss">
.test {
  &__demo {
    color: red;
  }
}
</style>
