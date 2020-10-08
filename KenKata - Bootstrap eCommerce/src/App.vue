<template>
  <div>
    <NavTop/>
    <NavMiddle/>
    <NavBottom/>

<!-- HÄR VISAS ALLT MELLAN NAVBAR OCH FOOTER -->
    <router-view/>
<!-- HÄR VISAS ALLT MELLAN NAVBAR OCH FOOTER -->
    
    <Brands/>
    <Footer/>
    <Copyright/>
  </div>
</template>

<!-- Styling för alla vyer -->
<style>

</style>

<script>
// @ is an alias to /src
import NavTop from '@/components/global/NavTop.vue'
import NavMiddle from '@/components/global/NavMiddle.vue'
import NavBottom from '@/components/global/NavBottom.vue'
import Brands from '@/components/global/Brands.vue'
import Footer from '@/components/global/Footer.vue'
import Copyright from '@/components/global/Copyright.vue'

export default {
  components: {
    NavTop,
    NavMiddle,
    NavBottom,
    Brands,
    Footer,
    Copyright,
  }
}
</script>
