<template lang="html">
  <ul class="menu__list">
    <transition-group name="menuListAm">
      <li
        v-for="(item, index) in menuList"
        :key="item+index"
        v-show="animationNumber > 1 && itemNumber > index"
        @mouseenter="changeMenuItem(true, index)"
        @mouseleave="changeMenuItem(false)"
      >

        <router-link
          :class="['menu__item'+index, 'menu__item', {'menu__item--hover': menuItemHover.item == index && menuItemHover.state}]"
          tag="a"
          :to="{name: item.route}"
        >

            <div class="menu__item__line-wrapper">
              <transition name="menuLineAm">
                <span class="zxc" v-show="menuItemHover.item == index && menuItemHover.state">
                  <span class="menu__item__cube"></span>
                  <span class="menu__item__line"></span>
                </span>
              </transition>
            </div>

          {{ item.name }}

        </router-link>

      </li>
    </transition-group>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    menuList: {
      type: Array,
      required: true
    },
    animationNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      menuItemHover: {
        item: 0,
        state: false
      },
      interval: null,
      itemNumber: -1
    }
  },
  methods: {
    changeMenuItem(state, item) {
        this.menuItemHover.item = item;
        this.menuItemHover.state = state;
    },
    ...mapMutations([
      'menuToggle'
    ])
  },
  watch: {
    animationNumber() {
      if(this.animationNumber > 1) {
        this.interval = setInterval(()=> {
          this.itemNumber += 1;
        }, 200);
      }
    },
    itemNumber() {
      if(this.itemNumber > 4) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  }
}
</script>

<style lang="css" scoped>

  .menuListAm-enter-active, .menuListAm-leave-active {
    transition: .5s all cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .menuListAm-enter, .menuListAm-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  .menu__item__line-wrapper {
    position: absolute;
    top: 16px;
    left: -86px;

    width: 90px;
  }

  .zxc {
    display: flex;
    align-items: center;
    margin-left: auto;

    overflow: hidden;
  }

  .menu__item__line {
    width: 85px;
    height: 1px;

    background-color: #a00000;
  }

  .menu__item__cube {
    width: 5px;
    height: 5px;

    transform: rotateZ(45deg);
    background-color: #a00000;
  }

  .menuLineAm-enter-active {
    animation: .3s menuLineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
  }

  .menuLineAm-leave-active {
    animation: .3s menuLineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98) reverse;
  }

  @keyframes menuLineKeys {
    0% {
      width: 0px;
    }

    100% {
      width: 90px;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .menuLineAm-enter-active {
      animation: .3s menuLineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98);
    }

    .menuLineAm-leave-active {
      animation: .3s menuLineKeys cubic-bezier(0.54, 0.02, 0.32, 0.98) reverse;
    }

    @keyframes menuLineKeys {
      0% {
        width: 0px;
      }

      100% {
        width: 30px;
      }
    }

    .menu__item__line-wrapper {
      position: absolute;
      top: 13px;
      left: -32px;

      width: 35px;
    }

    .zxc {
      display: flex;
      align-items: center;
      margin-left: auto;

      overflow: hidden;
    }

    .menu__item__line {
      width: 30px;
      height: 1px;

      background-color: #a00000;
    }
  }
</style>
