import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import Soundwords from '@/components/Soundwords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
   {
     path: '/soundwords',
     name: 'Soundwords',
     component: Soundwords
   }
  ]
})
