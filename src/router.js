import VueRouter from 'vue-router';
import home from './pages/home-page.vue';
import portfolioPage from './pages/portfolio-page.vue';
import aboutPage from './pages/about-page.vue';
import pricePage from './pages/price-page.vue';
import projectPage from './pages/project-page.vue';
import pageNotFound from './pages/404-page.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        id: 0
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolioPage,
      meta: {
        id: 1
      }
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage,
      meta: {
        id: 2
      }
    },
    {
      path: '/price',
      name: 'price',
      component: pricePage,
      meta: {
        id: 3
      }
    },
    {
      path: '/project/:id',
      name: 'projectPage',
      component: projectPage,
      meta: {
        id: 4
      }
    },
    {
      path: '',
      name: 'contacts'
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: pageNotFound,
      meta: {
        id: 5
      }
    }
  ],
  mode: 'hash',
  base: '/',
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth'}
  }
})
