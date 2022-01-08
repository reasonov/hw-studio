<template lang="html">
  <section class="home-page">
    <div class="home__main-wrapper" @wheel.prevent="scrollToPortfolio($event, 'portfolio')" ref="homeMain">
      <div class="home-page__container container">
        
        <home-logo :class="{'home__logo__animate': animationEnd == 'toPortfolio'}" />

        <home-description :class="{'home__description__animate': animationEnd == 'toPortfolio'}" />

        <p class="web-studio">web studio</p>
        <div class="home__background"></div>
        <div class="home__light"></div>

        <home-scroll-line :animationStage="animationStage" />

        <next-page-popup :class="{'home__popup__animate': animationEnd == 'toPortfolio'}" />

      </div>
    </div>
    <div
      :class="['home__portfolio', {'home__portfolio-animate': animationStage > 3 || windowWidth < 600}]"
      @wheel="scrollToMain($event, 'homeMain')"
      ref="portfolio"
    >

      <portfolio-slider :animationStage="animationStage" />

    </div>
    <div class="home__intro">
      <div class="home__intro__container container">
        <h2 class="home__intro__caption">
          Какие задачи решает<br>
          <span class="home__intro__hw red">Hello World</span>
          ?
        </h2>

        <home-intro-item />

        <div class="home__intro__legend-block">
          <h4 class="home__intro__legend">Мы ищем клиентов, готовых создать лучший продукт в их нише.</h4>
          <p class="home__intro__text">
            Наша команда состоит из прогрессивных специалистов, готовых профессионально помочь с решением ваших задач
          </p>
        </div>
      </div>
    </div>

    <div class="home__about">
      <h4 class="home__about__caption">Кто будет работать<br> для вас?</h4>

      <about-team background="background-white" color="black" />

    </div>

  </section>
</template>

<script>
import homeLogo from '../components/animation-components/home-logo.vue';
import homeDescription from '../components/animation-components/home-description.vue';
import HomeScrollLine from '../components/animation-components/home-scroll-line.vue';
import homeIntroItem from '../components/animation-components/home-intro-item.vue';
import aboutTeam from '../components/project-components/about-team.vue';
import portfolioSlider from '../components/project-components/portfolio-slider.vue';
import nextPagePopup from '../components/project-components/next-page-popup.vue';

