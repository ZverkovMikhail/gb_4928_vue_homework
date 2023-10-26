<template>
  <div class="blog">
    <page-banner :backgroundUrl="bannerImageUrl" :title="bannerTitle" :breadcrumbs="breadcrumbs"/>
  </div>
  <section class="articles blog__articles center" id="blog">
    <h2 class="block-title articles__block-title">Latest Post</h2>
    <article class="article article_latest">
      <div class="article__img-wrap">
        <img class="article__img" :src="getLastArticle.img.src" :alt="getLastArticle.img.alt">
        <a class="article__tag" :href="getLastArticle.tag.href">{{ getLastArticle.tag.text }}</a>
      </div>
      <div class="article__content">
        <p class="article__title">{{ getLastArticle.title }}</p>
        <p class="article__text" v-html="getLastArticle.shortText"></p>
      </div>
      <div class="article__footer">
        <p class="article__date">{{ getLastArticle.date }}</p>
        <router-link class="article__link" :to="{name: 'blog-details', params: {id: getLastArticle.id}}">
          <svg class="article__link-img" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
               viewBox="0 0 52 53" fill="#F4F0EC" stroke="#292F36">
            <circle cx="26" cy="26.267" r="26" stroke="none"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>

      </div>
    </article>
    <h2 class="block-title articles__block-title">Articles & News</h2>

    <div class="articles__content" id="articles">
      <blog-article
          v-for="article in paginatedBlog"
          :article="article"
          :key="article.id"
      >
      </blog-article>
    </div>
    <pagination-component
        :totalPages="totalPages"
        :page-number="pageNumber"
        @changePageNum="changePageNum"/>
  </section>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
import PageBanner from "@/components/PageBanner";
import PaginationComponent from "@/components/PaginationComponent";
import {mapGetters} from "vuex";

export default {
  name: 'blog-page',
  props: ['articles'],
  components: {PageBanner, BlogArticle, PaginationComponent},
  defineProps: {
    articles: [],
  },
  data() {
    return {
      bannerTitle: "Articles & News",
      bannerImageUrl: require("@/assets/img/article_banner.jpg"),
      breadcrumbs: [
        {
          name: 'Home',
          url: '#',
        },
        {
          name: 'Blog',
          url: null,
        },
      ],
      pageNumber: 1,
      itemsPerPage: 3,
    }
  },
  methods: {
    changePageNum(num) {

      this.$router.push({name: 'blog', params: {pageNumber: num}})
      this.pageNumber = num;
    },

    getLink(id = this.id, pageNumber = this.pageNumber) {
      return `/project/${pageNumber}`;
    },
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber);
      return isNaN(pageNumberParam) || pageNumberParam < 1 || pageNumberParam > this.totalPages ? 1 : pageNumberParam;
    },
  },
  computed: {
    ...mapGetters(['getArticlesForBlog', 'getLastArticle']),
    totalPages() {
      return Math.ceil(this.getArticlesForBlog.length / this.itemsPerPage);
    },
    paginatedBlog() {
      const pageNumber = this.getCurrentPageNumber();
      this.pageNumber = pageNumber;
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.getArticlesForBlog.slice(startIndex, endIndex);
    },
  },
}
</script>
