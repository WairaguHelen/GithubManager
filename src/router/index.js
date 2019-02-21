import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Commits from '@/components/Commits'
import Dashboard from '@/components/Dashboard'
import Repos from '@/components/Repos'
import Branches from '@/components/Branches'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/commits',
      name: 'commits',
      component: Commits
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/branches',
      name: 'Branches',
      component: Branches
    },
    {
      path: '/repos',
      name: 'Repos',
      component: Repos
    }
  ],
  mode: 'history'
});
