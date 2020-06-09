<template>
    <div id="location" class="pt-16">
      <h2 class="text-center">Our Group Companies</h2>
      <h4 class="text-center mt-11">Strenght that is formed wit joined ventures & business partnerships</h4>
      <div class="container">
        <div class="map mt-16"></div>
        <div class="item-wrap d-flex d-xl-inline-block justify-content-between flex-wrap">
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-icrypex.svg" alt="">
            </div>
            <img src="../assets/img/m-icrypex-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-ikaros.svg" alt="">
            </div>
            <img src="../assets/img/m-ikaros-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-wamo.svg" alt="">
            </div>
            <img src="../assets/img/m-wamo-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-fx.svg" alt="">
            </div>
            <img src="../assets/img/m-aa-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-abkpayment.svg" alt="">
            </div>
            <img src="../assets/img/m-abkpayment-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-abktech.svg" alt="">
            </div>
            <img src="../assets/img/m-abktech-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-abknv.svg" alt="">
            </div>
            <img src="../assets/img/m-abknv-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-fx.svg" alt="">
            </div>
            <img src="../assets/img/m-skyfx-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-fx.svg" alt="">
            </div>
            <img src="../assets/img/m-toros-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-fx.svg" alt="">
            </div>
            <img src="../assets/img/m-bpprime-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-fx.svg" alt="">
            </div>
            <img src="../assets/img/m-nyfxprime-logo.svg" alt="">
          </div>
          <div class="items">
            <div class="circle d-flex align-items-center justify-content-center">
              <img src="../assets/img/ic-fx.svg" alt="">
            </div>
            <img src="../assets/img/m-nyfxglobal-logo.svg" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
#location{
    padding-bottom:180px;
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
          @media screen and(max-width:767px){
            width:32px;
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
      >img{
        width:100px;
        @media screen and(max-width:767px){
          width:80px;
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
          margin-top:160px;
        }
      }
      &:nth-child(8){
        margin-top:160px;
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
        margin-top:160px;
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
    }
  }
</style>