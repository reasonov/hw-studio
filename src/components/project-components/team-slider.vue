<template lang="html">
  <div style="position: relative">
    <div class="team-slider" ref="teamWrapper">

      <slider-component
        :listLength="teamList.length"
        :sliderWrapperSize="teamWrapperSize"
        :slideSize="teamSlideSize"
        :slideChanges="slideChanges"
        sliderListClass="design__slider"
      >
        <li
          class="design__slider__item"
          :class="'design__slider__item'+index"
          v-for="(item, index) in teamList"
          :key="index"
          @mouseover="itemHover(index, true)"
          @mouseleave="itemHover(index, false)"
          ref="teamItem"
        >
          <transition name="fadeAm">
            <div class="design__slider__text-wrapper" v-show="item.hover || windowWidth < 600">
              <span class="about__slider__caption">{{ item.name }}</span>
              <p class="about__slider__text">{{ item.post }}</p>
            </div>
          </transition>
        </li>
      </slider-component>

    </div>

    <button class="team__toggler team__left" @click="changeSlide(1)">
      <team-toggler-icon />
    </button>
    <button class="team__toggler team__right" @click="changeSlide(-1)">
      <team-toggler-icon />
    </button>

  </div>
</template>

<script>
import sliderComponent from '../default-components/slider-component.vue';
import teamTogglerIcon from '../../assets/icons/team-toggler-icon.vue';

export default {
  components: {
    sliderComponent,
    teamTogglerIcon
  },
  data() {
    return {
      teamList: [
        {
          name: 'Михаил Тимофеев',
          post: 'Backend - разработчик',
          hover: false
        },
        {
          name: 'Анастасия Шведко',
          post: 'Web - дизайнер',
          hover: false
        },
        {
          name: 'Илья Куновский',
          post: 'Frontend - разработчик',
          hover: false
        },
        {
          name: 'Параскун Ева',
          post: 'Копирайтер',
          hover: false
        },
        {
          name: 'Савиных Данила',
          post: 'Лого - дизайнер',
          hover: false
        }
      ],
      teamSlideSize: 0,
      teamWrapperSize: 0,
      slideChanges: 0,
      componentLoaded: false
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    changeSlide(data) {
      this.slideChanges = data;

      setTimeout(()=> {
        this.slideChanges = 0;
      }, 10)
    },
    itemHover(itemNumber, state) {
      this.teamList[itemNumber].hover = state;
    }
  },
  watch: {
    windowWidth() {
      this.teamWrapperSize = this.$refs.teamWrapper.clientWidth;
      this.teamSlideSize = this.$refs.teamItem[0].clientWidth;
    }
  },
  mounted() {
    this.componentLoaded = true;
  }
}
</script>

<style media="screen">

  .team-slider {
    position: relative;

    max-width: calc(100% - 150px);
    margin: 0 auto;
    overflow: hidden;
  }

  .team__toggler {
    position: absolute;
    top: calc(50% - 44px);
    z-index: 2;
  }

  .team__left {
    left: 20px;
  }

  .team__right {
    right: 20px;
    transform: rotateZ(180deg);
  }

  .fadeAm-enter-active, .fadeAm-leave-active {
    transition: .3s all ease-out;
  }

  .fadeAm-enter, .fadeAm-leave-to {
    opacity: 0;
  }

</style>
