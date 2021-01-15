<template>
	<view>
		<view class="cu-timeline">
			<view class="cu-time">今天</view>
			<view class="cu-item text-grey cuIcon-evaluate_fill" v-for="(item,index) in newsList" :key="index">
				<text>{{item.pubDateStr}}</text>
				<view class="content bg-grey shadow-blur" @tap="showNewsContent(index)">
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''" :idx="idx">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">内容详情</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{newsList[idx].summary}}<view style="font-size: 24rpx;color: red;">消息来源:{{newsList[idx].infoSource}}</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
		
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	@Component	
	export default class TimeLine extends Vue {
	newsList = []
	modalName :string = ''
	idx :number = -1

	
	onReady() :void{
		this.getInfo()
	}
	getInfo() {
		uni.request({
			url:'https://wuhan.wbjiang.cn/api/timeline',
			header: {
				'custom-header': 'hello' //自定义请求头信息
			},
			method: 'GET',
			success: (res) => {
			// console.log(res.data)
			this.newsList = res.data.list
			console.log(this.newsList)
			}
		})
		// uni.request({
		// 	url:'https://wuhan.wbjiang.cn/api/province_stats',
		// 	header: {
		// 		'custom-header': 'hello' //自定义请求头信息
		// 	},
		// 	method: 'GET',
		// 	success: (res) => {
		// 	console.log('province_stats', res.data)
		// 	}
		// })
		// uni.request({
		// 	url:'https://wuhan.wbjiang.cn/api/oversea_stats',
		// 	header: {
		// 		'custom-header': 'hello' //自定义请求头信息
		// 	},
		// 	method: 'GET',
		// 	success: (res) => {
		// 	console.log('oversea_stats', res.data)
		// 	}
		// })
	}
	showNewsContent(idx){
		this.modalName = 'DialogModal1'
		this.idx = idx
	}
	hideModal(e) {
		this.modalName = ''
	}
}
	
</script>

<style>

</style>
