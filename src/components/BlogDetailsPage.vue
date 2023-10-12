<template>
  <div class="blog-details__banner"></div>
  <div class="blog-details center" id="blog-details">
    <div class="blog-details__tag">
      <h3 class="blog-details__tag-title">Tags</h3>
      <div class="blog-details__tag-content">
        <button v-for="tag in tags"
                :key="tag.id"
                v-bind:class="(tag.id === tagActive)?'blog-details__tag-button_active':''"
                @click="clickOnTag(tag.id)"
                class="blog-details__tag-button">{{ tag.text }}
        </button>
      </div>
    </div>
    <div class="blog-details-content">
      <h1 class="block-title blog-details__title">
        {{ currentArticle.title }}
      </h1>
      <img class="blog-details__img blog-details__img_title"
           :src="currentArticle.imgMain.src"
           :alt="currentArticle.imgMain.alt">

      <div class="blog-details__img-footer">
            <span class="blog-details__date">
                {{ currentArticle.date }}
            </span>
        <nav class="breadcrumb">
          <ul class="breadcrumb__list">
            <li class="breadcrumb__item"><a href="#" class="breadcrumb__link">Interior</a></li>
            <li class="breadcrumb__item"><a href="#" class="breadcrumb__link">InteriorHome</a></li>
            <li class="breadcrumb__item">Decore</li>
          </ul>
        </nav>
      </div>
      <div class="blog-details__text-block">
        <p class="blog-details__text" v-for="paragraph in currentArticle.textMainParagraphs"
        :key="paragraph.id">
          {{ paragraph.text }}
        </p>
      </div>
      <div class="blog-details__quote">
        <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
              fill="#CDA274"/>
        </svg>
        <p class="blog-details__quote-text">
          The details are not the details.<br>
          They make the design.
        </p>
      </div>
      <h2 class="block-title blog-details__title">
        {{ currentArticle.subTitle }}
      </h2>
      <div class="blog-details__text-block">
        <p class="blog-details__text">
          {{ currentArticle.textSecond }}
        </p>
        <ol class="blog-details__text-list">
          <li class="blog-details__text-list-item"
              v-for="item in currentArticle.textSecondList"
          :key="item.id">
            {{ item.text }}
          </li>
        </ol>
      </div>
      <img class="blog-details__img"
           :src="currentArticle.imgSecond.src"
           :alt="currentArticle.imgSecond.alt">
      <p class="blog-details__text">
        {{ currentArticle.textLast }}
      </p>
    </div>

  </div>

</template>

<script>
export default {
  name: 'blog-details-page',
  props: ['articles'],
  defineProps: {
    articles: [],
  }, data() {
    return {
      tags: [
        {id: 0, text: 'Kitchen'},
        {id: 1, text: 'Bedroom'},
        {id: 2, text: 'Building'},
        {id: 3, text: 'Architecture'},
        {id: 4, text: 'Kitchen Planning'},
        {id: 5, text: 'Bedroom'},
      ],
      tagActive: 0,
    }
  },
  methods: {
    clickOnTag(id) {
      this.tagActive = id;
    },
  },
  computed: {
    currentArticle() {
      return this.articles.find((art) => art.tag === this.tagActive)
    }
  }
}
</script>
