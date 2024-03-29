<template>
  <div id="app">
    <router-view/>
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from '@/components/Footer.vue'

export default {
    components: {
        MainFooter
    }
}
</script>