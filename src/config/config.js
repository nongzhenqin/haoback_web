import Vue from 'vue'
import VueResource from 'vue-resource'
import router from '../router/router'
import iView from 'iview';

Vue.use(VueResource)

/**
 * ajax请求拦截器，如果请求时session失效则自动跳转到主页
 */
// Vue.http.interceptors.push((request, next) => {
// 	// next之前的代码为：请求发送前的处理逻辑
// 	// loading.show = true

// 	// 请求发送后的处理逻辑
// 	next((response) => {
// 		// 没有操作权限
// 		if(response.status && response.status == '403'){
// 			iView.Message.error('您没有权限进行此操作，请联系管理员');
// 			return;
// 		}

// 		let sessionStatus = response.headers.map.sessionstatus;
// 		if(sessionStatus && sessionStatus == 'TIMEOUT'){
// 			router.push({path: '/login'});
// 			return;
// 		}
// 		return response
// 	});
// });