<template>
  <div>
    <div class="header_bg">
        <div class="back_url">
          <img @click="back" src="../assets/return.png" alt="">
        </div>
      <div class="singer_info">
        <div class="singer_pic">
          <img src="../assets/images/jay_bg.jpg" alt="">
        </div>
        <div class="singer_right">
          <p class="singer_name">周杰伦(Jay Chou)</p>
          <p class="singer_tips">简介:中国台湾流行乐男歌手、音乐人、演员、导演、编剧等。</p>
        </div>
      </div>
    </div>
    <div class="tab_box">
      <div class="tab_title"><router-link to="/songlist"> 歌曲</router-link></div>
      <div class="tab_title"><router-link to="/albumList"> 专辑 </router-link></div>
    </div>
    <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
    export default {
        name: "songList",
      data () {
        return {
         song_array:[
           {
             pic:'../assets/jay.png',
             name:'告白气球',
             singer:'周杰伦'
           },
           {
             pic:'../assets/jay.png',
             name:'夜曲',
             singer:'周杰伦'
           }
         ]
        }
      },
      created(){
        // 接收组件
        this.$eventBus.$on("eventTarget",v=>{
          console.log('eventTarget',v);//这是eventTarget传过来的值
        })

      },
      methods:{
          back(){
            this.$router.push({path: '/index'});
          }
      }
    }
</script>

<style scoped>
  .singer_info{
    width: 100%;
    display: flex;
    margin-top: 69px;
  }
  .header_bg{
    height: 250px;
    background: url("../assets/images/timg.jpeg") no-repeat;
    background-size: cover;
    /*padding: 51px 0 0 16px;*/
    padding: 50px 0 91px 0 ;
  }
  .tab_box{
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    background:rgba(255,255,255,1);
  }
  .tab_title{
    flex: 1;
    font-size:30px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(153,153,153,1);
  }
  img{
    width: 100%;
    height: 100%;
  }
  .back_url{
    width: 40px;
    height: 40px;
    margin-left: 29px;
  }
  a {
    text-decoration: none;
    color: #999999;
  }
  .router-link-active {
    text-decoration: none;
    color: #00EDE2;
  }
  .router-link-active{
    position:relative;
  }
  .router-link-active:after{
    content:"";
    position:absolute;
    top:.67rem;
    left:.3rem;
    border-bottom:10px solid #00EDE2;
    border-left:10px solid transparent;
    border-right:10px solid transparent;
  }
  .singer_pic{
    width: 160px;
    height: 160px;
    margin-left: 36px;
  }
  .singer_name{
    font-size:30px;
    font-family:PingFang SC;
    font-weight:500;
    color: #fff;
    text-align: left;
  }
  .singer_tips{
    font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color: #fff;
    text-align: left;
    margin-top: 90px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .singer_right{
    width: 375px;
    margin-left: 31px;
  }
  /* 子路由进去动画 */
  /*.fade1-enter-active{*/
    /*transition: all 0.2s;*/
  /*}*/
   /*!*.fade1-leave-active {*!*/
     /*!*transition: all 0.1s;*!*/
      /*!*}*!*/
  /*.fade1-enter{*/
    /*opacity: 0;*/
    /*transform: translate3d(20%, 0, 0);*/
  /*}*/
  /*.fade1-enter{*/
    /*opacity: 0.9;*/
  /*}*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
