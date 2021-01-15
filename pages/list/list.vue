<template>
<!--pages/list/list.wxml-->
<view class="tab-content">
    <view class="index">
        <!--view class="index_label">
        <view class="index_label_title">{{category}}</view>
        <view class="index_label_bg"></view>
        </view-->
        <view class="index_article" v-if="posts.length>0">
            <block v-for="(item, i) in posts" :key="i">
                <block v-if="i%5 == 0">
                <view @tap="bindDetail" :id="item.id">
                    <view style="position: relative;height: 380rpx">
                        <image mode="aspectFill" class="index_article_cover" :src="item.meta.thumbnail"></image>
                        <view class="index_article_during">
                            <text>{{item.category[0].name}}</text>
                        </view>
                    </view>
                    <view class="index_article_title">{{item.title.rendered}}</view>
                    <view class="index_article_desc">{{item.excerpt.rendered}}</view>
                </view>
                <view class="advert" v-if="advert.platform.weapp && advert.type == 'unit'">
                    <ad :unit-id="advert.code"></ad>
                    </view>
                </block>
                <block v-else>
                <view @tap="bindDetail" :id="item.id">
                    <view style="position: relative;height: 380rpx">
                        <image mode="aspectFill" class="index_article_cover" :src="item.meta.thumbnail"></image>
                        <view class="index_article_during">
                            <text>{{item.category[0].name}}</text>
                        </view>
                    </view>
                    <view class="index_article_title">{{item.title.rendered}}</view>
                    <view class="index_article_desc">{{item.excerpt.rendered}}</view>
                </view>
                
                </block>
            </block>
        </view>
        <view class="index_article" v-if="isLastPage&&posts.length==0">
            <view style="position: relative;height: 680rpx">
                <image mode="widthFix" class="index_article_cover" src="/static/images/null.png"></image>
            </view>
            <view class="last_text">对不起! 你查看的内容没有找到</view>
        </view>
        <view class="last_text" v-if="isLastPage&&posts.length>0">已经到底啦~</view>
        <view class="last_text" v-if="!isLastPage&&posts.length>0">努力加载中...</view>
    </view>
</view>
</template>

<script>
const API = require("../../utils/api");

export default {
  data() {
    return {
      id: 0,
      page: 1,
      posts: [],
      isLoadAll: false,
      options: "",
      category: "",
      title: "",
      isLastPage: false,
      loadtext: "",
      showloadmore: false,
      advert: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options: options
    });
    this.getAdvert();

    if (options.id) {
      this.getPostList({
        categories: options.id,
        page: this.page
      });
      this.getCategoryByID(options.id);
    }

    if (options.s) {
      this.getPostList({
        search: options.s,
        page: this.page
      });
      this.setData({
        category: '关键词“' + options.s + '”的结果'
      });
      wx.setNavigationBarTitle({
        title: '关键词:' + options.s
      });
    }
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

    if (this.options.id) {
      this.getPostList({
        categories: this.options.id
      });
    }

    if (this.options.s) {
      this.getPostList({
        search: this.options.s
      });
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.isLastPage) {
      if (this.options.id) {
        this.getPostList({
          categories: this.options.id,
          page: this.page
        });
      }

      if (this.options.s) {
        this.getPostList({
          search: this.options.s,
          page: this.page
        });
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    getCategoryByID: function (id) {
      API.getCategoryByID(id).then(res => {
        this.setData({
          title: res.name
        });
        wx.setNavigationBarTitle({
          title: res.name
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
      API.listAdsense().then(res => {
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
    bindDetail: function (e) {
      let id = e.currentTarget.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id
      });
    }
  }
};
</script>
<style>
@import "./list.css";
</style>