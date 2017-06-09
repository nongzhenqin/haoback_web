import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import routes from './routes'

// 引入路由
Vue.use(Router)

// 创建路由
const router = new Router({
  routes
})

export default router;

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
});