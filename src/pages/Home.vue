<template>
	<div id="homepage" class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
          <div class="container h-100 d-flex align-items-center">
            <div>
              <h2>COVID-19: We are stronger together!</h2>
              <router-link to="/Detail/covid19-we-are-stronger" tag="a" class="btn btn-success mt-8">More Info</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide3">
          <div class="container h-100 d-flex align-items-center">
            <div>
              <h2>Challenge on the Circuit!</h2>
              <router-link to="/Detail/challenge-on-the-circuit" tag="a" class="btn btn-success mt-8">More Info</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide2">
          <div class="container h-100 d-flex align-items-center">
            <div>
              <h2>Challenge on the road!</h2>
              <router-link to="/Detail/challenge-on-the-road" tag="a" class="btn btn-success mt-8">More Info</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide4">
          <div class="container h-100 d-flex align-items-center">
            <div>
              <h2>Icrypex and Wamo sponsors ADUS MOTORSPORTS Rally Team at Turkish Rally Championship!</h2>
              <router-link to="/Detail/icrypex-and-wamo-sponsors-adus" tag="a" class="btn btn-success mt-8">More Info</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <About></About>
    <div id="chart-table" class="pt-20 pb-12">
      <div class="container">
        <img src="../assets/img/chart-table.png" alt="" class="img-fluid">
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
    }
  }
</script> 

<style lang="scss">
  .swiper-container{
    height:calc(100vh - 165px);
    min-height:667px;
    .swiper-slide{
      background-size:cover !important;
      background-position: center center !important;
      &.slide1{
        background:url("../assets/img/banner-1.jpg") no-repeat;
        h2{
          font-size: 55px;
          letter-spacing: -1px;
          line-height: 50px;
          color: #000;
          text-shadow: 0px 2px 10px #fff;
        }
      }
      &.slide2{
        background:url("../assets/img/banner-2.jpg") no-repeat;
        h2{
          font-size: 60px;
          letter-spacing: -1px;
          line-height: 60px;
          color: #fff;
          text-shadow: 0px 2px 10px #000;
        }
      }
      &.slide3{
        background:url("../assets/img/banner-3.jpg") no-repeat;
        h2{
          font-size: 60px;
          letter-spacing: -1px;
          line-height: 60px;
          color: #fff;
          text-shadow: 0px 2px 10px #000;
        }
      }
      &.slide4{
        background:url("../assets/img/banner-4.jpg") no-repeat;
        h2{
          font-size:50px;
          line-height: 60px;
          color:#fff;
          text-shadow:0px 2px 10px #000;
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
  }
</style>