<template lang="html">
  <transition name="openMenuAm">
    <div class="main-menu" v-show="menuIsOpen">
      <div class="menu__container">
        <div class="menu__content">
          <h2 class="menu__caption">
            <transition-group name="letterAm" style="display: flex">
              <span
                v-show="animationNumber > 0 && letterNumber > index"
                v-for="(item, index) in captionLetters"
                :key="item+index"
              >
              {{ item }}
              </span>
            </transition-group>
          </h2>
          <nav class="menu__navigation">

            <menu-nav-list :menuList="menuList" :animationNumber="animationNumber" />

          </nav>
        </div>
        <a class="menu__social-item" href="https://www.instagram.com/hw.webstudio/?hl=ru" target="_blank">Instagram</a>
      </div>
    </div>
  </transition>
</template>

<script>
import menuNavList from '../animation-components/menu-nav-list.vue';
import {mapState} from 'vuex';

export default {
  components: {
    menuNavList
  },
  data() {
    return {
      animationNumber: 0,
      letterNumber: -1,
      interval: null,
      captionLetters: [
        'M',
        'e',
        'n',
        'u'
      ],
      menuList: [
        {
          name: 'Гланый экран',
          route: 'home'
        },
        {
          name: 'О студии',
          route: 'about'
        },
        {
          name: 'Портфолио',
          route: 'portfolio'
        },
        {
          name: 'Цены и услуги',
          route: 'price'
        },
        {
          name: 'Контакты',
          route: 'contacts'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'windowWidth',
      'menuIsOpen'
    ])
  },
  methods: {

    nextAnimation() {

      if(this.windowWidth > 460) {
        setTimeout(()=> {
          this.animationNumber = 1;

          this.nextLetterNumber();
        }, 300);
      }

      if(this.windowWidth < 460) {
        setTimeout(()=> {
          this.animationNumber = 2;
        }, 300);
      }
      else {
        setTimeout(()=> {
          this.animationNumber = 2;
        }, 800);
      }

    },
    nextLetterNumber() {
      this.interval = setInterval(()=> {
        this.letterNumber += 1;
      }, 200);

    }
  },
  watch: {
    menuIsOpen() {
      if(this.menuIsOpen) {
        document.body.style.overflow = 'hidden';

        setTimeout(()=> {
          this.nextAnimation();
        }, 500)
      }
      else {
        document.body.style.overflow = 'auto';
        this.letterNumber = -1;
        this.animationNumber = 0;
      }
    },
    letterNumber() {
      if(this.letterNumber > 4) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  }
}
</script>

<style lang="css">

  .main-menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;

    padding-top: 50px;
    width: 100%;
    min-height: 840px;
    height: 100%;

    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    background-color: #000;
  }

  .menu__container {
    position: relative;
    max-width: 1000px;
    height: 100%;
    padding: 0 50px;
    margin: 0 auto;

    border-bottom: 3px solid #fff;
  }

  .menu__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;

    height: calc(100vh - 200px);
  }

  .menu__caption {
    font-family: "Engry";
    font-size: 118px;
    font-weight: 400;
    line-height: 100px;
    text-align: none;
    text-transform: uppercase;
    -webkit-text-stroke: 5px #321818;

    transition: .3s all;
  }

  .menu__caption:hover {
    color: #1b1b1b;
  }

  .menu__navigation {
    margin-left: 180px;
  }

  .menu__list {
    min-height: 300px;
  }

  .menu__item {
    position: relative;
    display: block;
    margin-bottom: 25px;
    font-family: "Century Gothic";
    font-size: 29px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: #fff;
  }

  .menu__item::before {
    content: "00";
    position: absolute;
    top: 7px;
    left: -120px;
    -webkit-transform: rotateZ(-90deg);
            transform: rotateZ(-90deg);
    font-family: "Century Gothic";
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
  }

  .menu__item1::before {
    content: "01";
  }

  .menu__item2::before {
    content: "02";
  }

  .menu__item3::before {
    content: "03";
  }

  .menu__item4::before {
    content: "04";
  }

  .menu__social-networks {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    width: 245px;
  }

  .menu__social-item {
    font-family: "Century Gothic";
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: #fe0000;
  }

  @media (min-width: 460px) and (max-width: 1050px) {
    .menu__content {
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }

    .menu__caption {
      display: none;
    }

    .menu__navigation {
      margin-left: 100px;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .menu__content {
      height: 100vh;
    }

    .menu__caption {
      display: none;
    }

    .menu__navigation {
      margin-left: 65px;
    }

    .menu__item {
      margin-bottom: 20px;
      font-family: "Century Gothic";
      font-size: 25px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
      color: #fff;
    }

    .menu__item::before {
      left: -65px;
      font-family: "Century Gothic";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
    }

    .menu__social-networks {
      width: 180px;
    }

    .menu__social-item {
      font-family: "Century Gothic";
      font-size: 12.5x;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
      color: #fe0000;
    }
  }
</style>

<style src="@/assets/styles/animations/main-menu-animation.css"></style>
