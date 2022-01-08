<!-- Новое -->
<template lang="html">
  <section class="portfolio-page">

    <portfolio-slider captionColor="black" />

  </section>
</template>

<script>
import portfolioSlider from '../components/project-components/portfolio-slider.vue';

export default {
  components: {
    portfolioSlider
  }
}
</script>

<style lang="css">
  .portfolio-page {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    box-sizing: border-box;
    background-color: #fff;
  }

  .portfolio__toggler-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    width: 420px;
    min-height: 40px;
    margin: 0 auto;
    margin-top: 0px;
    overflow: hidden;
  }

  .portfolio__toggler {
    position: relative;
    width: 200px;
    height: 40px;
    border-bottom: 2px solid #a00000;
    transition: .3s all ease;
  }

  .portfolio__slider {
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1370px;
    height: 525px;
    margin: 0 auto;
    overflow: hidden;
  }

  .slider-section {
    height: 640px;
    padding-top: 75px;
    box-sizing: border-box;
  }

  .portfolio-slider-background {
    display: flex;
    align-items: flex-end;

    overflow: hidden;

    font-family: "Engry";
    font-size: 85px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 15px;
  }

  @media(min-width: 460px) {
    .portfolio-background-animate {
      height: 160px;

      animation: .4s portfolioBackgroundKeys licubic-bezier(0.54, 0.02, 0.32, 0.98)near;
    }

    @keyframes portfolioBackgroundKeys {
      0% {
        height: 0px;
      }

      100% {
        height: 160px;
      }
    }
  }

  .portfolio__list {
    position: absolute;
    top: 0;
    left: 0;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-transition: 1s all ease-out;
    transition: 1s all ease-out;
  }

  .portolio__item {
    transition: 1s all ease-out;
  }

  .portolio__item:not(:last-child) {
    margin-right: 50px;
  }

  .portolio__item__image {
    display: block;
    width: 675px;
    height: 480px;

    background-size: cover;
    background-repeat: no-repeat;
  }

  .portolio__item__name {
    display: block;
    margin-top: 20px;
    font-family: "Century Gothic";
    font-size: 21px;
    font-weight: 700;
    line-height: normal;
    text-align: right;
    text-transform: uppercase;
    color: #000;
  }

  @media (min-width: 460px) and (max-width: 1050px) {

    .slider-section {
      height: 325px;
      padding-top: 0;
    }

    .portfolio__slider {
      height: 285px;
    }

    .portfolio-slider-background {
      font-size: 58px;
    }

    @media (max-width: 750px) {
      .portfolio-slider-background {
        font-size: 40px;
      }
    }

    @media (max-width: 550px) {
      .portfolio-slider-background {
        font-size: 32px;
      }
    }

    .portolio__item__image {
      width: 365px;
      height: 260px;
    }

    .portolio__item__name {
      margin-top: 10px;
      font-size: 12.5px;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .portfolio-page {
      padding-top: 85px;
      padding-bottom: 0;
    }

    .slider-section {
      padding-top: 0;
    }

    .portfolio__slider {
      max-width: 375px;
      width: 100%;
      height: auto;
      padding: 0 20px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .portfolio__toggler-wrapper {
      display: none;
    }

    .portfolio-slider-background {
      display: none;
    }

    .portfolio__list {
      position: static;

      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
          -ms-flex-pack: start;
              justify-content: flex-start;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      margin-top: 50px;
    }

    .portolio__item {
      width: calc(100vw - 40px);
      margin: 0;
      margin-bottom: 25px;
    }

    .portolio__item:not(:last-child) {
      margin-right: 0;
    }

    .portolio__item__image {
      width: 100%;
      height: 170px;
      margin: 0;

      background-size: cover;
    }

    .portolio__item__name {
      margin-top: 10px;
      font-family: "Century Gothic";
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      text-transform: capitalize;
      color: #000;
    }

    @media (min-width: 0px) and (max-width: 400px) {
      .portolio__item {
        width: calc(100vw - 40px);
      }
    }
  }
</style>
