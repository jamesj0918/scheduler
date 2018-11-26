import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from'./views/Category.vue'
import SubjectList from './views/SubjectList.vue'

import ShedulerLayout from './views/SchedulerLayout.vue'
import InputLayout from './Input/InputLayout'
import Subcategory from "./views/Subcategory";
import  SubcategoryLayout from "./views/SubcategoryLayout"

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'InputLayout',
            component: InputLayout,
        },
        {
            path: '/result/:timeTableId',
            name: 'home',
            component: Home,
            children:[

                {
                    path:'/',
                    name:'category_list',
                    component: Category,
                },
                {
                    path: ':category',
                    name: 'category',
                    component: SubcategoryLayout,
                    children: [
                        {
                            path: '',
                            name: 'subcategory_list',
                            component: Subcategory,
                        },
                        {
                            path: ':subcategory',
                            name: 'subject_list',
                            component: SubjectList,
                        }
                    ]

                }
            ]
        },
    ]
})
