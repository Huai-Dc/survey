import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/Login'
import Survey from '../views/survey/Index'
import SurveyList from '../views/survey/SurveyList'
import SaveInterviewee from '../views/survey/SaveInterviewee'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: SurveyList
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  },
  {
    path: '/saveInterviewee',
    name: 'saveInterviewee',
    component: SaveInterviewee,
  },
  {
    path: './surveyList',
    name: 'surveyList',
    component: SurveyList,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
