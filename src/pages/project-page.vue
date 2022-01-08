<template lang="html">
  <div class="project-page">
    <div class="project-intro">
      <div class="project-intro__content">
        <a class="project-intro__link" :href="projectList[projectNumber].ref">ссылка на сайт</a>
        <h2 class="project-intro__caption">
          {{ projectList[projectNumber].name }}
        </h2>
        <p class="project-intro__text">{{ projectList[projectNumber].introText }}</p>
      </div>

      <project-toggler />

    </div>

    <section class="project__main">
      <div class="project__client">
        <ul class="project__client__list">
          <li
            class="project__client__item"
            :class="{'last': index == projectList[projectNumber].clientItem.length}"
            v-for="(item, index) in projectList[projectNumber].clientItem"
            :key="index"
          >
            <h4 class="project__list__caption">{{ item.caption }}</h4>
            <p class="project__list__text">{{ item.text }}</p>
          </li>
        </ul>
        <div class="project__client__about">
          <h4 class="project__about__caption">О проекте:</h4>
          <p
            class="project__about__text"
            :class="{'last': index == projectList[projectNumber].aboutText.length}"
            v-for="(item, index) in projectList[projectNumber].aboutText"
            :key="index"
          >
            {{ projectList[projectNumber].aboutText[index] }}
           </p>
        </div>
      </div>

      <div class="project__gif"></div>

      <div class="project__task">
        <div class="project__task__left">
          <h3 class="project__task__caption">Задачи проекта</h3>
          <span class="project__task__image1"></span>
        </div>
        <div class="project__task__main">
          <ul class="project__task__list">
            <li
              class="project__task__item"
              v-for="(item, index) in projectList[projectNumber].taskText"
              :key="index"
            >
              <div class="project__task__top">
                <span class="project__task__number">{{ '0' + index }}</span>
                <span class="project__task__line"></span>
              </div>
              <p class="project__task__text">
                {{ projectList[projectNumber].taskText[index] }}
              </p>
            </li>
          </ul>

          <div class="project__task__image2"></div>

        </div>
      </div>
    </section>

    <div class="project-page__slider-wrapper" ref="projectWrapper">
      <slider-component
        sliderListClass="project-page__slider"
        :listLength="projectList.length"
        :slideSize="projectItemsSize"
        :sliderWrapperSize="projectWrapperSize"
        :slideChanges="slideChanges"
      >
        <li
          class="project-page__slider__item"
          :class="'project-page__slider__item'+index"
          v-for="(item, index) in projectList"
          :key="index"
          ref="projectItem"
        >
          {{ item.name }}
        </li>
      </slider-component>
      <button class="project-page__slider__toggler project-page__slider__toggler0" @click="changeSlide(1)">
        <project-slider-toggler />
      </button>
      <button class="project-page__slider__toggler project-page__slider__toggler1" @click="changeSlide(-1)">
        <project-slider-toggler />
      </button>
    </div>
  </div>
</template>

<script>
import projectSliderToggler from '../assets/icons/project-slider-toggler.vue';
import projectToggler from '../components/project-components/project-toggler.vue';
import sliderComponent from '../components/default-components/slider-component.vue';

