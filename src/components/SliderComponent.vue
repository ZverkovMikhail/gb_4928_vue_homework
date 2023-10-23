<template>
  <div class="slider">
    <div v-if="fullScreenToggle" :style="{ backgroundImage: 'url(' + currentImg.src + ')' }"
         class="slider__full-screen-img">
      <button class="slider__full-screen-close" @click="fullScreenToggle=false">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </button>
    </div>
    <div class="slider__content">
      <button class="slider__full-screen-button" @click="fullScreen">
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
          <path
              d="M36.4329 33.2861L28.0452 24.8984C30.0646 22.21 31.1547 18.9378 31.151 15.5755C31.151 6.98723 24.1638 0 15.5755 0C6.98723 0 0 6.98723 0 15.5755C0 24.1638 6.98723 31.151 15.5755 31.151C18.9378 31.1547 22.21 30.0646 24.8984 28.0452L33.2861 36.4329C33.7107 36.8125 34.2644 37.0151 34.8337 36.9991C35.403 36.9832 35.9445 36.7499 36.3472 36.3472C36.7499 35.9445 36.9832 35.403 36.9991 34.8337C37.0151 34.2644 36.8125 33.7107 36.4329 33.2861ZM4.45015 15.5755C4.45015 13.3751 5.10264 11.2242 6.32511 9.3946C7.54758 7.56504 9.28513 6.13907 11.318 5.29702C13.3509 4.45496 15.5879 4.23464 17.746 4.66392C19.9041 5.09319 21.8864 6.15278 23.4423 7.70869C24.9983 9.2646 26.0578 11.247 26.4871 13.4051C26.9164 15.5632 26.6961 17.8001 25.854 19.833C25.012 21.8659 23.586 23.6035 21.7564 24.8259C19.9269 26.0484 17.7759 26.7009 15.5755 26.7009C12.626 26.6974 9.79825 25.5241 7.7126 23.4384C5.62696 21.3528 4.45369 18.5251 4.45015 15.5755Z"
              fill="#CDA274"/>
        </svg>
      </button>
      <img class="slider__img"
           :src="currentImg.src" :alt="currentImg.alt" height="800" width="1200">
    </div>
    <div class="slider__paginator">
      <button v-for="button in images"
              :key="button.id"
              @click="changeImage(button.id)"
              class="slider__paginator-button"
              :class="button.id === currentImg.id ? 'slider__paginator-button_active' : ''"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    images: []
  },
  data() {
    return {
      currentImg: {},
      fullScreenToggle: false

    }
  },
  methods: {
    changeImage(id) {
      this.currentImg = this.images.find((img) => img.id === id);
    },
    fullScreen() {
      this.fullScreenToggle = !this.fullScreenToggle;
    }
  },
  created() {
    this.currentImg = this.images[0]
  }

}
</script>

<style scoped>

</style>