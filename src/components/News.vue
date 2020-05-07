<template>
    <div id="news" class="news py-lg-20 pt-16 pb-10">
        <div class="container">
            <h3 class="mb-lg-16 mb-10 text-white text-center">Social Activities & News</h3>
            <div class="row">
                <div class="col-xl-6">
                    <div class="first-new" v-for="(data,index) in firstnews" :key="index">
                        <router-link :to="'/Detail/'+ data.firstNewsId" tag="a"><img :src="data.firstImage" class="img-fluid"></router-link>
                        <span class="date mt-4 text-secondary">{{data.firstNewsDate}}</span>
                        <h4 class="mt-2 font-weight-normal"><router-link :to="'/Detail/'+ data.firstNewsId" tag="a" class="text-secondary">{{data.firstNewsTitle}}</router-link></h4>
                    </div>
                </div>
                <div class="col-xl-6">
                    <hr class="d-xl-none my-10">
                    <div class="other-news p-xl-3 p-1">
                        <div class="mask p-3">
                            <div class="list d-flex mt-4 border-top pt-4 align-items-start" v-for="(data,index) in news" :key="index">
                                <router-link :to="'/Detail/'+ data.newsId" tag="a"><img :src="data.image"></router-link>
                                <div class="ml-4">
                                    <span class="date text-secondary">{{data.newsDate}}</span>
                                    <p class="mt-3"> <router-link :to="'/Detail/'+ data.newsId" tag="a" class="text-secondary">{{data.newsTitle}}</router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
      firstnews: [
        {
            firstNewsTitle:"COVID-19: We are stronger together!",
            firstNewsDate:"March, 2020",
            firstImage       : require('../assets/img/banner-1.jpg'),
            firstNewsId:"covid19-we-are-stronger"
        }
    ],
      news:[
        {
            newsTitle:"Challenge on the Circuit!",
            newsDate:"February, 2020",
            image       : require('../assets/img/banner-3.jpg'),
            newsId:"challenge-on-the-circuit"
        },
        {
            newsTitle:"Challenge on the road!",
            newsDate:"January, 2020",
            image       : require('../assets/img/banner-2.jpg'),
            newsId:"challenge-on-the-road"
        },
        {
            newsTitle:"Icrypex and Wamo sponsors ADUS MOTORSPORTS!...",
            newsDate:"November, 2019",
            image       : require('../assets/img/banner-4.jpg'),
            newsId:"icrypex-and-wamo-sponsors-adus"
        }
      ]
    }
  },
  /*methods:{
    goToDetail(prodId) {
        let proId=prodId
        this.$router.push({name:'detail',params:{Pid:proId}})
    }
  }
  */
}

</script>

<style lang="scss" scoped>
    .news{
        position:relative;
        z-index: 1;
        &:before{
            content:"";
            background: #a92807;
            width:100%;
            height:500px;
            position:absolute;
            top:0;
            left:0;
            z-index:-1;
            @media screen and(max-width:1231px){
                height: calc(50% - 225px);
            }
        }
        .first-new{
            img{
                width:100%;
                cursor:pointer;
            }
            h4{
                cursor:pointer;
            }
        }
        .other-news{
            background: #f2f5f7;
            height: 100%;
            max-height: 341px;
            @media screen and(max-width:1231px){
                max-height: none;
                height: auto;
            }
            .mask{
                height: 100%;
                overflow-x:auto;
            }
            .list{
                &:first-child{
                    border-top:0 !important;
                    padding-top:0 !important;
                    margin-top:0 !important;
                }
                img{
                    width:200px;
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
