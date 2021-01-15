<template>
<view>
<!--pages/detail/detail.wxml-->
<!--<import src="../../wxParse/wxParse.wxml"></import>-->

<view class="topic-detail">
  <view class="article-info" v-if="detail">
    <text class="title">{{detail.title.rendered}}</text>
    <view class="article-info__category">
      <i class="cuIcon-form icons"></i>
      <text class="category">{{detail.category[0].name}}</text>
      <i class="cuIcon-time icons"></i>
      <text class="time">{{detail.date}}</text>
    </view>
  </view>
  <view class="article-info" v-else>
    <view class="title" style="width:420rpx;height:40rpx;background:#f3f3f3"></view>
    <view class="article-info__category">
      <image class="avator" style="background:#f3f3f3" :src="detail.author.avatar"></image>
      <text class="category" style="width:100rpx;height:40rpx;background:#f3f3f3">{{detail.author.name}}</text>
      <i></i>
      <text class="time" style="width:100rpx;height:40rpx;background:#f3f3f3">{{detail.time}}</text>
    </view>
  </view>
  <view id="entry-content" v-if="article.nodes" class="entry-content clearfix">
    <jyf-parser :html="article_article"></jyf-parser>
  </view>
  <view id="entry-content" v-else class="entry-content clearfix">
    <view v-for="(item, index) in article" :key="index" style="padding-top:20rpx">
      <view style="width:690rpx;height:40rpx;background:#f3f3f3"></view>
      <view style="width:690rpx;height:250rpx;background:#f3f3f3;margin-top:20rpx"></view>
    </view>
  </view>
  <view class="advert" v-if="advert.platform.weapp && advert.type == 'unit'">
    <!-- <ad :unit-id="advert.code"></ad> -->
  </view>
  <!-- <ad unit-id="adunit-da38c48cb3b5e21c"></ad> -->
  <view class="topic-title-wrapper" id="comment">
    <view class="topic-title">主题详情</view>
    <view class="onlooker-amount relative">
      <text>邀请好友参与讨论 </text>
      <text class="onlooker-arrow">>></text>
      <button open-type="share" class="userLogin"></button>
    </view>
  </view>
  <view class="commentdata">
    <view class="listnodata" v-if="comments.length==0">
      <image class="nodataimg" lazyLoad="false" mode="aspectFit|aspectFill|widthFix" src="/static/images/message.png"></image>
      <view class="nodatatext">
        <text decode="true" space="true">&nbsp;&nbsp;&nbsp;</text>内容加载中！</view>
    </view>
    <view class="comment-reply">
      <view v-for="(item, index) in comments" :key="index" class="comment-reply-item" style="margin-left: -15px;" @tap="replyComment" :id="detail.id" :data-parent="item.id?item.id:0" :data-reply="item.author.name" :data-formId="item.formId">
        
        <view class="comment-content" @tap="replyComment" :data-id="item.id" :data-reply="item.author.name" :data-parent="item.id?item.id:0" :data-userid="item.userid" :data-formId="item.formId" :data-commentdate="item.date" v-for="(item2,index2) in splitComments[0]" :key="index2">
          <text @tap="replay" :data-id="item.id" :data-name="item.author_name" :data-userid="item.userid" :data-formId="item.formId" :data-commentdate="item.date" ></text>
		  {{item2}}
          <view :class="item.images.length==1?'images-list':'image-list'">
            <image v-for="(image, index2) in item.images" :key="index2" mode="widthFix" :data-url="image" :data-urls="item.images" @tap.stop="openimage" class="comment-image" :src="image"></image>
          </view>
        </view>
        <!-- 一级回复 -->
        <view v-for="(item1, idx) in item.reply" :key="idx" class="replay-content">
          <view class="replay-user" @tap.stop="replyComment" :data-id="item1.id" :data-reply="item1.author.name" :data-parent="item1.id?item1.id:0" :data-userid="item1.userid" :data-formId="item1.formId" :data-commentdate="item1.date">
            <text style="font-weight:bold;"> {{item1.author.name}} </text>:{{item1.content}}
          </view>
          <!-- 二级回复 -->
          <view v-for="(item2, idx) in item1.reply" :key="idx">
            <view class="replay-user" @tap.stop="replyComment" :data-id="item2.id" :data-reply="item2.author.name" :data-userid="item2.userid" :data-formId="item2.formId" :data-commentdate="item2.date">
              <text style="font-weight:bold;"> {{item2.author.name}} </text> 回复 {{item1.author.name}}:{{item2.content}}
            </view>
            <!-- 三级回复 -->
            <view v-for="(item3, idx) in item2.reply" :key="idx">
              <view class="replay-user" @tap.stop="replyComment" :data-id="item3.id" :data-reply="item3.author.name" :data-userid="item3.userid" :data-formId="item3.formId" :data-commentdate="item3.date">
                <text style="font-weight:bold;"> {{item3.author.name}} </text> 回复 {{item2.author.name}}:{{item3.content}}
              </view>
              <!-- 四级回复 -->
              <view v-for="(item4, idx) in item3.reply" :key="idx">
                <view class="replay-user">
                  <text style="font-weight:bold;"> {{item4.author.name}} </text> 回复 {{item3.author.name}}:{{item4.content}}
                </view>
              </view>
              <!-- 四级回复 -->
            </view>
            <!-- 三级回复  -->
          </view>
          <!-- 二级回复 -->
        </view>
        <!-- 一级回复  -->
        <view class="comment-footer">
          <view style="height:1px;background:#f1f1f1;margin-right:20rpx"></view>
        </view>
      </view>
    </view>
  </view>

   <view class="bottom">
    <form catchsubmit="formSubmit" report-submit="true" v-if="!showTextarea">
      <view :class="'bottom-bar ' + (isIphoneX?'bottom-bar-iphonex':'') + ' ' + (newsItem.forbidcomment?'forbid-comment':'')">
        <image @tap="bindBack" class="bottom-btn bottom-back" src="/static/images/back.png"></image>
        <view class="bottom-btn bottom-text relative" style="width:260rpx">
          <text>{{placeholder}}</text>
          <button v-if="!user" class="userLogin" @getuserinfo="getProfile" openType="getUserInfo"></button>
          <button v-else class="userLogin" @tap="tapcomment"></button>
        </view>
        <view class="bottom-btn bottom-comment-container relative">
          <image class="bottom-comment" :src="detail.isfav?'../../images/collected.png':'../../images/collect.png'"></image>
          <button v-if="!user" class="userLogin" @getuserinfo="getProfile" openType="getUserInfo"></button>
          <button v-else class="userLogin" @tap="bindFavTap" :id="detail.id"></button>
        </view>
        <view class="bottom-btn bottom-comment-container">
          <image class="bottom-btn bottom-fav" :src="detail.islike?'../../images/liked.png':'../../images/like.png'"></image>
          <button v-if="!user" class="userLogin" @getuserinfo="getProfile" openType="getUserInfo"></button>
          <button v-else class="userLogin" @tap="bindLikeTap" :id="detail.id"></button>
        </view>
        <button @tap="shareClick" class="bottom-btn bottom-share bottom-fav btn-clear-style" plain="true">
          <image src="/static/images/share.png"></image>
        </button>
      </view>
    </form>
   </view>
 
    <view :class="'zan-actionsheet ' + (isIphoneX?'bottom-bar-iphonex':'') + ' ' + (shareshow?'zan-actionsheet--show':'')">
    <view @tap.stop="_handleZanActionsheetMaskClick" class="zan-actionsheet__mask" :data-close-on-click-overlay="closeOnClickOverlay" :data-component-id="componentId"></view>
    <view class="zan-actionsheet__container">
        <button @tap.stop="downloadPrefix" class="zan-btn zan-actionsheet__btn">
            <image class="down-icon" mode="aspectFit" src="/static/images/down.svg"></image>
            <text>分享海报图</text>
        </button>
        <button open-type="share" class="zan-btn zan-actionsheet__btn">
            <image class="down-icon" mode="aspectFit" src="/static/images/wechat.svg"></image>
            <text>分享给朋友</text>
        </button>
    </view>
    </view>

    <view class="textareacontent" v-if="showTextarea">
    <form catchsubmit="addComment">
        <view class="textheaders">
        <view @tap="closeCommentary" class="cancel">取消</view>
        <button v-if="!user" class="nopublish" @getuserinfo="getProfile" openType="getUserInfo">登录</button>
        <button v-else @tap="addComment" class="publish">发布</button>
        </view>
        <view class="textareaBox" v-if="showTextarea">
        <view class="textareaInput" v-if="!focus">{{content}}</view>
        <textarea autoFocus="true" name="inputComment" @input="bindInputContent" @blur="onReplyBlur" @focus="onRepleyFocus" :class="'textareaInput ' + (focus?'':'hide')" fixed="true" :focus="focus" maxlength="1000" :placeholder="placeholder" showConfirmBar="false" style="height: 286rpx;" :value="content"></textarea>
        <view class="textNum">{{textNum}}/1000</view>
        </view>
    </form>
    </view>
    <view @tap="closeCommentary" class="pagemake" v-if="showTextarea"></view>
