<template lang="html">
  <div class="about__intro__bottom">
    <div class="about__intro__container">
      <div class="about__side-text">

        <transition name="sideTextAm">
          <span v-show="animationStage > 1">Кто мы такие</span>
        </transition>
        <transition name="sideLineAm">
          <span class="side-text__line" v-show="animationStage > 0"></span>
        </transition>

      </div>

      <transition name="aboutBlureAm">
        <div class="about__bottom__blure" v-show="animationStage < 3"></div>
      </transition>

      <h3 class="about__bottom__caption">
        <span>Hello</span>
        <span class="red">World</span>
      </h3>
      <span class="about__bottom__undercaption">- Это люди</span>
      <p class="about__bottom__text">
        Hello World — специалисты, выполняющие работы за деньги так же хорошо,
        как и без них.
        <span class="about__bottom__text__p">
          <span class="red">Любовь</span> к делу — вот что движет нами.
          Hello World — это бесконечная вера в команду и ее потенциал,
          без которых ничего бы не получилось.
          Поэтому мы постоянно работаем
          над непрерывным ростом и развитием компании.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationStage: null,
      scrollTop: 0
    }
  },
  methods: {
    nextAnimtion() {
      if(!this.animationStage) {
        setTimeout(()=> {
          this.animationStage = 1;
        }, 300);

        setTimeout(()=> {
          this.animationStage = 2;
        }, 600);

        setTimeout(()=> {
          this.animationStage = 3;
        }, 1300);
      }
    }
  },
  watch: {
    scrollTop() {
      if(this.scrollTop > 400) {
        this.nextAnimtion();
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', ()=> {
      this.scrollTop = window.scrollY;
    })
  },
  beforeDestroyed() {
    window.removeEventListener('scroll');
  }
}
</script>

<style lang="css" scoped>

  .about__bottom__blure {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.7);
  }

  .sideTextAm-enter-active, .sideTextAm-leave-active {
    display: block;
    transition: .3s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .sideTextAm-enter, .sideTextAm-leave-to {
    transform: translateX(-30px);
    opacity: 0;
  }

  .sideLineAm-enter-active {
    animation: .3s sideLineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  @keyframes sideLineKeys {
    0% {
      width: 0px;
    }

    100% {
      width: 75px;
    }
  }

  .aboutBlureAm-enter-active, .aboutBlureAm-leave-active {
    animation: .7s blureKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  @keyframes blureKeys {
    0% {
      height: 100%;
    }

    100% {
      height: 0%;
    }
  }
</style>
