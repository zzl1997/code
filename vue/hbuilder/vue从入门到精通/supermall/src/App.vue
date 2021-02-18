<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<!-- <test slot='zzl'>1</test> -->
		<!-- vue3无法具名插槽的方式来写 -->
		<router-view></router-view>
		<MainTabBar></MainTabBar>
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	import MainTabBar from './components/content/maintabbar/MainTabBar.vue'
	export default {
		name: 'app',
		components: {
			MainTabBar,
		}
	}
</script>

<style>
	#app {
		/* font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50; */
		/* margin-top: 60px; */
	}

	@import "./assets/css/base.css";
</style>
