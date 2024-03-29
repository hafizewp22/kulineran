<template>
    <div class="pesanan-sukses">
        <Navbar :updateKeranjang="keranjangs"/>
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col text-center">
                    <img src="../assets/images/menunggu.png" width="300" />
                    <h2><strong>Sukses!!</strong></h2>
                    <h4>Pesanan Anda segera diproses <br> Selamat Menunggu</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    name: "PesananSuksesView",
    components: {
        Navbar,
    },
    data() {
        return {
            keranjangs: [],
        };
    },
    methods: {
        setKeranjangs(data) {
            this.keranjangs = data;
        },
    },
    mounted() {
        axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
    },
};
</script>

<style></style>