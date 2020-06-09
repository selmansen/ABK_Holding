<template>
	<div id="homepage" class="home">
    <div id="homeSlider" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide6">
          <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2>WE ARE STRONGER TOGETHER!</h2>
            </div>
          </div>
        </div>
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
    <div id="sectorsSlider" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/m-icrypex-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-ikaros-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-wamo-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-nyfxglobal-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-nyfxprime-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-abkpayment-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-abktech-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-aa-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-bpprime-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-skyfx-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-toros-logo.svg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/m-abknv-logo.svg" alt="">
        </div>
      </div>
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
      var sectorsSlider = new Swiper ('#sectorsSlider', {
        slidesPerView: 'auto',
        loop:true,
        autoplay: {
          delay: 3000,
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
  #sectorsSlider{
    background: #f2f5f7;
    border-top:1px solid #a92807;
    .swiper-slide{
      width:210px;
      height: 100px;
      display:flex;
      justify-content: center;
      align-items:center;
      border-bottom: 1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
      img{
        width:100px;
      }
    }
  }
</style>