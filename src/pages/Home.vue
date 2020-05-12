<template>
	<div id="homepage" class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide5">
          <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2>Icrypex was the main sponsor of KalDer’s Quality Congress 2019 <br class="d-xl-block d-none">inviting Dr. Nouriel Roubini as Main Event Speaker.</h2>
              <router-link to="/en/Icrypex" tag="a" class="btn btn-success mt-lg-8 mt-4">More Info</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide4">
          <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2>Strenght that is formed with joined ventures & business partnerships</h2>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide1">
          <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2>COVID-19: We are stronger together!</h2>
              <router-link to="/en/Detail/covid19-we-are-stronger" tag="a" class="btn btn-success mt-lg-8 mt-4">More Info</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide2">
          <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2>Challenge on the road!</h2>
              <router-link to="/en/Detail/challenge-on-the-road" tag="a" class="btn btn-success mt-lg-8 mt-4">More Info</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide3">
          <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2>Icrypex and Wamo to sponsor Adus Motorsports..</h2>
              <router-link to="/en/Detail/icrypex-and-wamo-sponsors-adus" tag="a" class="btn btn-success mt-lg-8 mt-4">More Info</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <About></About>
    <div id="chart-table" class="pt-lg-20 pt-12 pb-12">
      <div class="container">
        <img src="../assets/img/chart-table.png" alt="" class="img-fluid">

        <div class="maps mt-lg-20 mt-16 d-lg-block d-none">
          <div class="map-dot" :class="['dot'+(index+1)]" @click="mapShow" v-for="(item,index) in items" :key="index">
            <div class="map-companies">
              <div class="d-flex flex-wrap justify-content-center align-items-center">
                 <img v-for="logo in item.logos" :key="item.logo" :src="logo.image">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <News></News>
  </div>
</template>

