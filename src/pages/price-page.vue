<template lang="html">
  <div class="price-page">

    <price-intro />

    <div class="helloworld-ticker">
      <ticker-component parentClass="hw-slider">

        <li
          class="hw-slider__item"
          v-for="index in 8"
          :key="index"
        >
          <span class="black">Hello</span>
          <span class="red">World</span>
        </li>

      </ticker-component>
    </div>

    <section class="price__main">


      <div
        :class="['price__main__item', {'price__main__item-last': index == priceMainItem.length - 1}]"
        v-for="(item, index) in priceMainItem"
        :key="index"
      >
        <div class="price__item__content">
          <span class="price__item__caption">{{ item.caption }}</span>
          <p class="price__item__text">{{ item.text }}</p>
        </div>
        <img :class="'price__image' + index" :src="require('../assets/images/price-image' + index + '.png')" alt="image">
        <div class="price__item__request">
          <button :class="['price__item__button', 'price__item__button' + index]" @click="requestToggle(true)">Обсудить</button>
        </div>
      </div>

    </section>

    <div class="helloworld-ticker">
      <ticker-component parentClass="hw-slider">

        <li
          class="hw-slider__item"
          v-for="index in 8"
          :key="index"
        >
          <span class="black">Hello</span>
          <span class="red">World</span>
        </li>

      </ticker-component>
    </div>

  </div>
</template>

<script>
import priceIntro from '../components/animation-components/price-intro.vue';
import tickerComponent from '../components/default-components/ticker-component.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    priceIntro,
    tickerComponent
  },
  data() {
    return {
      priceMainItem: [
        {
          caption: 'Лендинг',
          text: 'Эффективный сайт для продажи вашего товара в небольшом ассортименте'
        },
        {
          caption: 'Сайт-визитка',
          text: 'Отлично подойдет, если вы хотите скорее заявить о себе'
        },
        {
          caption: 'Промо сайт',
          text: 'Нужна рекламная компания вашему новому продукту? Это лучшее решение'
        },
        {
          caption: 'Корпоративный сайт',
          text: 'Сайт, который сможет максимально подробно рассказать о вашей компании'
        },
        {
          caption: 'Персональный сайт',
          text: 'Прекрасно справится с представлением вашего портфолио'
        },
        {
          caption: 'Реклама и продвижение продукта',
          text: 'Уже заказали сайт и не знаете, как его продвигать? Мы вам поожем!'
        }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'requestToggle'
    ])
  }
}
</script>

