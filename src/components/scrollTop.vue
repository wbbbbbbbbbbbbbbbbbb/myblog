<template>
  <div class="back-top" @click="goTop" name="button" v-show="visible" :style="customStyle">
      <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="back-icon" aria-hidden="true" style="height: 16px; width: 16px;">
        <g>
          <path d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z" fill-rule="evenodd"></path>
        </g>
      </svg>
  </div>
</template>

<script>
export default {
  props:{
        visibleHeight: { // 按钮出现条件
            type: Number,
            default: 400
        },
        rate: {
            type: Number, // 滚动速率
            default: 10
        },
        customStyle: { // 默认样式
            type: Object,
            default() {  // 此处由于是Object 所以要返回一个函数
                return {
                    right: '50px',
                    bottom: '50px',
                    width: '40px',
                    height: '40px',
                    'border-radius': '4px',
                    'line-height': '45px',
                    background: '#e7eaf1'
                }
            }
        }
    },
    data() {
        return {
            scrollTop: '',
            visible: false, // 是否显示
            interval: null  // 定时器
        }
    },
    mounted() {
        // Dom加载完毕时监听scroll事件
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
            if (this.interval) {
                clearInterval(this.interval)
            }
    },
    methods:{
        handleScroll() {
            // 判断条件
            this.visible = window.pageYOffset > this.visibleHeight
            this.scrollTop = window.pageYOffset
        },
        goTop(e) {
            this.interval = setInterval(()=>{
                this.scrollTop = this.scrollTop + (-this.scrollTop)/this.rate
                window.scrollTo(0,this.scrollTop)
                if(this.scrollTop <= 0){
                    window.scrollTo(0,0)
                    clearInterval(this.interval)
                }
            },13)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back-top {
  width: 50px;
  height: 50px;
  display: block;
  background: url(../assets/top.png) no-repeat;
  background-size:100% 100%;
  position: fixed;
  top: 90%;
  right: 50px;
}
@media only screen and (max-width: 800px) {
  .scrollTop{
    display: none;
  }
}
</style>
