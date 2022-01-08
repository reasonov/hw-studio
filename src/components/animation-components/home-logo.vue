<template lang="html">
    <h1 class="home__caption">
      <transition name="helloAm">
        <span class="white-wrapper" v-show="animationStage > 1">
          <span class="home__caption--white">Hello</span>
        </span>
      </transition>
      <transition-group name="letterAm" style="display: flex">
        <span
          class="home__caption--red"
          v-for="(item, index) in letters"
          :key="item"
          v-show="animationStage > 0 && letterNumber > index"
        >
          {{ item }}
        </span>
      </transition-group>
    </h1>
</template>

<script>
export default {
  data() {
    return {
      animationStage: 0,
      letters: [
        'W',
        'o',
        'r',
        'l',
        'd'
      ],
      letterNumber: 0,
      interval: null
    }
  },
  methods: {
    nextAnimationStage() {
      setTimeout(()=> {
        this.animationStage = 1;

        this.interval = setInterval(()=> {
          this.letterNumber += 1;
        }, 100)

      }, 1000)

      setTimeout(()=> {
        this.animationStage = 2;
      }, 1500)
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
    this.nextAnimationStage();
  }
}
</script>

<style lang="css" scoped>

  .white-wrapper {
    display: flex;
    align-items: flex-end;

    height: 150px;
    overflow: hidden;
  }

  .letterAm-enter-active, .letterAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .letterAm-enter {
    transform: translateY(100px);
    opacity: 0;
  }

  .letterAm-leave-to {
    transform: translateY(0px);
    opacity: 0;
  }

  .helloAm-enter-active, .helloAm-leave-active {
    animation: helloKeys .5s linear;
  }

  @keyframes helloKeys {
    0% {
      height: 0px;
    }
    100% {
      height: 150px;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .white-wrapper {
      height: 80px;
    }

    @keyframes helloKeys {
      0% {
        height: 0px;
      }
      100% {
        height: 80px;
      }
    }
  }
</style>
