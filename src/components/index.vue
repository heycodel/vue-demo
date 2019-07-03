<template>
  <div>
    <div class="bg">
      <div class="begin">
      <div class="btn">Jay Chou</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .bg{
    width: 100%;
    height: 100%;
    position: fixed;
    background: url("../assets/jay.jpg") no-repeat;
    background-size: cover;
  }
  .begin{
    width: 100%;
    position: absolute;
    bottom: 100px;
    display: flex;
    justify-content: center;
  }
  .btn{
    width: 468px;
    height: 80px;
    font-size:32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    border: 2px solid #ffffff;
    border-radius: 10px;
  }
</style>
