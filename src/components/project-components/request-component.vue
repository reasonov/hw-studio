<template lang="html">
  <div class="request-component" v-show="requestIsOpen">
    <div class="request__wrapper">
      <button class="request-close" @click="requestToggle(false)">
        <span class="request-close__line request-close__line0"></span>
        <span class="request-close__line request-close__line1"></span>
      </button>
      <form class="request__form" method="post">
        <input class="request__input" type="text" v-model="request.email" placeholder="E-mail">
        <input class="request__input request__email" v-model="request.name" type="text" placeholder="Как к вам обращаться?">
        <input class="request__input" type="text" v-model="request.phone" placeholder="Телефон">
        <div class="request__submit-wrapper">
          <input class="request__submit" type="submit" placeholder="Отправить">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      request: {
        email: '',
        name: '',
        phone: ''
      }
    }
  },
  computed: {
    requestIsOpen() {
      return this.$store.state.requestIsOpen;
    }
  },
  methods: {
    ...mapMutations([
      'requestToggle'
    ])
  }
}
</script>

<style lang="css" scoped>

  input {
    border: none;
    outline: none;
    outline-offset: none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  input:focus {
    outline: none;
    outline-offset: inherit;
  }

  .request-component {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;

    background-color: #000;
  }

  .request__wrapper {
    position: relative;

    display: flex;
    align-items: center;

    max-width: 710px;
    height: 100vh;
    padding: 0 50px;
    margin: 0 auto;
  }

  .request-close {
    position: absolute;
    top: 40px;
    right: 50px;

    width: 50px;
    height: 50px;
  }

  .request-close__line {
    display: block;
    min-width: 30px;
    min-height: 2px;

    transform: rotateZ(45deg);

    background-color: #fff;
  }

  .request-close__line1 {
    transform: rotateZ(135deg) translateX(-2px);
  }

  .request__form {
    width: 100%;
  }

  .request__input {
    width: 100%;
    height: 85px;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;

    font-family: 'Century Gothic';
    font-size: 25px;
    color: #fff;

    background-color: #000;
  }

  .request__input::placeholder {
    color: #fff;
  }

  .request__email {
    border-top: 1px solid #fff;
  }

  .request__submit {
    display: block;
    height: 80px;
    padding: 0 10px;
    margin-left: auto;

    font-family: 'Century Gothic';
    font-size: 25px;
    color: #fff;
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .request__submit {
      font-size: 23px;
    }
  }
</style>
