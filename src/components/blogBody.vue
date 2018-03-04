<template>
  <div class="blogBody">
    <div class="body" style="clear:both">
      <div class="bodyLeft">
          <ul>
            <li v-for="item in blogBodyDate">
              <div class="Title"><h2>{{item.Title}}</h2></div>
              <div class="attribute">{{item.attribute}}</div>
              <div class="text" v-for="text in item.texts">{{text}}</div>
            </li>
          </ul>
      </div>
      <div class="bodyRight"> emmmm不知道要放些什么，就这么空着也不好看，只好先做出来放着蹭地方</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blogBody',
  data () {
    return {
      blogBodyDate:[
        {
    "Title": "版本更新 1.0",
    "attribute": "时间：2018-3-3 11：32 | 标签：坑爹更新 | 阅读：2333",
    "texts": [
      "1.添加了 lib-flexible 的移动端适配",
      "2.用 axios 把 json 数据搬到外层 static 文件夹中",
      "3.修改'关于我'板块,设置为默认页，并修改设计",
      "4.回到顶部按钮添加动画"
    ]
  },  {
    "Title": "wing有话说",
    "attribute": "时间：2018-3-3 11：32 | 标签：bb时间 | 阅读：2333",
    "texts": [
      "前几天本人生日，就和女朋友去广州玩了几天，期间也问了几个大佬的意见，包括找工作的，我的个人网站的等等，感觉受益挺多的，今晚重新开始继续维护这个网站，同时开始公测这个网站吧（其实就是发出去朋友圈- -，主要是之前只是给几个玩前端的朋友看的），希望自己可以早点找到工作，交得起房租- -，我都不知道自己工作都没找到就租房子是什么鬼"
    ]
  }, {
    "Title": "内测版本 2.0",
    "attribute": "时间：2018-2-24 0：28 | 标签：坑爹更新 | 阅读：2333",
    "texts": [
      "1.对网站首页进行十分装逼的改动",
      "------添加顶部背景图",
      "------对导航框与侧边框添加粘性固定",
      "------调节了相应的移动端适配"
    ]
  }, {
    "Title": "内测版本 1.0",
    "attribute": "时间：2018-2-22 12：58 | 标签：坑爹更新 | 阅读：2333",
    "texts": [
      "1.完成网站基本架构",
      "2.添加回到顶部按钮",
      "3.设置了默认路由",
      "4.适配移动端，添加了基础的响应式布局"
    ]
  }
      ]
    }
  },
  created() {
    // 访问服务器文件，应该把json文件放在最外层的static文件夹，这个文件夹是vue-cli内置服务器向外暴露的静态文件夹
    axios.get("../static/blogBody.json",{})
    .then(response=>{
         this.blogBodyDate=response.data;
    })
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
  font-size: 16px;
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
