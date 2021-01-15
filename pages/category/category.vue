<template>
<!--pages/category/category.wxml-->
<!--
<view class="section section-features">
  <view class="section-content is-flex center-xs">
    <view class="feature-list is-flex direction-vert middle-xs">
      <block wx:for="{{category}}" wx:key="id">
        <view bindtap='bindCateByID' id="{{item.id}}" class="feature-card card-type-life">
          <view class="card-cover" style='background-image:url({{item.cover}});background-repeat:no-repeat;background-position:center;'></view>
          <view data-jarallax-element="-80" class="card-main is-flex direction-vert between-xs parallax">
            <view class="card-top">
              <view class="card-title">{{item.name}}</view>
              <view class="card-content">
                <text>{{item.description}}</text>
              </view>
            </view>
            <view class="card-actions is-flex end-xs">
              <view class="action-item is-flex middle-xs">了解更多
                <view class="img-icon img-icon-arrow-right theme-black" style="background-image: url(ttp://ssupload.qingmang.mobi/qingmang-website/static/images/arrow-right.eb5cba0.sv)"></view>
              </view>
            </view>
          </view>
        </view>
      </block>
    </view>
  </view>
</view>

-->

<view class="ui-sence-recommend">
  <view class="ui-recommend-title">
    分类栏目
  </view>
  <view class="ui-commend-subtitle">
    最新、最全、最具特色的资讯
    <view class="cell-arrow-top">
      <image class src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAYAAAFLFEySAAAABGdBTUEAALGPC/xhBQAAASRJREFUOBGlVLtuhDAQxIiGQxQUiC9JfanzV/dTqXN1fgREgRDCSAjhMCh7rH32ZVGQLPY1M7uLRRT5nnmeDc4j17btdXdgeLNuUPV9b9I0fVAEjbquDyFepbXeu2iaZuTxiBKkSQXK6plBpmliHjMxDrERC0s/mxxA8vR2CRTgAGRZ9pUkyTObE+m6TldVlTnhw8WqQHhEBBbaQouYUwwmEM0mArsgETgECoH3rQJUFMXlr/GXZYnGcXwvy/Iuv5GMNXhzWI1lYsPoDgvDgS3e+i/TPqLF6nFAuq7rZ57nF/dyYexhGHQcxx8Y3QO3Qi8FXwlZLJsjFfYKnhE6K2wJ/kdIKqy2D38zxlyVUm++b+QSnfVp1ZvG96ZxD/78zhJL638A4n5rjTdLRDAAAAAASUVORK5CYII="></image>
    </view>
  </view>
  <view class="ui-sence-list">
    <view v-for="(item, index) in category" :key="index" @tap="bindCateByID" :id="item.id" class="ui-sence-item " :data-item="item">
      <view class="cell-sence-icon">
        <image class :src="item.cover"></image>
      </view>
      <view class="cell-content-box">
        <view class="cell-content">
          <view class="cell-title text-overflow">{{item.name}}
            <image class="cell-hot-icon" mode="widthFix" src="/static/assets/img/icon-hot.svg" v-if="item.isHot"></image>
          </view>
          <view class="cell-subtitle">{{item.description}}</view>
          <view class="cell-description">
            <view class="cell-time">{{item.count}}篇文章</view>
            <view class="cell-peoples">{{item.date}}</view>
          </view>
        </view>
        <view class="cell-link">
          <text class="icon-right-arrow"></text>
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script>
const API = require("../../utils/api");

export default {
  data() {
    return {
      page: 1,
      category: '',
      isBottom: false,
      isLastPage: false
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategories();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page: 1,
      category: '',
      isBottom: false
    });
    this.getCategories();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isBottom: true
    });

    if (!this.isLastPage) {
      this.getCategories({
        page: this.page
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    getCategories: function () {
      API.getCategories().then(res => {
        let args = {};

        if (res.length < 10) {
          this.setData({
            isLastPage: true
          });
        }

        if (this.isBottom) {
          wx.showToast({
            title: '加载下一页',
            icon: 'loading',
            duration: 1000
          });
          args.category = [].concat(this.category, res);
          args.page = this.page + 1;
        } else {
          args.category = res;
          args.page = this.page + 1;
        }

        this.setData(args);
        wx.stopPullDownRefresh();
      }).catch(err => {
        console.log(err);
        wx.stopPullDownRefresh();
      });
    },
    bindCateByID: function (e) {
      let id = e.currentTarget.id;
      wx.navigateTo({
        url: '/pages/list/list?id=' + id
      });
    }
  }
};
</script>
<style>
@import "./category.css";
</style>