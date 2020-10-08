<template>
<nav id="NavMiddle" class="navbar navbar-expand-lg p-4">
  
  <div class="collapse show navbar-collapse" id="navbarSupportedContent">
      <div id="centered" class="container">
      <a class="navbar-brand ml-3" href="#"><router-link to="/"><img src="@/images/Logo.svg" alt=""></router-link></a>
    <form class="form-inline my-2 my-lg-0">
        <span class="d-flex justify-content-center">
            <input class="form-control col-6 col-xl-10" type="search" placeholder="Search products..." aria-label="Search">
            <li class="navbar-nav nav-item dropdown d-flex">
                <div class="d-flex">
                    <a class="nav-link p-2 d-flex" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories<i class="fas fa-chevron-down my-auto pl-4 pr-1"></i></a>
                    <button class="search-btn" type="submit"><img id="search-icon-btn" src="@/images/Search-Icon.svg" alt=""></button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Shoes</a>
                        <a class="dropdown-item" href="#">Shirts</a>
                    </div>
                </div>
            </li>
         </span>
    </form>
    <ul class="navbar-nav d-none d-sm-flex">
            <li class="nav-item pr-3"><a class="nav-link" id="my-account" href="#"><img src="@/images/User-Icon.svg" class="pr-2" alt="">My Account</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><img src="@/images/Heart-Icon.svg" alt=""></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><img src="@/images/Compare-Icon.svg" alt=""><span class="badge badge-pill">0</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><img src="@/images/Bag-Icon.svg" alt=""><span class="badge badge-pill">0</span> $0.00</a></li>
        </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: (
            'NavMiddle'
        )
    }
</script>

<style scoped>

#my-account {
margin-left: -60px;
}

.fas {
    color: #20D3C2;
}

#NavMiddle {
    background-color: white!important;
    border-bottom: 1.5px solid #E3E3E3;
    display: flex;
    justify-content: end;
}

a {
    color: #0E153D;
}
a:hover {
        color: #26b9ab;
    }

#search-icon-btn {
    background-color: #20D3C2;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 11px;
}
#search-icon-btn:hover {
    background-color: #22b4a6;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 11px;
    transition: .2s ease;
}

.search-btn {
    background-color: transparent;
    border: none;
    padding: 0;
}

input {
    border-right: 1px solid #20d3c183;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 20px;
}

input::placeholder {
    color: #AAAAAA;
}

#navbarDropdownMenuLink {
    border: 1px solid #20d3c19a;
    border-left: none;
}

#dropdown-btn {
    background-color: #20D3C2;
    color: #fff;
    padding: 10px ;
    border-radius: 10px;
}

.badge {
 background-color: #20D3C2;
 color: white;
 position: absolute;
 margin-top: -6px;
 margin-left: -10px;
 font-weight: normal;
 padding: 2.5px 5px;
}

@media (min-width: 350px) { 

    a {
        color: #0E153D;
    }
    
    #centered {
        justify-content: center;
    }

    ul {
        flex-direction: row;
        text-align: center;
    }

    ul li {
        padding-right: 10px;
        padding-left: 10px;
    }
    
 }

 @media (max-width: 768px) {

     #my-account {
        margin-left: 0;
    }
 }

 @media (min-width: 500px) {
     #centered {
         display: flex;
        }
     }

@media (min-width: 992px) {

    #centered {
        justify-content: space-between;
    }

    ul {
        flex-direction: row!important;
}

    ul li {
        padding-right: 0px;
        padding-left: 0px;
        }
}

</style>