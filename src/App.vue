<template>
  <div id="app">
    <header class="main-header" v-if="pageNumber != 5" @wheel.prevent>

      <div class="header__wrapper">

        <menu-button />

        <transition name="borderAm">
          <div class="menu__border" v-show="menuIsOpen"></div>
        </transition>

      </div>

    </header>

    <main>

      <main-menu />

      <router-view />

    </main>

    <footer class="main-footer" v-if="pageNumber != 5">
      <div class="footer__wrapper">
        <div class="footer__intro">
          <span class="footer__line"></span>
          <span class="footer__intro__text">Связь с нами</span>
        </div>
        <h3 class="footer__caption">Будем рады работать с вами</h3>
        <div class="footer__main">
          <ul class="footer__list">
            <li class="footer__item">@instagram</li>
            <li class="footer__item">8 (924) 999 99 99</li>
            <li class="footer__item">@telegram</li>
          </ul>
          <button class="footer__request" @click="requestToggle(true)">Оставить заявку</button>
        </div>
        <p class="footer__address">г. Хабаровск, ул. Серышева 80</p>
      </div>
    </footer>

    <request-component />

    <preloader-component v-if="!pageLoaded" />

  </div>
</template>

<script>
import preloaderComponent from './components/animation-components/preloader-component.vue';
import menuButton from './components/animation-components/menu-button.vue';
import mainMenu from './components/project-components/main-menu.vue';
import requestComponent from './components/project-components/request-component.vue';
import {mapMutations} from 'vuex';
import {mapState} from 'vuex';

export default {
  name: 'App',
  components: {
    preloaderComponent,
    menuButton,
    mainMenu,
    requestComponent
  },
  data() {
    return {
      pageLoaded: false,
      chatItems: []
    }
  },
  computed: {
    ...mapState([
      'pageNumber',
      'menuIsOpen'
    ])
  },
  methods: {
    ...mapMutations([
      'changePage',
      'resizeWindow',
      'menuToggle',
      'requestToggle'
    ])
  },
  watch: {
    $route(to) {
      this.changePage(to.meta.id);
      if(this.menuIsOpen) {
        this.menuToggle();
      }
    }
  },
  mounted() {
    window.addEventListener('DOMContentLoaded', ()=> {
      this.pageLoaded = true;
    })

    this.changePage(this.$route.meta.id);
    this.resizeWindow(document.documentElement.clientWidth);

    window.addEventListener('resize', ()=> {
      this.resizeWindow(document.documentElement.clientWidth);
    });
  },
  beforeDestroyed() {
    window.removeEventListener('resize');
    window.removeEventListener('DOMContentLoaded');
  }
}
</script>

<style src="./assets/fonts/fonts.css"></style>
<style src="./assets/styles/main.css"></style>
<style src="./assets/styles/middle.css"></style>
<style src="./assets/styles/mobile.css"></style>
