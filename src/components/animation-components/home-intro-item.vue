<template lang="html">
  <ul class="home__intro__list">
    <li
      class="home__intro__item"
      v-for="(item, index) in homeIntroList"
      :key="index"
    >
      <div class="home__intro__item-wrapper">

        <transition name="introNumberAm">
          <span class="home__intro__item__number" v-show="animationStage > 1 && animationNumber > index">{{ '0' + (index + 1) }}</span>
        </transition>

        <span :class="{'home__intro__item__line': animationStage > 0 && animationLine > index}"></span>
      </div>

      <transition name="introTextAm">
        <div class="intro__text-wrapper" v-show="animationStage > 2 && animationText > index">
          <p class="home__intro__item__text">{{ item }}</p>
        </div>
      </transition>

    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      animationStart: false,
      animationStage: 0,
      animationLine: 0,
      animationNumber: 0,
      animationText: 0,
      newInterval: null,
      homeIntroList: [
        'Повышение продаж за счет увеличения конверсии',
        'Уникальное позиционирование бренда и поддержание имиджа компании в глазах покупателя',
        'Преимущество перед конкурентами путём демонстрирования достоинств продукта или услуг'
      ]
    }
  },
  methods: {
    nextAnimation() {
      this.animationStage = 1;

      setTimeout(()=> {
        this.animationStage = 2;
      }, 300)

      setTimeout(()=> {
        this.animationStage = 3;
      }, 500)

      this.newInterval = setInterval(()=> {
        this.animationLine += 1;

        setTimeout(()=> {
          this.animationNumber += 1;
        }, 300);

        setTimeout(()=> {
          this.animationText += 1;
        }, 450);

      }, 500)

    }
  },
  watch: {
    animationLine() {
      if(this.animationLine > 3) {
        clearInterval(this.newInterval);
        this.newInterval = null;
      }
    },
    scrollTop() {
      if(this.scrollTop > 1425 && !this.animationStart) {
        this.animationStart = true;
      }
    },
    animationStart() {
      this.nextAnimation();
    }
  },
  created() {
    document.addEventListener('scroll', ()=> {
      this.scrollTop = window.scrollY;
    })
  }
}
</script>

<style lang="css" scoped>

  .intro__text-wrapper {
    position: relative;

    width: 200px;
    min-height: 125px;

    overflow: hidden;
  }

  .home__intro__item__text {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  .home__intro__item__line {
    animation: .5s lineKeys ease;
  }

  @keyframes lineKeys {
    0% {
      height: 0px;
    }

    100% {
      height: 75px;
    }
  }

  .introNumberAm-enter-active, .introNumberAm-leave-active {
    transition: .5s all ease;
  }

  .introNumberAm-enter, .introNumberAm-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .introTextAm-enter-active, .introTextAm-leave-active {
    animation: .5s introTextKeys ease;
  }

  @keyframes introTextKeys {
    0% {
      width: 0px;

      transform: translateX(-30px);
      opacity: 0;
    }

    100% {
      width: 200px;

      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
