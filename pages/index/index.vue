<template>
<!--index.wxml-->
<view :class="'page ' + (isIphoneX?'iphone-x':'')">
  <view class="ui-recommend-module">
   <!-- <swiper :autoplay="autoplay" @change="changeDots" :circular="circular" class="ui-swiper-wrapper" :duration="duration" :interval="interval">
   <view v-for="(item, index) in stickyPost" :key="index" @tap.stop="bindDetail" :id="item.id" :data-link="item.href_url"> -->
      <!-- <swiper-item class="ui-swiper-item">
        <view catchgetphonenumber="getItem" @tap.stop="getItem" class="cell-item " data-index="index" :data-item="item" :openType="!phone?'getPhoneNumber':''">
          <image class="cell-image" mode="aspectFill" :src="item.meta.thumbnail"></image>
          <view class="cell-item-mask"></view>
          <view class="cell-content">
            <view class="cell-content-title ">
              <view :class="'cell-circular ' + (item.sceneType=='groupActivity'?'cell-orange-circular':'') + ' '"></view>
              <view class="cell-text font-orange">{{item.category[0].name}}</view>
            </view>
            <view class="cell-content-main">
              <view class="cell-text ">
                <view class="cell-text-title">{{item.title.rendered}}
                </view>
              </view>
              <navigator class="cell-button">
                <button :id="item.id" :data-link="item.href_url" @tap.stop="bindDetail">
                  立即查看
                  <text class="icon-right-arrow"></text>
                </button>
              </navigator>
            </view>
          </view>
        </view>
      </swiper-item> -->
       <!-- </view>
    </swiper> -->
    <view class="index-search container-class">
      <view class="search-icon icon-class"></view>
      <input @confirm="onConfirm" @input="onInput" class="search-input input-class" confirmType="search" :focus="autoFocus" :placeholder="placeHolder" placeholderClass="search-input-placeholder" :value="searchKey" v-if="inputEnable"></input>
      <view class="search-input" v-else>{{placeHolder}}</view>
      <image @tap="onClear" class="close-btn" src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/product-image-close.svg" v-if="searchKey"></image>
    </view>
  </view>
  <view class="tab-content">
    <view class="index">
      <view class="card list-card" style="margin-top:26rpx" v-if="stickyPost.length>0">
        <view class="card-header">
          <view class="card-header-label">推荐阅读</view>
          <view class="card-header-title">校园资讯抢先看</view>
        </view>
        <view class="card-content">
          <view class="list">
            <view v-for="(item, index) in stickyPost" :key="index" @tap.stop="bindDetail" :id="item.id" class="list-item" :data-link="item.href_url">
              <!-- <view class="item-image"> -->
                <!-- <image lazyLoad :src="item.meta.thumbnail"></image> -->
              <!-- </view> -->
              <view class="item-content">
                <text class="item-title">{{item.title.rendered}}</text>
                <text class="item-des">{{item.excerpt.rendered}}</text>
              </view>
            </view>
            <!-- <ad unit-id="adunit-da38c48cb3b5e21c"></ad> -->
          </view>
        </view>
      </view>
      <view class="index_article" v-if="posts.length>0">
	  <!-- 开始渲染文章 -->
        <block v-for="(item, i) in posts" :key="i">
          <block v-if="i%5 === 0">
            <view @tap.stop="bindDetail" class="card video-card" :id="item.id" style="margin-bottom: 18px">
              <view class="card-header video-card-header">
                <view class="card-header-label">{{item.category[0].name}}</view>
                <view class="card-header-title">{{item.title.rendered}}</view>
                <view class="card-header-subtitle">{{item.excerpt.rendered}}</view>
              </view>
            </view>
          </block>
          <block v-else>
            <view @tap.stop="bindDetail" class="card image-card white-background" :data-link="href_url" :id="item.id" v-if="item.format==='standard'" style="margin-bottom: 18px">
              <view class="card-header image-card-header">
                <view class="card-header-label wani-label" :style="'color: ' + item.style">{{item.category[0].name}}</view>
                <view class="card-header-title wanzi-title" :style="'color: ' + item.style">{{item.title.rendered}}</view>
              </view>
            </view>
            <view @tap.stop="handleJump" class="card video-card" :data-link="href_url" style="margin-bottom: 26px" v-if="item.format==='video'">
              <view class="video">
                <txv-video :vid="item.media.video" playerid="txv1"></txv-video>
                <view class="cover-view" v-if="playing">
                  <image lazyLoad class="play-buttom" :src="item.meta.thumbnail"></image>
                </view>
              </view>
              <view class="card-header video-card-header">
                <view class="card-header-label">{{item.category[0].name}}</view>
                <view class="card-header-title">{{item.title.rendered}}</view>
                <view class="card-header-subtitle">{{item.excerpt.rendered}}</view>
              </view>
            </view>
            <!--
            <view bindtap="bindDetail" id="{{item.id}}">
              <view style="position: relative;height: 380rpx">
                <image mode="aspectFill" class="index_article_cover" src="{{item.meta.thumbnail}}"></image>
                <view class="index_article_during">
                  <text>{{item.category[0].name}}</text>
                </view>
              </view>
              <view class="index_article_title">{{item.title.rendered}}</view>
              <view class="index_article_desc">{{item.excerpt.rendered}}</view>
            </view>
            -->
			
          </block>
        </block>
      </view>
      <view class="last_text" v-if="isLastPage&&posts.length>0">已经到底啦~</view>
      <view class="last_text" v-if="!isLastPage&&posts.length>0">努力加载中...</view>
    </view>
  </view>
