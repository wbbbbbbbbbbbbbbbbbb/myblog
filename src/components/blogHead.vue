<template>
  <div class="blogHead">
    <ul class="head">
      <img src="../assets/qi.png" alt="">
      <li v-for="nav in navs"><router-link :to="nav.rou">{{nav.title}}</router-link></li>
      <ul class="headRight">
        <li v-for="more in mores"><a :href="more.url" target="_blank">{{more.title}}</a></li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'blogHead',
  data () {
    return {
      navs:[
        {title: "首页", rou: "blogBody"},
        {title: "文章", rou: "writings"},
        {title: "项目", rou: "blogProject"},
        {title: "留言板", rou: "blogMessage"},
        {title: "关于我", rou: "blogMe"}
      ],
      mores: [
        {title: "CSDN", url: "http://blog.csdn.net/webbingAndKami"},
        {title: "gitHub", url: "https://github.com/dashboard"},
      ]
    }
  }
}
</script>

<style>
.blogHead{
  width: 100%;
  height: 50px;
  background: white;
  z-index: 999;
  box-shadow: 0 0 20px rgba(0,34,77,.05);
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
}
.head{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 800px;
  height: 50px;
  float: left;
  line-height: 50px;
  text-align: center;
}
.head>img{
  width: 40px;
  height: 40px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
  margin: 5px 20px;;
}
.head>li{
  float: left;
  margin-right: 15px;
}
.head>li>a{
  color: black;
  text-decoration: none;
}
.headRight{
  float: right;
}
.headRight li{
  float: right;
  margin-right: 20px;
}
.headRight li a{
  text-decoration: none;
  color: black
}
@media only screen and (min-width: 450px) and (max-width: 800px) {
  .blogHead{
    width: 100%;
  }
  .head{
    width: 100%;
  }
}
@media only screen and (min-width: 350px) and (max-width: 450px) {
  .blogHead{
    width: 100%;
  }
  .head{
    width: 100%;
  }
  .head>li{
    margin-right: 10px;
  }
  .headRight{
    float: left;
  }
  .headRight li{
    margin-right: 10px;
  }
  .head>img{
    margin: 5px;
  }
}
</style>
