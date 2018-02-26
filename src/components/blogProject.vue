<template>
  <div class="blogProject">
    <ul>
      <li v-for="project in projects">
        <h3 style="paddingBottom:10px;">{{project.title}}</h3>
        <hr>
        <ul>
          <li v-for="pro in project.valueTitle">
            <h4>{{pro.Ttitle}}</h4>
            <span>{{pro.Tvalue}}</span>
            <a :href="pro.Tlink" target="_blank" >{{pro.Tlink}}</a>
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'blogBody',
  data () {
    return {
      projects:[
        {
          title: '个人博客项目',
          valueTitle: [
            {
              Ttitle: '项目介绍：',
              Tvalue: '链家品牌H5介绍'
            }, {
              Ttitle: '技术栈：',
              Tvalue: 'css3 ：该H5主要用css3的动画transform'
            }, {
              Ttitle: '收获：',
              Tvalue: '1.看起来这个页面用的技术简单，但实际上用了挺多css3动画结合才实现的效果。'
            }, {
              Ttitle: '源代码：',
              Tvalue: 'GitHub：',
              Tlink: 'https://github.com/zpf2017/lianjia'
            }, {
              Ttitle: '展示网址：',
              Tvalue: '在线体验： 链家品牌H5介绍'
            }
          ]
        }, {
          title: '个人博客项目',
          valueTitle: [
            {
              Ttitle: '项目介绍：',
              Tvalue: '链家品牌H5介绍'
            }, {
              Ttitle: '技术栈：',
              Tvalue: 'css3 ：该H5主要用css3的动画transform'
            }, {
              Ttitle: '收获：',
              Tvalue: '1.看起来这个页面用的技术简单，但实际上用了挺多css3动画结合才实现的效果。'
            }, {
              Ttitle: '源代码：',
              Tvalue: 'GitHub：',
              Tlink: 'https://github.com/zpf2017/lianjia'
            }, {
              Ttitle: '展示网址：',
              Tvalue: '在线体验： 链家品牌H5介绍'
            }
          ]
        },
      ]
    }
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: #2c3e50;
}
.blogProject>ul>li{
  width: 800px;
  padding: 20px;
  margin: 10px auto;
  background: white;
  text-align: left;
  box-shadow: 0 0 20px rgba(0,37,55,.05);
}
.blogProject>ul>li>ul{
  margin-top: 10px;
}
.blogProject>ul>li>ul>li{
  margin-bottom: 10px;
}
</style>
