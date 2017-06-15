// 路由映射配置
const Index = r => require.ensure([], () => r(require('../components/Index.vue')), 'Index'),
	  NotFoundComponent = r => require.ensure([], () => r(require('../components/NotFoundComponent.vue')), 'NotFoundComponent');
module.exports = [
	// 入口
	{
		path: '/haoback',
		component: Index
	},
	// 404页面
	{ path: '*', component: NotFoundComponent }
];