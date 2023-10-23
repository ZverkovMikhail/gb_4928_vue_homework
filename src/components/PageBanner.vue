<template>
    <div class="page__banner banner-background" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div v-if="title || breadcrumbs" class="page__banner-content">
        <h1 class="block-title">{{ title }}</h1>
        <nav class="breadcrumb">
          <ul class="breadcrumb__list">
            <li v-for="(breadcrumb, index) in breadcrumbs"
              :key="breadcrumb.id"
                class="breadcrumb__item">
              <a v-if="index < breadcrumbs.length - 1" :href="breadcrumb.link" class="breadcrumb__link">{{ breadcrumb.name }}</a>
              <span v-else>{{ breadcrumb.name }}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  name: 'page-banner',
  props: ['title', 'breadcrumbs', 'backgroundUrl'],
  defineProps: {
    title: String,
    breadcrumbs: [{}],
  },
}
</script>
