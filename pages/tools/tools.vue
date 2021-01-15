<template>
	<view class="content">
		<view class="header">
			<button type="primary" @click="jump(1)">打开疫情查询页面</button>
			<button type="primary" @click="jump(2)">打开前端学习</button>
			<button type="primary" @click="jump(3)">打开音乐排行榜</button>
			
			
		</view>
	</view>
	
</template>

<script>
	import ShowInfo from '../../components/ShowInfo.vue'
	export default {
		data() {
			return {
				songlist:[]
			}
		},
		components:{
			ShowInfo
		},
		methods:{
			jump(e) {
				if(e === 1){
					uni.navigateTo({
					    url: '../query/query'
					});
				}else if(e ===2) {
					uni.navigateTo({
					    url: '../festudy/festudy'
					});
				}else if(e === 3) {
					uni.navigateTo({
						url:'../music/music'
					})
				}
			},
			
		},
		onShow(){
		}
	}
</script>

<style>
	.content {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 50%;
		margin-bottom: -100rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	button{
		margin-bottom: 20rpx;
		background-color: #39b54a;
		color: #ffffff;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
