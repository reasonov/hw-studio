<template lang="html">
  <div class="home-desciption">
    <div class="page-number-wrapper">
      <transition name="lineAm">
        <span class="page-number-line" v-show="animationStage > 0"></span>
      </transition>
      <transition name="numberAm">
        <span class="page-number" v-show="animationStage > 2">01</span>
      </transition>
    </div>
    <transition name="descriptionAm">
      <p class="home__description" v-show="animationStage > 1">Лучшее решение для реализации<br> вашего сайта</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationStage: 0
    }
  },
  methods: {
    nextAnimationStage() {
      setTimeout(()=> {
        this.animationStage = 1
      }, 2000);

      setTimeout(()=> {
        this.animationStage = 2
      }, 3000);

      setTimeout(()=> {
        this.animationStage = 3
      }, 3700);
    }
  },
  mounted() {
    this.nextAnimationStage();
  }
}
</script>

<style lang="css" scoped>

  .lineAm-enter-active, .lineAm-leave-active {
    animation: 1.5s lineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  @keyframes lineKeys {
    0% {
      width: 0px;
      transform: translateY(100px);
    }

    55% {
      width: 350px;
      transform: translateY(100px);
    }

    75% {
      width: 350px;
      transform: translateY(100px);
    }

    100% {
      width: 350px;
      transform: translateY(0px);
    }
  }

  .numberAm-enter-active, .numberAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .numberAm-enter, .numberAm-leave-to {
    opacity: 0;
    transform: translateX(-50px);
  }

  .descriptionAm-enter-active, .descriptionAm-leave-active {
    transition: 1s all cubic-bezier(0.55, 0.01, 1, 1);
  }

  .descriptionAm-enter, .descriptionAm-leave-to {
    opacity: 0;
  }

  @media (min-width: 460px) and (max-width: 1050px) {
    .lineAm-enter-active, .lineAm-leave-active {
      animation: 1.5s lineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    @keyframes lineKeys {
      0% {
        width: 0px;
        transform: translateY(100px);
      }

      55% {
        width: 285px;
        transform: translateY(100px);
      }

      75% {
        width: 285px;
        transform: translateY(100px);
      }

      100% {
        width: 285px;
        transform: translateY(0px);
      }
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .lineAm-enter-active, .lineAm-leave-active {
      animation: 1.5s lineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    @keyframes lineKeys {
      0% {
        width: 0px;
        transform: translateY(80px);
      }

      55% {
        width: 245px;
        transform: translateY(80px);
      }

      75% {
        width: 245px;
        transform: translateY(80px);
      }

      100% {
        width: 245px;
        transform: translateY(0px);
      }
    }

    .numberAm-enter-active, .numberAm-leave-active {
      transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    .numberAm-enter, .numberAm-leave-to {
      opacity: 0;
      transform: translateX(-50px);
    }
  }

</style>
