<template>
	<div class="tab-bar-item" @click="itemclick">
		<div>
			<div v-if="!isactive">
				<slot name="item-icon"></slot>
			</div>
			<div v-else>
				<slot name="item-active"></slot>
			</div>
		</div>

		<div :style="activestyle">
			<slot name="text" ></slot>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'tabbaritem',
		props: {
			path: String,
			activecolor: {
				default: 'red',
				type: String

			}

		},
		computed: {
			isactive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activestyle() {
				return this.isactive ? {
					color:this.activecolor
				} : {}
			}
		},

		methods: {
			itemclick() {
				// alert(this.$route.path)
				// alert(this.path)
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}

	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
</style>
