import { createRouter, createWebHistory } from 'vue-router'
import ListeDepenses from '../components/ListeDepenses.vue'
import DetailsDepenses from '../components/DetailsDepenses.vue'

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/liste-depenses',
            name: 'ListeDepenses',
            component: ListeDepenses
        },
        {
            path: '/details-depenses/:id',
            name: 'DetailsDepenses',
            component: DetailsDepenses
        }
    ]
})

export default router