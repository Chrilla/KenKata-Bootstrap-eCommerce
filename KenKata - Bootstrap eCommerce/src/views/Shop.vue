<template>
  <div>
    <NewCustomerBanner/>
    <ShopSettingsBanner/>
    <ProductListing/>
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'
import NewCustomerBanner from '@/components/shop/NewCustomerBanner.vue'
import ProductListing from '@/components/shop/ProductListing.vue'
import ShopSettingsBanner from '@/components/shop/ShopSettingsBanner.vue'

export default {
  components: {
    SubscribeBanner,
    NewCustomerBanner,
    ProductListing,
    ShopSettingsBanner,
  }
}
</script>

<style scoped>

</style>
