<template>
  <div class="project-details">
    <page-banner :background-url="bannerImageUrl"/>
    <div class="project-details__content center">
      <div class="project-details__text-block">
        <h1 class="project-details__title">{{ projectDetails.title }}</h1>
        <p v-for="paragraph in projectDetails.paragraphs"
           :key="paragraph.id"
           class="project-details__paragraph">
          {{ paragraph }}
        </p>

      </div>
      <slider-component :images="projectDetails.images"/>
    </div>
  </div>

</template>

<script>
import PageBanner from "@/components/PageBanner";
import SliderComponent from "@/components/SliderComponent";
import {mapState} from "vuex";

export default {
  name: "ProjectDetailsPage",
  props: {
  },
  components: {
    PageBanner,
    SliderComponent,
  },
  data() {
    return {
      bannerImageUrl: require("@/assets/img/project/details/banner-details.jpg"),
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['projectDetails']),
  },
}
</script>

<style scoped>

</style>