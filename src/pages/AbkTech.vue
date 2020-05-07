<template>
    <div class="companies">
        <div class="banner abktech">
            <div class="container h-100 d-flex align-items-center justify-content-center flex-column">
                <a href="#" class="btn btn-success">Visit Web Site</a>
            </div>
        </div>
        <div class="content py-lg-20 py-10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p>ABK Technologies is founded by top finance professionals who managed pioneer financial institutions regulated under FCA, MFSA, CySEC, BDDK and BaFin.</p>
                        <p class="mt-3">ABK Technologies professionals expertise in financial industry and financial engineering which provides the opportunity to the clients having flexibility to create their own instruments and name the instruments as they want. Clients for example may create pairs XAU/XAG or XAU/DAX or the other way around for their own clients.</p>
                        <p class="mt-3">ABK Technology designes (provides) the best solution for its clients and clients of them.</p>
                    </div>
                    <div class="col-lg-6 mt-lg-0 mt-6">
                        <img src="../assets/img/ikarospartners1.jpg" alt="" class="w-100 img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .abktech{
        background: url("../assets/img/ikarospartners-banner.jpg") no-repeat center center;
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