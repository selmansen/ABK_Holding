<template>
    <div class="companies">
        <div class="banner abktech">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="http://abktechnology.com/" target="_blank" class="btn btn-success mt-lg-0 mt-auto mb-0">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row mx-lg-0">
                    <div class="col-lg-6 pl-lg-0 pr-lg-6">
                        <p>ABK Technologies is founded by top finance professionals who managed pioneer financial institutions regulated under FCA, MFSA, CySEC, BDDK and BaFin.</p>
                        <p class="mt-3">ABK Technologies professionals expertise in financial industry and financial engineering which provides the opportunity to the clients having flexibility to create their own instruments and name the instruments as they want. Clients for example may create pairs XAU/XAG or XAU/DAX or the other way around for their own clients.</p>
                        <p class="mt-3">ABK Technology designes (provides) the best solution for its clients and clients of them.</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6 px-lg-0">
                        <img src="../assets/img/abktech-img1.jpg" alt="" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .abktech{
        background: url("../assets/img/abktech-banner.jpg") no-repeat center center;
        @media screen and(max-width:991px){
            background: url("../assets/img/abktech-mobile-banner.jpg") no-repeat center center;
        }
    }
</style>
<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'ABK HOLDING',
            titleTemplate: '%s | ABK Tech',
            meta: [
            { name: 'description', content: 'ABK Technologies is founded by top finance professionals who managed pioneer financial institutions regulated under FCA, MFSA, CySEC, BDDK and BaFin.' },
            ]
        },
    }
</script>