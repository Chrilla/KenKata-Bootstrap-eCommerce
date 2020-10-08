<template>
    <div id="new-customer-bg" data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
        <div class="container mt-5">
            <div class="d-flex justify-content-center justify-content-sm-between">
              <div id="sale-bg">
               <div class="d-flex text-white pt-5 mt-4 px-4">
                  <h1 id="thirty" class="pr-2">30%</h1>
                  <h2 id="off" class="my-auto pt-2">OFF</h2>
               </div>
                 <p class="text-white text-center">FOR NEW CUSTOMER</p>
                 <div class="text-center">
                     <button id="shop-now-btn" class="btn pl-4 pr-4 pt-2 pb-2">SHOP NOW</button>
                 </div>
              </div>
              <div class="col-5 my-auto d-none d-sm-block">
                  <div class="py-4 mt-5"><small class="text-white">Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</small></div>
                  <div class="pb-5 mb-4">
                    <button id="learn-more-btn" class="btn pl-4 pr-4 pt-2 pb-2">LEARN MORE</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

#thirty {
    font-weight: bold;
    font-family: 'Play', sans-serif;
    font-size: 3.5em;
}

#off {
    font-weight: bold;
    font-family: 'Play', sans-serif;
    font-size: 2em;
}

#new-customer-bg {
    background-color: #CCCCCC;
    margin-top: 100px;
}

#sale-bg {
    background-color: #20D3C2;
    padding-bottom: 100px;
}

#shop-now-btn {
  background-color: #0E153D;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  margin-top: 5px;
  animation-duration: 1s;
  animation-name: bounceIn;
}
#shop-now-btn:hover {
  background-color: white;
  color: #0E153D;
  transition: .3s ease-in-out;
}

#learn-more-btn {
    background-color: #fff;
    border-radius: 20px;
    color: #20D3C2;
    font-weight: 600;
}
#learn-more-btn:hover {
    background-color: #0E153D;
    color: white;
    transition: .3s ease-in-out;
}

</style>