<template>
  <div class="project-details">
    <page-banner :background-url="bannerImageUrl"/>
    <div class="project-details__content center">
      <div class="project-details__text-block">
        <h1 class="project-details__title">{{ getProjectDetails.title }}</h1>
        <p v-for="paragraph in getProjectDetails .paragraphs"
           :key="paragraph.id"
           class="project-details__paragraph">
          {{ paragraph }}
        </p>

      </div>
      <slider-component :images="getProjectDetails.images"/>
    </div>
  </div>

</template>

<script>
import PageBanner from "@/components/PageBanner";
import SliderComponent from "@/components/SliderComponent";
import {mapGetters} from "vuex";

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
    ...mapGetters(['getProjectDetails']),
  },
}
</script>

<style scoped>

</style>