<style media="screen">
  .price-page {
    padding-top: 240px;
    background-color: #000;
  }

  .price__intro {
    position: relative;
    max-width: 810px;
    min-height: 305px;
    padding: 0 50px;
    margin: 0 auto;
    padding-bottom: 240px;
  }

  .price__intro__line {
    position: absolute;
    left: 0;
    display: block;
    bottom: 185px;
    width: 100%;
    height: 1px;
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
    background-color: #fff;
  }

  .price__intro__legend {
    font-family: "Trajan Pro 3";
    font-size: 67px;
    font-weight: 400;
    line-height: auto;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
  }

  .price__intro__text {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 55px;
    font-family: "Century Gothic";
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: none;
    color: #fff;
  }

  .price__main {
    max-width: 1080px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .price__main__item {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
  }

  .price__main__item:not(:last-child) {
    border-bottom: 1px solid #fff;
  }

  .price__main__item img {
    position: absolute;
  }

  .price__main__item:not(:first-child, :last-child) img {
    left: 365px;
  }

  .price__item__content {
    width: 360px;
    font-family: "Century Gothic";
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: #fff;
  }

  .price__item__caption {
    display: block;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }

  .price__image0 {
    left: 317px;
  }

  .price__image5 {
    left: 320px;
  }

  .price__item__button {
    width: 360px;
    height: 215px;
    font-family: "Trajan Pro 3";
    font-size: 37px;
    font-weight: 400;
    line-height: auto;
    text-align: none;
    text-transform: uppercase;
    color: #a00000;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(5%, #490a0b), color-stop(55%, #000));
    background: linear-gradient(to top, #490a0b 5%, #000 55%);
  }

  .helloworld-ticker {
    max-width: 1340px;
    padding: 0;
    margin: 0 auto;
    background-color: #fff;
  }

  .hw-slider {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 2400px;
    height: 100px;
  }

  .hw-slider__item {
    margin: 0 15px;
    font-family: "Trajan Pro 3";
    font-size: 37px;
    font-weight: 400;
    line-height: auto;
    text-align: none;
    text-transform: uppercase;
    color: #000;
  }

  @media (min-width: 460px) and (max-width: 1050px) {

    .price-page {
      padding-top: 190px;
    }

    .price__intro {
      max-width: 550px;
      padding: 0 50px;
      margin: 0 auto;
      padding-bottom: 120px;
    }

    .price__intro__line {
      position: absolute;
      display: block;
      bottom: 100px;
    }

    .price__intro__legend {
      font-family: "Trajan Pro 3";
      font-size: 50px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
    }

    @media (min-width: 460px) and (max-width: 620px) {
      .price__intro__legend {
        font-size: 35px;
      }
    }

    .price__intro__text {
      margin-top: 25px;
      font-family: "Century Gothic";
      font-size: 17px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-transform: none;
      color: #fff;
    }

    @media (min-width: 460px) and (max-width: 620px) {
      .price__intro__text {
        font-size: 15px;
      }
    }

    .price__main {
      max-width: 550px;
      padding: 0 50px;
      margin: 0 auto;
    }

    .price__main__item {
      display: block;
      padding-top: 45px;
    }

    .price__main__item img {
      display: none;
    }

    .price__item__content {
      width: 100%;
      font-family: "Century Gothic";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
      color: #fff;
    }

    .price__item__button {
      width: 100%;
      height: 50px;
      font-family: "Trajan Pro 3";
      font-size: 17px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: uppercase;
      color: #a00000;
      background: inherit;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .price__item__caption {
      font-size: 24px;
    }

    .price__item__text {
      font-size: 18px;
    }

    .price__item__button0 {
      background-image: url("../assets/images/price-button0.png");
    }

    .price__item__button1 {
      background-image: url("../assets/images/price-button1.png");
    }

    .price__item__button2 {
      background-image: url("../assets/images/price-button2.png");
    }

    .price__item__button3 {
      background-image: url("../assets/images/price-button3.png");
    }

    .price__item__button4 {
      background-image: url("../assets/images/price-button4.png");
    }

    .price__item__button5 {
      background-image: url("../assets/images/price-button5.png");
    }

    .price__item__request {
      margin-top: 15px;
    }

    .price__item__button {
      height: 60px;
      font-size: 30px;
    }

    .hw-slider {
      height: 60px;
    }

    .hw-slider__item {
      margin-left: 20px;
      font-family: "Trajan Pro 3";
      font-size: 24px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: uppercase;
      color: #000;
    }

  }

  @media (min-width: 0px) and (max-width: 460px) {

    .price-page {
      padding-top: 150px;
    }


    .price__intro {
      max-width: 375px;
      min-height: 205px;
      padding-bottom: 150px;
    }

    .price__intro__line {
      left: 0;
      bottom: 120px;
    }

    .price__intro__legend {
      font-family: "Trajan Pro 3";
      font-size: 28.5px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
    }

    @media (min-width: 0px) and (max-width: 370px) {
      .price__intro__legend {
        font-size: 24px;
      }
    }

    .price__intro__text {
      margin-top: 25px;
      font-family: "Century Gothic";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-transform: none;
      color: #fff;
    }

    .price__main {
      max-width: 375px;
      padding: 0 50px;
      margin: 0 auto;
    }

    .price__main__item {
      display: block;
      padding-top: 45px;
    }

    .price__main__item-last {
      padding-bottom: 45px;
    }

    .price__main__item img {
      display: none;
    }

    .price__item__content {
      width: 100%;
      font-family: "Calibri";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
      color: #fff;
    }

    .price__item__caption {
      margin-bottom: 15px;
      font-size: 21px;
    }

    .price__item__text {
      margin-bottom: 30px;
    }

    .price__item__button {
      width: 100%;
      height: 50px;

      background: inherit;

      font-size: 17px;
    }

    .price__item__button0 {
      background-image: url("../assets/images/price-button0.png");
    }

    .price__item__button1 {
      background-image: url("../assets/images/price-button1.png");
    }

    .price__item__button2 {
      background-image: url("../assets/images/price-button2.png");
    }

    .price__item__button3 {
      background-image: url("../assets/images/price-button3.png");
    }

    .price__item__button4 {
      background-image: url("../assets/images/price-button4.png");
    }

    .price__item__button5 {
      background-image: url("../assets/images/price-button5.png");
    }

    .hw-slider {
      width: 1500px;
      height: 40px;
    }

    .hw-slider__item {
      font-family: "Trajan Pro 3";
      font-size: 17px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: uppercase;
      color: #000;
    }

  }
</style>
