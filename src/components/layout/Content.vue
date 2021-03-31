<template>
  <div class="layout-content">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.layout-content {
  height: calc(100vh - 50px - 8rem);
}
</style>
