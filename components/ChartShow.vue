<template>
	<view>
		<view  v-for="(item,index) in dailyPics" :key="index">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-title text-green"></text>
					<text>{{content[index]}}</text>
				</view>
			</view>
			<image :src="item" mode=""></image>
		</view>
		
		<view  v-for="(item,index) in hbFeiHbTrendChart" :key="index">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-title text-green"></text>
					<text>{{item.title}}</text>
				</view>
			</view>
			<image :src="item.imgUrl" mode=""></image>
		</view>
	</view>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		data() {
			return {
				dailyPics:[],
				hbFeiHbTrendChart:[],
				content:['新增趋势图', '新增确诊病例趋势图', '疑似/确诊趋势图', '死亡/治愈病例趋势图', '死亡/治愈病例趋势图', '病死率趋势图']
			};
		},
		methods:{
			foo() {
				uni.request({
					url:'https://wuhan.wbjiang.cn/api/stats',
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
					method: 'GET',
				    success: (res) => {
					console.log('1', res.data)
					this.dailyPics = res.data.dailyPics
					this.hbFeiHbTrendChart = res.data.hbFeiHbTrendChart
					console.log(this.dailyPics)
					}
				})
			}
		},
		onReady() {
			this.foo()
		}
	})
</script>

<style>

</style>
