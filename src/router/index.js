import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/top/Login';
import Index from '@/components/top/Index';
import Record from '@/components/record/Record';
import RecordTop from '@/components/record/RecordTop';
import CreateRoom from '@/components/record/CreateRoom';
import JoinRoom from '@/components/record/JoinRoom';
import RecordResult from '@/components/record/Result';
import CheckIn from '@/components/record/CheckIn';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/record',
      name: 'Record',
      component: Record,
      children: [
        {
          path: 'top',
          name: 'RecordTop',
          component: RecordTop,
        },
        {
          path: 'create',
          name: 'CreateRoom',
          component: CreateRoom,
        },
        {
          path: 'join',
          name: 'JoinRoom',
          component: JoinRoom,
        },
        {
          path: 'result',
          name: 'RecordResult',
          component: RecordResult,
        },
        {
          path: 'checkin',
          name: 'CheckIn',
          component: CheckIn,
        },
      ],
    },
  ],
});

