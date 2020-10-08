<template>
    <div id="copyright">
        <div class="container d-flex justify-content-md-between justify-content-center py-3">
            <div class="my-auto">
                <small id="copyright-text">© Copyright 2020 KenKata</small>
            </div>
            <div class="d-none d-md-block">
                <img class="pr-2" src="@/images/Mastercard.svg" alt="">
                <img class="pr-2" src="@/images/PayPal.svg" alt="">
                <img class="pr-2" src="@/images/Visa.svg" alt="">
                <img class="pr-2" src="@/images/Payoneer.svg" alt="">
                <img class="pr-0" src="@/images/Discover.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: (
            'Copyright'
        )
    }
</script>

<style scoped>

#copyright {
    background-color: #080C24;
    color: white;
    border-top: 0.5px solid #20d3c142;
}

</style>