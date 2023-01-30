import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import CarServiceVue from "../views/CarServiceVue.vue"
import AboutUs from "../views/AboutUsPage.vue"
import ContactUs from "../views/ContactUsPage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutUs
        },
        {
            path: '/contact-us',
            name: 'Contact',
            component: ContactUs
        },
        {
            path: '/car-details/:id',
            name: 'CarDetails',
            component: () => import('../views/CarDetails.vue'),
            children: [
                {
                    path: 'car-contact',
                    name: 'CarContact',
                    component: () => import('../views/CarContact.vue'),
                  },
                {
                  path: 'car-service',
                  name: 'CarService',
                  component: CarServiceVue,
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'PageNotFound',
            component: () => import('../views/NotFoundVue.vue')
        }
    ]
})

export default router;