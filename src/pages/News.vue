<template>
    <div id="news" class="news py-20">
        <div class="container">
            <h3 class="mb-16 text-white text-center">News</h3>
            <div class="row">
                <div class="col-lg-6">
                    <div class="first-new">
                        <img src="../assets/img/news-big.jpg" alt="">
                        <span class="date mt-4 text-secondary">July, 31, 2017</span>
                        <h4 class="mt-2 text-secondary font-weight-normal">Counsel of protection: The coming revolution in insurance protection</h4>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="other-news p-8">
                        <div class="list d-flex mt-4 border-top pt-4" v-for="(data,index) in news" :key="index">
                            <img :src="data.image" class="img-fluid" @click="goToDetail(data.newsId)">
                            <div class="ml-4" @click="goToDetail(data.newsId)">
                                <span class="date text-secondary">{{data.newsDate}}</span>
                                <p class="text-secondary mt-3">{{data.newsTitle}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex mt-16">
            <a href="#" class="btn btn-success mt-4 mx-auto">More Info</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      title: 'News',
      news:[
      {
        newsTitle:"Counsel of protection: The coming revolution in insurance",
        newsDate:"July, 31, 2018",
        image       : require('../assets/img/news-sm-1.jpg'),
        newsId:1
      },
      {
        newsTitle:"Counsel of protection: The coming revolution in insurance",
        newsDate:"July, 31, 2017",
        image       : require('../assets/img/news-sm-2.jpg'),
        newsId:2
      },
      {
        newsTitle:"Counsel of protection: The coming revolution in insurance",
        newsDate:"July, 31, 2016",
        image       : require('../assets/img/news-sm-3.jpg'),
        newsId:3
      }
      ]
    }
  },
  methods:{
    goToDetail(prodId) {
        let proId=prodId
        this.$router.push({name:'detail',params:{Pid:proId}})
    }
  }
}
</script>

<style lang="scss">
    .news{
        position:relative;
        z-index: 1;
        &:before{
            content:"";
            background: #1e1d22;
            width:100%;
            height:500px;
            position:absolute;
            top:0;
            left:0;
            z-index:-1;
        }
        .first-new{
            img{
                width:100%;
            }
        }
        .other-news{
            background: #f2f5f7;
            height: 100%;
            .list{
                cursor:pointer;
                &:first-child{
                    border-top:0 !important;
                    padding-top:0 !important;
                    margin-top:0 !important;
                }
            }
        }
        
        .date{
            font-size:14px;
            font-weight: 600;
            line-height: 16px;
            display: block;
        }
    }
</style>
