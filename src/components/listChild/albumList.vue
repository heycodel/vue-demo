<template>
  <div>
    <ul class="song_list">
      <li class="list_item" v-for="item in song_array">
        <div class="song_pic"><img src="../../assets/jay.png" alt=""></div>
        <div class="song_info">
          <p class="song_name">{{item.name}}</p>
          <span class="singer">{{item.date}}</span>
        </div>
        <div class="song_status"><img src="../../assets/play.png" alt=""></div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "albumList",
      data(){
        return{
          song_array:[
            {
              pic:'../assets/jay.png',
              name:'我很忙',
              date:'2019-07-21'
            },
            {
              pic:'../assets/jay.png',
              name:'哎哟，不错哦',
              date:'2019-09-29'
            }
          ]
        }
      },
      created() {
        // 传值组件
        this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')
      }
    }
</script>

<style scoped>
  .song_list{
    padding: 24px 41px 0 27px;
    background: #f4f4f4;
  }
  .list_item{
    display: flex;
    align-items: center;
    margin-top: 58px;
  }
  .list_item:first-child{
    margin-top: 0;
  }
  .song_pic{
    width: 101px;
    height: 101px;
  }
  .song_status{
    width: 40px;
    height: 40px;
    margin-left: auto;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .song_info{
    text-align: left;
    margin-left: 29px;
  }
  .song_name{
    font-size:28px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .singer{
    margin-top: 18px;
    font-size:24px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(170,170,170,1);
  }
</style>