</view>
<view class="canvas">
  <canvas canvas-id="prefix" style="width: 600px;height: 970px;"></canvas>
</view>
</view>
</template>

<script>
const API = require("../../utils/api");

const app = getApp();
let isFocusing = false;

export default {
  data() {
    return {
      page: 1,
      detail: '',
      textNum: 0,
      comments: [],
	  splitComments: [],
      placeholder: '输入评论',
      isIphoneX: "",
      options: "",
      user: "",
      id: "",
      advert: "",
      isLastPage: false,
      loadtext: "",
      showloadmore: false,
      showTextarea: false,
      content: "",
      isFocus: false,
      isComments: false,
      isReply: false,
      parent: "",
      commentdate: "",
      focus: false,
      iscanpublish: false,
      shareshow: false,
      article_article: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (a) {
        that.setData({
          isIphoneX: a.model.match(/iPhone X/gi)
        });
      }
    });
    this.setData({
      options: options
    });
    this.getPostsbyID(options.id);
    this.getAdvert();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let user = app.globalData.user;

    if (!user) {
      user = '';
    }

    this.setData({
      user: user
    });
  },

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
      detail: '',
      comments: []
    });
    this.getPostsbyID(this.options.id);
    this.getComments();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.isLastPage) {
      this.getComments();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.detail.title.rendered,
      path: '/pages/detail/detail?id=' + this.detail.id,
      imageUrl: this.detail.meta.thumbnail
    };
  },
  methods: {
	  foo() {
		console.log('评论内容： ', this.comments)  
	  },
    getPostsbyID: function (id) {
      let that = this;
      API.getPostsbyID(id).then(res => {
        that.setData({
          id: id,
          detail: res
        });
        //WxParse.wxParse('article', 'html', res.content.rendered, this, 5)
        setTimeout(() => {
          this.article_article = res.content.rendered;
        }, 200);

        if (res.comments != 0) {
          this.getComments();
        }
      }).catch(err => {
        console.log(err);
      });
    },
    getAdvert: function () {
      API.detailAdsense().then(res => {
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
    getComments: function () {
      API.getComments({
        id: this.options.id,
        page: this.page
      }).then(res => {
        let data = {};

        if (res.length < 10) {
          this.setData({
            isLastPage: true,
            loadtext: '到底啦',
            showloadmore: false
          });
        }

        if (this.isBottom) {
          data.comments = [].concat(this.comments, res);
          data.page = this.page + 1;
        } else {
          data.comments = [].concat(this.comments, res);
          data.page = this.page + 1;
		  
        }
		data.comments.map((i,idx)=>{
			this.splitComments[idx] = i.content.split('<br>')
			console.log('哈哈哈哈', this.splitComments);
		})
        this.setData(data);
      });
    },
    bindFavTap: function (e) {
      console.log(e);
      let args = {};
      let detail = this.detail;
      args.id = detail.id;
      API.fav(args).then(res => {
        //console.log(res)
        if (res.status === 200) {
          detail.isfav = true;
          this.setData({
            detail: detail
          });
          wx.showToast({
            title: '加入收藏!',
            icon: 'success',
            duration: 900
          });
        } else if (res.status === 202) {
          detail.isfav = false;
          this.setData({
            detail: detail
          });
          wx.showToast({
            title: '取消收藏!',
            icon: 'success',
            duration: 900
          });
        } else {
          wx.showModal({
            title: '温馨提示',
            content: '数据出错, 建议清除缓存重新尝试',
            success: response => {
              wx.removeStorageSync('user');
              wx.removeStorageSync('token');
              wx.removeStorageSync('expired_in');
            }
          });
        }
      }).catch(err => {
        console.log(err);
      });
    },
    bindLikeTap: function (e) {
      console.log(e);
      let args = {};
      let detail = this.detail;
      args.id = detail.id;
      API.like(args).then(res => {
        //console.log(res)
        if (res.status === 200) {
          detail.islike = true;
          this.setData({
            detail: detail
          });
          wx.showToast({
            title: '谢谢点赞!',
            icon: 'success',
            duration: 900
          });
        } else if (res.status === 202) {
          detail.islike = false;
          this.setData({
            detail: detail
          });
          wx.showToast({
            title: '取消点赞!',
            icon: 'success',
            duration: 900
          });
        } else {
          wx.showModal({
            title: '温馨提示',
            content: '数据出错, 建议清除缓存重新尝试',
            success: response => {
              wx.removeStorageSync('user');
              wx.removeStorageSync('token');
              wx.removeStorageSync('expired_in');
            }
          });
        }
      }).catch(err => {
        console.log(err);
      });
    },
    addComment: function (e) {
      console.log(e);
      let args = {};
      let that = this;
      args.id = this.detail.id;
      args.content = this.content;
      args.parent = this.parent;

      if (!this.user) {
        wx.showModal({
          title: '提示',
          content: '必须授权登录才可以评论',
          success: function (res) {
            if (res.confirm) {
              that.getProfile();
            }
          }
        });
      } else if (args.content.length === 0) {
        wx.showModal({
          title: '提示',
          content: '评论内容不能为空'
        });
      } else {
        API.addComment(args).then(res => {
          console.log(res);

          if (res.status === 200) {
            this.setData({
              page: 1,
              showTextarea: false,
              content: "",
              comments: [],
              placeholder: "",
              isFocus: false
            });
            setTimeout(function () {
              wx.showModal({
                title: '温馨提示',
                content: res.message
              });
            }, 900);

            if (!this.isComments) {
              this.setData({
                isComments: true,
                placeholder: ''
              });
            }

            this.bindSubscribe();
            this.getComments();
          } else if (res.status === 500) {
            wx.showModal({
              title: '提示',
              content: '评论失败，请稍后重试。'
            });
          } else {
            wx.showModal({
              title: '提示',
              content: '必须授权登录才可以评论',
              success: function (res) {
                if (res.confirm) {
                  that.getProfile();
                }
              }
            });
          }
        }).catch(err => {
          console.log(err);
          wx.showModal({
            title: '提示',
            content: '评论失败，请稍后重试。'
          });
        });
      }
    },
    replyComment: function (e) {
      console.log(e);
      isFocusing = true;
      let parent = e.currentTarget.dataset.parent;
      let reply = e.currentTarget.dataset.reply;
      this.setData({
        isFocus: true,
        isReply: true,
        parent: parent,
        placeholder: " 回复 " + reply + ":"
      });
    },
    subscribeMessage: function (template, status) {
      let args = {};
      args.openid = this.user.openId;
      args.template = template;
      args.status = status;
      args.pages = getCurrentPages()[0].route;
      args.platform = wx.getSystemInfoSync().platform;
      args.program = 'WeChat';
      API.subscribeMessage(args).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },
    bindSubscribe: function () {
      let that = this;
      let templates = API.template().comments;
      wx.requestSubscribeMessage({
        tmplIds: templates,

        success(res) {
          if (res.errMsg == "requestSubscribeMessage:ok") {
            for (let i = 0; i < templates.length; i++) {
              let template = templates[i];
              that.subscribeMessage(template, "accept");
            }

            wx.showToast({
              title: "订阅完成",
              icon: 'success',
              duration: 1000
            });
          }
        },

        fail: function (res) {
          console.log(res);
        }
      });
    },
    getProfile: function (e) {
      console.log(e);
      wx.showLoading({
        title: '正在登录...'
      });
      API.getProfile().then(res => {
        console.log(res);
        this.setData({
          user: res
        });
        wx.hideLoading();
      }).catch(err => {
        console.log(err);
        wx.hideLoading();
      });
    },
    onRepleyFocus: function (e) {
      isFocusing = false;
      console.log('onRepleyFocus', isFocusing);

      if (!this.isFocus) {
        this.setData({
          isFocus: true
        });
      }
    },
    onReplyBlur: function (e) {
      var that = this;

      if (!that.focus) {
        const text = e.detail.value.trim();

        if (text === '') {
          that.setData({
            parent: "0",
            placeholder: "评论...",
            commentdate: ""
          });
        }
      } else {
        that.setData({
          placeholder: "不说算了，口亨",
          focus: false
        });
      }

      console.log(isFocusing);
    },
    bindInputContent: function (e) {
      if (e.detail.value.length > 0) {
        this.setData({
          content: e.detail.value,
          textNum: e.detail.value.length,
          iscanpublish: true
        });
      } else {
        this.setData({
          iscanpublish: false
        });
      }
    },
    tapcomment: function (e) {
      var self = this;
      let id = e.currentTarget.id;

      if (id) {
        this.setData({
          id: id,
          showTextarea: true
        });
      } else {
        this.setData({
          showTextarea: true
        });
      }

      setTimeout(function () {
        self.setData({
          focus: true
        });
      }, 100);
    },
    closeCommentary: function () {
      this.setData({
        showTextarea: false
      });
    },
    bindBack: function () {
      wx.navigateBack();
    },
    shareClick: function () {
      this.setData({
        shareshow: true
      });
    },
    handleZanActionsheetMaskClickFun: function () {
      this.setData({
        shareshow: false
      });
    },
    downloadPrefix: function () {
      let that = this;
      let args = {};
      let qrcodePath = '';
      let prefixPath = '';
      let title = this.detail.title.rendered;
      let excerpt = this.detail.excerpt.rendered;
      args.id = this.detail.id;
      API.getCodeImg(args).then(res => {
        if (res.status === 200) {
          const downloadTaskqrCode = wx.downloadFile({
            url: res.qrcode,
            success: qrcode => {
              if (qrcode.statusCode === 200) {
                qrcodePath = qrcode.tempFilePath;
                console.log("二维码图片本地位置：" + qrcode.tempFilePath);
                const downloadTaskCoverPrefix = wx.downloadFile({
                  url: res.cover,
                  success: response => {
                    if (response.statusCode === 200) {
                      prefixPath = response.tempFilePath;
                      console.log("文章图片本地位置：" + response.tempFilePath);

                      if (prefixPath && qrcodePath) {
                        that.createPostPrefix(prefixPath, qrcodePath, title, excerpt);
                      }
                    } else {
                      wx.hideLoading();
                      wx.showToast({
                        title: "下载封面失败",
                        mask: true,
                        duration: 2000
                      });
                    }
                  }
                });
                downloadTaskCoverPrefix.onProgressUpdate(res => {
                  wx.showLoading({
                    title: "正在下载封面...",
                    mask: true
                  });
                  console.log('下载下载封面进度：' + res.progress);
                });
              } else {
                wx.hideLoading();
                wx.showToast({
                  title: "下载二维码失败",
                  mask: true,
                  duration: 2000
                });
              }
            }
          });
          downloadTaskqrCode.onProgressUpdate(res => {
            wx.showLoading({
              title: "正在下载二维码...",
              mask: true
            });
            console.log('下载二维码进度', res.progress);
          });
        }
      });
    },
    //将canvas转换为图片保存到本地，然后将路径传给image图片的src
    createPostPrefix: function (prefixPath, qrcodePath, title, excerpt) {
      //console.log(excerpt);
      wx.showLoading({
        title: "正在生成海报",
        mask: true
      });
      let textTitle = title.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "").replace(/ /g, "");
      let textExcerpt = excerpt.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "").replace(/ /g, "");
      let context = wx.createCanvasContext('prefix');
      context.setFillStyle('#ffffff'); //填充背景色

      context.fillRect(0, 0, 600, 970);
      context.drawImage(prefixPath, 0, 0, 600, 400); //绘制首图

      context.drawImage(qrcodePath, 40, 720, 180, 180); //绘制二维码

      context.setFillStyle("#333333");
      context.setFontSize(32);
      context.setTextAlign('left');
      context.fillText("丸子小程序", 240, 780);
      context.setFillStyle("#666666");
      context.setFontSize(28);
      context.setTextAlign('left');
      context.fillText("又一个 WordPress 小程序", 240, 830);
      context.setFillStyle("#696969");
      context.setFontSize(24);
      context.setTextAlign('left');
      context.fillText("阅读详情,请长按识别二维码", 240, 880);
      context.setFillStyle("#000000");
      this.CanvasTextContent(context, textTitle, textExcerpt); //文章标题

      context.draw(); //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时

      setTimeout(function () {
        wx.canvasToTempFilePath({
          canvasId: 'prefix',
          success: function (res) {
            wx.hideLoading();
            wx.previewImage({
              current: res.tempFilePath,
              urls: [res.tempFilePath]
            });
            console.log("海报图片路径：" + res.tempFilePath);
          },
          fail: function (res) {
            console.log(res);
            wx.hideLoading();
          }
        });
      }, 900);
    },
    CanvasTextContent: function (context, title, excerpt) {
      let textLength = title.replace(/[\u0391-\uFFE5]/g, "aa").length;
      context.setFillStyle("#000000");

      if (textLength <= 17) {
        //14字以内绘制成一行，美观一点
        context.setFontSize(30);
        context.setTextAlign('left');
        context.fillText(title, 30, 460);
      } else {
        //题目字数很多的，只绘制前34个字（如果题目字数在15到18个字则也是一行，不怎么好看）
        context.setFontSize(30);
        context.setTextAlign('left');
        context.fillText(title.substring(0, 18), 30, 460);
        context.fillText(title.substring(18, 36), 30, 520);
      }

      context.setFillStyle("#666666");
      context.setFontSize(24);
      context.setTextAlign('left');
      context.fillText(excerpt.substring(0, 22), 35, 580);
      context.fillText(excerpt.substring(23, 44), 35, 624);
      context.fillText(excerpt.substring(45, 64), 35, 668);
      context.stroke();
      context.save();
    }
  }
};
</script>
<style>
@import "./detail.css";
</style>