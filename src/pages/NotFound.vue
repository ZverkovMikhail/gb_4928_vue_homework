<template>
  <div class="not-found center">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">
        We are sorry, but the page
        you requested was not found
      </p>
      <a href="" class="not-found__button">
        Back To Home
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274"
                stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    <div class="not-found__img-wrap">
      <img :src="image" alt="image 404" class="not-found__img" width="913"
           height="1042">
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      image: require('@/assets/img/404.jpg'),
    }
  }
}
</script>

<style scoped>

</style>