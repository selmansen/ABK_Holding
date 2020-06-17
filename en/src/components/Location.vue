<template>
    <div id="location" class="pt-16">
      <div class="container">
        <h2 class="text-center">Our Group Companies</h2>
        <h4 class="text-center mt-5">Strenght that is formed with joined ventures & business partnerships</h4>
        <div class="map mt-16"></div>
        <div class="item-wrap d-flex d-xl-inline-block justify-content-between flex-wrap">
          <div class="items" v-for="(data,index) in pins" :key="index">
            <div class="circle d-flex align-items-center justify-content-center">
              <img :src="data.icon" alt="">
              <span :class="data.flag" class="flag"></span>
            </div>
            <router-link :to="data.link" tag="a"><img :src="data.logo" alt=""></router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        pins:[
          {
            icon:require('../assets/img/ic-icrypex.svg'),
            logo:require('../assets/img/m-icrypex-logo.svg'),
            flag:"tr",
            link:"/Icrypex"
          },
          {
            icon:require('../assets/img/ic-ikaros.svg'),
            logo:require('../assets/img/m-ikaros-logo.svg'),
            flag:"tr",
            link:"/Ikaros"
          },
          {
            icon:require('../assets/img/ic-wamo.svg'),
            logo:require('../assets/img/m-wamo-logo.svg'),
            flag:"uk",
            link:"/Wamoio"
          },
          {
            icon:require('../assets/img/ic-aa.svg'),
            logo:require('../assets/img/m-aa-logo.svg'),
            flag:"tr",
            link:""
          },
          {
            icon:require('../assets/img/ic-abkpayment.svg'),
            logo:require('../assets/img/m-abkpayment-logo.svg'),
            flag:"singapore",
            link:""
          },
          {
            icon:require('../assets/img/ic-abktech.svg'),
            logo:require('../assets/img/m-abktech-logo.svg'),
            flag:"tr",
            link:"/AbkTech"
          },
          {
            icon:require('../assets/img/ic-abknv.svg'),
            logo:require('../assets/img/m-abknv-logo.svg'),
            flag:"holland",
            link:""
          },
          {
            icon:require('../assets/img/ic-fx.svg'),
            logo:require('../assets/img/m-skyfx-logo.svg'),
            flag:"stvincent",
            link:"/SkyFx"
          },
          {
            icon:require('../assets/img/ic-fx.svg'),
            logo:require('../assets/img/m-toros-logo.svg'),
            flag:"tr",
            link:""
          },
          {
            icon:require('../assets/img/ic-fx.svg'),
            logo:require('../assets/img/m-bpprime-logo.svg'),
            flag:"uk",
            link:"/Bpprime"
          },
          {
            icon:require('../assets/img/ic-fx.svg'),
            logo:require('../assets/img/m-nyfxprime-logo.svg'),
            flag:"stvincent",
            link:"/NyFxPrime"
          },
          {
            icon:require('../assets/img/ic-fx.svg'),
            logo:require('../assets/img/m-nyfxglobal-logo.svg'),
            flag:"uk",
            link:"/NyFx"
          },
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
#location{
    padding-bottom:180px;
    @media screen and(max-width:767px){
      padding-bottom:100px;
    }
    .map{
      background: url("../assets/img/location-bg.png") no-repeat center top;
      width:100%;
      height:370px;
      margin-bottom:-120px;
      background-size: contain;
      @media screen and(max-width:991px){
        height:270px;
      }
      @media screen and(max-width:575px){
        height:230px;
      }
    }
    .item-wrap{
      @media screen and(max-width:1231px){
          width:634px;
          margin: auto;
      }
      @media screen and(max-width:767px){
        width:300px;
      }
    }
    .items{
      float:left;
      width:100px;
      margin-left: 78px;
      height:250px;
      @media screen and(max-width:1231px){
        float:none;
      }
      @media screen and(max-width:767px){
        width:80px;
        margin-left: 0px !important;
        margin-top: 0 !important;
      }
      .circle{
        width:100px;
        height:100px;
        border:1px solid #000;
        border-radius:100px;
        background: #fff;
        position:relative;
        margin-bottom:90px;
        z-index:1;
        @media screen and(max-width:767px){
          width:80px;
          height:80px;
        }
        img{
          width:42px;
          transition:.5s;
          margin:0;
          @media screen and(max-width:767px){
            width:32px;
          }
        }
        .flag{
          width: 100px;
          height: 100px;
          left: -1px;
          top: -1px;
          position:absolute;
          opacity: 0;
          transform: translateZ(-160px) rotateY(-180deg);
          transition:.5s;
          @media screen and(max-width:767px){
            width:80px;
            height:80px;
            background-size:80px !important;
          }
          &.tr{
            background: url("../assets/img/flag-tr.svg") no-repeat center center;
          }
          &.uk{
            background: url("../assets/img/flag-uk.svg") no-repeat center center;
          }
          &.singapore{
            background: url("../assets/img/flag-singapore.svg") no-repeat center center;
          }
          &.holland{
            background: url("../assets/img/flag-holland.svg") no-repeat center center;
          }
          &.stvincent{
            background: url("../assets/img/flag-stvincent.svg") no-repeat center center;
          }
        }
        &:before{
          content:"";
          width:80px;
          right:100%;
          height:1px;
          background:#000;
          position:absolute;
          @media screen and(max-width:767px){
            width:32px !important;
          }
        }
        &:after{
          content:"";
          height:80px;
          right:50%;
          width:1px;
          background:#000;
          position:absolute;
          top:100%;
        }
      }
      img{
        display: block;
        margin: auto;
        max-width: 100%;
        @media screen and(max-width:767px){
          width:100%;
        }
      }
      &:first-child, &:nth-child(8){
        margin-left:0;
        .circle{
          &:before{
            display: none;
          }
        }
      }
      &:nth-child(5){
        @media screen and(max-width:1231px){
          margin-left:0;
          .circle{
            &:before{
              display: none;
            }
          }
        }
        @media screen and(max-width:767px){
          margin-left:0;
          .circle{
            &:before{
              display: block;
            }
          }
        }
      }
      &:nth-child(5), &:nth-child(6), &:nth-child(7){
        @media screen and(max-width:1231px){
          margin-top:90px;
        }
      }
      &:nth-child(8){
        margin-top:90px;
        @media screen and(max-width:1231px){
          margin-left:78px;
          .circle{
            &:before{
              display: block;
            }
          }
        }
      }
      &:nth-child(9), &:nth-child(10), &:nth-child(11), &:nth-child(12){
        margin-left:167px;
        margin-top:90px;
        @media screen and(max-width:1231px){
          margin-left:78px;
        }
        .circle{
          &:before{
            width:169px;
            @media screen and(max-width:1231px){
              width:80px;
            }
          }
        }
      }
      &:nth-child(9){
        @media screen and(max-width:1231px){
          margin-left:0;
          .circle{
            &:before{
              display: none;
              @media screen and(max-width:767px){
                display: block;
              }
            }
          }
        }
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10){
        @media screen and(max-width:767px){
          .circle{
            &:before{
              display: none;
            }
          }
        }
      }
      &:hover{
        .circle{
          img{
            transform: translateZ(-160px) rotateY(-180deg);
            opacity: 0;
          }
          .flag{
            transform: translateZ(0) rotateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
</style>
