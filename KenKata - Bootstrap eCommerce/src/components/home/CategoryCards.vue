<template>
    <div class="container">
        <div class="text-center">
                <div class="row d-flex justify-content-center d-block">
                    <h1 id="shop-by">SHOP BY</h1>
                    <h1 id="category" class="pl-2">CATEGORY</h1>
                </div>
            <img src="@/images/ZigZag.svg" alt="">
            <p class="pt-3">We always try to give you the best product within a fast and reliable way</p>
        </div>

        <div class="grid-container">
  <div class="card item1 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Shoes</p>
    </div>
  </div>
  <div class="card item2 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Men</p>
    </div>
  </div>
  <div class="card item3 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Women</p>
    </div>
  </div>  
  <div class="card item4 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Kids</p>
    </div>
  </div>
  <div class="card item5 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Hats</p>
    </div>
  </div>
  <div class="card item6 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Sunglasses <br> <small>18 Products</small></p>
    </div>
  </div>
  <div class="card item7 pb-0">
    <div class="mt-auto">
        <p class="card-p card-text p-y-1">Watches</p>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        name: (
            'CategoryCards'
        )
    }
</script>

<style scoped>

.card {
    background-color: #CCCCCC!important;
    border: none;
}

.card-p {
    font-size: 14px;
    font-weight: 600;
    background-color: #0e153dda;
    width: 50%;
    color: #20D3C2;
    padding: 7px;
    padding-left: 15px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 5px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  width: 100%;
}

.item1 {
  grid-area: 2 / 1 / span 2 / span 2;
  position: relative;
  height: 438px;
  width: 438px;
}
.item4 {
  grid-area: 1 / 4 / span 2 / span 2;
  height: 438px;
  width: 438px;
}
.item7 {
  grid-area: 3 / 5 / span 1 / span 1;
  height: 214px;
  width: 214px;
}
.item6 {
  grid-area: 3 / 3 / span 1 / span 2;
  height: 214px;
  width: 438px;
}
.item2 {
  grid-area: 1 / 1 / span 1 / span 1;
  height: 214px;
  width: 214px;
}
.item3 {
  grid-area: 1 / 2 / span 1 / span 2;
  height: 214px;
  width: 438px;
}
.item5 {
  grid-area: 2 / 3 / span 1 / span 1;
  height: 214px;
  width: 214px;
}

#shop-by {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #0E153D;
}

#category {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    color: #20D3C2;
}

@media (min-width: 300px) { 
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    padding: 10px;
  }
}

@media (min-width: 768px) { 

  .grid-container {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
  }

}

@media (max-width: 768px) { 

  .grid-container {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    padding: 10px;
    justify-content: center;
  }

  .grid-container > div {
  width: 225px;
  height: 225px;
}
}

</style>