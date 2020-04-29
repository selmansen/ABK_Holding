<template>
	<div id="homepage" class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
          <div class="container h-100 d-flex align-items-center">
            <div>
              <h2>Contrary to popular <br>belief, Lorem Ipsum <br>is not simply random </h2>
              <a href="#" class="btn btn-success mt-4">More Info</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide2">
          <div class="container h-100 d-flex align-items-center">
            <div>
              <h2>Contrary to popular <br>belief, Lorem Ipsum <br>is not simply random </h2>
              <a href="#" class="btn btn-success mt-4">More Info</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div id="aboutus" class="py-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
          <h2>About Us</h2>
          <h3>Lorem Ipsum is <br>simply dummy <br>text of the </h3>
        </div>
        <div class="col-lg-6">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
          <a href="#" class="btn btn-success mt-4">More Info</a>
        </div>
        </div>
        <div class="about-accordion mt-16">
          <div class="row m-0">
            <div class="col-lg-4 px-0">
              <div class="tab-hover bg-success p-4">
                <div class="tab-title">
                  <img src="../assets/img/ic-sectors.svg" alt="" class="tab-icon">
                  <h2>Sectors</h2>
                </div>
                <div class="acList">
                  <ul>
                    <li>Banking/Finance
                      <ul>
                        <li>Licence electronic money instution</li>
                        <li>Wamo</li>
                      </ul>
                    </li>
                    <li>Brokarege
                      <ul>
                        <li>FCA licence entities</li>
                        <li>laboham licence</li>
                        <li>cambodia licence</li>
                        <li>St.Vincent licence</li>
                        <li>Other Regulated</li>
                      </ul>
                    </li>
                    <li>FCA Regulated Asset Management</li>
                    <li>Technology Companies
                      <ul>
                        <li>ABK Tech</li>
                      </ul>
                    </li>
                    <li>Insurance
                      <ul>
                        <li>A&A</li>
                      </ul>
                    </li>
                    <li>Crypto
                      <ul>
                        <li>Icrypex</li>
                      </ul>
                    </li>
                    <li>NON Financial
                      <ul>
                        <li>Ikarus&Partners</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 px-0">
              <div class="tab-hover bg-success p-4">
                <div class="tab-title">
                  <img src="../assets/img/ic-companies.svg" alt="" class="tab-icon">
                  <h2>Companies</h2>
                </div>
                <div class="acList">
                  <ul>
                    <li><router-link to="/Companies" tag="a">WAMO</router-link></li>
                    <li><router-link to="/Companies" tag="a">ABKTech</router-link></li>
                    <li><router-link to="/Companies" tag="a">Icrypex</router-link></li>
                    <li><router-link to="/Companies" tag="a">Ikarus&Partners</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 px-0">
              <div class="tab-hover bg-success p-4">
                <div class="tab-title">
                  <img src="../assets/img/ic-projects.svg" alt="" class="tab-icon">
                  <h2>Projects</h2>
                </div>
                <div class="acList">
                  <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="socialAktivity" class="social-activity py-20 d-flex align-items-center">
      <div class="container">
        <div class="col-lg-6">
          <h2 class="text-white border-bottom pb-3 font-italic">Sosyal ve Kültürel Aktiviteler</h2>
          <h3 class="text-white mt-6">Lorem Ipsum is <br>simply dummy <br>text of the </h3>
          <p class="text-white mt-3">Lorem Ipsum is simply dummy text of the printing and s simply dummy text of the printing and imply dummy text of the printing</p>
          <a href="#" class="btn btn-success mt-4">More Info</a>
        </div>
      </div>
    </div>
    <News></News>
  </div>
</template>

<script>
  import News from './News.vue';
  import Swiper from 'swiper/js/swiper.esm.bundle';
  import 'swiper/css/swiper.css';
  export default {
    components: {
      News
    },
    mounted: function () {
      var mySwiper = new Swiper ('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        autoplay: {
          delay: 5000,
        }
      })
      $(".acList>ul>li").on("click", function(){
        if ( $(this).children("ul").is(":hidden") ){
           $(".acList>ul>li").removeClass("open");
          $(this).addClass("open");
        }else{
          $(this).removeClass("open");
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
        background:url("../assets/img/banner1.jpg") no-repeat;
      }
      &.slide2{
        background:url("../assets/img/banner2.jpg") no-repeat;
      }
      h2{
        font-size:70px;
        line-height: 80px;
        color:#fff;
      }
    }
    .swiper-pagination-bullet{
      background:#a92807;
      width:10px;
      height:10px;
    }
  }
  .social-activity{
    background: url("../assets/img/social-activity-bg.jpg") no-repeat;
    background-size:cover;
  }
  .about-accordion{
    position: relative;
    &:before{
      content:"";
      height:233px;
      top:0;
      left:0;
      width:100%;
      background: #a92807;
      position:absolute;
    }
    .tab-hover{
      color:#fff;
      transition:.4s;
      .tab-title{
        cursor: pointer;
      }
      .acList{
        display: none;
        animation-duration: .7s;
        animation-delay: .3s;
        animation-fill-mode: both;
        >ul{
          >li{
            padding:10px 10px 10px 25px;
            position: relative;
            border-bottom: 1px solid #fff;
            font-size: 16px;
            font-style: italic;
            line-height: 20px;
            transition:.4s;
            cursor: pointer;
            &:before{
              content:"";
              width:10px;
              height:10px;
              border-top:2px solid #fff;
              border-right:2px solid #fff;
              transform:rotate(45deg);
              position:absolute;
              left:0;
              top:14px;
              transition:.4s;
            }
            &:last-child{
              border-bottom:0;
              padding-bottom:0;
            }
            &:hover{
              color:#c1c0c0;
            }
            &.open{
              color:#fff;
              &:before{
                transform: rotate(135deg);
                top:12px;
              }
              ul{
                display: block;
                animation-name: fadeIn;
              }
            }
            a{
              color:#fff;
              transition:.4s;
              &:hover{
                color:#c1c0c0;
              }
            }
            >ul{
              margin-top:5px;
              display: none;
              animation-duration: .7s;
              animation-fill-mode: both;
              li{
                padding:5px 5px 5px 25px;
                cursor: pointer;
                color:#fff;
                transition:.4s;
                &:hover{
                  color:#c1c0c0;
                }
              }
            }
          }
        }
      }
      h2{
        color:#fff;
        text-align: center;
        margin-top:15px;
        background:url("../assets/img/ic-down.svg") no-repeat center 50px;
        padding-bottom: 60px;
        background-size: 38px;
        font-style: italic;
        transition:.4s;
      }
      .tab-icon{
        width:80px;
        margin:auto;
        display: block;
        transition:.4s;
      }
      &:hover{
        .acList{
          display: block;
          animation-name: fadeIn;
        }
        h2{
          background-size:0px;
          padding-bottom:0;
          background-position: center 60px;
        }
        .tab-icon{
          width:50px;
        }
        h2{
          margin-top:5px;
        }
      }
      
    }
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>