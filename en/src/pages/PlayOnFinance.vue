<template>
    <div class="companies">
        <div class="banner playonfinance"></div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row mx-lg-0">
                    <div class="col-lg-6 pl-lg-0 pr-lg-6">
                        <p>Play on Finance is a trading platform that gives traders the convinience of trading together on a open, transparent, user friendly and risk freee environment.</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/playonfinance-img1.jpg" alt="" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .playonfinance{
        background: url("../assets/img/playonfinance-banner.jpg") no-repeat center center;
        @media screen and(max-width:991px){
            background: url("../assets/img/playonfinance-mobile-banner.jpg") no-repeat center center;
        }
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | Play On Finance',
            meta: [
            { name: 'description', content: 'Play on Finance is a trading platform that gives traders the convinience of trading together on a open, transparent, user friendly and risk freee environment.' },
            ]
        },
    }
</script>