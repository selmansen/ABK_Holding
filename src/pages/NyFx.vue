<template>
    <div class="companies">
        <div class="banner nyfx">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="https://bpprime.com" target="_blank" class="btn btn-success">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row mx-lg-0">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pr-lg-6 pl-lg-0">
                        <p>NYFX Global is a trading name of the NYFX Financial Services LLC licensed and regulated by Financial Services Authority St. Vincent and the Grenadines (SVG FSA), providing retail, professional, and Institutional clients with cutting-edge services to deliver effective multi-asset trading. NYFX is to designs tailor-made solutions for every kind and every experience level of traders. Clients can enjoy a trading experience optimized to their specifications, enabled by ABK Group’s powerful technology.</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/nyfx-img1.jpg" alt="" class="w-100">
                    </div>
                </div>
                <div class="row mx-lg-0 flex-lg-row flex-column-reverse mt-lg-0 mt-6">
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/nyfx-img2.jpg" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-center pl-lg-6 pr-lg-0">
                        <p>NYFX’s leading innovation in user experience, wide-range of products and consistent focus on improvement are the key elements to create an environment that both respects and equips clients with top-notch tools for a smooth trading experience.ABK Holding’s mindset has been devoted to offer the best possible technology under all conditions. We run on the most cutting-edge tools & platforms such as market analysis, latest trading platforms, strategy builder in order to maintain the best trading environment for our clients.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .nyfx{
        background: url("../assets/img/nyfx-banner.jpg") no-repeat center center;
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | NYFX',
            meta: [
            { name: 'description', content: 'NYFX Global is a trading name of the XXXXX licensed and regulated by Financial Services Authority St. Vincent and the Grenadines (SVG FSA), providing retail, professional, and Institutional clients with cutting-edge services to deliver effective multi-asset trading.' },
            ]
        },
    }
</script>