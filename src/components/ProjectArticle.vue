<template>
  <figure class="project-article">
    <img class="project-article__img" :src="project.img.src" :alt="project.img.alt">

    <div class="project-article__footer">
      <div class="project-article__footer-content">
        <h2 class="project-article__title">{{ project.title }}</h2>
        <ul class="breadcrumb__list project-article__breadcrumb">
          <li v-for="breadcrumb in project.breadcrumbs"
              :key="breadcrumb.id"
              class="breadcrumb__item"
          >
            {{ breadcrumb.text }}
          </li>
        </ul>
      </div>
      <router-link class="article__link project-article__link" :to="{name: 'project-details', params:{id: 0}}">
        <svg class="article__link-img" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
             viewBox="0 0 52 53" fill="#F4F0EC" stroke="#292F36">
          <circle cx="26" cy="26.267" r="26" stroke="none"/>
          <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </div>
  </figure>
</template>

<script>
export default {
  name: "ProjectArticle",
  props: ['project'],

}
</script>

<style scoped>

</style>