<template>
  <div class="blog">
    <div class="blog__banner">
      <div class="blog__banner-content">
        <h1 class="block-title">Articles & News</h1>
        <nav class="breadcrumb">
          <ul class="breadcrumb__list">
            <li class="breadcrumb__item"><a href="index.html" class="breadcrumb__link">Home</a></li>
            <li class="breadcrumb__item">Blog</li>
          </ul>
        </nav>
      </div>
    </div>
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
    <div class="articles__pagination">
      <a class="articles__pagination-link articles__pagination-link_active" href="#">01</a>
      <a class="articles__pagination-link" href="#">02</a>
      <a class="articles__pagination-link" href="#">03</a>
      <a class="articles__pagination-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
          <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
export default {
  name: 'blog-page',
  props: ['articles'],
  components: {BlogArticle},
  defineProps: {
    articles: [],
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
