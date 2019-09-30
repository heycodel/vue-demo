<template>
  <div>
    <div class="header_bg">
        <div class="back_url">
          <img @click="back" src="../assets/return.png" alt="">
        </div>
    </div>
    <div class="tab_box">
      <div class="tab_title"><router-link to="/songlist"> 歌曲</router-link></div>
      <div class="tab_title"><router-link to="/albumList"> 专辑 </router-link></div>
    </div>
    <transition name="fade1">
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
      methods:{
          back(){
            this.$router.push({path: '/index'});
          }
      }
    }
</script>

<style scoped>
  .header_bg{
    height: 420px;
    background: url("../assets/jay.png") no-repeat;
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
  /* 子路由进去动画 */
  .fade1-enter-active{
    transition: all 0.2s;
  }
   .fade1-leave-active {
     transition: all 0.1s;
      }
  .fade1-enter{
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  .fade1-enter{
    opacity: 0.9;
  }
</style>
