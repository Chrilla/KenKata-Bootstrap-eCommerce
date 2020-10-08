<template>
    <div id="new-customer-bg">
        <div class="container mt-5">
            <div class="row d-flex justify-content-center justify-content-lg-between">
              <div id="sale-bg" class="pl-4 pr-4 pt-2 pb-5">
               <div class="text-white text-center pt-4" data-aos="zoom-in" data-aos-duration="1000">
                  <h1 id="flash" class="pr-2">FLASH</h1>
                  <h1 id="sale">SALE</h1>
               </div>
                <div class="text-center text-white" data-aos="zoom-in" data-aos-duration="1000">
                    <h5 id="fifty-off">UP TO 50% OFF</h5>
                    <div class="pt-3 d-sm-none">
                        <button id="shop-now-btn" class="btn pl-4 pr-4 pt-2 pb-2">SHOP NOW</button>
                    </div>
                </div>
              </div>
              <div class="d-none d-sm-block mb-auto">
                  <div class="py-4 mt-5 d-flex col-6">
                      <div class="pt-3 pr-3">
                          <div class="circle text-center" data-aos="flip-left" data-aos-duration="1000">
                            <h1 class="circle-h1">7</h1>
                            <p class="circle-p">Days</p>
                          </div>
                      </div>
                      <div class="p-3">
                          <div class="circle text-center" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
                            <h1 class="circle-h1">23</h1>
                            <p class="circle-p">Hours</p>
                          </div>
                      </div>
                      <div class="p-3">
                          <div class="circle text-center" data-aos="flip-left" data-aos-delay="600" data-aos-duration="1000">
                            <h1 class="circle-h1">46</h1>
                            <p class="circle-p">Minutes</p>
                          </div>
                      </div>
                      <div class="p-3">
                          <div class="circle text-center" data-aos="flip-left" data-aos-delay="900" data-aos-duration="1000">
                            <h1 class="circle-h1">12</h1>
                            <p class="circle-p">Seconds</p>
                          </div>
                      </div>
                  </div>
                  <div class=" text-center">
                    <button id="shop-now-btn" class="btn pl-4 pr-4 pt-2 pb-2">SHOP NOW</button>
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

.circle-p {
    margin-top: -12px;
}

.circle-h1 {
    color: #20D3C2;
    font-weight: bold;
    font-family: 'Play', sans-serif;
    padding-top: 20px;
}

.circle {
    position: relative;
    width: 109px;
    height: 109px;
    float: left;
    background-color: white;
    padding: 5px;
    border-radius: 50%;
}

.circle::before {
    position: absolute;
    top: -1.9%;
    left: -2%;
    display: block;
    content: ' ';
    background-color: #6abde700;
    border: 2.2px dashed #20D3C2;
    width: 113px;
    height: 113px;
    border-radius: 50%;
}

#fifty-off {
    font-weight: 600;
}

#flash {
    font-weight: bold;
    font-family: 'Play', sans-serif;
    font-size: 3.5em;
}

#sale {
    font-weight: bold;
    font-family: 'Play', sans-serif;
    font-size: 3.5em;
    margin-top: -20px;
}

#new-customer-bg {
    background-color: #0E153D;
    margin-top: 100px;
    padding-bottom: 100px;
}

#sale-bg {
    background-color: #20D3C2;
    height: 50%;
}

#shop-now-btn {
    background-color: #fff;
    border-radius: 30px;
    color: #20D3C2;
    font-weight: 600;
    font-size: 18px;
    animation-duration: 1s;
  animation-name: bounceIn;
}
#shop-now-btn:hover {
    background-color: #20D3C2;
    color: white;
}

</style>