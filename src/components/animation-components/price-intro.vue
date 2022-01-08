<template lang="html">
  <div class="price__intro">
    <transition name="priceCaptionAm">
      <h2 class="price__intro__legend" v-show="animationStage > 0">Услуги для вашего продвижения</h2>
    </transition>
    <transition name="priceTextAm">
      <p class="price__intro__text" v-show="animationStage > 2">
        Сайты, которые отличаются неповторимым <span class="red">дизайном</span>
        и продуманным <span class="red">функционалом</span>.
        Наши сайты решают <span class="red">бизнес-задачи</span>
        и выводят бренд на новый уровень восприятия
      </p>
    </transition>

    <span :class="['price__intro__line', {'price__intro__line-start': animationStage < 2}]"></span>

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

  .price__intro__line-start {
    bottom: 400px;
  }

  @media(min-width: 460px) and (max-width: 1050px) {
    .price__intro__line-start {
      bottom: 255px;
    }

    @media (min-width: 460px) and (max-width: 620px) {
      .price__intro__line {
        bottom: 200px;
      }

      .price__intro__line-start {
        bottom: 350px;
      }
    }

    @media (min-width: 460px) and (max-width: 500px) {
      .price__intro__legend {
        font-size: 28px;
      }

      .price__intro__line {
        bottom: 220px;
      }

      .price__intro__line-start {
        bottom: 360px;
      }
    }
  }

  @media(min-width: 0px) and (max-width: 460px) {
    .price__intro__line-start {
      bottom: 240px;
    }
  }

  .priceCaptionAm-enter-active, .priceCaptionAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .priceCaptionAm-enter, .priceCaptionAm-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }

  .priceTextAm-enter-active, .priceTextAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .priceTextAm-enter, .priceTextAm-leave-to {
    opacity: 0;
  }
</style>
