<template>
    <div id="aboutus">
      <div class="container">
          <div class="row">
              <div class="col-lg-7">
                  <h2>About Us</h2>
                  <h4 class="mt-4">Strenght that is formed with <br>joined ventures & business partnerships</h4>
                  <p class="mt-5">ABK was established in 1977 with the name “Ozyavuzgil Group” and changed its business name to ABK Holding A.Ş. in 2017.</p>
                  <p class="mt-5">ABK is a financial holding gathering its financial operations of CFDs and FX trading, Crypto Exchanges, Banking & FinTech, Insurance Brokerage, and Asset Management operating in different jurisdictions with Technology company to support group companies in terms of IT infrastructure, domain, trading platforms and so on.</p>
                  <p class="mt-5">ABK Group Brokerage Division provides online trading platforms through its licensed entities. With the stream live tradable prices clients can buy or sell at their own discretion, and get the support from multi-lingual staff. ABK services over 10,000 clients across the globe with a global workforce made up of local professionals across the markets in London, Istanbul, and far east Asia with more offices to come.</p>
                  <p class="mt-5">The Group brokerage entities offer a first-class reliable service to its Retail, Professional and Institutional clients, and enabling them to trade on margin over 500 products including Forex, CFDs, Commodities, Equities and Indices through the world prominent trading platforms Metatrader 4 and Metatrader 5 (Metaquotes®)</p>
              </div>
              <div class="col-lg-5">
                  <div class="category mt-12">
                      <div class="category_li">
                          <img src="../assets/img/ic-bankingfinance.svg" alt="">
                          <p>Banking & Finance</p>
                          <div class="logs">
                              <img src="../assets/img/m-abkpayment-logo.svg" alt="">
                              <img src="../assets/img/m-wamo-logo.svg" alt="">
                          </div>
                      </div>
                       <div class="category_li">
                           <img src="../assets/img/ic-brokerage.svg" alt="">
                          <p>Brokerage</p>
                          <div class="logs">
                              <img src="../assets/img/brokerage-logos.svg" alt="">
                          </div>
                      </div>
                      <div class="category_li">
                          <img src="../assets/img/ic-businesmanagement.svg" alt="">
                          <p>Business Management Company</p>
                          <div class="logs">
                              <img src="../assets/img/m-abknv-logo.svg" alt="">
                          </div>
                      </div>
                      <div class="category_li">
                          <img src="../assets/img/ic-insurance.svg" alt="">
                          <p>Insurance</p>
                          <div class="logs">
                              <img src="../assets/img/m-aa-logo.svg" alt="">
                          </div>
                      </div>
                      <div class="category_li">
                          <img src="../assets/img/ic-crypto.svg" alt="">
                          <p>Crypto</p>
                          <div class="logs">
                              <img src="../assets/img/m-icrypex-logo.svg" alt="">
                          </div>
                      </div>
                      <div class="category_li">
                          <img src="../assets/img/ic-nonfinancial.svg" alt="">
                          <p>NON Financial</p>
                          <div class="logs">
                              <img src="../assets/img/m-ikaros-logo.svg" alt="">
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
    mounted: function(){
        $(".category_li").on("click", function(){
            if ( !$(this).hasClass("open") ){
                $(".category_li").removeClass("open");
                $(this).addClass("open");
            }else{
                $(".category_li").removeClass("open");
            }
        });
    }
}
</script>
<style lang="scss" scoped>
#aboutus{
    background: #f2f5f7;
    padding:110px 0px 150px;
    p{
        font-size:16px;
    }
    .category{
        border-right:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        display: flex;
        flex-wrap: wrap;
        width:466px;
        @media screen and(max-width:991px){
            width:100%;
        }
        .category_li{
            width:155px;
            height:155px;
            display: flex;
            align-items: center;
            flex-direction: column;
            color:#969696;
            border-left:1px solid #e5e5e5;
            border-top:1px solid #e5e5e5; 
            text-align: center;
            padding: 40px 0px 0px;
            position:relative;
            cursor: pointer;
            transition:.7s;
            @media screen and(max-width:991px){
                width:33.33%;
            }
            @media screen and(max-width:767px){
                width:50%;
            }
            >img{
                height:30px;
            }
            p{
                margin-top:10px;
                line-height: 20px;
                font-size: 18px;
            }
            .logs{
                background: #e5e5e5;
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                opacity: 0;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                display: flex;
                transition:.5s;
                img{
                    margin:5px 0;
                }
            }
            &.open{
                transform: translateZ(160px) rotateY(180deg);
                .logs{
                    transform: translateZ(-160px) rotateY(-180deg);
                    opacity: 1;
                }
            }
            
        }
    }
}
</style>