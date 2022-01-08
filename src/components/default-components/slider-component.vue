<template lang="html">

  <ul
    :class="sliderListClass"
    :style="sliderStyleMove"
  >

    <slot></slot>

  </ul>

</template>

<script>

//В родителе необходимо поместить внутрь компонента тег li,
//задать ему ref, так же создать свойство в data, которое будет содержать this.$refs.name[0].clientWidth вычисляемое в mounted();

export default {
  props: {
    listLength: {           //Количество элементов в слайдере **
      type: Number,
      required: true
    },
    sliderWrapperSize: {
      type: Number,
      required: true
    },
    slideSize: {           //Ширина элемента слайдера **
      type: Number,
      required: true
    },
    sliderListClass: {            //Класс задаваемый ul из родителя
      type: String,
      required: false
    },
    slideChanges: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      currentSlide: 0,          // Текущий слайд
      margin: 50
    }
  },

  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },

    sliderStyleMove() {                                                   //Вычисление стиля для прокрутки слайдера
      return 'transform: translateX(' + this.sliderPosition + 'px)';
    },

    sliderPosition() {                                // Сдвиг слайдера
      return this.currentSlide * this.scrollSize - this.startPosition;
    },

    maxSlides() {
      return this.sliderWrapperSize / (this.slideSize + this.margin);
    },

    slidesOver() {
      return this.listLength - this.maxSlides;
    },

    startPosition() {
      if(this.windowWidth > 460 || this.listLength > 3) {
        return (this.slideSize + this.margin) * this.slidesOver / 2;
      }
      return 0;
    },

    maxScroll() {                                                         // Сколько раз можно прокрутить слайдер до лимита
      return this.slidesOver / 2;
    },

    sliderLimit() {                                                     // Какой лимит слайдера достигнут
      if(this.currentSlide <= -this.maxScroll && this.slideChanges < 0) {
        return 'maxLimit';
      }
      else if(this.currentSlide > this.maxScroll && this.slideChanges > 0) {
        return 'minLimit';
      }
      else {
        return 'noLimit';
      }
    },

    scrollSize() {                      //На сколько нужно прокручивать слайдер
      return this.slideSize + this.margin;
    }
  },
  watch: {
    slideChanges() {
      if(this.sliderLimit == 'noLimit') {
        this.currentSlide += this.slideChanges;
      }
    }
  }
}
</script>