</view>
</template>

<script>
const API = require("../../utils/api");

export default {
  data() {
    return {
      posts: [],
      siteInfo: '',
      page: 1,
      indicatorDots: !1,
      autoplay: !0,
      interval: 3e3,
      currentSwiper: 0,
      navBarHeight: wx.getSystemInfoSync().statusBarHeight,
      placeHolder: '输入你想知道的内容...',
      autoFocus: false,
      inputEnable: true,
      isIphoneX: "",
      searchKey: "",
      stickyPost: "",
      category: "",
      isLastPage: false,
      loadtext: "",
      showloadmore: false,
      advert: ""
    };
  },

  components: {},
  props: {},
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (a) {
        that.setData({
          isIphoneX: a.model.match(/iPhone X/gi)
        });
      }
    });
    this.getSiteInfo();
    this.getStickyPosts();
    this.getCategories();
    this.getAdvert();
    this.getPostList();
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
      posts: []
    });
    this.getPostList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.isLastPage) {
      this.getPostList({
        page: this.page
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.siteInfo.name,
      path: '/pages/index/index'
    };
  },
  methods: {
    onClear: function () {
      this.setData({
        searchKey: ''
      });
    },
    getSiteInfo: function () {
      API.getSiteInfo().then(res => {
        this.setData({
          siteInfo: res
        });
      }).catch(err => {
        console.log(err);
      });
    },
    onInput: function (e) {
      this.setData({
        searchKey: e.detail.value
      });
    },
    currentChange: function (e) {
      this.setData({
        currentSwiper: e.detail.current
      });
    },
    getStickyPosts: function () {
      API.getStickyPosts().then(res => {
        this.setData({
          stickyPost: res
        });
      }).catch(err => {
        console.log(err);
      });
    },
    getCategories: function () {
      API.getCategories().then(res => {
        this.setData({
          category: res
        });
      }).catch(err => {
        console.log(err);
      });
    },
    getPostList: function (data) {
      API.getPostsList(data).then(res => {
        let args = {};

        if (res.length < 10) {
          this.setData({
            isLastPage: true,
            loadtext: '到底啦',
            showloadmore: false
          });
        }

        if (this.isBottom) {
          args.posts = [].concat(this.posts, res);
          args.page = this.page + 1;
        } else {
          args.posts = [].concat(this.posts, res);
          args.page = this.page + 1;
        }

        this.setData(args);
        wx.stopPullDownRefresh();
      }).catch(err => {
        console.log(err);
        wx.stopPullDownRefresh();
      });
    },
    getAdvert: function () {
      API.indexAdsense().then(res => {
        console.log(res);

        if (res.status === 200) {
          this.setData({
            advert: res.data
          });
        }
      }).catch(err => {
        console.log(err);
      });
    },
    bindCateByID: function (e) {
      let id = e.currentTarget.id;
      wx.navigateTo({
        url: '/pages/list/list?id=' + id
      });
    },
    bindCateList: function () {
      wx.switchTab({
        url: '/pages/category/category'
      });
    },
    bindDetail: function (e) {
      let id = e.currentTarget.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id
      });
    },
    onConfirm: function (e) {
      let s = e.detail.value;
      wx.navigateTo({
        url: '/pages/list/list?s=' + s
      });
    }
  }
};
</script>
<style>
@import "./index.css";
</style>