<template>
  <div>
    <MainNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search" type="text" class="form-control" placeholder="Cari Makanan Kesukaan Anda.." aria-label="Cari"
              aria-describedby="basic-addon1" @keyup="searchFood" />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
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
import MainCardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'FoodsView',
  components: {
    MainNavbar,
    MainCardProduct,
  },
  data() {
    return {
      products: [],
      search: '',
    }
  },
  methods: {
    setProduct(data) {
      this.products = data
    },
    searchFood() {
      axios.get('http://127.0.0.1:3000/products?nama='+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>