<template>
    <div class="hero">

        <!-- Desktop -->
        <div class="d-none d-md-block">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h2><strong>Delicious Food Menu.</strong> <br> in your Gardet</h2>
                            <p>Ayo segara pilih dan pesan makanan favorit Anda</p>
                            <router-link to="/foods" class="btn btn-lg btn-success">Pesan</router-link>
                            <!-- <button class="btn btn-lg btn-success"><b-icon-arrow-right></b-icon-arrow-right> Pesan</button> -->
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../assets/images/herro.svg" width="100%" />
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="d-sm-block d-md-none">
            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <img src="../assets/images/herro.svg" width="100%" />
                </div>
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h2><strong>Delicious Food Menu.</strong> <br> in your Gardet</h2>
                            <p>Ayo segara pilih dan pesan makanan favorit Anda</p>
                            <!-- <router-link to="/" class="btn btn-lg btn-success">Pesan</router-link> -->
                            <button class="btn btn-lg btn-success"><b-icon-arrow-right></b-icon-arrow-right> Pesan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHerro'
}
</script>

<style></style>