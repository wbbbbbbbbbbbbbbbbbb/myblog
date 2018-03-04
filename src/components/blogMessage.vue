<template>
  <div class="blogBody">
    <div class="body" style="clear:both">
      <div class="msgLeft">
          <ul>
            <li v-for="item in blogMessageData">
              <div class="Title"><h2>{{item.Title}}</h2></div>
              <div class="text" v-for="text in item.texts">{{text}}</div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blogMessage',
  data () {
    return {
      blogMessageData:[
        {
    "Title": "留言板",
    "attribute": "时间：2018-2-24 0：28 | 标签：项目 | 阅读：2333",
    "texts": [
      "本功能尚未实现，等购买服务器后连同 登录，阅读数量等功能一同上线"
    ]
  }
      ]
    }
  },
  created() {
    // 访问服务器文件，应该把json文件放在最外层的static文件夹，这个文件夹是vue-cli内置服务器向外暴露的静态文件夹
    axios.get("../static/blogMessage.json",{})
    .then(response=>{
         this.blogMessageData=response.data;
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
.msgLeft{
  float: left;
  width: 800px;
}
.msgLeft li{
  padding: 20px;
  margin: 10px 0;
  text-align: left;
  background: white;
  box-shadow: 0 1px 3px rgba(0,37,55,.05);
}
.msgLeft li .attribute{
  font-size: 13px;
  color: #999999;
  margin: 10px 0;
}
.msgLeft li .text{
  margin: 10px 0;
}
@media only screen and (max-width: 800px) {
  .blogBody{
    width: 100%;
  }
  .msgLeft{
    width: 100%;
  }
  .bodyRight{
    display: none;
  }
}
</style>
