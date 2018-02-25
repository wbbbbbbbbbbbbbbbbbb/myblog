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
          Title: '内测版本 2.0',
          attribute: '时间：2018-2-24 0：28 | 标签：坑爹更新 | 阅读：2333',
          texts: [
            '1.对网站首页进行十分装逼的改动',
            '------添加顶部背景图',
            '------对导航框与侧边框添加粘性固定',
            '------调节了相应的移动端适配',
          ]
        }, {
          Title: '内测版本 1.0',
          attribute: '时间：2018-2-22 12：58 | 标签：坑爹更新 | 阅读：2333',
          texts: [
            '1.完成网站基本架构',
            '2.添加回到顶部按钮',
            '3.设置了默认路由',
            '4.适配移动端，添加了基础的响应式布局',
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
