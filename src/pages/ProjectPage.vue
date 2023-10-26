<template>
  <div class="project center">
    <page-banner :backgroundUrl="bannerImageUrl" :title="bannerTitle" :breadcrumbs="breadcrumbs"/>
    <div class="project__tag-content">
      <router-link v-for="tag in projectTags"
                   :key="tag.id"
                   active-class="project__tag-button_active"
                   class="project__tag-button"
                   :to="getLink(tag.id)"
      >{{ tag.text }}
      </router-link>
    </div>
    <div class="project__content">
      <project-article
          v-for="project in paginatedProject"
          :project="project"
          :key="project.id"
      >
      </project-article>
    </div>
    <pagination-component
        :totalPages="totalPages"
        :page-number="pageNumber"
        @changePageNum="changePageNum"/>
  </div>
</template>

<script>
import ProjectArticle from "@/components/ProjectArticle";
import PageBanner from "@/components/PageBanner";
import PaginationComponent from "@/components/PaginationComponent";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'project-page',
  props: {},
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
      tagId: 0,
      pageNumber: 1,
      itemsPerPage: 2,
    }
  },
  methods: {
    changePageNum(num) {

      this.$router.push({name: 'project', params: {tagId: this.tagId, pageNumber: num}})
      this.pageNumber = num;
    },

    getLink(id = this.id, pageNumber = this.pageNumber) {
      return `/project/${id}/${pageNumber}`;
    },
    getCurrentTagId() {
      console.log('getCurrentTagId')
      const tagId = parseInt(this.$route.params.tagId);
      return isNaN(tagId) || tagId < 0 ? 0 : tagId;
    },
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber);
      console.log('getCurrentPageNumber::pageNumberParam = ',pageNumberParam)
      console.log('getCurrentPageNumber::this.totalPages = ',this.totalPages)
      return isNaN(pageNumberParam) || pageNumberParam < 1 || pageNumberParam > this.totalPages ? 1 : pageNumberParam;
    },

  },
  computed: {
    ...mapState(['projects', 'projectTags']),
    projectsByTag() {
      const id = this.getCurrentTagId();
      this.tagId = id;
      return this.projects.filter((project) => project.tags.includes(id));
    },
    totalPages() {
      return Math.ceil(this.projectsByTag.length / this.itemsPerPage);
    },
    paginatedProject() {
      const pageNumber = this.getCurrentPageNumber();
      this.pageNumber = pageNumber;
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.projectsByTag.slice(startIndex, endIndex);
    },

  },
  created() {
    this.$router.push({name: 'project', params: {tagId: this.getCurrentTagId(), pageNumber: this.getCurrentPageNumber()}});
  },
}
</script>