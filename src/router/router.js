import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import routes from './routes'

// 引入路由
Vue.use(Router)

// 创建路由
const router = new Router({
  routes: routes,
  // 以下是锚点配置，但是打生产包有问题，注释
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if(to.hash){
    	return {
      	selector: to.hash
    	}
    }
  }
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
})

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
})

export default router;