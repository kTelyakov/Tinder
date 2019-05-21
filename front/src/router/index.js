import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Messages from '@/components/pages/messages.vue'
import Prediction from '@/components/pages/Prediction.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/prediction',
      name: 'prediction',
      component: Prediction
    }
  ]
})