export default {
  components: {
    projectSliderToggler,
    projectToggler,
    sliderComponent
  },
  data() {
    return {
      projectList: [
        {
          ref: '#',
          name: 'Pikina Buh',
          introText: 'Лучшая аутсорсинговая компания Хабаровска',
          clientItem: [
            {
              caption: 'Клиент',
              text: 'Pikina Buh'
            },
            {
              caption: 'Услуги',
              text: 'Создание сайта'
            },
            {
              caption: 'Дата запуска',
              text: '01.01.2019'
            }
          ],
          aboutText: [
            'ООО ПикинаБух крутая компания',

            'А еще они классно ведут бухгалтерию'
          ],
          taskText: [
            'Бухгалтерия повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Бухгалтерия повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Бухгалтерия повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Бухгалтерия повышение продаж за счет увеличения конверсии бла бла бла бла'
          ]
        },
        {
          ref: '#',
          name: 'Obedman Design',
          introText: 'Хабаровский известный бренд строительства и дизайна',
          clientItem: [
            {
              caption: 'Клиент',
              text: 'Obedman Design'
            },
            {
              caption: 'Услуги',
              text: 'Да мы сделали сайт'
            },
            {
              caption: 'Дата запуска',
              text: '02.02.2002'
            }
          ],
          aboutText: [
            'Делает крутые интерьеры',

            'И еще много чего делает'
          ],
          taskText: [
            'Дизайн повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Дизайн повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Дизайн повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Дизайн повышение продаж за счет увеличения конверсии бла бла бла бла'
          ]
        },
        {
          ref: '#',
          name: 'Pieee Site',
          introText: 'Самые вкусные пироги',
          clientItem: [
            {
              caption: 'Клиент',
              text: 'Pieee'
            },
            {
              caption: 'Услуги',
              text: 'Разработка дизайна и сайта'
            },
            {
              caption: 'Дата запуска',
              text: '07.03.2020'
            }
          ],
          aboutText: [
            'Готовят лучшие пироги',

            'Которыми хочется восхищаться'
          ],
          taskText: [
            'Пироги повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Пироги повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Пироги повышение продаж за счет увеличения конверсии бла бла бла бла',

            'Пироги повышение продаж за счет увеличения конверсии бла бла бла бла'
          ]
        }
      ],
      projectItemsSize: 0,
      projectWrapperSize: 0,
      slideChanges: 0,
      projectNumber: null
    }
  },
  methods: {
    calcProjectSize() {
      this.projectItemsSize = this.$refs.projectItem[0].clientWidth;
      this.projectWrapperSize = this.$refs.projectWrapper.clientWidth;
    },
    changeSlide(data) {
      this.slideChanges = data;

      setTimeout(()=> {
        this.slideChanges = 0;
      }, 10)
    }
  },
  created() {
    this.projectNumber = Number(this.$route.params.id);
  },
  mounted() {
    this.calcProjectSize();
  }
}
</script>

