<template lang="html">
  <div class="about-page">
    <section class="about__intro">

      <about-intro-top />

      <about-intro-bottom />

    </section>
    <section class="about__team">
      <about-team background="background-black" color="white" />
    </section>

  </div>
</template>

<script>
import aboutIntroTop from '../components/animation-components/about-intro-top.vue';
import aboutIntroBottom from '../components/animation-components/about-intro-bottom.vue';
import aboutTeam from '../components/project-components/about-team.vue';

export default {
  components: {
    aboutIntroTop,
    aboutIntroBottom,
    aboutTeam
  }
}
</script>

<style lang="css">

  .about__intro__top {
    padding-top: 240px;
    padding-bottom: 235px;

    color: #fff;
    background-color: #000;
  }

  .about__intro__container {
    position: relative;
    max-width: 710px;
    min-height: 225px;
    padding: 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .about__intro__legend {
    margin-bottom: 25px;

    font-family: "Trajan Pro 3";
    font-size: 71px;
    font-weight: 400;
    line-height: auto;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
  }

  .about__intro__text {
    position: relative;
    font-family: "Century Gothic";
    font-size: 21px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: lowercase;
    color: #fff;
  }

  .about__intro__line {
    position: absolute;
    bottom: -50px;
    left: 0px;

    width: 100%;
    height: 1px;
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);

    background-color: #fff;
  }

  .about__intro__bottom {
    padding-top: 170px;
    padding-bottom: 200px;
  }

  .about__side-text {
    position: absolute;
    top: 55px;
    left: -175px;

    min-width: 130px;
    min-height: 30px;

    -webkit-transform: rotateZ(-90deg);
            transform: rotateZ(-90deg);
    font-family: "Bahnschrift";
    font-size: 21px;
    font-weight: 600;
    line-height: normal;
    text-align: none;
    text-transform: none;
    color: #000;
  }

  .side-text__line {
    position: absolute;
    top: 11px;
    left: -140px;
    display: block;
    width: 75px;
    height: 2px;
    background-color: #a00000;
  }

  .about__bottom__caption {
    font-family: "Trajan Pro 3";
    font-size: 45px;
    font-weight: 400;
    line-height: auto;
    text-align: none;
    text-transform: uppercase;
    color: #000;
  }

  .about__bottom__undercaption {
    display: block;
    margin-top: 10px;
    margin-bottom: 40px;
    font-family: "Trajan Pro 3";
    font-size: 29px;
    font-weight: 400;
    line-height: auto;
    text-align: none;
    text-transform: uppercase;
    color: #000;
  }

  .about__bottom__text {
    font-family: "Calibri";
    font-size: 19px;
    font-weight: 400;
    line-height: 25px;
    text-align: none;
    text-transform: none;
    color: #000;
  }

  .about__team {
    background-color: #000;
  }

  .background-black {
    background-color: #000;
  }

  .team__design {
    overflow: hidden;
  }

  .design__ticker-wrapper {
    border-bottom: 2px solid #a00000;
  }

  .about__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 2400px;
    height: 115px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-family: "Trajan Pro 3";
    font-size: 25px;
    font-weight: 400;
    line-height: auto;
    text-align: none;
    text-transform: uppercase;
    color: #fff;
  }

  .about__item {
    margin: 0 15px;
  }
  .about__item:hover {
    color: #a00000;
  }

  .design__slider {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    max-width: 1370px;
    margin: 65px auto;
    transition: .5s all ease-out;
  }

  .design__slider__item {
    position: relative;
    min-width: 300px;
    min-height: 430px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0 25px;
    border: 1px solid;
    -o-border-image: linear-gradient(to right, #f90404, #6a6261) 70% 0%;
       border-image: -webkit-gradient(linear, left top, right top, from(#f90404), to(#6a6261)) 70% 0%;
       border-image: linear-gradient(to right, #f90404, #6a6261) 70% 0%;
    border-image-slice: 1;
    text-align: center;

    background-size: cover;
    background-repeat: no-repeat;
  }

  .design__slider__item0 {
    background-image: url('../assets/images/teammate0.jpg')
  }

  .design__slider__item1 {
    background-image: url('../assets/images/teammate1.jpg')
  }

  .design__slider__item2 {
    background-image: url('../assets/images/teammate2.jpg')
  }

  .design__slider__item3 {
    background-image: url('../assets/images/teammate3.jpg')
  }

  .design__slider__item4 {
    background-image: url('../assets/images/teammate4.jpg')
  }

  .design__slider__text-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.7);
  }

  .about__slider__caption {
    display: block;
    margin-top: 205px;
    margin-bottom: 10px;
    font-family: "Century Gothic";
    font-size: 21px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: capitalize;
    color: #fff;
  }

  .about__slider__text {
    width: 145px;
    margin: 0 auto;
    font-family: "Calibri";
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-transform: none;
    color: #fff;
  }

  .developers__ticker-wrapper {
    border-top: 2px solid #a00000;
  }

  .black {
    color: #000;
  }

  .background-black {
    background-color: #000;
  }

  @media (min-width: 460px) and (max-width: 1050px) {
    .about__intro__top {
      padding-top: 240px;
    }

    .about__intro__legend {
      font-size: 50px;
    }

    @media (min-width: 460px) and (max-width: 620px) {
      .about__intro__legend {
        font-size: 40px;
      }
    }

    @media (min-width: 460px) and (max-width: 550px) {
      .about__intro__legend {
        font-size: 34px;
      }
    }

    .about__intro__text {
      font-size: 17px;
    }

    .about__intro__text:before {
      top: 55px;
      left: 0;
      width: 100%;
    }

    .about__intro__container {
      max-width: 550px;
      padding: 0 50px;
      margin: 0 auto;
    }

    .about__intro__line {
      bottom: 10px;
    }

    .about__page-toggler {
      width: 300px;
      height: 70px;
      font-size: 25px;
    }

    @media (min-width: 460px) and (max-width: 650px) {
      .about__page-toggler {
        width: 205px;
      }
    }

    .about__side-text {
      left: -90px;
    }

    @media (min-width: 460px) and (max-width: 740px) {
      .about__side-text {
        position: relative;
        top: -70px;
        left: 145px;

        transform: none;
      }
    }

    .design__slider__item {
      min-width: 290px;
      width: 290px;
      height: 380px;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .about-page {
      overflow: hidden;
    }

    .about__intro__top {
      padding-top: 160px;
      padding-bottom: 140px;
    }

    .about__intro__container {
      max-width: 375px;
      padding: 0 20px;
      margin: 0 auto;
    }

    .about__intro__legend {
      font-family: "Trajan Pro 3";
      font-size: 30px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
    }

    .about__intro__text {
      font-family: "Century Gothic";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-transform: lowercase;
      color: #fff;
    }

    .about__intro__line {
      bottom: 55px;
    }

    .about__intro__bottom  {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    .about__side-text {
      position: relative;
      top: auto;
      left: auto;
      -webkit-transform: none;
              transform: none;
      margin-left: 100px;
      font-family: "Bahnschrift";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: none;
      color: #000;
    }

    .side-text__line {
      top: 5px;
      left: -94px;

      width: 50px;
      height: 1px;
    }

    .about__bottom__caption {
      margin-top: 30px;
      font-family: "Trajan Pro 3";
      font-size: 44px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: uppercase;
      color: #000;
    }

    .about__bottom__undercaption {
      margin-top: -10px;
      margin-bottom: 40px;
      font-family: "Trajan Pro 3";
      font-size: 21px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: lowercase;
      color: #000;
    }

    .about__bottom__text {
      max-width: 280px;
      font-family: "Calibri";
      font-size: 12.5px;
      font-weight: 400;
      line-height: 18px;
      text-align: none;
      text-transform: none;
      color: #000;
    }

    .about__bottom__text__p {
      display: block;
      margin-top: 10px;
    }

    .about__team {
      position: relative;
    }

    .about__list {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
          -ms-flex-pack: start;
              justify-content: flex-start;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      width: 1330px;
      height: 90px;
      font-family: "Trajan Pro 3";
      font-size: 17px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: uppercase;
      color: #fff;
      background-color: #fff;
    }

    .about__item {
      margin: 0 15px;
      white-space: nowrap;
    }

    .design__slider {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
          -ms-flex-pack: start;
              justify-content: flex-start;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      margin: 0;
      padding-top: 60px;
      padding-bottom: 140px;
    }

    .design__slider__item {
      position: relative;
      min-width: 190px;
      min-height: 280px;
      width: auto;
      height: auto;
    }

    .design__slider__text {
      position: absolute;
      bottom: -90px;
    }

    .about__slider__caption {
      margin-right: 20px;

      font-family: "Century Gothic";
      font-size: 17px;
      font-weight: 400;
      line-height: normal;
      text-align: right;
      text-transform: capitalize;
      color: #fff;
    }

    .about__slider__text {
      width: 145px;
      margin: 0 auto;
      font-family: "Calibri";
      font-size: 12.5px;
      font-weight: 400;
      line-height: normal;
      text-align: right;
      text-transform: none;
      color: #fff;
    }

    .background-black {
      background-color: #000;
    }
  }
</style>
