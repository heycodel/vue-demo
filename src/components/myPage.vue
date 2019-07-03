<template>
  <div>

  </div>
</template>

<script>
    export default {
        name: "myPage",
      data () {
        return {
          countTime:""
        }
      },
      methods:{
        countTime: function () {
          //获取当前时间
          var date = new Date();
          var now = date.getTime();
          //设置截止时间
          var endDate = new Date("2018-10-22 23:23:23");
          var end = endDate.getTime();
          //时间差
          var leftTime = end - now;
          //定义变量 d,h,m,s保存倒计时的时间
          if (leftTime >= 0) {
            d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            this.m = Math.floor(leftTime / 1000 / 60 % 60);
            this.s = Math.floor(leftTime / 1000 % 60);
          }
          console.log(this.s);
          //递归每秒调用countTime方法，显示动态时间效果
          setTimeout(this.countTime, 1000);
        }
      }
    }
</script>

<style scoped>
  .count_down{
    color: aqua;
    width: 200px;
    height: 200px;
  }
</style>
