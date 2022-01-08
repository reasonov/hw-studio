<template lang="html">
  <div class="slider-section">
    <div class="portfolio__slider" ref="sliderWrapper">
      <slider-component
        :listLength="portfolioList.length"
        :sliderWrapperSize="sliderWrapperSize"
        :slideSize="slideSize"
        :slideChanges="slideChanges"
        sliderListClass="portfolio__list"
      >

        <li
          :class="['portolio__item', {'portolio__item--hidden': (animationStage < 6 || (3 - index) >= currentIndex && pageNumber == 0) && windowWidth > 600}]"
          v-for="(item, index) in portfolioList"
          :key="index"
          @mouseenter="currentPortfolioHover(index, true)"
          @mouseleave="currentPortfolioHover(null, false)"
          ref="portfolioItem"
        >

          <router-link :to="item.link" tag="a" class="portolio__item__image" :style="'background-image: url('+item.image+')'"></router-link>

          <transition name="portfolioItemAm">
            <span class="portolio__item__name" v-show="portfolioHover.hovered && portfolioHover.id == index">{{ item.name }} website</span>
          </transition>
        </li>

      </slider-component>

      <transition name="portfolioBackground">
        <span
          :class="[
            'portfolio-slider-background',
            captionColor,
            {'portfolio-background-animate': animationStage > 2 && pageNumber == 0}
          ]"
        >
          <h3
          :class="[
            {'portfolio__caption': pageNumber == 0},
            {'portfolio-background-color': animationStage > 3}
          ]"
          >
          Портфолио</h3>
        </span>
      </transition>

    </div>

    <transition name="buttonsWrapperAm">
      <div class="portfolio__toggler-wrapper" v-show="(animationStage > 5 || pageNumber != 0) || (windowWidth > 460 && windowWidth < 600)">

        <button
          class="portfolio__toggler"
          :class="{'portfolio__toggler0-am': portfolioTogglerAm == 1}"
          @click="changeSlide(1)"
          @mouseenter="currentButtonHover(0, true)"
          @mouseleave="currentButtonHover(null, false)"
        >

          <transition name="portfolioButtonAm">
            <span class="portfolio-button-animate" v-show="buttonHover.id == 0 && buttonHover.hovered"></span>
          </transition>

        </button>

        <button
          class="portfolio__toggler"
          :class="{'portfolio__toggler1-am': portfolioTogglerAm == -1}"
          @click="changeSlide(-1)"
          @mouseenter="currentButtonHover(1, true)"
          @mouseleave="currentButtonHover(null, false)"
        >

          <transition name="portfolioButtonAm">
            <span class="portfolio-button-animate" v-show="buttonHover.id == 1 && buttonHover.hovered"></span>
          </transition>

        </button>

      </div>
    </transition>

  </div>
</template>

<script>
import sliderComponent from '../default-components/slider-component.vue';
import { mapState } from 'vuex';

export default {
  props: {
    animationStage: {
      type: Number,
      required: false
    },
    captionColor: {
      type: String,
      required: false
    }
  },
  components: {
    sliderComponent
  },
  data() {
    return {
      portfolioList: [
        {
          name: 'Pikina Buh',
          link: '/project/0',
          image: require('../../assets/images/pikinaBuh.jpg')
        },
        {
          name: 'Obedman Design',
          link: '/project/1',
          image: require('../../assets/images/ObedmanDesign.jpg')
        },
        {
          name: 'Pie Site',
          link: '/project/2',
          image: require('../../assets/images/pieSite.jpg')
        },
      ],
      slideSize: 0,
      slideChanges: 0,

      currentIndex: 1,
      interval: null,
      portfolioHover: {
        hovered: false,
        id: null
      },
      buttonHover: {
        id: null,
        hovered: false
      },
      portfolioTogglerAm: null
    }
  },
  computed: {
    ...mapState([
      'windowWidth',
      'pageNumber'
    ]),
    sliderWrapperSize() {          //Ширина обертки
      if(this.slideSize) {
        return this.$refs.sliderWrapper.clientWidth;
      }
      return 0;
    }
  },

  methods: {
    changeSlide(data) {
      this.slideChanges = data;
      setTimeout(()=> {
        this.slideChanges = 0;
      }, 10)

      this.portfolioTogglerAm = data;

      setTimeout(()=> {
        this.portfolioTogglerAm = null;
      }, 500)
    },

    currentButtonHover(item, state) {
      this.buttonHover.id = item;
      this.buttonHover.hovered = state;
    },
    currentPortfolioHover(item, state) {
      this.portfolioHover.hovered = state;
      this.portfolioHover.id = item;
    },
    nextIndex() {
      this.interval = setInterval(()=> {
        this.currentIndex += 1;
      }, 200);
    }
  },

  watch: {
    currentIndex() {
      if(this.currentIndex > 3) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    animationStage() {
      if(this.animationStage > 5) {
        this.nextIndex();
      }
    }
  },
  mounted() {
    this.slideSize = this.$refs.portfolioItem[0].clientWidth;
  }
}
</script>

<style media="screen">

  @media (min-width: 460px) {
    .portolio__item--hidden {
      transform: translateX(-150vw);
    }

    .portfolioItemAm-enter-active, .portfolioItemAm-leave-active {
      transition: .3s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    .portfolioItemAm-enter, .portfolioItemAm-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }

    .portfolio__caption {
      background: linear-gradient(to top, #000 100%, #fff 100%);
    }

    .portfolio-background-color {
      animation: .5s portfolioColorKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
      background: linear-gradient(to top, #000 100%, #fff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @keyframes portfolioColorKeys {
      0% {
        background: linear-gradient(to top, #fff 100%, #000 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      100% {
        background: linear-gradient(to top, #000 100%, #fff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .slider-buttons {
      margin-top: 50px;
    }

    .portfolio-button-animate {
      position: absolute;
      bottom: -2px;
      left: 200px;

      height: 3px;
      width: 40px;

      background-color: #fff;
    }

    .portfolioButtonAm-enter-active, .portfolioButtonAm-leave-active {
      transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    .portfolioButtonAm-enter, .portfolioButtonAm-leave-to {
      left: 0px;
    }

    .buttonsWrapperAm-enter-active, .buttonsWrapperAm-leave-active {
      transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    .buttonsWrapperAm-enter, .buttonsWrapperAm-leave-to {
      transform: translateY(70px);
      opacity: 0;
    }
  }

  .portfolio__toggler0-am {
    transform: translateX(-30px);
  }

  .portfolio__toggler1-am {
    transform: translateX(30px);
  }

</style>