export default {
  components: {
    homeLogo,
    homeDescription,
    HomeScrollLine,
    homeIntroItem,
    aboutTeam,
    portfolioSlider,
    nextPagePopup
  },
  data() {
    return {
      animationStage: 0,
      animationEnd: null
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    scrollToPortfolio(ev, section) {
      if(ev.deltaY > 0 && !this.animationEnd) {
        this.animationEnd = 'toPortfolio';

        this.scrollAnimation(ev, section);
      }
    },
    scrollToMain(ev, section) {

      let elem = this.$refs.portfolio;
      let elemPosition = elem.getBoundingClientRect().y;

      if(this.animationEnd) {
        ev.preventDefault();
      }

      if(ev.deltaY < 0 && elemPosition > -150 && !this.animationEnd) {
        this.animationEnd = 'toMain';

        ev.preventDefault();

        this.scrollAnimation(ev, section);
      }

    },
    async scrollAnimation(ev, section){
      // Получение ссылки на элемент
      let elem = this.$refs[section];
      // Число циклов в анимации, ее качество
      let count = 100;
      //Откуда начинается скролл
      let scrollStart = window.scrollY;
      // Определение раастояние от начала страницы до элемента
      let top = elem.getBoundingClientRect().y;
      // Определение раастояние от начала страницы до элемента
      // Вычисление перемещения (скролла) за одну итерацию
      let delta = (top - 90) / count;
      // Начало анимации
      let scroll = scrollStart;
      for (let i = 0; i < 100; i++) {
          // Ожидание 1 секунды, деленного на качетсво анимации
          await new Promise(resolve => {
              window.setTimeout(function () {
                  resolve()
              }, 1500 / count)
          })
          if(i < 25) {
            scroll += delta - 2;
          }
          else if(i > 25 && i < 75) {
            scroll += delta + 4;
          }
          else {
            scroll += delta - 2;
          }

          // Выполнение перемещения на значение delta с учетом текущего скролла
          window.scrollTo(0, scroll)
        }
    }
  },
  watch: {
    animationEnd() {
      if(this.animationEnd == 'toPortfolio') {

        this.animationStage = 1;

        setTimeout(()=> {
          this.animationStage = 2;
        }, 1300)

        setTimeout(()=> {
          this.animationStage = 3;
        }, 1300)

        setTimeout(()=> {
          this.animationStage = 4;
        }, 2000)

        setTimeout(()=> {
          this.animationStage = 6;
        }, 3000);

        setTimeout(()=> {
          this.animationEnd = null;
        }, 4000);
      }
      else if(this.animationEnd == 'toMain') {

        setTimeout(()=> {
          this.animationStage = 0;
        }, 1000)

        setTimeout(()=> {
          this.animationEnd = null;
        }, 4000);
      }
    }
  }
}
</script>

<style lang="css">
  .home-page__container {
    position: relative;
    height: 100vh;
    padding-top: 100px;
    padding-bottom: 100px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  .home-page__container::before {
    display: none;
    content: "";
    position: absolute;
    left: calc(50% - 350px);
    bottom: -350px;
    z-index: -1;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: #790909;
    background: radial-gradient(circle, #2a0800 0%, #010101 70%);
  }

  .home__main-wrapper {
    position: relative;
    z-index: 2;

    background-color: #000;
  }

  .home__caption {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 265px;

    font-family: "Trajan Pro 3";
    font-size: 150px;
    font-weight: 400;
    line-height: 120px;
    text-align: none;
    text-transform: uppercase;
    color: #fff;
  }

  .home__caption--red {
    display: block;
    color: #a00000;
  }

  .page-number-wrapper {
    display: flex;
    align-items: center;

    width: 420px;
    height: 36px;
    margin-top: 80px;
  }

  .page-number {
    margin-left: auto;

    font-family: "Century Gothic";
    font-size: 29px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: #fff;
  }

  .page-number-line {
    width: 350px;
    height: 1;
    box-sizing: border-box;

    border-bottom: 1px solid #fff;
    background-color: #000;
  }

  .home__description {
    margin-top: 40px;
    font-family: "Century Gothic";
    font-size: 17px;
    font-weight: bold;
    line-height: normal;
    text-align: none;
    text-transform: lowercase;
    color: #fff;
    letter-spacing: 2px;
  }

  .web-studio {
    position: absolute;
    bottom: 100px;
    left: 50px;

    font-family: "Century Gothic";
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: lowercase;
    color: #bdbdbd;
  }

  .home__background {
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: -1;
    width: 444px;
    height: calc(100vh - 50px);
    background-image: url("../assets/images/home-bg.png");
    background-position: right top;
    background-repeat: no-repeat;
  }

  .home__light {
    position: absolute;
    bottom: -358px;
    left: 50%;
    z-index: -1;

    width: 716px;
    height: 716px;

    transform: translateX(-50%);

    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 0, 0.68) 25.52%, rgba(177, 0, 0, 0.311667) 69.79%, rgba(111, 0, 0, 0) 100%);
  }

  .scroll-line {
    position: absolute;
    bottom: 0px;
    left: 50%;

    width: 2px;
    height: 200px;

    transition: 1s all ease-out;
  }

  .scroll-line0 {
    position: absolute;
    top: 0;
    left: 0;

    width: 2px;
    height: 100px;

    transition: 1s all linear;

    background-color: #fff;
  }

  .scroll-line1 {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 2px;
    height: 100px;

    transition: 1s all linear;

    background-color: #fff;
  }

  .home__intro {
    padding-top: 100px;
    padding-bottom: 75px;
  }

  .home__intro__caption {
    font-family: "Trajan Pro 3";
    font-size: 50px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: none;
    color: #000;
  }

  .home__intro__hw {
    position: relative;
  }

  .home__intro__hw:before {
    width: 660px;
    content: "Hello World";
    position: absolute;
    top: -20px;
    left: -120px;
    display: block;
    font-family: "Trajan Pro 3";
    font-size: 83px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: rgba(0, 0, 0, 0.05);
    z-index: -1;
  }

  .home__intro__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    max-width: 1175px;
    margin: 175px auto;
  }

  .home__intro__item {
    display: flex;
    justify-content: flex-start;

    width: 290px;
    min-height: 175px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-family: "Century Gothic";
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: #000;
  }

  .home__intro__item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 70px;
  }

  .home__intro__item__number {
    display: block;
    transform: rotateZ(-90deg);

    font-weight: 600;
  }

  .home__intro__item__line {
    display: block;
    width: 3px;
    height: 75px;
    margin-top: auto;

    background-color: #a00000;
  }

  .home__intro__legend-block {
    max-width: 835px;
    margin: 0 auto;
  }

  .home__intro__legend {
    font-family: "Trajan Pro 3";
    font-size: 33px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: lowercase;
    color: #000;
  }

  .home__intro__text {
    margin-top: 20px;
    font-family: "Century Gothic";
    font-size: 21px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: none;
    color: #000;
  }

  .home__about {
    max-width: 1340px;
    padding: 0;
    margin: 0 auto;
  }

  .home__about__caption {
    margin-bottom: 50px;
    font-family: "Trajan Pro 3";
    font-size: 50px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: lowercase;
    color: #000;
  }

  .home__portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100vh;

    transition: 1s all;

    background: linear-gradient(to bottom, #000 100%, #fff 100%);
  }

  .background-white {
    background-color: #fff;
  }

  @media (min-width: 460px) and (max-width: 1050px) {

    .home-page {
      overflow: hidden;
    }

    .home-page__container {
      padding-top: 90px;
      padding-bottom: 50px;
    }

    .home-page__container:before {
      max-width: 700px;
      width: 100vw;
    }

    .home__caption {
      min-height: 250px;
      font-size: 137px;
      line-height: 105px;
    }

    .home__intro__list {
      min-height: 600px;
    }

    @media (min-width: 460px) and (max-width: 750px) {
      .home__caption {
        font-size: 95px;
        line-height: 75px;
      }
    }

    .home__description {
      font-size: 13px;
    }

    .page-number-wrapper {
      width: 350px;
    }

    .page-number-line {
      width: 285px;
    }

    .scroll-line {
      height: 150px;
    }

    .scroll-line0 {
      height: 75px;
    }

    .scroll-line1 {
      height: 75px;
    }

    .web-studio {
      position: absolute;
      left: 50px;
      bottom: 50px;
    }

    .home__background {
      right: 35px;
      width: 285px;
    }

    .home__intro {
      padding-top: 100px;
    }

    .home__intro__caption {
      font-size: 37.5px;
    }

    .home__intro__hw:before {
      top: 0px;
      left: -60px;
      width: 420px;
      font-size: 55px;
    }

    .home__intro__list {
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      margin-top: 60px;
      margin-bottom: 120px;
    }

    .home__intro__item {
      min-height: auto;
      padding: 0;
      margin-top: 75px;
      margin-left: 35px;
      margin-right: 35px;
      -webkit-box-sizing: content-box;
              box-sizing: content-box;
      font-size: 17px;
      text-align: right;
    }

    .home__intro__legend {
      font-size: 21px;
    }

    .home__intro__text {
      font-size: 17px;
    }

    .home__about__caption {
      font-size: 37.5px;
    }

  }

  @media (min-width: 0px) and (max-width: 460px) {

    .home__main-wrapper {
      height: 840px;
    }

    .home-page__container {
      min-height: 840px;
      height: 100vh;
      padding-top: 120px;
      padding-bottom: 40px;
    }

    .home-page__container::before {
      left: -225px;
      top: 130px;
      bottom: auto;
      width: 450px;
      height: 450px;
    }

    .home__caption {
      min-height: 140px;

      font-family: "Trajan Pro 3";
      font-size: 83px;
      font-weight: 400;
      line-height: 70px;
      text-align: none;
      text-transform: uppercase;
      color: #fff;
    }

    .home__intro__list {
      min-height: 600px;
    }

    @media (min-width: 0) and (max-width: 370px) {
      .home__caption {
        font-size: 66px;
      }
    }

    .page-number-wrapper {
      width: 320px;
      margin-top: 40px;
    }

    .page-number-line {
      width: 245px;
    }

    .page-number {
      margin-top: 0;
      margin-left: 50px;
      font-family: "Century Gothic";
      font-size: 17px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
      color: #fff;
    }

    .home__description {
      margin-top: 20px;
      font-family: "Century Gothic";
      font-size: 12.5px;
      font-weight: bold;
      line-height: normal;
      text-align: none;
      text-transform: lowercase;
      color: #fff;
      letter-spacing: 1px;
    }

    .web-studio {
      display: none;
    }

    .home__background {
      top: auto;
      right: 0px;
      bottom: 90px;

      width: 100%;
      height: 340px;

      background-position: 0px -135px;
      background-size: cover;
    }

    .home__light {
      bottom: 50%;
      left: -490px;

      transform: translateY(50%);
    }

    .home__intro {
      padding-bottom: 50px;
    }

    .home__intro__caption {
      font-size: 25px;
    }

    .home__intro__hw:before {
      top: 0px;
      left: -240px;
      font-size: 40px;
    }

    .home__intro__list {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      min-height: 600px;
      margin-top: 60px;
      margin-bottom: 40px;
    }

    .home__intro__item {
      margin-bottom: 40px;
    }

    .home__intro__item-wrapper {
      display: flex;
    }

    .home__intro__legend {
      font-size: 21px;
    }

    .home__intro__text {
      font-size: 12.5px;
    }

    .scroll-line {
      display: none;
    }

    .home__portfolio {
      background: #fff;
    }

    .home__about__caption {
      font-size: 25px;
    }
  }
</style>

<style src="@/assets/styles/animations/home-animation.css"></style>
