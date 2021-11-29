import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue'
import CellDemo from '../components/CellDemo.vue'
import NodeDemo from '../components/NodeDemo.vue'
import EdgeDemo from '../components/EdgeDemo.vue'
import App from '../App.vue'

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cell',
      name: 'CellDemo',
      component: CellDemo
    },
    {
      path: '/node',
      name: 'NodeDemo',
      component: NodeDemo
    },
    {
      path: '/edge',
      name: 'EdgeDemo',
      component: EdgeDemo
    },
  ]
});
