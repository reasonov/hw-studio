<template lang="html">
  <span :class="['scroll-line', {'scroll-line-animate': animationStage > 0}]">
    <span :class="['scroll-line0', {'scroll-line0-animate': animationStage > 1}]"></span>
    <span :class="['scroll-line1', {'scroll-line1-animate': animationStage > 1}]"></span>
  </span>
</template>

<script>
export default {
  props: {
    animationStage: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
