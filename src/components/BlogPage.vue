<template>
  <div class="blog">
    <page-banner :backgroundUrl="bannerImageUrl" :title="bannerTitle" :breadcrumbs="breadcrumbs"/>
  </div>
  <section class="articles blog__articles center" id="blog">
    <h2 class="block-title articles__block-title">Latest Post</h2>
    <article class="article article_latest">
      <div class="article__img-wrap">
        <img class="article__img" :src="lastArticle.img.src" :alt="lastArticle.img.alt">
        <a class="article__tag" :href="lastArticle.tag.href">{{ lastArticle.tag.text }}</a>
      </div>
      <div class="article__content">
        <p class="article__title">{{ lastArticle.title }}</p>
        <p class="article__text" v-html="lastArticle.shortText"></p>
      </div>
      <div class="article__footer">
        <p class="article__date">{{ lastArticle.date }}</p>
        <a class="article__link" :href="lastArticle.href">
          <svg class="article__link-img" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
               viewBox="0 0 52 53" fill="#F4F0EC" stroke="#292F36">
            <circle cx="26" cy="26.267" r="26" stroke="none"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

      </div>
    </article>
    <h2 class="block-title articles__block-title">Articles & News</h2>

    <div class="articles__content" id="articles">
      <blog-article
          v-for="article in articlesForBlog"
          :article="article"
          :key="article.id"
      >
      </blog-article>
    </div>
    <pagination-component :page-number="7" :showed-num-buttons="3" @changePageNum="changePageNum"/>
  </section>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
import PageBanner from "@/components/PageBanner";
import PaginationComponent from "@/components/PaginationComponent";

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
      ]
    }
  },
  methods:{
    changePageNum(num){
      console.log('changePageNum = ', num)
    }
  },
  computed: {
    articlesForBlog() {
      return this.articles.slice(0, this.articles.length - 1);
    }, lastArticle() {
      return this.articles[this.articles.length - 1];
    }
  },
}
</script>
