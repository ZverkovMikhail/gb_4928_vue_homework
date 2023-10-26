<template>
  <html lang="ru">
  <body>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap"
          rel="stylesheet">
    <title>Blog</title>
  </head>
  <header-component/>
  <Transition name="fade">
  <router-view>
  </router-view>
</Transition>
<!--  <main-page/>-->
<!--  <blog-page/>-->
<!--  <blog-details-page/>-->
<!--  <project-page/>-->
<!--  <project-details-page/>-->
  <footer-component/>
  </body>
  </html>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';
// import MainPage from '@/pages/MainPage';
// import BlogPage from "@/pages/BlogPage";
// import BlogDetailsPage from "@/pages/BlogDetailsPage";
// import ProjectPage from "@/pages/ProjectPage";
// import ProjectDetailsPage from "@/pages/ProjectDetailsPage";

export default {
  name: 'App',
  data() {
    return {
    }
  }
  ,
  components: {
    HeaderComponent,
    FooterComponent,
    // MainPage,
    // BlogPage,
    // BlogDetailsPage,
    // ProjectPage,
    // ProjectDetailsPage,

  },

}
</script>

<style>

</style>
