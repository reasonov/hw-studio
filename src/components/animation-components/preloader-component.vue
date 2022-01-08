<template lang="html">
  <div class="preloader">
    <div class="caption-wrapper" :class="{'wrapper-anmation': animationNumber > 2}">
      <h2 class="caption-white caption-white0">
        <div class="caption__top" :class="{'caption--finish0': animationNumber > 1}">
          <transition-group name="letterAm" style="display: flex">
            <span
              class="caption__letter"
              v-show=" animationNumber > 0 && letterNumber > index"
              v-for="(item, index) in captionLettersList"
              :key="item + index"
            >
              {{ item }}
            </span>
          </transition-group>
        </div>
        <div class="caption__bottom" :class="{'caption--finish1': animationNumber > 1}">
          <transition-group name="letterAm" style="display: flex">
            <span
              class="caption__letter"
              v-show=" animationNumber > 0 && letterNumber > index"
              v-for="(item, index) in captionLettersList"
              :key="item + index"
            >
              {{ item }}
            </span>
          </transition-group>
        </div>
      </h2>

      <transition name="redWrapperAm">
        <div class="red-wrapper" v-show="animationNumber > 1">
          <transition name="helloAm">
            <h2 class="preloader__caption-red" v-show="animationNumber > 1">World</h2>
          </transition>
        </div>
      </transition>

    </div>

    <div class="load-wrapper">
      <transition name="loadAm">
        <div class="load-bar" v-show="animationNumber > 3"></div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      animationNumber: 0,
      letterNumber: -1,
      captionLettersList: [
        'H',
        'e',
        'l',
        'l',
        'o'
      ],
      interval: null
    }
  },
  methods: {
    nextAnimation() {
      setTimeout(()=> {
        this.animationNumber = 1;

        this.nextLetterNumber();
      }, 1000);

      setTimeout(()=> {
        this.animationNumber = 2;
      }, 2500);

      setTimeout(()=> {
        this.animationNumber = 3;
      }, 3000);

      setTimeout(()=> {
        this.animationNumber = 4;
      }, 4500)
    },
    nextLetterNumber() {
      this.interval = setInterval(()=> {
        this.letterNumber += 1;
      }, 200);

    }
  },
  watch: {
    letterNumber() {
      if(this.letterNumber > 4) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  },
  mounted() {
    this.nextAnimation();
  }
}
</script>

<style lang="css" scoped>

  .preloader {
    width: 100vw;
    height: 100vh;

    background-color: #000;
  }

  .caption-wrapper {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 249px;
    height: 80px;

    padding-top: calc(50% - 249px);
    margin: 0 auto;
  }

  .caption-white {
    position: absolute;
    left: 0;

    display: flex;
    transition: 1s all cubic-bezier(0.54, 0.02, 0.32, 0.98);

    font-size: 70px;
    text-transform: uppercase;
    color: #fff;
  }

  .caption__top {
    position: absolute;
    bottom: 0px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    height: 38px;
    transition: 1s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    overflow: hidden;
  }

  .caption__bottom {
    position: absolute;
    bottom: -41px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 42px;
    transition: 1s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    overflow: hidden;
  }

  .caption--finish0 {
    bottom: 30px;
  }

  .caption--finish1 {
    bottom: -73px;
  }

  .preloader__caption-red {
    line-height: 50px;
    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
    color: red;
  }

  .red-wrapper {
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 390px;
    height: 60px;

    overflow: hidden;

    background-color: #000;
  }

  .load-wrapper {
    width: 150px;
    height: 20px;
    margin: 0 auto;
    margin-top: 75px;
  }

  .load-bar {
    width: 150px;
    height: 2px;

    background-color: red;
  }

  .letterAm-enter-active, .letterAm-leave-active {
    transition: .5s all cubic-bezier(0, 0, 0, 0.95);
  }

  .letterAm-enter {
    transform: translateY(20px);
    opacity: 0;
  }

  .letterAm-leave-to {
    transform: translateY(0px);
    opacity: 0;
  }

  .helloAm-enter-active, .helloAm-leave-active {
    transition: 1s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .helloAm-enter {
    font-size: 100px;
  }

  .helloAm-leave-to {
    font-size: 50px;
  }

  .redWrapperAm-enter-active, .redWrapperAm-leave-active {
    animation: redAm 1s cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  @keyframes redAm {
    0% {
      height: 0px;
    }

    100% {
      height: 60px;
    }
  }

  .wrapper-anmation {
    transition: 1s all cubic-bezier(0.54, 0.02, 0.32, 0.98);

    transform: scale(0.9);
  }

  .loadAm-enter-active, .loadAm-leave-to {
    animation: load 3s ease-out;
  }

  @keyframes load {
    0% {
      width: 1px;
    }

    100% {
      width: 150px;
    }
  }
</style>
