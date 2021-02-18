<template>
	<div id="home">
		<navbar class='home-nav'>
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</navbar>

		<HomeSwiper :banners='banners'></HomeSwiper>
		<RecommendView  :recommends='recommends'></RecommendView>

		<!-- <h1>4</h1> -->
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import HomeSwiper from './childcomponents/homeswiper.vue'
	import RecommendView from './childcomponents/recommendview.vue'
	import
	{
		gethomemultidata
	}
	from '../../network/home.js'

	export default
	{
		name: 'home',
		components:
		{
			navbar,
			HomeSwiper,
			RecommendView
		},
		data()
		{
			return {
				banners: [],
				recommends: []
			}
		},

		created()
		{
			// alert(1)
			gethomemultidata().then(
				res =>
				{
					// console.log(res)
					// this.banners = (results)
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				}
			)

		}
	}
</script>

<style>
	.home-nav {
		background-color: #FF8198;
		color: white;
	}
</style>
