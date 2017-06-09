// 路由映射配置
const Index = r => require.ensure([], () => r(require('@/components/Index.vue')), 'index');
module.exports = [
	// 入口
	{
		path: '/',
		redirect: '/index'
	},
	//首页
	{
		path: '/index',
		component: Index
	}
];