import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from'./views/Category.vue'
import SubjectList from './views/SubjectList.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children:[
                {
                    path:'',
                    name: 'category',
                    component: Category,
                },
                {
                    path:':categoryName',
                    name: 'subjectlist',
                    component: SubjectList,
                }
            ]
        },

    ]
})
