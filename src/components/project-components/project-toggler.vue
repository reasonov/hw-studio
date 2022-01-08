<template lang="html">
  <div class="project__toggler-wrapper">
    <button class="project__toggler">
      <project-slider-toggler />
    </button>
    <button class="project__toggler">
      <project-slider-toggler />
    </button>
  </div>
</template>

<script>
import projectSliderToggler from '../../assets/icons/project-slider-toggler.vue';

export default {
  components: {
    projectSliderToggler
  }
}
</script>

<style lang="css" scoped>
</style>
