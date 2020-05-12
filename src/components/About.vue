<template>
    <div id="aboutus" class="pt-lg-20 pt-10 pb-lg-12 pb-10">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h2>About Us</h2>
            <h3 class="mt-3">Strenght that is formed with joined ventures & business partnerships</h3>
          </div>
          <div class="col-lg-12 mt-6">
            <p>ABK was established in 1977 with the name “Ozyavuzgil Group” and changed its business name to ABK Holding A.Ş. in 2017. </p>
            <p class="mt-3">ABK is a financial holding gathering its financial operations of CFDs and FX trading, Crypto Exchanges, Banking & FinTech, Insurance Brokerage, Asset Management operating in different jurisdictions and Technology company supporting the group’s financial institutional in terms of IT infrastructure, domain, trading platforms and so on.</p>
            <p class="mt-3">As internet based service provider, ABK Group Brokerage Division provides on-line trading platforms from different locations through its licensed entities’ websites and various on-line advertising channels. With the stream live tradable prices clients can buy or sell at their own discretion, and get the support from multi-lingual staff. ABK services over 10,000 clients across the globe with a global workforce made up of local professionals across the markets in London, Istanbul, Ho Chi Min, and Phnom Penh with more offices to come. The Group is operating at the markets where shareholders have deep experience about the local dynamics.</p>
            <p class="mt-3">The Group brokerage entities offer a full service to its retail clients and make them enabling to trade on margin. ABK is to keep the level of first-class reliable service to its Retail, Professional and Institutional clients, and enabling them to trade on margin over 500 products including Forex, CFDs, Commodities, Equities and Indices through the world prominent trading platforms Metatrader 4 and Metatrader 5 (Metaquotes®)</p>
            <a href="javascript:;" @click="moreInfo" class="btn btn-success mt-lg-6 mt-3" :class="{'d-none': isActive}">More Info</a>
            <p class="mt-3 d-none animated fadeIn" :class="{'d-block': isActive}">The Group accepts the Markets in Financial Instruments Directive (MiFID II) as benchmark no matter its brokerage subsidiaries are licensed in the continental Europe to provide the investment services of agency only execution (i.e. reception and transmission of orders, execution of orders on behalf of clients), portfolio management and investment advice in relation to transferable securities, options, futures, swaps, forward rate agreements, financial contracts for difference (CFD) and other derivatives. ABK Group Brokerage companies are licensed to provide the ancillary service of safekeeping and administration of financial instruments. ABK overseas entities are licensed to carry on the business of dealing in securities, execution of orders on behalf of the clients and portfolio management.</p>
          </div>
        </div>
        <div id="about-companies" class="about-accordion mt-lg-16 mt-10">
            <div class="row">
            <div class="col-lg-4">
                <div class="p-4 bg-success">
                    <div class="about-tab-title">
                        <img src="../assets/img/ic-sectors.svg" alt="" class="tab-icon">
                        <h2>Sectors</h2>
                    </div>
                    <div class="acList">
                        <ul>
                            <li>
                                <a href="javascript:;" class="title-a">Banking/Finance</a>
                                <ul>
                                    <li>
                                        <a href="javascript:;" class="title-a">Singapore Licensed EMI</a>
                                        <ul>
                                            <li><a href="">ABK Payment Services LTD.</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="title-a">FCA Licensed EMD Agent</a>
                                        <ul>
                                            <li><router-link to="/en/en/Wamoio" tag="a">WAMO</router-link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="title-a">Brokarege</a>
                                <ul>
                                    <li>
                                        <a href="javascript:;" class="title-a">FCA Licence</a>
                                        <ul>
                                            <li><router-link to="/en/Bpprime" tag="a">BP Prime</router-link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="title-a">Labuan Licence</a>
                                        <ul>
                                            <li><router-link to="/en/NyFxPrime" tag="a">NYFX Prime</router-link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="title-a">Cambodian License</a>
                                        <ul>
                                            <li><a href="javascript:;">NYFX Cambodia</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="title-a">St. Vincent License</a>
                                        <ul>
                                            <li><router-link to="/en/SkyFx" tag="a">SkyFX Global</router-link></li>
                                            <li><router-link to="/en/NyFx" tag="a">NYFX Global</router-link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="title-a">Turkey</a>
                                        <ul>
                                            <li><a href="javascript:;">TorosFX</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="title-a">Business Management Company</a>
                                <ul>
                                    <li><a href="javascript:;">ABK NV Management</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="title-a">Technology Companies</a>
                                <ul>
                                    <li><router-link to="/en/AbkTech" tag="a">ABKTech</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="title-a">Insurance</a>
                                <ul>
                                    <li><a href="javascript:;">A&A</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="title-a">Crypto</a>
                                <ul>
                                    <li><router-link to="/en/Icrypex" tag="a">Icrypex</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" class="title-a">NON Financial</a>
                                <ul>
                                    <li><router-link to="/en/Ikaros" tag="a">Ikaros&Partners</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-lg-0 mt-3">
                <div class="p-4 bg-success">
                    <div class="about-tab-title">
                        <img src="../assets/img/ic-companies.svg" alt="" class="tab-icon">
                        <h2>Companies</h2>
                    </div>
                    <div class="acList">
                        <ul>
                            <li><a href="javascript:;">ABK Payment Services LTD.</a></li>
                            <li><router-link to="/en/Wamoio" tag="a">WAMO</router-link></li>
                            <li><router-link to="/en/Bpprime" tag="a">BP Prime</router-link></li>
                            <li><router-link to="/en/NyFxPrime" tag="a">NYFX Prime</router-link></li>
                            <li><a href="javascript:;">NYFX Cambodia</a></li>
                            <li><router-link to="/en/SkyFx" tag="a">SkyFX Global</router-link></li>
                            <li><router-link to="/en/NyFx" tag="a">NYFX Global</router-link></li>
                            <li><a href="javascript:;">TorosFX</a></li>
                            <li><a href="javascript:;">ABK NV Management</a></li>
                            <li><router-link to="/en/AbkTech" tag="a">ABKTech</router-link></li>
                            <li><a href="javascript:;">A&A</a></li>
                            <li><router-link to="/en/Icrypex" tag="a">Icrypex</router-link></li>
                            <li><router-link to="/en/Ikaros" tag="a">Ikaros&Partners</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-lg-0 mt-3">
                <div class="p-4 bg-success">
                    <div class="about-tab-title">
                        <img src="../assets/img/ic-projects.svg" alt="" class="tab-icon">
                        <h2>Projects</h2>
                    </div>
                    <div class="acList">
                        <ul>
                        <li><router-link to="/en/PlayOnFinance" tag="a">Play On Finance</router-link></li>
                        <li><router-link to="/en/Lendiglo" tag="a">Lendiglo</router-link></li>
                        </ul>
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
    data() {
        return{
            isActive: false
        }
    },
    mounted: function () {
        const title = $(".about-tab-title");
        title.on("click", function(){
            const openlist = $(this).next(".acList");
            if ( openlist.is(":hidden") ){
                title.removeClass("active");
                $(".acList>ul>li").removeClass("open");
                $(".acList").removeClass("open").height(0);
                $("html, body").stop(true, false).animate({scrollTop: $(this).offset().top - 120}, 700);
                $(this).addClass("active");
                openlist.addClass("open").height(  openlist.children("ul").outerHeight() );
            }
        });
        $("body").on('click', function () {
            if( !$("#about-companies:hover").length > 0 ){
                $(".acList").removeClass("open").height(0);
                $(".acList>ul>li").removeClass("open");
                title.removeClass("active");
            }
        });
        $(".title-a").on("click", function(e){
            if (e.target.nextElementSibling.className === "open"){
                e.target.nextElementSibling.classList.remove("open");
                e.target.classList.remove("active");
                $(this).parents(".acList").height(  $(this).parents(".acList").children("ul").outerHeight() );
            }else{
                $(this).parent().parent().find(".open").removeClass("open").prev("a").removeClass("active");
                e.target.classList.add("active");
                e.target.nextElementSibling.classList.add("open");
                $(this).parents(".acList").height(  $(this).parents(".acList").children("ul").outerHeight() );
            }
        });
    },
    methods:{
        moreInfo: function(){
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style lang="scss" scoped>
    .about-accordion{
        position: relative;
        &:before{
        content:"";
        height:233px;
        top:0;
        left:0;
        width:100%;
        /*background: #a92807;*/
        position:absolute;
        }
        h2{
            color:#fff;
            text-align: center;
            margin-top:15px;
            background:url("../assets/img/ic-down.svg") no-repeat center 50px;
            padding-bottom: 60px;
            background-size: 38px;
            transition:.4s;
        }
        .tab-icon{
            width:80px;
            margin:auto;
            display: block;
            transition:.4s;
        }
        .about-tab-title{
            cursor: pointer;
            &.active{
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
                    margin-bottom: 10px;
                }
            }
        }
        .acList{
            display: none;
            height:0;
            overflow: hidden;
            transition:height .4s;
            >ul{
                >li{
                    border-bottom: 1px solid #fff;
                    font-size: 16px;
                    line-height: 20px;
                    transition:.4s;
                    cursor: pointer;
                    color:#fff;
                    &:last-child{
                        border-bottom:0;
                        padding-bottom:0;
                    }
                    >a{
                        padding:10px 10px 10px 0px;
                        color:#fff;
                        transition:.4s;
                        display: block;
                        position: relative;
                        &:hover{
                            color:#c1c0c0;
                        }
                        &.title-a{
                            padding-left:25px;
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
                        }
                        &.active{
                            color:#fff;
                            &:before{
                                transform: rotate(135deg);
                                top:12px;
                            }
                        }
                    }
                    >ul{
                        margin-bottom:5px;
                        display: none;
                        animation-duration: .7s;
                        animation-fill-mode: both;
                        padding:0 10px 0 25px;
                        &.open{
                            display: block;
                            animation-name: fadeIn;
                        }
                        >li{
                            color:#fff;
                            position:relative;
                            border-bottom: 1px solid rgba(#fff, .3);
                            padding-bottom:5px;
                            margin-bottom:5px;
                            >a{
                                color:#fff;
                                transition:.4s;
                                padding:5px 5px 5px 10px;
                                display: block;
                                &.title-a{
                                    padding-left:20px;
                                    &:before{
                                        content:"";
                                        width:7px;
                                        height:7px;
                                        border-top:2px solid #fff;
                                        border-right:2px solid #fff;
                                        transform:rotate(45deg);
                                        position:absolute;
                                        left:0;
                                        top:11px;
                                        transition:.4s;
                                    }
                                }
                                &:hover{
                                    color:#c1c0c0;
                                }
                                &.active{
                                    color:#fff;
                                    &:before{
                                        transform: rotate(135deg);
                                        top:9px;
                                    }
                                }
                            }
                            >ul{
                                display: none;
                                animation-duration: .7s;
                                animation-fill-mode: both;
                                padding:0 5px 0 25px;
                                >li{
                                    color:#fff;
                                    transition:.4s;
                                    position:relative;
                                    a{
                                        padding:5px 5px 5px 15px;
                                        display: block;
                                        color:#fff;
                                        transition:.4s;
                                        &:hover{
                                            color:#c1c0c0;
                                        }
                                    }
                                }
                                &.open{
                                    display: block;
                                    animation-name: fadeIn;
                                }
                            }
                            &:last-child{
                                border-bottom:0;
                            }
                        }
                    }
                }
            }
            &.open{
                display: block;
            }
        }
    }
</style>