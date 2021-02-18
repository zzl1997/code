<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item">
			<a :href="item.link">

				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default
	{
		name: 'recommendview',
		props:
		{
			recommends:
			{
				type: Array,
				default ()
				{
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend {
		display: flex;
		width: 100%;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 20px;
		
		border-bottom:#eee solid 10px ;

	}

	.recommend-item {
		flex: 1;
		font-size: 12px;
	}

	.recommend-item img {
		width: 70px;
		margin-bottom: 10px;
	}
</style>
