import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'; 
import CaseStudy from './views/case_study.vue';
import HomePage from './views/homepage.vue';
import ServicesPage from './views/services.vue';



const routes: Array<RouteRecordRaw>  = [
    {
        path: '/', 
        name: 'Home', 
        component: HomePage
    }, 

    {
        path: '/services',
        name: 'Services', 
        component: ServicesPage
    }, 

    {
        path: '/case-study', 
        name: 'Case_Study', 
        component: CaseStudy
    }
]; 


const router = createRouter({
    history: createWebHistory(), 
    routes, 
}); 


export default router; 