
import VueRouter from 'vue-router'
import Boards from '../views/Boards'
import MyBoard from '../views/MyBoard'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/boards',
      name: 'boards',
      component: Boards
    },
    {
      path: '/boards/my-board/:id',
      name: 'my-board',
      component: MyBoard
    },
  ]
})