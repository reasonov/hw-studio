<template lang="html">
  <div class="ticker-component">
    <ul :class="['about__list', background]" :style="tickerStyle" ref="tickerList">

      <slot></slot>

    </ul>
  </div>
</template>

<script>
export default {
  props: {
    background : {
      type: String,
      required: false
    }
  },
  data() {
    return {
      tickerPosition: 0,
      tickerListWidth: 1000,
      newInterval: null
    }
  },
  computed: {
    tickerStyle() {
      return 'transform: translateX(-' + this.tickerPosition + 'px)';
    }
  },
  methods: {
    tickerMove() {
      this.tickerPosition += 1;

      if(Math.abs(this.tickerPosition >= this.tickerListWidth / 2)) {
        this.tickerPosition = 0;
      }

    },
    calcTickerListWidth() {
      this.tickerListWidth = this.$refs.tickerList.clientWidth;
    }
  },
  mounted() {
    this.calcTickerListWidth();

    this.newInterval = setInterval(()=> {
      this.tickerMove();
    }, 10);
  },
  beforeDestroy() {
    clearInterval(this.newInterval);
    this.newInterval = null;
  }
}
</script>

<style lang="css">
  .ticker-component {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
