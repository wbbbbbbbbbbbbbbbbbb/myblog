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
          Title: '关于我',
          attribute: '时间：2018-2-24 0：28 | 标签：项目 | 阅读：2333',
          texts: [
            '技术栈: h5+css js vue vue-router',
          ]
        }
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
  width: 800px;
}
.bodyLeft li{
  padding: 20px;
  margin: 10px 0;
  text-align: left;
  background: white;
  box-shadow: 0 1px 3px rgba(0,37,55,.05);
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
