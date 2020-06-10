<template>
    <div class="companies">
        <div class="banner wamoio">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="https://wamo.io" target="_blank" class="btn btn-success mt-lg-0 mt-auto mb-0">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p>Wamo is a remittance service provider which solves P2P fiat-to-crypto, crypto-to-crypto and fiat-to-fiat money transfer problem in one single application. Wamo offers to transfer your money instantly or recurringly in lowest fees. </p>
                        <p class="mt-3">So, with Wamo, managing your wallet is easier.</p>
                        <p class="mt-3">The launch date was Jan. 2019</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6">
                        <h2>Key Features</h2>
                        <ul class="mt-3">
                            <li>All wallet services in one app.</li>
                            <li>Crypto-to-crypto, fiat-to crypto or fiat-to-fiat transfers with no fees and no conversion losses.</li>
                            <li>Setting up recurring payments,</li>
                            <li>Splitting bills,</li>
                            <li>Multi-layer secure algorithms,</li>
                            <li>Crypto wallets are at licensed custodian services.</li>
                            <li>WL solution for merchants to build up secure and fast B2B networks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wamoio{
        background: url("../assets/img/Wamoio.jpg") no-repeat center center;
        @media screen and(max-width:991px){
            background: url("../assets/img/Wamoio-mobile-banner.jpg") no-repeat center center;
        }
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | Wamo',
            meta: [
            { name: 'description', content: 'Wamo is a remittance service provider which solves P2P fiat-to-crypto, crypto-to-crypto and fiat-to-fiat money transfer problem in one single application. Wamo offers to transfer your money instantly or recurringly in lowest fees.' },
            ]
        },
    }
</script>