<template>
  <div id="jumbotron">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div id="centered" class="my-auto col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 pt-5 pb-5">
          <h1 id="shopping-is">Shopping is</h1>
          <h1 id="more-fun" class="pb-2">MORE FUN</h1>
          <small>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</small>
          <div class="pt-4">
            <button id="jumbo-btn" class="btn pl-4 pr-4 pt-2 pb-2">SHOP NOW</button>
          </div>
        </div>
        <div class="d-none d-md-block">
          <img src="@/images/JumboTron-Img.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Jumbotron',
  components: {

  }
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

#jumbotron {
  background-color: #EEEEEE;
}

#jumbo-btn {
  background-color: #fff;
  border-radius: 30px;
  color: #20D3C2;
  font-weight: 600;
  padding-top: 11px!important;
  padding-bottom: 11px!important;
  animation-duration: 2s;
  animation-name: bounceIn;
}
#jumbo-btn:hover {
  color: #fff;
  background-color: #20D3C2;
  transition: .3s ease-in-out;
}

#more-fun {
  color: #20D3C2;
  font-weight: bold;
  font-size: 3.5em;
  font-family: 'Play', sans-serif;
}

#shopping-is {
  font-size: 3.5em;
  font-family: 'Play', sans-serif;
  color: #0E153D;
}

@media (min-width: 300px) { 
    
    #centered {
        text-align: center;
    }
}

@media (min-width: 992px) { 
    
    #centered {
        text-align: left;
    }
}

img {
  width: 100%;
}

</style>