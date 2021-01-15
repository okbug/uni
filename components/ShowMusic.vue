<template>
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
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		props:{
			songlist:{
				type:Array
			}
		},
		data() {
			return {
				modalName:null,
				imgSrc:'',
				imgSaveSuccess:false
			};
		},
		methods:{
			getAlbumImage(img){
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
			},
			showMusic(idx) {
				this.modalName = 'Image'
				this.imgSrc = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000'+ this.songlist[idx].data.albummid + '_1.jpg?max_age=20736000'
				
			},
			showModal(e) {
				
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	})
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
