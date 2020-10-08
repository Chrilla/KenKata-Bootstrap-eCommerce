<template>
<nav id="NavBottom" class="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
    <div class="container">
        <div class="pb-3 pt-3 pr-2 ml-auto">
            <button id="dropdown-btn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="text-white fas fa-bars fa-lg"></span>
        </button>
        </div>

  <div class="collapse navbar-collapse justify-content-between text-right" id="navbarSupportedContent">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <a id="browse-categories" class="text-left nav-link d-none d-lg-block" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <img src="@/images/Hamburger-Menu.svg" class="pl-1 pr-2 py-1" alt="">Browse Categories<i id="browse-chevron" class="float-right fas fa-chevron-down pl-5 pr-2 pt-1"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Clothes</a>
          <a class="dropdown-item" href="#">Accessories</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <router-link to="/shop">Shop<i class="fas fa-chevron-down pl-2"></i></router-link>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Clothes</a>
          <a class="dropdown-item" href="#">Accessories</a>
        </div>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products<i class="fas fa-chevron-down pl-2"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories<i class="fas fa-chevron-down pl-2"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pages<i class="fas fa-chevron-down pl-2"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <ul class="navbar-nav d-sm-none">
            <li class=""><a class="nav-link" id="my-account" href="#"><img src="@/images/User-Icon.svg" class="pr-2" alt="">My Account</a></li>
            <li class=""><a class="nav-link" href="#"><img src="@/images/Heart-Icon.svg" alt=""></a></li>
            <li class=""><a class="nav-link" href="#"><img src="@/images/Compare-Icon.svg" alt=""><span class="badge badge-pill">0</span></a></li>
            <li class=""><a class="nav-link" href="#"><img src="@/images/Bag-Icon.svg" alt=""><span class="badge badge-pill">0</span> $0.00</a></li>
        </ul>
      </li>
    </ul>
      <button id="special-offer-btn" class="btn my-2 my-sm-0" type="submit">SPECIAL OFFER</button>
  </div>
    </div>
</nav>
</template>

<script>
    export default {
        name: (
            'NavBottom'
        )
    }
</script>

<style scoped>

#browse-chevron {
  color: white;
}

.fas {
  color: #20D3C2;
}

#NavBottom {
    background-color: white!important;
    display: flex!important;
    justify-content: end!important;
}

li a {
    color: #0E153D!important;
}

#browse-categories {
    color: white!important;
    background-color: #20D3C2
}
#browse-categories:hover {
    color: white!important;
    background-color: #26b9ab;
    transition: .2s ease-in-out;
}

#special-offer-btn {
    background-color: #20D3C2;
    color: white;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 4px;
    padding-bottom: 4px;
    font-weight: 600;
}
#special-offer-btn:hover {
    background-color: #26b9ab;
    color: white;
}

.router-link-active {
    border-bottom: 3px solid #20D3C2;
    padding-bottom: 10px;
}

a {
  text-decoration: none;
}
a:hover {
  color: #26b9ab!important;
}

.nav-item {
    padding-left: 10px;
    padding-right: 10px;
}

#dropdown-btn {
    background-color: #20D3C2;
    color: #fff!important;
    padding: 10px ;
    border-radius: 10px;
}

</style>