<template lang="html">
  <div class="about__intro__top">
    <div class="about__intro__container">

      <transition name="aboutCaptionAm">
        <h2 class="about__intro__legend" v-show="animationStage > 0">Создаем сайты и интерфейсы</h2>
      </transition>
      <transition name="aboutTextAm">
        <p class="about__intro__text" v-show="animationStage > 2">Которые помогают <span class="red">зарабатывать больше</span> конкурентов</p>
      </transition>
      <span :class="['about__intro__line', {'about__intro__line-start': animationStage < 2}]"></span>
    </div>
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
    nextAnimtion() {
      setTimeout(()=> {
        this.animationStage = 1;
      }, 500);

      setTimeout(()=> {
        this.animationStage = 2;
      }, 900);

      setTimeout(()=> {
        this.animationStage = 3;
      }, 1250);
    }
  },
  mounted() {
    this.nextAnimtion();
  }
}
</script>

<style lang="css" scoped>

  .about__intro__line-start {
    bottom: 50px;
  }

  @media(min-width: 460px) and (max-width: 1050px) {
    .about__intro__line-start {
      bottom: 115px;
    }

    @media (min-width: 460px) and (max-width: 620px) {

      .about__intro__line {
        bottom: 40px;
      }

      .about__intro__line-start {
        bottom: 140px;
      }
    }
  }

  @media(min-width: 0px) and (max-width: 460px) {
    .about__intro__line-start {
      bottom: 145px;
    }
  }

  .aboutCaptionAm-enter-active, .aboutCaptionAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .aboutCaptionAm-enter, .aboutCaptionAm-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }

  .aboutTextAm-enter-active, .aboutTextAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .aboutTextAm-enter, .aboutTextAm-leave-to {
    opacity: 0;
  }

</style>
