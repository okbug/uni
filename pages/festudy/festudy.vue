<template>
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<text style="margin: auto;color: #030B05;">今天</text>
		</view>
		
		<show-info :items="today"></show-info>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<text style="margin: auto;color: #030B05;">昨天</text>
		</view>
		<ShowInfo :items="yestoday"></ShowInfo>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<text style="margin: auto;color: #030B05;">前天</text>
		</view>
		<ShowInfo :items="beforetoday"></ShowInfo>
		
		<text style="margin:auto;">历史题目</text>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<text style="margin: auto;color: #030B05;">第一天</text>
		</view>
		<show-info :items="one"></show-info>
		
		<view class="cu-bar bg-white solid-bottom margin-top">
			<text style="margin: auto;color: #030B05;">第二天</text>
		</view>
		<show-info :items="two"></show-info>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<text style="margin: auto;color: #030B05;">本周所有内容</text>
		</view>
		<show-info :items="week"></show-info>
		<view class="loading" v-show="loading">
			<text></text>
			<text></text>
			<text></text>
			<text></text>
			<text></text>
		</view>
	</view>
	
</template>

<script>
	import ShowInfo from '../../components/ShowInfo.vue'
	export default {
		data() {
			return {
				beforetoday:[],
				today:[],
				one:[],
				two:[],
				yestoday:[],
				week:[],
				loading:true
			}
		},
		components:{
			ShowInfo
		},
		methods: {
			request() {
				uni.request({
					url: 'http://api.h-camel.com/api?mod=interview&ctr=issues&act=today',
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					method: 'GET',
					success: (res) => {
						console.log(res)
						this.beforetoday = res.data.result.beforetoday
						this.today = res.data.result.today
						this.one = res.data.result.one
						this.two = res.data.result.two
						this.yestoday = res.data.result.yestoday
						this.week = res.data.result.week
						console.log(this.beforetoday)
						this.loading = false
					}
				});
			}
			
		},
		onReady(){
			this.request()
		}
	}
</script>

<style>
.loading{
            width: 150px;
            height: 15px;
            margin: 0 auto;
            margin-top:100px;
        }
        .loading text{
            display: inline-block;
            width: 15px;
            height: 100%;
            margin-right: 5px;
            border-radius: 50%;
            background: lightgreen;
            -webkit-animation: load 1.04s ease infinite;
        }
        .loading text:last-child{
            margin-right: 0px; 
        }
        @-webkit-keyframes load{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        .loading text:nth-child(1){
            -webkit-animation-delay:0.13s;
        }
        .loading text:nth-child(2){
            -webkit-animation-delay:0.26s;
        }
        .loading text:nth-child(3){
            -webkit-animation-delay:0.39s;
        }
        .loading text:nth-child(4){
            -webkit-animation-delay:0.52s;
        }
        .loading text:nth-child(5){
            -webkit-animation-delay:0.65s;
        }
</style>
