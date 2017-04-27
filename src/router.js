import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/Home.vue'
import SignIn from '@pages/auth/SignIn.vue'
import SignUp from '@pages/auth/SignUp.vue'

import ArticlesIndex from '@pages/articles/Index.vue'
import ArticleCreate from '@pages/articles/Create.vue'
import ArticleDetail from '@pages/articles/Detail.vue'
import ArticleEdit from '@pages/articles/Edit.vue'

import ImagesIndex from '@pages/images/Index.vue'
import ImageCreate from '@pages/images/Create.vue'
import ImageDetail from '@pages/images/Detail.vue'
import ImageEdit from '@pages/images/Edit.vue'

import PeopleIndex from '@pages/people/Index.vue'
import PeopleDetail from '@pages/people/Detail.vue'
import PeopleEdit from '@pages/people/Edit.vue'


Vue.use(VueRouter)


const routes = [
  {name: 'home-page', path: '', component: Home},

  {name: 'auth-sign-in-page', path: '/sign-in', component: SignIn},
  {name: 'auth-sign-up-page', path: '/sign-up', component: SignUp},

  {name: 'article-index-page', path: '/articles', component: ArticlesIndex},
  {name: 'article-create-page', path: '/articles/create', component: ArticleCreate},
  {name: 'article-detail-page', path: '/articles/:id', component: ArticleDetail},
  {name: 'article-edit-page', path: '/articles/edit/:id', component: ArticleEdit},

  {name: 'images-index-page', path: '/images', component: ImagesIndex},
  {name: 'images-create-page', path: '/images/create', component: ImageCreate},
  {name: 'image-detail-page', path: '/images/:id', component: ImageDetail},
  {name: 'image-edit-page', path: '/images/edit/:id', component: ImageEdit},

  {name: 'people-index-page', path: '/people', component: PeopleIndex},
  {name: 'people-detail-page', path: '/people/:id', component: PeopleDetail},
  {name: 'people-edit-page', path: '/people/edit/:id', component: PeopleEdit}
]


const router = new VueRouter({routes})


export default router
