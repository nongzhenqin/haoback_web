/**
 * 商品模块
 */
import Vue from 'vue'

let goods = {}

/**
 * 获取商品列表
 */
goods.findGoodsList = (params, callback) => {
	Vue.http.get('/haoback_service/goods/page', {params: params}).then((res) => {
	    let data = res.body.datas.data;
        !!callback && callback(data);
	})
}

/**
 * 获取商品分类
 */
goods.findGoodsType = (callback) => {
	Vue.http.get('/haoback_service/goods/goods_type').then((res) => {
	    let data = res.body.datas.data;
        !!callback && callback(data);
	})
}

export default goods