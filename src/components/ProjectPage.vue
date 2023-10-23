<template>
  <div class="project center">
    <page-banner :backgroundUrl="bannerImageUrl" :title="bannerTitle" :breadcrumbs="breadcrumbs"/>
    <div class="project__tag-content">
      <button v-for="tag in projectTags"
              :key="tag.id"
              v-bind:class="(tag.id === projectTagActive)?'project__tag-button_active':''"
              @click="clickOnTag(tag.id)"
              class="project__tag-button">{{ tag.text }}
      </button>
    </div>
    <div class="project__content">
      <project-article
          v-for="project in projectsByTag"
          :project="project"
          :key="project.id"
      >
      </project-article>
    </div>
    <pagination-component :page-number="7" :showed-num-buttons="3" @changePageNum="changePageNum"/>
  </div>
</template>

<script>
import ProjectArticle from "@/components/ProjectArticle";
import PageBanner from "@/components/PageBanner";
import PaginationComponent from "@/components/PaginationComponent";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'project-page',
  props: {
  },
  components: {PageBanner, ProjectArticle, PaginationComponent},
  data() {
    return {
      bannerTitle: "Our Project",
      bannerImageUrl: require("@/assets/img/project/banner.jpg"),
      breadcrumbs: [
        {
          name: 'Home',
          url: '#',
        },
        {
          name: 'Project',
          url: null,
        },
      ],

    }
  },
  methods: {
    ...mapMutations(['PROJECT_TAG_ACTIVE']),
    changePageNum(num) {
      console.log('changePageNum = ', num)
    },
    clickOnTag(id) {
      this.PROJECT_TAG_ACTIVE(id);
    },

  },
  computed: {
    ...mapState(['projects','projectTags', 'projectTagActive']),
    ...mapGetters(['projectsByTag'])

  }
}
</script>
