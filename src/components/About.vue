<template>
    <div id="aboutus" class="pt-20 pb-12">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>About Us</h2>
            <h3>Strenght that is formed with joined ventures & business partnerships</h3>
          </div>
          <div class="col-lg-6">
            <p>ABK Holding was transformed into a Financial Holding as of September 2017 to handle the already running financial businesses, including fx trading, crypto exchange, service providing in FX and some PSPs, in different jurisdictions of the world. ABK promises to deliver the fast, low-cost, trusted trading services, money transfer mechanisms and crypto exchanges under the one and only group structure.</p>
            <p class="mt-3">The Group takes the Markets in Financial Instruments Directive (MiFID II) as benchmark no matter its brokerage subsidiaries are licensed in the continental Europe to provide the investment services of agency only execution (i.e. reception and transmission of orders, execution of orders on behalf of clients), portfolio management and investment advice in relation to transferable securities, options, futures, swaps, forward rate agreements, financial contracts for difference (CFD) and other derivatives. ABK Group Brokerage companies are licensed to provide the ancillary service of safekeeping and administration of financial instruments. ABK overseas entities are licensed to carry on the business of dealing in securities, execution of orders on behalf of the clients and portfolio management.</p>
          </div>
        </div>
        <div id="about-companies" class="about-accordion mt-16">
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
                        <li>Singapore Licensed EMI
                            <ul>
                            <li>ABK Payment Services Ltd.</li>
                            </ul>
                        </li>
                        <li>FCA Licensed EMD Agent 
                            <ul>
                            <li><router-link to="/Wamoio" tag="a">WAMO</router-link></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li>Brokarege
                        <ul>
                        <li>FCA Licence
                            <ul>
                            <li><router-link to="/Bpprime" tag="a">BP Prime</router-link></li>
                            </ul>
                        </li>
                        <li>Labuan Licence
                            <ul>
                            <li>NYFX Prime</li>
                            </ul>
                        </li>
                        <li>Cambodian License
                            <ul>
                            <li>NYFX Cambodia</li>
                            </ul>
                        </li>
                        <li>St. Vincent License
                            <ul>
                            <li>SkyFX Global</li>
                            <li>NYFX Global</li>
                            </ul>
                        </li>
                        <li>Turkey
                            <ul>
                            <li>TorosFX</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li>FCA Regulated Asset Management
                        <ul>
                        <li><router-link to="/CrescoCapital" tag="a">Cresco Capital</router-link></li>
                        </ul>
                    </li>
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
                        <li><router-link to="/Icrypex" tag="a">Icrypex</router-link></li>
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
                    <li><router-link to="/Wamoio" tag="a">WAMO</router-link></li>
                    <li><router-link to="/Icrypex" tag="a">Icrypex</router-link></li>
                    <li>ikaros & partners</li>
                    <li>ABK Payment Security LTD.</li>
                    <li>A&A Insurance</li>
                    <li>ABKTech</li>
                    <li>NYFX Prime</li>
                    <li>NYFX Global</li>
                    <li>NYFX Cambodia</li>
                    <li><router-link to="/Bpprime" tag="a">BP Prime</router-link></li>
                    <li>TorosFX</li>
                    <li><router-link to="/CrescoCapital" tag="a">Cresco Capital</router-link></li>
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
</template>

<script>
export default {
    mounted: function () {
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
<style lang="scss" scoped>
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
            >li{
                padding:5px 5px 5px 25px;
                cursor: pointer;
                color:#fff;
                transition:.4s;
                position:relative;
                border-bottom: 1px solid rgba(#fff, .3);
                &:before{
                content:"";
                width:7px;
                height:7px;
                border-top:2px solid #fff;
                border-right:2px solid #fff;
                transform:rotate(45deg);
                position:absolute;
                left:0;
                top:14px;
                transition:.4s;
                }
                >ul{
                >li{
                    padding:5px 5px 5px 20px;
                    cursor: pointer;
                    color:#fff;
                    transition:.4s;
                    position:relative;
                    &:before{
                    content:"";
                    width:7px;
                    height:2px;
                    background: #fff;
                    position:absolute;
                    left:7px;
                    top:14px;
                    transition:.4s;
                    }
                }
                }
                &:last-child{
                border-bottom:0;
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
</style>