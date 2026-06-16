import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PeoplePage from '../views/PeoplePage.vue'
import BookingPage from '../views/BookingPage.vue'
import NewEventPage from '../views/NewEventPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/people', component: PeoplePage },
  { path: '/booking', component: BookingPage },
  { path: '/new-event', component: NewEventPage }
]

const router = createRouter({
  history: createWebHistory('/sbr-vue-app/'), 
  routes
})

export default router