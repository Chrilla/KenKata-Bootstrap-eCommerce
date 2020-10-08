<template>
	<div class="container">
		<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 d-none d-sm-block">
			<div class="text-center mt-5 mb-5 pt-5">
                <div class="d-flex justify-content-center">
                    <h1 id="featured">FEATURED</h1>
                    <h1 id="products" class="pl-2">PRODUCTS</h1>
                </div>
            <img src="@/images/ZigZag.svg" alt="">
            <p class="pt-3">Check out our monthly featured products from top brands</p>
			</div>

		<div class="col-center m-auto">
			<div id="myCarousel5" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel5" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel5" data-slide-to="1"></li>
                <li data-target="#myCarousel5" data-slide-to="2"></li>
            </ol>
 
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="d-flex">
                            <div class="pr-4 container-overlay">
                            <CarouselOverlay/>
                        </div>
                        <div class="pr-4 container-overlay">
                            <CarouselOverlay/>
                        </div>
                        <div class="pr-4 container-overlay">
                            <CarouselOverlay/>
                        </div>
                    </div>

					</div>
                    <div class="item carousel-item">
					<div class="d-flex">
                        <div class="pr-4 container-overlay">
                            <CarouselOverlay/>
                        </div>
                        <div class="pr-4 container-overlay">
                            <CarouselOverlay/>
                        </div>
                        <div class="pr-4 container-overlay">
                            <CarouselOverlay/>
                        </div>
                    </div>
                </div>

				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#myCarousel5" data-slide="prev">
					<i id="right-arrow" class="fas fa-2x fa-chevron-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel5" data-slide="next">
					<i id="right-arrow" class="fas fa-2x fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
  </div>
</div>
</template>

<script>

import tippy from 'tippy.js';
import "tippy.js/themes/light.css";
import CarouselOverlay from '@/components/home/CarouselOverlay.vue'

tippy('#myButton', {
        content: 'My tooltip!',
      });

    export default {
        name: (
            'NewArrivals'
        ),
        components: {
            CarouselOverlay
        }
    }
</script>

<style scoped>

#price1 {
     text-decoration: line-through;
}
#price2 {
    color: #20D3C2;
    font-weight: 600;
    letter-spacing: 0.5px;
}

#fashion {
    border: 1.5px solid white;
    padding: 1px 6px;
}

#color-circle {
    color: #FE6C6C;
    font-size: 20px;
}

button {
    background-color: transparent!important;
    border: none;
}

#tooltip-div {
    position: absolute;
    bottom: 120%;
    left: 80%;
    border-radius: 40px;
    padding: 15px 5px!important;
    background-color: #FFFFFF;
    color: yellow;
}

.text {
  position: absolute;
  top: 65%;
  left: 6%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0e153def;
  overflow: hidden;
  width: 93%;
  height: 0;
  transition: .3s ease;
  border-radius: 6px;
}

.img-box {
    width: 100%;
}

.card-p {
    background-color: #0e153d;
    width: 100%;
    color: white;
    padding: 7px;
    padding-left: 18px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    text-align: left;
}

#featured {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#products {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

.carousel-indicators > li {
  border-radius: 40%;
  width: 10px;
  height: 10px;
  background-color: #20D3C2;
}

.carousel-indicators {
    margin-bottom: -40px;
}

#left-arrow, #right-arrow {
    background-color: white;
    border: 2px solid #20D3C2;
    color: #20D3C2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding-top: 8px;
    text-align: center;
}

#right-arrow {
    margin-left: -30px;
}

i:hover {
    background-color: #20D3C2!important;
    border: 2px solid #20D3C2;
    color: white!important;
    transition: .2s ease-in-out;
}

/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin: 50px auto;
  padding: 0 50px;
}

.carousel .carousel-control {
    width: 0px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
    opacity: 100;
}
.carousel-control i {
    font-size: 25px;
    line-height: 42px;
    position: absolute;
    display: inline-block;
}

</style>