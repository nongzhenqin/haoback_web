<template>
  <div>
    <Row type="flex" justify="start" align="middle" class="code-row-bg">
          <Col span="2"></Col>
          <template v-for="goodsType in goodsTypes">
            <Col span="1"><a :href="goodsType.remark" class="a-type">{{goodsType.name}}</a></Col>
          </template>
      </Row>
      <br>

      <Row type="flex" justify="start">
        <Col span="2"></Col>
      <Col span="4">
        <div>
          <h2 class="h2-title">热销推荐</h2>
        </div>
      </Col>
      </Row>
      <Row type="flex" justify="start" style="padding-top:20px;">
        <Col span="2"></Col>
        <template v-for="goods in goodsHotList">
          <Col span="4" class="col-style">
            <a :href="goods.urlLink" target="_bank" class="a-product">
              <img class="product-img" :src="goods.fileId">
              <h6 style="padding-left: 5px;padding-right: 5px;">{{goods.name}}</h6>
              <h6 v-if="goods.info && goods.info.length > 0">{{goods.info}}</h6>
              <span style="color: red;width:100%;height100%;font-size: 20px;font-family:arial; color:#F40; font-weight: 700;">￥{{goods.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;月销&nbsp;{{goods.salesNum}}
            </a>
          </Col>
        </template>
        <Col span="2"></Col>
      </Row>
      <br>

      <!-- 循环商品类型 -->
      <template v-for="goodsAndData in goodsTypes">
        <Row type="flex" justify="start">
          <Col span="2"></Col>
          <Col span="4">
            <div>
              <h2 class="h2-title" :id="goodsAndData.code">{{goodsAndData.name}}</h2>
            </div>
          </Col>
        </Row>

        <Row type="flex" justify="start" style="padding-top:20px;">
          <Col span="2"></Col>

          <!-- 循环每种类型下的商品 -->
          <template v-for="(goodsInType, index) in goodsAndData.goodsList">
            <Col v-if="index != 0 && index%5 == 0" span="2"></Col>
            <Col span="4" class="col-style">
              <a :href="goodsInType.urlLink" target="_bank" class="a-product">
                <img class="product-img" :src="goodsInType.fileId">
                <h6 style="padding-left: 5px; padding-right: 5px;">{{goodsInType.name}}</h6>
                <h6 v-if="goodsInType.info && goodsInType.info.length > 0">{{goodsInType.info}}</h6>
                <span style="color: red;width:100%;height100%;font-size: 20px;font-family:arial; color:#F40; font-weight: 700;">￥{{goodsInType.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;月销&nbsp;{{goodsInType.salesNum}}
              </a>
            </Col>
          </template>
          <Col span="2"></Col>
        </Row>
        <br>
      </template>

      <!-- <Row type="flex" justify="start">
        <Col span="2"></Col>
        <Col span="4">
          <div>
            <h2 class="h2-title" id="m">男装</h2>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="start" style="padding-top:20px;">
        <Col span="2"></Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i1/TB1ly8cNpXXXXaQXXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i1/TB1ly8cNpXXXXaQXXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i1/TB1ly8cNpXXXXaQXXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i1/TB1ly8cNpXXXXaQXXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i1/TB1ly8cNpXXXXaQXXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="2"></Col>
      </Row>
      <br>

      <Row type="flex" justify="start">
        <Col span="2"></Col>
      <Col span="4">
        <div>
          <h2 class="h2-title" id="w">女装</h2>
        </div>
      </Col>
      </Row>
      <Row type="flex" justify="start" style="padding-top:20px;">
        <Col span="2"></Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/TB1m3RxJXXXXXa7aXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/TB1m3RxJXXXXXa7aXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/TB1m3RxJXXXXXa7aXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/TB1m3RxJXXXXXa7aXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/TB1m3RxJXXXXXa7aXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
        <Col span="2"></Col>
      </Row>
      <br>

      <Row type="flex" justify="start">
        <Col span="2"></Col>
      <Col span="4">
        <div>
          <h2 class="h2-title" id="h">化妆品</h2>
        </div>
      </Col>
      </Row>
      <Row type="flex" justify="start" style="padding-top:20px;">
        <Col span="2"></Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i4/TB1s8FkRFXXXXXeXVXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i4/TB1s8FkRFXXXXXeXVXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i4/TB1s8FkRFXXXXXeXVXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i4/TB1s8FkRFXXXXXeXVXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
      <Col span="4" class="col-style">
        <a href="" class="a-product">
          <img class="product-img" src="//img.alicdn.com/bao/uploaded/i4/TB1s8FkRFXXXXXeXVXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp">
          <h2>商品名称</h2>
          <h6>一句话简介</h6>
          <span style="color: red;width:100%;height100%;">价格</span>
        </a>
      </Col>
        <Col span="2"></Col>
      </Row>
      <br>

      <Row type="flex" justify="start">
        <Col span="2"></Col>
      <Col span="4">
        <div>
          <h2 class="h2-title" id="C">3C</h2>
        </div>
      </Col>
      </Row>
      <Row type="flex" justify="start" style="padding-top:20px;">
        <Col span="2"></Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="2"></Col>

        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        <Col span="4" class="col-style">
          <a href="" class="a-product">
            <img class="product-img" src="//img.alicdn.com/bao/uploaded/i2/274432595/TB2Wy_Dp80lpuFjSszdXXcdxFXa_!!274432595.jpg_400x400_.webp">
            <h2>商品名称</h2>
            <h6>一句话简介</h6>
            <span style="color: red;width:100%;height100%;">价格</span>
          </a>
        </Col>
        
      </Row> -->

      <br>
      <br>
      <!-- 页脚 -->
      <Row type="flex" justify="center" align="middle" style="padding-top:20px;text-align:center;background-color:white;">
          <Col span="2" style="height:100px;"></Col>
          <Col span="20" style="height:20px;">优利网备案信息</Col>
          <Col span="2" style="height:100px;"></Col>
      </Row>
  </div>
</template>

<script>
import goods from '../scripts/goods'

export default {
  data() {
    return {
      goodsTypesLenght: 0,// 商品分类的数量
      completedNum: 0,// 因为分类型去查询商品，ajax为异步，所以用此参数记录是否查询完毕，查询完后渲染一次页面
      goodsHotList: [],// 热销商品列表
      goodsTypesCache: [],// 暂存每个ajax请求的结果
      goodsTypes: []// 此对象保存每个分类和分类对应的商品列表
    }
  },
  created(){
    goods.findGoodsType((data) => {
      let goodsTypesTemp = [];
      goodsTypesTemp = data;

      this.goodsTypesLenght = data.length;

      if(goodsTypesTemp.length > 0){
        for(let i=0, len=goodsTypesTemp.length; i<len; i++){
          goods.findGoodsList({pageNo: 0, pageSize: 10, goodsType: goodsTypesTemp[i].code}, (datasub) => {
            for(let j=0, lenj=datasub.content.length; j<lenj; j++){
              datasub.content[j].fileId = '/haoback_service/goods/image/' + datasub.content[j].fileId;
              datasub.content[j].price = parseFloat(datasub.content[j].price).toFixed(2);
            }

            goodsTypesTemp[i].goodsList = datasub.content;
            this.goodsTypesCache = goodsTypesTemp;
            this.completedNum += 1;
          })
        }
      }
    });

    // 查询热销商品
    goods.findGoodsList({pageNo: 0, pageSize: 5, goodsType: 'hot'}, (data) => {
      for(let i=0, len=data.content.length; i<len; i++){
        data.content[i].fileId = '/haoback_service/goods/image/' + data.content[i].fileId;
        data.content[i].price = parseFloat(data.content[i].price).toFixed(2);
      }
      this.goodsHotList = data.content;
    })
  },

  methods: {
    // 监听实现方法
    watchCompletedNum(){
      if(this.completedNum == this.goodsTypesLenght){
        this.goodsTypes = this.goodsTypesCache;
        console.log('监听.....');
      }
    }
  },

  // 监听对象值变化
  watch: {
    'completedNum': 'watchCompletedNum'
  }
}
</script>

<style type="text/css">
  .code-row-bg {
    background: #fafafc;
    height: 40px;
  }

  a {
    color: #666;
  }

  .a-type:hover { 
    color: #00c3f5;
  }

  .a-product {
    /*height: 100%;*/
    /*width: 240px;*/
  }

  .a-product:hover {
    color: #666;
  }

  .h2-title {
    float: left;
    font-size: 24px;
    color: #333;
  }

  .col-style {
    height: 300px;
    transition:all .2s linear 0s;
    background-color: white;
    /*border: 1px solid #EFEFEF;*/
    margin-left: 4px;
    margin-top: 4px;
    /*z-index: 1;*/
    text-align: center;
    /*position: relative;*/
  }

  .col-style:hover {
    /*border: 1px solid #bbbec4;*/
    box-shadow:0 15px 30px rgba(0,0,0,.1);
    top: -2px;
    z-index: 2;
  }

  .product-img {
    width: 218px;
    height: 218px;
    margin: 36 auto 0;
  }
</style>