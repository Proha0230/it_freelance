import { createRouter, createWebHistory } from 'vue-router'
import New from '../views/New.vue'
import TaskList from '../views/TaskList.vue'
import Task from '../views/Task'


 export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/it_freelance/', component: TaskList, alias: '/' },
    { path: '/it_freelance/new', component: New },
    { path: '/it_freelance/task/:UrlId(.*)', component: Task },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