<script>
  import News from '../components/News.vue';
  import About from '../components/About.vue';
  import Swiper from 'swiper/js/swiper.esm.bundle';
  import 'swiper/css/swiper.css';
  export default {
    data() {
        return{
            isActive: 0,
            items:[
              {
                logos:[
                  {
                    image: require('../assets/img/m-skyfx-logo.svg')
                  },
                  {
                    image: require('../assets/img/m-nyfxglobal-logo.svg')
                  }
                ]
              },
              {
                logos:[
                  {
                    image: require('../assets/img/m-abknv-logo.svg')
                  }
                ]
              },
              {
                logos:[
                  {
                    image: require('../assets/img/m-wamo-logo.svg')
                  },
                  {
                    image: require('../assets/img/m-bpprime-logo.svg')
                  },
                  {
                    image: require('../assets/img/m-abktech-logo.svg')
                    
                  }
                ]
              },
              {
                logos:[
                  {
                    image: require('../assets/img/m-ikaros-logo.svg')
                  },
                  {
                    image: require('../assets/img/m-toros-logo.svg')
                  },
                  {
                    image: require('../assets/img/m-aa-logo.svg')
                  },
                  {
                    image: require('../assets/img/m-icrypex-logo.svg')
                  }
                ]
              },
              {
                logos:[
                  {
                    image: require('../assets/img/m-nyfxcombodia-logo.svg')
                  }
                ]
              },
              {
                logos:[
                  {
                    image: require('../assets/img/m-nyfxprime-logo.svg')
                  }
                ]
              },
              {
                logos:[
                  {
                    image: require('../assets/img/m-abkpayment-logo.svg')
                  }
                ]
              }
            ]
        }
    },
    components: {
      News, About
    },
    mounted: function () {
      var mySwiper = new Swiper ('.swiper-container', {
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
    },
    methods:{
      mapShow: function(event){
        if(event.target.classList.contains("active") ){
          event.target.classList.remove("active");
        }else{
          const dots = document.querySelectorAll(".map-dot");
          for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
          }
          event.target.classList.add("active");
        }
      }
    }
  }
</script> 

<style lang="scss">
  .swiper-container{
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
        text-shadow: 0px 2px 10px #000;
        letter-spacing: -1px;
        text-align: center;
        @media screen and(max-width:991px){
          font-size: 34px !important;
          line-height: 42px !important;
        }
      }
      &.slide1{
        background:url("../assets/img/banner-1.jpg") no-repeat;
        h2{
          font-size: 55px;
          line-height: 50px;
        }
      }
      &.slide2{
        background:url("../assets/img/banner-2.jpg") no-repeat;
        h2{
          font-size: 60px;
          line-height: 60px;
        }
      }
      &.slide3{
        background:url("../assets/img/banner-4.jpg") no-repeat;
        h2{
          font-size:45px;
          line-height: 55px;
        }
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
          font-size:41px;
          line-height: 57px;
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
      width: 38px;
      height: 60px;
      margin-top:-30px;
      &:after{
        font-size:60px;
      }
    }
    .swiper-button-prev{
      left:15px;
    }
    .swiper-button-next{
      right:15px;
    }
  }
  #chart-table{
    background: url("../assets/img/chart-bg.jpg") no-repeat center top;
    background-size:cover;
    .maps{
      width:100%;
      height: 535px;
      position:relative;
      background: url("../assets/img/maps.svg") no-repeat center top;
      @media screen and(max-width:1231px){
        height:425px;
      }
      .map-dot{
        width:40px;
        height:40px;
        background: url("../assets/img/map-icon.svg") no-repeat center;
        position:absolute;
        z-index: 1;
        animation: tb 1.4s ease-in-out;
        animation-iteration-count: infinite;
        cursor: pointer;
        .map-companies{
          display: none;
          animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
          background:#fff;
          width: 165px;
          position: absolute;
          padding: 5px 15px 15px;
          bottom: 34px;
          left: calc(-50% - 45px);
          border-radius: 3px;
          img{
            width:60px;
            border-left: 1px solid #ccc;
            padding-left: 10px;
            margin-left: 10px;
            margin-top: 10px;
            &:first-child, &:nth-child(3),&:nth-child(5){
              margin-left:0;
              padding-left:0;
              border-left:0;
            }
          }
          &:after{
            content:"";
            position:absolute;
            width:10px;
            height: 10px;
            background: #fff;
            transform: rotate(45deg);
            bottom:-5px;
            left:calc(50% + -3px);
          }
        }
        &.active{
          .map-companies{
            display: block;
          }
        }
        @keyframes flip-vertical-fwd {
          0% {
            -webkit-transform: translateZ(160px) rotateY(180deg);
                    transform: translateZ(160px) rotateY(180deg);
                    opacity: 0;
          }
          100% {
            opacity: 1;
            -webkit-transform: translateZ(0) rotateY(0);
                    transform: translateZ(0) rotateY(0);
          }
        }
        @keyframes tb{
          0%{
            transform: translateY(0);
          }
          50%{
            transform: translateY(-4px);
          } 
          100%{
            transform: translateY(0px);
          }
        }
        &.dot1{
          top: calc(50% - 52px);
          left: calc(50% - 261px);
          animation-delay: .2s;
          @media screen and(max-width:1231px){
            top: calc(50% - 45px);
            left: calc(50% - 212px);
          }
        }
        &.dot2{
          top: calc(50% - 205px);
          left: calc(50% - 60px);
          animation-delay: .3s;
          @media screen and(max-width:1231px){
            top: calc(50% - 171px);
            left: calc(50% - 53px);
          }
        }
        &.dot3{
          top: calc(50% - 190px);
          left: calc(50% - 39px);
          animation-delay: .1s;
          @media screen and(max-width:1231px){
            top: calc(50% - 157px);
            left: calc(50% - 35px);
          }
        }
        &.dot4{
          top: calc(50% - 155px);
          left: calc(50% - -45px);
          animation-delay: .5s;
          @media screen and(max-width:1231px){
            top: calc(50% - 127px);
            left: calc(50% - -36px);
          }
        }
        &.dot5{
          top: calc(50% - 48px);
          left: calc(50% - -318px);
          animation-delay: .4s;
          @media screen and(max-width:1231px){
            top: calc(50% - 46px);
            left: calc(50% - -248px);
          }
        }
        &.dot6{
          top: calc(50% - 19px);
          left: calc(50% - -296px);
          animation-delay: .6s;
          @media screen and(max-width:1231px){
            top: calc(50% - 19px);
            left: calc(50% - -233px);
          }
        }
        &.dot7{
          top: calc(50% - -14px);
          left: calc(50% - -299px);
          animation-delay: .15s;
          @media screen and(max-width:1231px){
            top: calc(50% - -10px);
            left: calc(50% - -240px);
          }
        }
      }
    }
  }
</style>