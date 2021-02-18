import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
// const home = () => import('../views/category/category.vue')
const category = () => import('../views/category/category.vue')
const cart = () => import('../views/cart/cart.vue')
const profile = () => import('../views/profile/profile.vue')
Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/category',
		component: category
	},
	{

		path: '/cart',
		component: cart
	},
	{
		path: '/profile',
		component: profile
	},

]
const router = new VueRouter(
{
	routes,
	mode: 'history'

})
export default router
