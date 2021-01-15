<template>
	<view>
		<view class="loading" v-show="loading">
			<text></text>
			<text></text>
			<text></text>
			<text></text>
			<text></text>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in headerList" :key="index" @click="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view v-for="(item,index) in provinceName" :key="index" @click="tapList(index)" v-if="TabCur == 0" style="margin: 3px 0 30rpx 0;">
			<view class="privinceList">
				{{item}}   总计 {{confirmedCount[index]}} 例
				<view v-show="city_id === index">
					<view v-for="(i,l) in areaList[index].cities" :key="l" class="cityList cu-item">
						<m-table :i="i" />
						<!-- {{i.cityName}}
						<view>
							目前确诊{{i.currentConfirmedCount}}人
						</view>
						<view>总确诊{{i.confirmedCount}}人</view> 
						<view>
							疑似{{i.suspectedCount}}人
						</view>
						<view>
							治愈人数{{i.curedCount}}
						</view>
						<view>
							死亡人数{{i.deadCount}}
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="text-area" v-show="TabCur == 1">
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
		<view class="text-area" v-show="TabCur == 2">
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
		</view>
		<view class="text-area" v-show="TabCur == 3">
			<view>
				
				<view  v-for="(item,index) in quanguoTrendChart" :key="index">
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							<text class="cuIcon-title text-green"></text>
							<text>{{item.title}}</text>
						</view>
					</view>
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</view>
		</view>
		<view class="text-area" v-show="TabCur == 4">
			<view>
				
				<view  v-for="(item,index) in importantForeignTrendChart" :key="index">
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							<text class="cuIcon-title text-green"></text>
							<text>{{item.title}}</text>
						</view>
					</view>
					<image :src="item.imgUrl" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class query extends Vue {
  	title: string = 'Hello'
	areaList :Array<string> = []
	statistics = {}
	list :Array<string> = []
	newsList = []
	modalName :string = ''
	idx :number = -1
	provinceName = {}
	confirmedCount :number[] = []
	city_id :number = 0
	loading: boolean = true
	TabCur = 0
	scrollLeft = 0
	dailyPics = []
	hbFeiHbTrendChart = []
	quanguoTrendChart :Array<string> = []
	importantForeignTrendChart :Array<string> = []
	content :Array<string>= ['新增趋势图', '新增确诊病例趋势图', '疑似/确诊趋势图', '死亡/治愈病例趋势图', '死亡/治愈病例趋势图', '病死率趋势图']
	headerList :Array<string> = ['列表版', '最新时报', '图表版', '全国趋势表', '国外趋势表']
	onReady() :void {
		this.request()
		this.getInfo()
		this.getChart()
	}
	tapList(index) :void{
		if(this.city_id === index){
			this.city_id = -1
		} else this.city_id = index
					
	}
	getChart() :void{
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
	getInfo() :void{
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
			this.getImgInfo()
			}
		})
		
	}
	getImgInfo() :void{
		uni.request({
			url:'https://wuhan.wbjiang.cn/api/stats',
			header: {
				'custom-header': 'hello' //自定义请求头信息
			},
			method: 'GET',
			success: (res) => {
			console.log(res.data)
			this.quanguoTrendChart = res.data.quanguoTrendChart
			this.importantForeignTrendChart = res.data.importantForeignTrendChart
			console.log(this.quanguoTrendChart)
			}
		})
	}
	showNewsContent(idx) :void{
		this.modalName = 'DialogModal1'
		this.idx = idx
	}
	hideModal(e) :void{
		this.modalName = ''
	}
	tabSelect(e) :void{
		this.TabCur = e.currentTarget.dataset.id;
		this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
		// console.log(e)
		// this.musicShow(!!e.currentTarget.dataset.id)
	}
	request() :void{
		uni.request({
			url: 'https://server.toolbon.com/home/tools/getPneumonia?token=b994729486ec4ec9ae49ba098059a3d0',
			header: {
				'custom-header': 'hello' //自定义请求头信息
			},
			method: 'GET',
			success: (res) => {
				this.list = res.data.data
				console.log(res.data)
				this.areaList = res.data.data.areaList
				this.statistics = res.data.data.statistics
				// console.log(this.areaList[0].confirmedCount)
				console.log(2,this.list)
				this.setCity()
			}
		});
	}
	setCity() :void{
		this.provinceName = this.areaList.map(i =>i.provinceName)
		this.confirmedCount = this.areaList.map(i =>i.confirmedCount)
		// console.log(this.confirmedCount)
		this.loading = false
	}
}
</script>

<style>
	.privinceList{
		font-size: larger;
	}
	.privinceList .cityList{
		font-size: medium;/*
		margin-left:50%; 
		color: #333333;
		position: relative;
		top: 0;
		left: -50%; */
	}
	/* .cityList view{
		color: #076585;
		width: 300rpx;
		margin-left:30rpx;
	}
	.cityList view:nth-child(1){
		color: #030b05;
	}
	.cityList view:nth-child(2){
		color: #e8aa0c;
	}
	.cityList view:nth-child(3){
		color: #948988;
	}
	.cityList view:nth-child(4){
		color: #4CD964;
	}
	.cityList view:nth-child(5){
		color:red;
	} 
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */

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

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
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
