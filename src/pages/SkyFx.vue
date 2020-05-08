<template>
    <div class="companies">
        <div class="banner skyfx">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="https://bpprime.com" target="_blank" class="btn btn-success">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row mx-lg-0">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pr-lg-6 pl-lg-0">
                        <p>SKYFX is a boutique brokerage company licensed and regulated by Financial Services Authority St. Vincent and the Grenadines (SVG FSA), established to put out "a new approach" in the financial market. SKYFX is committed to provide financial services to retail, professional and institutional clients with tailor- made solutions. The mindset is to offer the best possible technology under all conditions. </p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/skyfx-img1.jpg" alt="" class="w-100">
                    </div>
                </div>
                <div class="row mx-lg-0 flex-lg-row flex-column-reverse mt-lg-0 mt-6">
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/skyfx-img2.jpg" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-center pl-lg-6 pr-lg-0">
                        <p>Entity runs on the most cutting-edge tools & platforms such as market analysis, latest trading platforms, strategy builder in order to maintain the best trading environment for our clients. With a wide range of trading instruments, SKYFX dominates the online trading industry, offering the fastest and steadiest execution thanks to our cooperation with top banks and liquidity providers.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .skyfx{
        background: url("../assets/img/skyfx-banner.jpg") no-repeat center center;
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | SKYFX',
            meta: [
            { name: 'description', content: 'SKYFX is a boutique brokerage company licensed and regulated by Financial Services Authority St. Vincent and the Grenadines (SVG FSA), established to put out "a new approach" in the financial market.' },
            ]
        },
    }
</script>