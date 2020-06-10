<template>
    <div class="companies">
        <div class="banner icrypex">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="https://www.icrypex.com" target="_blank" class="btn btn-success mt-lg-0 mt-auto mb-0">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p>Icrypex aims to bring the financial expertise in the blockchain community, including producing some exotic products like crypto-options, crypto-derivatives and crypto-swaps of which had not been tested by any other crypto-exchange in Turkey before.</p>
                        <p class="mt-3">The company’s main focus is on Turkey initially, yet the operations in Eastern Europe, Vietnam, Cambodia and Asia will begin by late 2020. </p>
                        <p class="mt-3">Icrypex was founded with the paid capital over 4MioTRY in 2018.</p>
                        <p class="mt-3">The launch date was Apr. 2018</p>
                        <p class="mt-3">Icrypex was the main sponsor of KalDer’s Quality Congress 2019 while inviting Dr. Nouriel Roubini as Main Event Speaker</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6">
                        <img src="../assets/img/Icrypex3.jpg" alt="" class="w-100">
                    </div>
                </div>
                <div class="row mt-6">
                    <div class="col-lg-6">
                        <div class="d-flex">
                            <img src="../assets/img/Icrypex2.jpg" alt="" class="w-100">
                            
                        </div>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6">
                        <div class="d-flex">
                            <img src="../assets/img/Icrypex1.jpg" alt="" class="w-100">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .icrypex{
        background: url("../assets/img/Icrypex.jpg") no-repeat center center;
        @media screen and(max-width:991px){
            background: url("../assets/img/Icrypex-mobile-banner.jpg") no-repeat center center;
        }
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | Icrypex',
            meta: [
            { name: 'description', content: 'Icrypex aims to bring the financial expertise in the blockchain community, including producing some exotic products like crypto-options, crypto-derivatives and crypto-swaps of which had not been tested by any other crypto-exchange in Turkey before.' },
            ]
        },
    }
</script>