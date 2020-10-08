<template>
  <div>
    <JumboTron/>
    <InfoBoxes/>
    <CategoryCards/>
    <NewArrivals/>
    <NewCustomerBanner/>
    <FeaturedProducts/>
    <FlashSaleBanner/>
    <TopSellers/>
    <Testimonial/>
    <LatestBlog/>
    <SubscribeBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import JumboTron from '@/components/home/JumboTron.vue'
import InfoBoxes from '@/components/home/InfoBoxes.vue'
import CategoryCards from '@/components/home/CategoryCards.vue'
import NewArrivals from '@/components/home/NewArrivals.vue'
import NewCustomerBanner from '@/components/home/NewCustomerBanner.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import FlashSaleBanner from '@/components/home/FlashSaleBanner.vue'
import TopSellers from '@/components/home/TopSellers.vue'
import Testimonial from '@/components/home/Testimonial.vue'
import LatestBlog from '@/components/home/LatestBlog.vue'
import SubscribeBanner from '@/components/home/SubscribeBanner.vue'

export default {
  components: {
    JumboTron,
    InfoBoxes,
    CategoryCards,
    NewArrivals,
    NewCustomerBanner,
    FeaturedProducts,
    FlashSaleBanner,
    TopSellers,
    Testimonial,
    LatestBlog,
    SubscribeBanner,
  }
}
</script>

<style scoped>

</style>
