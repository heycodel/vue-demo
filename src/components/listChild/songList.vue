<template>
  <div>
    <ul class="song_list">
    <li class="list_item" v-for="item in song_array">
    <div class="song_pic"><img src="../../assets/jay.png" alt=""></div>
    <div class="song_info">
    <p class="song_name">{{item.name}}</p>
    <span class="singer">{{item.singer}}</span>
    </div>
    <div class="song_status"><img src="../../assets/play.png" alt=""></div>
    </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "songList",
      data(){
          return{
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
      created() {
          // this.axios.get('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&jsonpCallback=callback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=0025NhlN2yWrP4&order=listen&begin=0&num=30&songstatus=1')
          //   .then(res => {
          //   console.log('12412')
          // })
          //   .catch(err => {
          //     console.log(err);
          //   });
      },
      mounted() {
          this.loadInfo();
      },
      methods:{
          loadInfo() {
      var url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&jsonpCallback=callback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=0025NhlN2yWrP4&order=listen&begin=0&num=30&songstatus=1";
      $.ajax({
        type : "get",
        async : true,
        url : url,
        dataType : "jsonp",
        jsonp: "callbackParam",//服务端用于接收callback调用的function名的参数
        success : function(data){
          console.log(data);//这个地方报错是，不是一个函数
        },
        error:function(){
          console.log("error");
        }

      });

    }
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
