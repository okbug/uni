<template>
	<view class="content">
		<view v-for="(item,index) in items" :key="index">
			<view class="text-shadow">
				<text class="label text-center text-red">{{item.label}}</text>
			</view>
			<view class="questionTitle">
				{{item.title}}
			</view>
			<!-- 作者
			<view class="author">
				{{item.author}}
			</view> -->
		</view>
	</view>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		props:{
			items:Array
		},
		data() {
			return {
				
			};
		}
	})
</script>

<style>
.label{
	font-size: 30rpx;
	margin: auto;
}
.questionTitle{
	font-size: 35rpx;
	margin-bottom: 50rpx;
}
</style>
