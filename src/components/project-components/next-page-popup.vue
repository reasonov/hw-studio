<template lang="html">
  <transition name="fade">
    <div class="next-page-block" v-if="popupIsOpen">
      <button class="close-next-page" @click="closePopup()">
        <span class="close-next-page__line"></span>
        <span class="close-next-page__line close-next-page__line2"></span>
      </button>
      <h4 class="next-page__name">Портфолио</h4>
      <div class="next-page__content">
        <p class="next-page__text">Топ - 3<br> проекта этого года</p>
        <router-link class="go-next-page" to="/portfolio" tag="button">Подробнее</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      popupIsOpen: false
    }
  },
  methods: {
    closePopup() {
      this.popupIsOpen = false;
    }
  },
  mounted() {
    setTimeout(()=> {
      this.popupIsOpen = true;
    }, 1000)
  }
}
</script>

<style lang="css">

  .next-page-block {
    position: absolute;
    bottom: 50px;
    right: 0;
    padding: 20px 25px 20px 20px;
    border-bottom: 5px solid;
    -o-border-image: linear-gradient(to right, #fc0202, #656565) 70% 0%;
       border-image: -webkit-gradient(linear, left top, right top, from(#fc0202), to(#656565)) 70% 0%;
       border-image: linear-gradient(to right, #fc0202, #656565) 70% 0%;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    background-color: #1b1a1b;
  }

  .close-next-page {
    display: block;
    width: 25px;
    height: 25px;
    float: right;
  }

  .close-next-page__line {
    display: block;
    width: 28px;
    height: 2px;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    background-color: #fff;
  }

  .close-next-page__line2 {
    -webkit-transform: rotate(-45deg) translateX(1px) translateY(-1px);
            transform: rotate(-45deg) translateX(1px) translateY(-1px);
  }

  .next-page__name {
    margin-top: 20px;
    font-family: "Trajan Pro 3";
    font-size: 21px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: uppercase;
    color: #fff;
  }

  .next-page__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    width: 250px;
    margin-top: 25px;
  }

  .next-page__text {
    font-family: "Century Gothic";
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: lowercase;
    color: #fff;
  }

  .go-next-page {
    width: 100px;
    height: 45px;
    font-family: "Century Gothic";
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    text-align: none;
    text-transform: lowercase;
    color: #fff;
    background-color: #656565;
  }

  @media (min-width: 460px) and (max-width: 750px) {
    .next-page-block {
      display: none;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .next-page-block {
      top: 450px;
      left: 50%;
      bottom: auto;

      width: calc(100% - 40px);
      padding: 20px;

      transform: translateX(-50%);
    }

    .next-page__name {
      margin-top: 20px;
      font-family: "Trajan Pro 3";
      font-size: 26px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: uppercase;
      color: #fff;
    }

    .next-page__content {
      width: 100%;
    }

    .next-page__text {
      font-family: "Century Gothic";
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: lowercase;
      color: #fff;
    }

    .go-next-page {
      width: 130px;
      height: 60px;
      font-family: "Century Gothic";
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      text-align: none;
      text-transform: lowercase;
      color: #fff;
    }
  }

                            /* Animation */

  .fade-enter-active, .fade-leave-active {
    transition: 1s all;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(500px);
    opacity: 0;
  }
</style>
