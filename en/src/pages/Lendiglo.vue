<template>
    <div class="companies">
        <div class="banner lendiglo"></div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row mx-lg-0">
                    <div class="col-lg-6 pl-lg-0 pr-lg-6">
                        <p>Our mission is to offer fair, transparent and easily accessible credit facilities to consumer and small businesses. Without paperwork – No long waiting times. Using the advanced technologies, we reduce application times by matter of seconds. We create value for our partners by empowering them with tools to operate in the lending space through a technology-driven process.</p>
                        <p class="mt-3">As a Fintech company all structural need are in development process already.</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/lendiglo-img1.jpg" alt="" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .lendiglo{
        background: url("../assets/img/lendiglo-banner.jpg") no-repeat center center;
        @media screen and(max-width:991px){
            background: url("../assets/img/lendiglo-mobile-banner.jpg") no-repeat center center;
        }
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | Lendiglo',
            meta: [
            { name: 'description', content: 'ABK Technologies is founded by top finance professionals who managed pioneer financial institutions regulated under FCA, MFSA, CySEC, BDDK and BaFin.' },
            ]
        },
    }
</script>