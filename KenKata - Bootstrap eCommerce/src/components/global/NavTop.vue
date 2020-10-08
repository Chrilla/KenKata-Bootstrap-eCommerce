<template>
    <nav id="NavTop" class="navbar navbar-expand-lg p-0">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="container collapse navbar-collapse" id="navbarNavDropdown">
      <div class="d-flex">
        <li id="language-dropdown" class="navbar-nav nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ENG<i class="fas fa-chevron-down pl-1"></i>
          </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Swedish</a>
          <a class="dropdown-item" href="#">English</a>
        </div>
      </li>
      <li class="navbar-nav nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          USD<i class="fas fa-chevron-down pl-1"></i>
          </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">SEK</a>
          <a class="dropdown-item" href="#">GBP</a>
        </div>
      </li>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Newsletter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQs</a>
      </li>
      <div class="d-flex align-items-center pl-2">
            <a href=""><i class="p-1 fab fa-facebook-f"></i></a>
            <a href=""><i class="p-1 fab fa-twitter"></i></a>
            <a href=""><i class="p-1 fab fa-instagram"></i></a>
            <a href=""><i class="p-1 fab fa-pinterest-p"></i></a>
            <a href=""><i class="p-1 fab fa-youtube"></i></a>
        </div>
    </ul>
    </div>
</nav>
</template>

<script>
    export default {
        name: (
            'NavTop'
        )
    }
</script>

<style scoped>

#NavTop {
display: none;
background-color: #20D3C2;
}

a {
    color: white;
}
a:hover {
    color: #0E153D;
}

.dropdown-item {
    color: #333;
}

li {
    border-right: 1.5px solid white;
    padding-left: 3px;
    padding-right: 3px;
}

#language-dropdown {
    border: none;
}

@media (min-width: 992px) { 
    #NavTop {
        display: block;
    }
 }

</style>