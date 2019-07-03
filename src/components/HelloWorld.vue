<template>
  <div>
    <!--<div class="a" @touchstart="touchStart()" @touchend="touchEnd()" @click="adb()" style="height:30px;text-align: center;background-color: gainsboro;">长按我-->
      <!--<span v-if="show">123</span>-->
    <!--</div>-->
    <div>父页面</div>
    <child-page :tochildData="item" @cwh="chl"></child-page>
    <div>{{this.$store.state.count}}</div>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <!--<button @click="test"></button>-->
    <!--<div>{{time}}</div>-->
  </div>
</template>

<script>
  import  childPage from "./childPage.vue"
  import ChildPage from "./childPage";
export default {
  name: 'HelloWorld',
  components: {
       ChildPage
  },
  data () {
    return {
      time:'',
      msg: 'Welcome to Your Vue.js App',
      loop:null,
      show:false,
      item:{
        name:'ccc',
        age:'18',
        height:'180'

      }
    }
  },
  components: {
    ChildPage
  },
  mounted:function () {
    // this.countTime();
  },
  methods:{
    // countTime: function () {
    //   //获取当前时间
    //   var date = new Date();
    //   var now = date.getTime();
    //   //设置截止时间
    //   var endDate = new Date("2019-07-10 00:00:00");
    //   var end = endDate.getTime();
    //   //时间差
    //   var leftTime = end - now;
    //   console.log(leftTime);
    //   //定义变量 d,h,m,s保存倒计时的时间
    //   if (leftTime >= 0) {
    //     this.h = parseInt(leftTime / 1000 / 60 / 60);
    //     this.m = parseInt(leftTime / 1000 / 60 % 60);
    //     this.s = parseInt(leftTime / 1000 % 60);
    //   }
    //   //递归每秒调用countTime方法，显示动态时间效果
    //   setTimeout(this.countTime, 1000);
    //   this.time = this.h+":"+ this.m+":" +this.s
    //
    // },
    addFun(){
      this.$store.commit('add');
    },
    reductionFun(){
      this.$store.commit('reduction');
    },
    chl(data){
      alert(data);
    },
    adb(){
      console.log(13);
      console.log('test');
    },
    touchEnd(){
      //手指离开
      console.log(1);
      console.log('test');
      clearTimeout(this.Loop);
    },
    touchStart(){
      //手指触摸
      let that = this;
      clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
      this.Loop = setTimeout(function() {
        console.log(that.show);
        that.show = true;
      },500)
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
