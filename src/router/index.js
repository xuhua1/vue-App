import Vue from 'vue';
import Router from 'vue-router';
import Home from '../home';
import Cheat from '../cheat/userList.vue';
import User from '../user';
import Dialog from '../cheat/dialog.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
    },
    {
      path:'/cheat',
      name:'cheat',
      component:Cheat,
    },
    {
      path:'/dialog',
      name:'Dialog',
      component:Dialog,
    },
    {
      path:'/user',
      name:'user',
      component:User,
    }
  ]
})
