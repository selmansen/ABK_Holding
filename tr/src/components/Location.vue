<template>
    <div id="location" class="pt-16">
      <div class="container">
        <h2 class="text-center">Our Group Companies</h2>
        <h4 class="text-center mt-5">Strenght that is formed with joined ventures & business partnerships</h4>
        <div class="map mt-16"></div>
        <div class="item-wrap d-flex justify-content-between flex-wrap">
          <div class="items" v-for="(data,index) in pins" :key="index">
            <div class="circle d-flex align-items-center justify-content-center">
              <img :src="data.icon" alt="">
              <span :class="data.flag" class="flag"></span>
            </div>
            <img :src="data.logo" alt="">
          </div>
        </div>
        <h2 class="text-center mt-16 mb-11">About Companies</h2>
        <tabs class="location-tabs">
          <tab name="Ikaros & Partners" :selected="true">
            <div class="d-lg-flex">
              <img src="../assets/img/t-aa.jpg" alt="" class="img-fluid bg mr-lg-8">
              <div class="mt-lg-0 mt-6">
                <p>Ikaros & Partners has been established with a need of qualified partnerships for smart solutions over Human Resources, and Consultancy concentrated on financial and non-financial resources including but not limited to recruitment processes with a wide range of candidate pooling, Sales and Marketing, Retail business solutions, Logistic and Supply Chain architecting, Accounting and Finance. Ikaros & Partners with its partners gives support to its global clients on restructuring projects.</p>
              </div>
            </div>
          </tab>
          <tab name="ABK Tech - Icrypex">
            <div class="d-lg-flex">
              <img src="../assets/img/t-abkt.jpg" alt="" class="img-fluid bg mr-lg-8">
              <div class="mt-lg-0 mt-6">
                <p>ABK Technologies has been founded by top finance professionals who have had top managerial positions in well-known financial institutions regulated under FCA, MFSA, BDDK and BaFin.</p>
                <p class="mt-6">ABK Technologies professionals expertise in financial industry and financial engineering providing opportunity to its clients having flexibility to shape the mapping of their projects, to create their own instruments and label the instruments freely. ABK Technology designs the best solution for its clients and clients of the clients.</p>
              </div>
            </div>
          </tab>
          <tab name="A&A Insurance">
            <div class="d-lg-flex">
              <img src="../assets/img/t-ikaros.jpg" alt="" class="img-fluid bg mr-lg-8">
              <div class="mt-lg-0 mt-6">
                <p>Ata-Alp Sigorta ve Aracılık Hizmetleri A.Ş. is established JSC under ABK Holding with 49% stake processing its brokerage licensing. The main purpose of Ata-Alp strategy is to bring a fresh and innovative approach to insurance brokerage services. We strive to provide complete transparency, honesty and loyalty in our service to you.</p>
                <p class="mt-6">A&A is the specialist online insurance brokerage providing professional advice and insurance products from a number of reliable insurers. Ata-Alp where ease of doing business, exceptional service and tailored insurance products converge aims to make insured life easier by gaining access through service portal, giving you the freedom to issue a tailored insurance, file claims and service your policies 24/7. All of this right at your fingertips.</p>
              </div>
            </div>
          </tab>
        </tabs>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        pins:[
          {
            icon:require('../assets/img/ic-ikaros.svg'),
            logo:require('../assets/img/m-ikaros-logo.svg'),
            flag:"tr"
          },
          {
            icon:require('../assets/img/ic-abktech.svg'),
            logo:require('../assets/img/m-abktech-logo.svg'),
            flag:"tr"
          },
          {
            icon:require('../assets/img/ic-aa.svg'),
            logo:require('../assets/img/m-aa-logo.svg'),
            flag:"tr"
          }
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
      position:relative;
      max-width:600px;
      margin:auto;
      @media screen and(max-width:767px){
        width:300px;
      }
      &:before{
          content:"";
          width:100%;
          left:0;
          top:51px;
          height:1px;
          background:#000;
          position:absolute;
          @media screen and(max-width:767px){
            top:40px;
          }
        }
      
    }
    .items{
      width:100px;
      height:250px;
      @media screen and(max-width:767px){
        width:80px;
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
    .location-tabs{
      .bg{
        max-width:320px;
        @media screen and(max-width:991px){
          max-width:100%;
        }
      }
    }
  }
</style>
