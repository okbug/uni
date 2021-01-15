<template>
	<view class="content">
		<view  class="advance-area">
			{{i.cityName}}
			<view class="flex-box tc thead">
				<view class="item-5">当前确诊</view>
				<view class="item-5">总确诊</view>
				<view class="item-5">疑似</view>
				<view class="item-5">治愈</view>
				<view class="item-5">死亡</view>
				<!-- 目前确诊{{i.currentConfirmedCount}}人
				</view>
				<view>总确诊{{i.confirmedCount}}人</view> 
				<view>
					疑似{{i.suspectedCount}}人
				</view>
				<view>
					治愈人数{{i.curedCount}}
				</view>
				<view>
					死亡人数{{i.deadCount}} -->
			</view>
			<view class="flex-box table tc">
				<view class="item-5">
					<view class="table-flex">
						<view class="item">{{i.currentConfirmedCount}}</view>
					</view>
				</view>
				<view class="item-5">
					<view class="table-flex">
						<view class="item">{{i.confirmedCount}}</view>
					</view>
				</view>
				<view class="item-5">
					<view class="table-flex">
						<view class="item">{{i.suspectedCount}}</view>
					</view>
				</view>
				<view class="item-5">
					<view class="table-flex">
						<view class="item">{{i.curedCount}}</view>
					</view>
				</view>
				<view class="item-5">
					<view class="table-flex">
						<view class="item">{{i.deadCount}}</view>
					</view>
				</view>
			</view>
			
		</view>
			
	</view>
</template>

<script>
	export default {
		props:{
			i:{
				type:Object
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	$color:#e0e0e0;
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #fbf9fe;
	}
	
	.flex-box {
		display: flex;
		flex-wrap: wrap;
	}
	
	
	.flex-box>.item-2 {
		flex: 0 0 50%;
	}
	
	.flex-box>.item-3 {
		flex: 0 0 33.3333%;
	}
	.flex-box>.item-5 {
		flex: 0 0 20%;
	}
	
	.title{
		margin: 20upx 0;
		color: red;
	}
	
	//普通表格
	.genaral-area {
		.item-2 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			padding: 16upx 0;
			box-sizing: border-box;
			text-align: center;
	
			&:first-child {
				border-left-width: 1upx;
			}
	
			&:last-child {
				border-right-width: 1upx;
			}
		}
	
		.thead {
			.item-2 {
				font-weight: bold;
	
				box-sizing: border-box;
			}
		}
	
		.table {
			&:last-child {
				border-bottom: 1upx solid $color;
			}
	
			.item-2 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
		}
	}
	
	
	// 多行合并表格
	.advance-area {
		position:relative;
		left:10px;
		.item-3 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			box-sizing: border-box;
			text-align: center;
	
			&:first-child {
				border-left-width: 1upx;
			}
	
			&:last-child {
				border-right-width: 1upx;
			}
		}
		item-5 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			box-sizing: border-box;
			text-align: center;
			
			&:first-child {
				border-left-width: 1upx;
			}
			
			&:last-child {
				border-right-width: 1upx;
			}
		}
	
		.thead {
			.item-3 {
				font-weight: bold;
				padding: 16upx 0;
				box-sizing: border-box;
			}
			.item-5 {
				font-weight: bold;
				padding: 16upx 0;
				box-sizing: border-box;
			}
		}
	
		.table {
			&:last-child {
				border-bottom: 1upx solid $color;
			}
	
			.item-3 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
			.item-5 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
		}
	
		.table-flex {
			flex: 1;
	
			.item {
				border-bottom: 1upx solid $color;
				padding: 10upx 0;
				box-sizing: border-box;
	
				&:last-child {
					border-width: 0;
				}
			}
		}
	}
</style>
