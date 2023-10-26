import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import ProjectPage from "@/pages/ProjectPage";
import BlogPage from "@/pages/BlogPage";
import NotFound from "@/pages/NotFound";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";
// import ProjectDetailsPage from "@/pages/ProjectDetailsPage";
// import BlogDetailsPage from "@/pages/BlogDetailsPage";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '/',
            component: MainPage
        },
        {
            path: '/project/:tagId?/:pageNumber?',
            name: 'project',
            component: ProjectPage,
        },
        {
            path: '/project-details/:id',
            name: 'project-details',
            component: ProjectDetailsPage
        },
        {
            path: '/blog/:pageNumber?',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/blog/details/:id',
            name: 'blog-details',
            component: BlogDetailsPage
        },

        {
            path: '/:pathMatch(.*)',
            name: 'notfound',
            component: NotFound
        },
    ]
});