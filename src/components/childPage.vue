<template>
  <div>
    <span>{{tochildData.name}}</span>
    <span>{{tochildData.age}}</span>
    <span @click="toParent">toParent</span>
  </div>
</template>

<script>
    export default {
        name: "childPage",
      props:{
        tochildData:{
          type:Object,
          }
      },
      data(){
          return{
            message:'HAHA'
          }
      },
      methods:{
          toParent(){
            this.$emit('cwh','hello')
          }
      }

    }
</script>

<style scoped>

</style>
