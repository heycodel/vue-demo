<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*#app {*/
  /*min-width: 100vw;*/
  /*min-height: 100vh;*/
  /*background: rgb(34, 34, 34);*/
/*// padding-top: rem(88);*/
/*// overflow: hidden;*/
/*}*/
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f4f4f4;
}
</style>
