<template>
    <div class="companies">
        <div class="banner nyfxprime">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="#" target="_blank" class="btn btn-success mt-lg-0 mt-auto mb-0">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row mx-lg-0">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pr-lg-6 pl-lg-0">
                        <p>NYFX Prime is a trading name of the NYFX Prime Financial Services Ltd. regulated and licensed by Labuan Financial Services Authority (Labuan FSA) established under the Labuan Financial Services Authority Act 1996. Labuan FSA is the statutory body responsible for the development and administration of the Labuan International Business and Financial Centre (Labuan IBFC). NYFX Prime is providing retail, professional, and Institutional clients to deliver multi-asset trading. </p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/nyfxprime-img1.jpg" alt="" class="w-100">
                    </div>
                </div>
                <div class="row mx-lg-0 flex-lg-row flex-column-reverse mt-lg-0 mt-6">
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/nyfxprime-img2.jpg" alt="" class="w-100">
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-center pl-lg-6 pr-lg-0">
                        <p>NYFX Prime designs tailor-made solutions for traders under LFSA regulation.NYFX Prime is devoted to offer the best technology with leading innovation and consistent focus on improvement. NYFX Prime focuses on to create an environment that both respects and equips clients with top-notch tools for a smooth trading experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .nyfxprime{
        background: url("../assets/img/nyfxprime-banner.jpg") no-repeat center center;
        @media screen and(max-width:991px){
            background: url("../assets/img/nyfxprime-mobile-banner.jpg") no-repeat center center;
        }
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | NYFX',
            meta: [
            { name: 'description', content: 'NYFX Prime is a trading name of the NYFX Prime Financial Services Ltd. regulated and licensed by Labuan Financial Services Authority (Labuan FSA) established under the Labuan Financial Services Authority Act 1996.' },
            ]
        }
    }
</script>