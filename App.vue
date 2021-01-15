<template>
<view>
</view>
</template>
<script>
const API = require("./utils/base");

export default {
  onLaunch: function () {
    API.login(); // 获取系统状态栏信息

    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    });
  },
  onShow: function () {
    this.globalData.user = API.getUser();
  },
  globalData: {
    user: '',
    StatusBar: '',
    CustomBar: ''
  },
  methods: {}
};
</script>
<style>
@import "./app.css";
@import "colorui/main.css";
	@import "colorui/icon.css";

</style>