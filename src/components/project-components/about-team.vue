<template lang="html">
  <div class="team__design">

    <div class="design__ticker-wrapper">
      <ticker-component :background="background">

        <li
          :class="['about__item', color]"
          v-for="(item, index) in marquee.marqueeList1"
          :key="index"
        >
          {{ item }}
        </li>

      </ticker-component>
    </div>

    <team-slider />

    <div class="design__ticker-wrapper">
      <ticker-component :background="background">

        <li
          :class="['about__item', color]"
          v-for="(item, index) in marquee.marqueeList2"
          :key="index"
        >
          {{ item }}
        </li>

      </ticker-component>
    </div>

  </div>
</template>

<script>
import tickerComponent from '../default-components/ticker-component.vue';
import teamSlider from '../project-components/team-slider.vue';

export default {
  props: {
    color: {
      type: String,
      reqired: false
    },
    background: {
      type: String,
      reqired: false
    }
  },
  components: {
    tickerComponent,
    teamSlider
  },
  data() {
    return {
      marquee: {
        marqueeList1: [
          "Animation design",
          "Figma",
          "Visual language",
          "Corporate",
          "Animation design",
          "Figma",
          "Visual language",
          "Corporate"
        ],
        marqueeList2: [
          "Development",
          "UI/UX",
          "JavaScript",
          "Front-end",
          "Back-end",
          "Development",
          "UI/UX",
          "JavaScript",
          "Front-end",
          "Back-end"
        ]
      }
    }
  }
}
</script>
