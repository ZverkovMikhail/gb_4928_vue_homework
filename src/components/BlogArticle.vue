<template>
  <article
      class="article"
      :key="article.id"
      :class="{ article_accent: article.isAccent }"
  >
    <div>
      <div class="article__img-wrap">
        <img class="article__img" :src="article.img.src" :alt="article.img.alt">
        <a class="article__tag" :href="article.tag.href">{{ article.tag.text }}</a>
      </div>
      <p class="article__title">{{ article.title }}</p>
    </div>
    <div class="article__footer">
      <p class="article__date">{{ article.date }}</p>

      <router-link class="article__link" :to="{name: 'blog-details', params: {id: article.id}}">
        <svg class="article__link-img" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
             viewBox="0 0 52 53" fill="#F4F0EC" stroke="#292F36">
          <circle cx="26" cy="26.267" r="26" stroke="none"/>
          <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>

    </div>
  </article>
</template>

<script>
export default {
  name: 'blog-article',
  props: ['article'],
  defineProps: {
    article: Object,
  },

}
</script>
