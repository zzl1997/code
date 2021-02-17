<template>
	<div>

		<tabbar>

			<tabbaritem path="/home"  >
				<template v-slot:item-icon> <img src="../../../assets/img/tabbar/home.svg" alt=""> </template>
				<template v-slot:item-active><img src="../../../assets/img/tabbar/home_active.svg" alt=""></template>
				<template v-slot:text>首页</template>

			</tabbaritem>
			<tabbaritem path="/category"  >
				<template v-slot:item-icon> <img src="../../../assets/img/tabbar/category.svg" alt=""> </template>
				<template v-slot:item-active>
					<img src="../../../assets/img/tabbar/category_active.svg" alt=""></template>
				<template v-slot:text>分类</template>
				s

			</tabbaritem>
			<tabbaritem path="/cart">
				<template v-slot:item-icon> <img src="../../../assets/img/tabbar/shopcart.svg" alt=""> </template>
				<template v-slot:item-active><img src="../../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
				<template v-slot:text>购物车</template>

			</tabbaritem>
			<tabbaritem path="/profile">
				<template v-slot:item-icon> <img src="../../../assets/img/tabbar/profile.svg" alt=""> </template>
				<template v-slot:item-active><img src="../../../assets/img/tabbar/profile_active.svg" alt=""></template>
				<template v-slot:text>我的</template>

			</tabbaritem>
		</tabbar>


	</div>
</template>

<script>
	import tabbar from '../../common/tabbar.vue'
	import tabbaritem from '../../common/tabbaritem.vue'
	export default {
		name: 'MainTabBar',
		components: {
			tabbar,
			tabbaritem
		}
	}
</script>

<style>
</style>
