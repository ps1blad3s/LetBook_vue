import { createMemoryHistory, createRouter } from 'vue-router'
import App from "@/App.vue";
import Cart from "@/Cart.vue";
import Catalog from "@/components/Catalog.vue";



const routes = [
    { path: '/', component: Catalog },
    { path: '/cart', component: Cart },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router