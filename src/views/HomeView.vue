<template>
  <div class="home">
    <MainNavbar />
    <div class="container">
      <MainHerro />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> Lihat
            Semua</router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <MainCardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavbar from '@/components/Navbar.vue'
import MainHerro from '@/components/Herro.vue'
import MainCardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    MainNavbar,
    MainHerro,
    MainCardProduct,
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProduct(data) {
      this.products = data
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/best-products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