<style lang="css" scoped>
  .project-intro {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/obedmanBackground.png');
    background-position: top left;
  }

  .project__toggler-wrapper {
    position: absolute;
    right: 50px;
    top: 50px;
  }

  .project-intro__content {
    text-align: center;
  }

  .project-intro__link {
    font-family: 'Bahnschrift';
    font-size: 17px;
    color: #fff;
  }

  .project-intro__caption {
    margin: 20px 0;

    font-family: 'Engry';
    font-size: 75px;
    line-height: 65px;
    color: #fff;
  }

  .project-intro__text {
    font-family: 'Century Gothic';
    font-size: 25px;
    color: #fff;
  }

  .project__main {
    max-width: 1120px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .project__client {
    display: flex;
    justify-content: space-between;

    padding: 0 95px;
    padding-top: 230px;
    padding-bottom: 125px;
  }

  .project__client__list {
    width: 275px;
  }

  .project__client__item {
    margin-bottom: 40px;
  }

  .project__list__caption {
    margin-bottom: 15px;

    font-family: 'Bahnschrift';
    font-size: 25px;
  }

  .project__list__text {
    font-family: 'Calibri';
    font-size: 17px;
  }

  .project__client__about {
    max-width: 460px;
  }

  .project__about__caption {
    margin-bottom: 15px;

    font-family: 'Bahnschrift';
    font-size: 25px;
  }

  .project__about__text {
    margin-bottom: 30px;

    font-family: 'Calibri';
    font-size: 17px;
  }

  .project__gif {
    width: 100%;
    height: 505px;

    background-color: #1b1b48;
  }

  .project__task {
    display: flex;
    justify-content: space-between;

    padding-top: 150px;
    padding-bottom: 125px;
  }

  .project__task__caption {
    margin-bottom: 160px;

    font-family: 'Bahnschrift';
    font-size: 29px;
  }

  .project__task__image1 {
    display: block;
    width: 295px;
    height: 550px;

    background-color: #2d3a67;
  }

  .project__task__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 650px;
    margin-left: auto;
    margin-bottom: 102px;
  }

  .project__task__item {
    width: 305px;
    margin-bottom: 60px;
  }

  .project__task__top {
    display: flex;
    align-items: center;

    margin-bottom: 20px;
  }

  .project__task__number {
    font-family: 'Bahnschrift';
    font-size: 17px;
    font-weight: 600;
  }

  .project__task__line {
    display: block;
    width: 120px;
    height: 2px;
    margin-left: 20px;

    background-color: #a00000;
  }

  .project__task__text {
    font-family: 'Calibri';
    font-size: 17px;
  }

  .project__task__image2 {
    max-width: 650px;
    height: 360px;

    background-color: #1b1b48;
  }

  .project-page__slider-wrapper {
    position: relative;
    overflow: hidden;
  }

  .project-page__slider {
    display: flex;
    transition: .5s all ease-out;
  }

  .project-page__slider__item {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 100vw;
    height: 370px;

    background-position: center;

    font-size: 'Engry';
    font-size: 38px;
    text-transform: uppercase;
    color: #fff;
  }

  .project-page__slider__item0 {
    background-image: url('../assets/images/obedmanBackground.png');
  }

  .project-page__slider__item1 {
    background-image: url('../assets/images/pieSite.jpg');
  }

  .project-page__slider__item2 {
    background-image: url('../assets/images/pikinaBuh.jpg');
  }

  .project-page__slider__toggler {
    position: absolute;
    top: calc(50% - 15px);

    width: 25px;
    height: 30px;
  }

  .project-page__slider__toggler0 {
    left: 50px;
  }

  .project-page__slider__toggler1 {
    right: 50px;

    transform: rotateZ(180deg);
  }

  .last {
    margin: 0;
    padding: 0;
  }

  .second {
    margin-right: 0;
  }

  @media (min-width: 0px) and (max-width: 1050px) {
    .project-intro__caption {
      font-size: 54px;
      line-height: 45px;
    }

    .project-intro__text {
      font-size: 17px;
    }

    .project__main {
      padding: 0 15px;
    }

    .project__client__list {
      width: 205px;
      min-width: 205px;

      margin-right: 50px;
    }

    .project__client {
      padding: 90px 10px 70px 10px;
    }

    .project__list__caption {
      font-size: 19px;
    }

    .project__list__text {
      font-size: 15px;
    }

    .project__about__caption {
      font-size: 19px;
    }

    .project__about__text {
      font-size: 15px;
    }

    .project__gif {
      height: 250px;
    }

    .project__task {
      display: block;
      padding-top: 80px;
      padding-bottom: 45px;
    }

    .project__task__caption {
      margin-bottom: 50px;

      font-size: 19px;
    }

    .project__task__image1 {
      display: none;
    }

    .project__task__list {
      justify-content: center;

      width: 100%;
      margin-left: 0;
      margin-bottom: 65px;
    }

    .project__task__item {
      margin: 0 30px;
      margin-bottom: 40px;
    }

    .project__task__image2 {
      width: 100%;
      max-width: none;
    }

    .project-page__slider__item {
      height: 305px;

      font-size: 31px;
    }

    .project-page__slider__toggler0 {
      left: 20px;
    }

    .project-page__slider__toggler1 {
      right: 20px;
    }
  }

  @media (min-width: 0px) and (max-width: 460px) {
    .project__client {
      flex-direction: column;
      align-items: center;
    }

    .project__client__list {
      width: 250px;
      margin: 0;
      margin-bottom: 65px;
    }

    .project__client__about {
      width: 250px;
    }

    .project__task__caption {
      text-align: center;
    }

    .project__task__list {
      flex-direction: column;
      align-items: center;
    }

    .project__task__item {
      width: 200px;
      margin: 0;
      margin-bottom: 25px;
    }

    .project-page__slider__item {
      font-size: 21px;
    }
  }


</style>
