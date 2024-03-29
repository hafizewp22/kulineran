<template>
    <div class="food-detail">
        <MainNavbar />
        <div class="container">

            <!-- breadcrumb -->
            <div class="row mt-5">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-dark">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link to="/foods" class="text-dark">Foods</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Food Order</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-6">
                    <img :src="'../assets/images/foods/' + product.gambar" :alt='product.nama' class="img-fluid shadow">
                </div>

                <div class="col-md-6">
                    <h2><strong>{{ product.nama }}</strong></h2>
                    <hr>
                    <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
                    <form class="mt-4" v-on:submit.prevent>
                        <div class="form-group">
                            <label for="jumlah_pemesanan">Jumlah Pesan</label>
                            <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan">
                        </div>
                        <div class="form-group">
                            <label for="keterangan">Keterangan</label>
                            <textarea v-model="pesan.keterangan" class="form-control"
                                placeholder="Keterangan seperti: Pedas, Nasi Setengah ..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-success" @click="pemesanan"><b-icon-cart></b-icon-cart>
                            Pesan</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import MainNavbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
    name: 'FoodsDetailView',
    components: {
        MainNavbar,
    },
    data() {
        return {
            product: {},
            pesan: {},
        }
    },
    methods: {
        setProduct(data) {
            this.product = data
        },
        pemesanan() {
    if (this.pesan.jumlah_pemesanan) {
        let pesanan = {
            jumlah_pemesanan: this.pesan.jumlah_pemesanan,
            keterangan: this.pesan.keterangan,
            products: this.product
        };
        axios.post('http://127.0.0.1:3000/keranjangs', pesanan)
            .then(() => {
                this.$router.push({ path: "/keranjang"})
                this.$toast.success('Sukses Masuk Keranjang.', {
                    type: 'success',
                    position: 'top-right',
                    duration: 3000,
                    dismissible: true,
                })
            })
            .catch((err) => console.log(err));
    } else {
        this.$toast.error('Jumlah Pesanan Harus diisi.', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
        })
    }
}
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/products/' + this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error))
    },
};
</script>

<style></style>