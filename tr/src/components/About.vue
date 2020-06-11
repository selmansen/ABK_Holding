<template>
    <div id="aboutus">
      <div class="container">
          <div class="row">
              <div class="col-lg-7">
                  <h2>About Us</h2>
                  <h4 class="mt-4">Strenght that is formed with <br>joined ventures & business partnerships</h4>
                  <p class="mt-5">ABK was established in 1977 with the name “Ozyavuzgil Group” and changed its business name to ABK Holding A.Ş. in 2017.</p>
                  <p class="mt-4">ABK is a holding entity gathering its operations such as FinTech, Insurance Brokerage, HR&Consultancy and Technology companies to support global companies in terms of IT infrastructure, Web management, trading platforms and so on. The Group entities offer a first-class reliable service to its Retail and B2B clients, and enabling them to operate efficiently.</p>
              </div>
              <div class="col-lg-5">
                  <div class="category mt-12">
                      <div class="category_li">
                          <img src="../assets/img/ic-bankingfinance.svg" alt="">
                          <p>Information Technology</p>
                          <div class="logs">
                              <img src="../assets/img/m-abktech-logo.svg" alt="">
                          </div>
                      </div>
                       <div class="category_li">
                           <img src="../assets/img/ic-brokerage.svg" alt="">
                          <p>Automotive</p>
                          <div class="logs">
                              Coming Soon
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
                          <img src="../assets/img/ic-nonfinancial.svg" alt="">
                          <p>NON Financial</p>
                          <div class="logs">
                              <img src="../assets/img/m-ikaros-logo.svg" alt="">
                          </div>
                      </div>
                      <div class="category_li">
                          <img src="../assets/img/ic-nonfinancial.svg" alt="">
                          <p>Fintech</p>
                          <div class="logs">
                              Coming Soon
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
            border:1px solid #e5e5e5;
            text-align: center;
            padding: 40px 0px 0px;
            position:relative;
            cursor: pointer;
            margin-top:-1px;
            margin-left:-1px;
            transition:.7s;
            &:nth-child(4){
                margin-left:77px;
                @media screen and(max-width:991px){
                    margin-left:16.66%;
                }
                @media screen and(max-width:767px){
                    margin-left:-1px;
                }
            }
            &:nth-child(5){
                @media screen and(max-width:767px){
                    margin-left:25%;
                }
            }
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
            &:nth-child(2){
                .logs{
                    flex-wrap: wrap;
                    flex-direction: row;
                    img{
                        width: 58px;
                        margin: 2px 5px;
                    }
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