<template>
    <footer class="footer py-5">
      <div class="row d-flex mr-auto pr-5 justify-content-end">
          <button @click="scrollToTop" id="scroll-up-btn" class="btn btn-primary d-none d-sm-block"><img src="@/images/Arrow-Up.svg" alt=""></button>
      </div>
  <div id="centered" class="container">
    <div class="row d-flex justify-content-between">
      <div class="col-sm-3">
        <div>
          <img class="pb-4" src="@/images/Logo-White.svg" alt="">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
            <div>
            <div class="text-white">
              <div id="follow-centered" class="d-flex pt-3">
                <p class="mb-0 pb-1">Follow Us</p>
                <div id="follow-border" class="ml-4 mt-1"></div>
              </div>
                <a href=""><i class="pr-2 pl-0 fab fa-facebook-f"></i></a>
                <a href=""><i class="p-2 fab fa-twitter"></i></a>
                <a href=""><i class="p-2 fab fa-instagram"></i></a>
                <a href=""><i class="p-2 fab fa-pinterest-p"></i></a>
                <a href=""><i class="p-2 fab fa-youtube"></i></a>
            </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
      <div>
        <strong>CONTACT INFO</strong>
        <p class="mb-0 pt-4 pb-1">Address:</p>
        <p class="text-white">Solna Business Park <br> Feni-2500, Stockholm</p>
        <p class="mb-0  pb-1">Phone:</p>
        <p class="text-white">+08-123456789 <br> +08-123456789</p>
        <p class="mb-0  pb-1">Email:</p>
        <a href=""><p class="text-white mb-0">support@website.com</p></a>
        <a href=""><p class="text-white">info@website.com</p></a>
        
        </div>
      </div>
      <div class="col-sm-3">
      <div>
        <strong>USEFUL LINKS</strong>
        <div>
        <div>
          <div class="nav-item d-flex flex-column">
            <a class="useful-links pt-4" href="">Privacy Policy</a>
            <a class="terms pt-1 pb-1" href="">Terms &amp; Conditions</a>
            <a class="useful-links pt-1 pb-1" href="">Contact Us</a>
            <a class="useful-links pt-1 pb-1" href="">Our Sitemap</a>
            <a class="useful-links pt-1 pb-1" href="">Latest News</a>
            <a class="useful-links pt-1 pb-1" href="">Returns</a>
          </div>
           </div>
        </div>
        </div></div>
      
      <div class="col-sm-3 d-none d-xl-block">
      <div>
        <strong>RECENT INSTAGRAM</strong>
        <div>
          <div class="images-gallery">
            <ul>
              <li data-aos="flip-left" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="400" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="500" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="600" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Instagram-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="700" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="800" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="900" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
              <li data-aos="flip-left" data-aos-delay="1000" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="#"><img src="@/images/Grey-Footer-Box.svg" alt=""></a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
    export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
     scrollToTop: function() { 
            window.scrollTo(0, 0); 
        } 
    } 
  }
</script>

<style scoped>

#follow-border {
  border-bottom: 2px solid #20D3C2;
  height: 10px;
  width: 45px;
}

#scroll-up-btn {
  background-color: #20D3C2;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  border: none;
}
#scroll-up-btn:hover {
  background-color: #27b1a3;
}

.footer {
    background-color: #0E153D;
    color: #20D3C2;
    border-top: 6px solid #20D3C2;
}

a i {
    color: #20D3C2;
}
a i:hover {
    color: white;
}
a:hover {
  color: #24afa1;
  text-decoration: none;
}
a p:hover {
  color: #24afa1!important;
}

.useful-links {
    color: white;
}

.terms {
    color: #20D3C2;
    text-decoration: underline;
}


.images-gallery ul{
      padding-left: 0;
}

.images-gallery li{
    list-style: none;
    float: left;
    margin: 0 3% 2% 0;
    width: 31%;
    position: relative;
    padding-top: 7px;
}

li:nth-child(3n) {
    margin: 0 0 2%;
}

@media (min-width: 300px) { 
    
    #centered {
        text-align: center;
    }
}

#follow-centered {
  justify-content: center;
}

@media (min-width: 768px) { 
    
    #centered {
        text-align: left;
    }

    #follow-centered {
  justify-content: start;
}
}

</style>