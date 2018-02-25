<template>
  <div class="blogBody">
    <div class="body" style="clear:both">
      <div class="bodyLeft">
          <ul>
            <li v-for="item in content">
              <div class="Title"><h2>{{item.Title}}</h2></div>
              <div class="attribute">{{item.attribute}}</div>
              <div class="text" v-for="text in item.texts">{{text}}</div>
            </li>
          </ul>
      </div>
      <div class="bodyRight">随便放点什么</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogBody',
  data () {
    return {
      content:[
        {
          Title: '成为大佬的方向',
          attribute: '时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333',
          texts: [
            '基础：HTML+CSS网站页面搭建，CS核心和PC端页面开发，HTML5移动端页面开发',
            '核心：web前端核心技术JavaScript，ecmasript，dom，ajax，json，正则，作用域，运动框架，核心算法，高级函数，插件封装，jQuery等。',
            '高级：html5+高级JavaScript开发，大数据可视化，webapp交互接口，lbs定位，微信sdk，es6标准，高级算法，数据结构，插件封装。',
            '框架：vue、react、angular企业开发应用。',
            '企业要求：bootstrap，swiper，iscroll，sass，ps切图，网站上线等。',
          ]
        }, {
          Title: '要实现的小任务',
          attribute: '时间：2018-2-22 12：58 | 标签：任务 | 阅读：2333',
          texts: [
            '分页以及相应跳页',
            '懒加载',
            '引入json',
            '关闭页面加遮罩',
            '实现回到顶部',
            '移动端适配',
            '后端axios',
            '基本网站成型发布',
            '导航栏玩一下position:sticky',
            '回到顶部按钮移动出现，以及返回动画',
            '首页的内容划分出 首页 和 文章,首页放版本更新以及小心得等，文章放相应文章以及csdn上的内容，给文章做个目录',
            '小任务单独划分一个 todos 组件，位置在回顶上面，点击弹出，加遮罩',
            '项目板块添加本网页的项目，分点：1.技术栈；2.项目介绍；3.收获；4.源代码；5.在线展示'
          ]
        }, {
          Title: '遇到的小知识点',
          attribute: '时间：2018-2-22 12：58 | 标签：get点 | 阅读：2333',
          texts: [
            '1.父级元素如果有transform属性，会导致子元素的fixed失效。父元素去掉transform属性',
            '2.v-for中图片不能用插值{{}}，要用绑定属性 :src=""',
            '3.子元素撑不起父元素: 清浮动 overflow: hidden;',
            '4.a标签中加 <a href="javascript:;"> 能阻止浏览器的默认效果',
            '5.position:fixed相对父级定位：fixed定位相对父级容器定位，不添加:top,bottom,left,right样式，通过margin定位',
            "6.redirect重定向设置默认路由：{path: '/', redirect: 'goods'},{path: '/goods', component: goods},"   ,
            "7.几个居中的小办法：1)text-align:center; 2)margin:0 auto; 3)position:absolute;left:0;right:0;margin:auto 父级要有position"   ,
            '8.img里面添加 title="水果" 属性，鼠标移过去时会出现小提示',
            '9.背景图固定不随滚动条移动 background-attachment: fixed;',
            '10.div自适应文字宽度 display:inline-block;',
          ]
        },
      ]
    }
  }
}
</script>

<style>
.blogBody{
  margin: 0 auto;
  width: 800px;
  overflow: hidden;
  z-index: 999999999;
}
.bodyLeft{
  float: left;
  width: 600px;
}
.bodyLeft li{
  padding: 20px;
  margin: 10px 0;
  text-align: left;
  background: white;
  box-shadow: 0 0 20px rgba(0,37,55,.05);
}
.bodyLeft li .attribute{
  font-size: 13px;
  color: #999999;
  margin: 10px 0;
}
.bodyLeft li .text{
  margin: 10px 0;
}
.bodyRight{
  width: 150px;
  height: 85%;
  background: white;
  box-shadow: 0 1px 3px rgba(0,37,55,.05);
  padding: 20px;
  float: right;
  margin-top: 10px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 100px;
}
@media only screen and (max-width: 800px) {
  .blogBody{
    width: 100%;
  }
  .bodyLeft{
    width: 100%;
  }
  .bodyRight{
    display: none;
  }
}
</style>
