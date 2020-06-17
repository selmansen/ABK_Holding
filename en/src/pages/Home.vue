<template>
	<div id="homepage" class="home">
    <div id="homeSlider" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="[data.slideId]" v-for="(data,index) in homeSlide" :key="index">
            <div class="container h-100 d-flex align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-center flex-column w-100">
                <h2 v-html="data.slideTitle" class="w-100"></h2>
                <router-link :to="data.slideLink" tag="a" class="btn btn-success mt-lg-8 mt-4" v-if="!data.slideLink === false">More Info</router-link>
              </div>
            </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div id="sectorsSlider">
      <marquee-text :duration="45" :repeat="2">
        <div class="item d-flex justify-content-center align-items-center" v-for="(data, index) in sectorsSlide" :key="index">
          <router-link tag="a" :to="data.slideLink">
            <img :src="data.image" class="img-fluid">
          </router-link>
        </div>
      </marquee-text>
    </div>
    <About></About>
    <Location></Location>
    <News></News>
  </div>
</template>

<script>
  import News from '../components/News.vue';
  import About from '../components/About.vue';
  import Location from '../components/Location.vue';
  import Swiper from 'swiper/js/swiper.esm.bundle';
  import 'swiper/css/swiper.css';
  export default {
    data() {
      return{
        homeSlide:[
          {
            slideId:"slide6",
            slideTitle:"WE ARE STRONGER TOGETHER!",
          },
          {
            slideId:"slide5",
            slideTitle:"ICRYPEX WAS THE MAIN SPONSOR OF KALDER’S QUALITY CONGRESS 2019 INVITING DR. NOURIEL ROUBINI AS MAIN EVENT SPEAKER.",
            slideLink:"/Icrypex"
          },
          {
            slideId:"slide4",
            slideTitle:"STRENGHT THAT IS FORMED WITH JOINED VENTURES & BUSINESS PARTNERSHIPS",
          },
          {
            slideId:"slide1",
            slideTitle:"COVID-19: WE ARE STRONGER TOGETHER!",
            slideLink:"/Detail/covid19-we-are-stronger"
          },
          {
            slideId:"slide2",
            slideTitle:"CHALLENGE ON THE ROAD!",
            slideLink:"/Detail/challenge-on-the-road"
          },
          {
            slideId:"slide3",
            slideTitle:"ICRYPEX AND WAMO TO SPONSOR ADUS MOTORSPORTS.",
            slideLink:"/Detail/icrypex-and-wamo-sponsors-adus"
          },
        ],
        sectorsSlide:[
          {
            slideLink:"/Icrypex",
            image: require('../assets/img/m-icrypex-logo.svg')
          },
          {
            slideLink:"/Ikaros",
            image: require('../assets/img/m-ikaros-logo.svg')
          },
          {
            slideLink:"/Wamoio",
            image: require('../assets/img/m-wamo-logo.svg')
          },
          {
            slideLink:"/NyFx",
            image: require('../assets/img/m-nyfxglobal-logo.svg')
          },
          {
            slideLink:"/NyFxPrime",
            image: require('../assets/img/m-nyfxprime-logo.svg')
          },
          {
            slideLink:"",
            image: require('../assets/img/m-abkpayment-logo.svg')
          },
          {
            slideLink:"/AbkTech",
            image: require('../assets/img/m-abktech-logo.svg')
          },
          {
            slideLink:"",
            image: require('../assets/img/m-aa-logo.svg')
          },
          {
            slideLink:"/Bpprime",
            image: require('../assets/img/m-bpprime-logo.svg')
          },
          {
            slideLink:"/SkyFx",
            image: require('../assets/img/m-skyfx-logo.svg')
          },
          {
            slideLink:"",
            image: require('../assets/img/m-toros-logo.svg')
          },
          {
            slideLink:"",
            image: require('../assets/img/m-abknv-logo.svg')
          }
        ]
      }
    },
    components: {
      News, About, Location
    },
    mounted: function () {
      var homeSlider = new Swiper ('#homeSlider', {
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
        }
      });
    }
  }
</script> 

<style lang="scss">
  #homeSlider{
    height:100vh;
    min-height:667px;
    max-height:900px;
    @media screen and(max-width:991px){
      height: 567px;
      min-height: 567px;
    }
    .swiper-slide{
      background-size:cover !important;
      background-position: center center !important;
      position:relative;
      z-index:1;
      &:before{
        content:"";
        position:absolute;
        left:0;
        top:0;
        background: url("../assets/img/patent.png") repeat rgba(#000, .1);
        height:100%;
        width:100%;
        z-index:-1;
      }
      >.container{
        padding-top:165px;
        @media screen and(max-width:991px){
          padding-top:102px;
        }
      }
      h2{
        color:#fff;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
        letter-spacing: -1px;
        text-align: center;
        font-size:72px;
        line-height: 72px;
        font-weight: 700;
        @media screen and(max-width:991px){
          font-size: 34px !important;
          line-height: 42px !important;
        }
      }
      &.slide1{
        background:url("../assets/img/banner-1.jpg") no-repeat;
      }
      &.slide2{
        background:url("../assets/img/banner-2.jpg") no-repeat;
      }
      &.slide3{
        background:url("../assets/img/banner-4.jpg") no-repeat;
      }
      &.slide4{
        background:url("../assets/img/banner-5.jpg") no-repeat;
        h2{
          font-size:57px;
          line-height: 70px;
        }
      }
      &.slide5{
        background:url("../assets/img/banner-6.jpg") no-repeat;
        h2{
          font-size:36px;
          line-height: 44px;
        }
      }
      &.slide6{
        background:url("../assets/img/banner-7.jpg") no-repeat;
        h2{
          font-size:72px;
          line-height: 72px;
          font-weight: 700;
        }
      }
    }
    .swiper-pagination-bullet{
      background:#a92807;
      width:10px;
      height:10px;
    }
    .swiper-button-prev, .swiper-button-next{
      color: #a92807;
      width: 64px;
      height: 50px;
      margin-top:-25px;
      &:after{
        content: "";
        border-right: 3px solid #a92807;
        border-top: 3px solid #a92807;
        width: 50px;
        height: 50px;
      }
    }
    .swiper-button-prev{
      left:15px;
      &:after{
        transform:rotate(-135deg);
      }
    }
    .swiper-button-next{
      right:15px;
      &:after{
        transform:rotate(45deg);
      }
    }
  }
  #sectorsSlider{
    background: #f2f5f7;
    border-top:1px solid #a92807;
    .item{
      width:210px;
      height: 100px;
      border-bottom: 1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
    }
  }
</style>