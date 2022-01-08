<template lang="html">
  <div class="menu__button-wrapper" @mouseenter="hover(true)" @mouseleave="hover(false)">
    <button class="menu__button" @click="menuToggle">

      <div class="menu__burger">
        <div
          :class="[
            'burger__line-wrapper'+index,
            {'burger-close1': menuIsOpen && index == 1},
            {'burger-close2': menuIsOpen && index == 2},
            {'burger-close3': menuIsOpen && index == 3}
          ]"
          v-for="index in 3"
          :key="index"
        >
          <span
            :class="[
              {'burger__line--short': index == 2},
              'burger__line',
              {'burger-animate': menuHover && animationStage >= index},
            ]"
          >
          </span>
          <span
            :class="[
              {'burger__line--short': index == 2},
              'burger__line',
              {'burger-animate': menuHover && animationStage >= index},
            ]"
          >
          </span>
        </div>
      </div>

    </button>
  </div>

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      menuHover: false,
      animationStage: 0
    }
  },

  computed: {
    menuIsOpen() {
      return this.$store.state.menuIsOpen;
    }
  },

  methods: {

    ...mapMutations([
      'menuToggle'
    ]),

    hover(data) {
      this.menuHover = data;

      this.animationStage = 1;

      setTimeout(()=> {
        this.animationStage = 2;
      }, 220)

      setTimeout(()=> {
        this.animationStage = 3;
      }, 280)
    }
  }
}
</script>

<style lang="css" scoped>

  .menu__burger {
    position: relative;
    width: 34px;
    height: 24px;
  }

  .burger__line-wrapper1 {
    position: absolute;
    top: 0px;

    display: flex;
    width: 34px;

    overflow: hidden;

    transition: .5s all linear;
  }

  .burger__line-wrapper2 {
    position: absolute;
    top: 8px;

    display: flex;
    width: 34px;

    overflow: hidden;

    transition: .5s all linear;
  }

  .burger__line-wrapper3 {
    position: absolute;
    bottom: 0px;

    display: flex;
    width: 34px;

    overflow: hidden;

    transition: .5s all linear;
  }


  .menu__button-wrapper {
    margin-left: auto;
  }

  .burger__line {
    margin-right: 15px;

    transition: .4s all linear;
  }

  .burger-animate {
    transform: translateX(-50px);
  }

  .burger-close1 {
    animation: 1s burgerCloseKeys1 linear;
    top: 8px;
    transform: rotateZ(45deg);
  }

  .burger-close2 {
    opacity: 0;
  }

  .burger-close3 {
    animation: 1s burgerCloseKeys3 linear;
    left: 3px;
    bottom: 7px;
    transform: rotateZ(-45deg);
  }

  @keyframes burgerCloseKeys1 {
    0% {
      top: 0px;
      transform: rotateZ(0deg);
    }
    25% {
      top: 8px;
      transform: rotateZ(0deg);
    }
    50% {
      top: 8px;
      transform: rotateZ(45deg);
    }
    60% {
      top: 8px;
      transform: rotateZ(45deg);
    }
    75% {
      top: 8px;
      transform: rotateZ(90deg);
    }
    100% {
      top: 8px;
      transform: rotateZ(45deg);
    }
  }

  @keyframes burgerCloseKeys3 {
    0% {
      left: 0px;
      bottom: 0px;
      transform: rotateZ(0deg);
    }
    25% {
      left: 3px;
      bottom: 7px;
      transform: rotateZ(0deg);
    }
    50% {
      bottom: 7px;
      transform: rotateZ(-45deg);
    }
    60% {
      bottom: 7px;
      transform: rotateZ(-45deg);
    }
    75% {
      bottom: 7px;
      transform: rotateZ(-90deg);
    }
    100% {
      bottom: 7px;
      transform: rotateZ(-45deg);
    }
  }
</style>
