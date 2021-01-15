<template>
	<view>
		<view class="isShow" v-show="loading">
			<view class="loading" >
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			                    <view class="obj"></view>
			</view>
		</view>
		<!-- <text>{{type===26?热歌榜:新歌榜}}</text> -->
		<!-- 26re 27xing -->
		
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in topnamelist" :key="index" @click="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view class="content">
			<!-- <text class="topinfo">{{topinfo.ListName||"巅峰榜·热歌"}}</text> -->
			<view class="content cu-item arrow">
				<!-- <text class="text-grey cu-item arrow" style="font-size:16px;margin-bottom: 32rpx;">
					歌名 - 专辑名
				</text> -->
				<text v-for="(item,index) in songlist" :key="item.cur_count" class="text-grey cu-item arrow" style="margin-bottom: 22rpx;" @click=showMusic(item.cur_count*1-1)>
					{{item.data.songname}} -《{{item.data.albumname}}》
				</text>
				<view class="cu-modal" :class="modalName=='Image'?'show':''" >
					<view class="cu-dialog">
						<image :src="imgSrc" mode="" @tap="hideModal" style="height:200px">
						</image>
						<view class="cu-bar bg-white">
							<view class="action margin-0 flex-sub  solid-left" @click="hideModal">点击关闭</view>
							<!-- <view class="action margin-0 flex-sub  solid-left" @tap="getAlbumImage(imgSrc)">点击获取封面图片</view> -->
						</view>
					</view>
				</view>
				<view class="cu-dialog" v-if="imgSaveSuccess">
					<view class="cu-list menu text-left solid-top">
						<view>
							保存成功！
						</view>
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
export default class query extends Vue {
	loading :boolean = true
	songlist :Array<string>= []
	type :boolean = true
	topinfo = {}
	topnamelist :Array<string>= ['新歌榜','热歌榜']
	TabCur = 0
	scrollLeft = 0
	modalName :numm | string = null
	imgSrc :string = ''
	imgSaveSuccess = false
	getAlbumImage(img) :void{
		uni.chooseImage({
			count: 1,
			sourceType: ['camera'],
			success: function (res) {
				uni.saveImageToPhotosAlbum({
					filePath: img,
					success: function () {
						this.imgSaveSuccess = true
					}
				});
			}
		});
	}
	showMusic(idx) :void{
		this.modalName = 'Image'
		this.imgSrc = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000'+ this.songlist[idx].data.albummid + '_1.jpg?max_age=20736000'
	}
	hideModal(e) :void{
		this.modalName = null
	}
	tabSelect(e) :void{
		this.TabCur = e.currentTarget.dataset.id;
		this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
		console.log(e)
		this.musicShow(!!e.currentTarget.dataset.id)
	}
	musicShow(type) :void{
		this.loading = true
		if(type){
			uni.request({
				url: `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=26&_=1519963122923`,
				header: {
					'custom-header': 'hello' //自定义请求头信息
				},
				method: 'GET',
				success: res => {
					this.topinfo = res.data.topinfo
					this.songlist = res.data.songlist
					// console.log(this.songlist)
					this.loading=false
					this.type = !this.type
				}
			})
		}else{
			uni.request({
				url: `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923`,
				header: {
					'custom-header': 'hello' //自定义请求头信息
				},
				method: 'GET',
				success: res => {
					console.log(res)
					this.topinfo = res.data.topinfo
					this.songlist = res.data.songlist
					// console.log(this.songlist)
					this.loading=false
					this.type = !this.type
				}
			})
		}
		
	}
	onShow() :void{
		this.musicShow(!this.type)
	}
}
</script>

<style>
.topinfo{
	font-size: large;
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.isShow {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: 60px;
    height: 60px;
}
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    display: flex;
    align-items: center;
}
.obj{
  width: 6px;
  height: 40px;
  background: linear-gradient(to right, #076585, #fff);
  margin: 0 3px;
  border-radius: 10px;
  animation: loading 0.8s infinite;
}
.obj:nth-child(2){
  animation-delay: 0.1s;
}
.obj:nth-child(3){
  animation-delay: 0.2s;
}
.obj:nth-child(4){
  animation-delay: 0.3s;
}
.obj:nth-child(5){
  animation-delay: 0.4s;
}
.obj:nth-child(6){
  animation-delay: 0.5s;
}
.obj:nth-child(7){
  animation-delay: 0.6s;
}
.obj:nth-child(8){
  animation-delay: 0.7s;
}
</style>
