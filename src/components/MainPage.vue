<template>
  <div class="banner center">
    <div class="banner__content">
      <div class="banner__text-block">
        <h1 class="banner__title">Let Your Home Be Unique</h1>
        <p class="banner__subtitle">There are many variations of the passages of lorem Ipsum fromavailable,
          majority.</p>
        <button class="banner__button">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                  stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <section class="projects center" id="project">
    <h2 class="block-title">Follow Our Projects</h2>
    <p class="block-subtitle">
      It is a long established fact that a reader will be distracted by the of
      readable content of page lookings at its layouts points.
    </p>
    <div class="projects__content">
      <div class="project-item">
        <img class="project-item__img" src="@/assets/img/project_1.jpg" alt="Modern Kitchan" width="548" height="525">
        <div class="project-item__footer">
          <div class="project-item__text-wrap">
            <h3 class="project-item__title">Modern Kitchan</h3>
            <ul class="project-item__tags">
              <li class="project-item__tags-item">Decor</li>
              <li class="project-item__tags-item">Artchitecture</li>
            </ul>
          </div>
          <a class="project-item__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="#F4F0EC"
                 stroke="#292F36">
              <circle cx="35" cy="35" r="35" stroke="none"/>
              <path d="M32 44L40 35L32 26" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-item">
        <img class="project-item__img" src="@/assets/img/project_2.jpg" alt="Modern Kitchan" width="548" height="525">
        <div class="project-item__footer">
          <div class="project-item__text-wrap">
            <h3 class="project-item__title">Modern Kitchan</h3>
            <ul class="project-item__tags">
              <li class="project-item__tags-item">Decor</li>
              <li class="project-item__tags-item">Artchitecture</li>
            </ul>
          </div>
          <a class="project-item__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="#F4F0EC"
                 stroke="#292F36">
              <circle cx="35" cy="35" r="35" stroke="none"/>
              <path d="M32 44L40 35L32 26" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-item">
        <img class="project-item__img" src="@/assets/img/project_3.jpg" alt="Modern Kitchan" width="548" height="525">
        <div class="project-item__footer">
          <div class="project-item__text-wrap">
            <h3 class="project-item__title">Modern Kitchan</h3>
            <ul class="project-item__tags">
              <li class="project-item__tags-item">Decor</li>
              <li class="project-item__tags-item">Artchitecture</li>
            </ul>
          </div>
          <a class="project-item__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="#F4F0EC"
                 stroke="#292F36">
              <circle cx="35" cy="35" r="35" stroke="none"/>
              <path d="M32 44L40 35L32 26" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-item">
        <img class="project-item__img" src="@/assets/img/project_4.jpg" alt="Modern Kitchan" width="548" height="525">
        <div class="project-item__footer">
          <div class="project-item__text-wrap">
            <h3 class="project-item__title">Modern Kitchan</h3>
            <ul class="project-item__tags">
              <li class="project-item__tags-item">Decor</li>
              <li class="project-item__tags-item">Artchitecture</li>
            </ul>
          </div>
          <a class="project-item__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="#F4F0EC"
                 stroke="#292F36">
              <circle cx="35" cy="35" r="35" stroke="none"/>
              <path d="M32 44L40 35L32 26" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <div class="indicators center">
    <div class="indicators__item">
      <div class="indicators__value">12</div>
      <div class="indicators__text">Years Of Experiance</div>
    </div>
    <div class="indicators__item">
      <div class="indicators__value">85</div>
      <div class="indicators__text">Success Project</div>
    </div>
    <div class="indicators__item">
      <div class="indicators__value">15</div>
      <div class="indicators__text">Active Project</div>
    </div>
    <div class="indicators__item">
      <div class="indicators__value">95</div>
      <div class="indicators__text">Happy Customers</div>
    </div>
  </div>
  <section class="articles center" id="blog">
    <h2 class="block-title">Articles & News</h2>
    <p class="block-subtitle">
      It is a long established fact that a reader will be distracted by the of
      readable content of a page when lookings at its layouts the points of using.
    </p>
    <div class="articles__content">
      <blog-article
          v-for="article in articlesForMain"
          :article="article"
          :key="article.id"
      >
      </blog-article>
    </div>
  </section>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
export default {
  name: 'main-page',
  components: {BlogArticle},
  props: ['articles'],
  defineProps: {
    articles: [],
  },
  computed: {
        articlesForMain() {
            return this.articles.slice(0, 3);
        },
    },
}
</script>
