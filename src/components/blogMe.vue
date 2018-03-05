<template>
      <div class="meLeft">
        <a href="#" class="jiantou"><i class="icon iconfont icon-danjiantoushang"></i></a>
        <h1> For Me </h1>
        <table class="basic">
            <td align="right"><h2>"name" &nbsp:</h2></td>
            <td> <h2>&nbsp "温伟彬",</h2> </td>
          </tr>
          <tr>
            <td align="right"><h2>"sex" &nbsp:</h2></td>
            <td><h2>&nbsp "男",</h2></td>
          </tr>
          <tr>
            <td align="right"><h2>"age" &nbsp:</h2></td>
            <td><h2>&nbsp 21</h2></td>
          </tr>
        </table>
        <div class="skill">
          <p>是一个大专<span>应届毕业生</span></p><span></span>
          <p><span>熟悉h5+css3+js+vue全家桶</span></p>
          <p>想找一份<span>web前端</span>的实习</p>
        </div>
        <div class="meimg">
          <!-- <img src="../assets/line.jpg" alt=""> -->
          <p>如何找到我？!</p>
          <div class="wechat">
            <img src="../assets/WeChat.png" alt="">
            &lt / WeChat &gt
          </div>
          <span>
            微信号：wwb13226779310<br>
            phone：13226779310<br>
            QQ:1158211734
          </span>
          <div class="qq">
            <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1158211734&website=www.oicqzone.com"><i class="icon iconfont icon-qq"></i></a>
            <img src="../assets/line2.jpg" alt="">
            <a href="https://github.com/webbingforkami" target="_blank"><i class="icon iconfont icon-github"></i></a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'blogMe',
  data () {
    return {

    }
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 610;
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: #2c3e50;
}
.basic{
  margin: 30px auto;
}
.meimg{
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
}
.meimg>p{
  font-size: 24px;
  margin: 20px 0;
}
.meimg>.wechat{
  width: 100px;
  margin: 10px auto;
}
.meimg .wechat>img{
  width: 100px;
  height: 100px;
}
.meimg>.qq{
  margin-top: 30px;
  height: 48px;
}
.meimg>.qq i{
  font-size: 30px;
  padding: 0 5px;
}
.meLeft{
  float: left;
  width: 100%;
  height: 730px;
  margin: 10px 0;
  text-align: left;
  background: white;
  box-shadow: 0 1px 3px rgba(0,37,55,.05);
}
.meLeft>h1{
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
}
.meLeft .jiantou{
  margin: 20px auto;
  display: block;
  text-align: center;
}
.meLeft .jiantou i{
  font-size: 50px;
}
.skill{
  text-align: center;
}
.skill>p{
  font-size: 16px;
}
.skill>p>span{
  font-weight: bold;
  font-size: 20px;
}
@media only screen and (max-width: 800px) {
  .blogBody{
    width: 100%;
  }
  .bodyLeft{
    width: 100%;
  }
}
</style>
