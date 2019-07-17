<template>
  <div>
    <div class="header_bg">

    </div>
    <div class="tab_box">
        <div class="tab_title">歌曲</div>
        <div class="tab_title">专辑</div>
    </div>
    <ul class="song_list">
      <li class="list_item" v-for="item in song_array">
          <div class="song_pic"><img src="../assets/jay.png" alt=""></div>
          <div class="song_info">
            <p class="song_name">{{item.name}}</p>
            <span class="singer">{{item.singer}}</span>
          </div>
        <div class="song_status"><img src="../assets/play.png" alt=""></div>
      </li>
    </ul>
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
    }
</script>

<style scoped>
  .header_bg{
    height: 420px;
    background: url("../assets/jay.png") no-repeat;
    background-size: cover;
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
