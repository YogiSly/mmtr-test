
import VueRouter from 'vue-router'
import Boards from '../views/Boards'
import MyBoards from '../views/MyBoards'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/boards',
      name: 'boards',
      component: Boards
    },
    {
      path: '/boards/my-boards/:id',
      name: 'my-boards',
      component: MyBoards
    },
  ]
})