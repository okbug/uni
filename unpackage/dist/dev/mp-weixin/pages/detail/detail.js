(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 28:
/*!************************************************************************!*\
  !*** E:/hxws/uni-co/uni-co/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 29:
/*!*****************************************************!*\
  !*** E:/hxws/uni-co/uni-co/pages/detail/detail.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=291918af& */ 30);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 32);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ 34);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "hxws/uni-co/uni-co/pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/*!************************************************************************************!*\
  !*** E:/hxws/uni-co/uni-co/pages/detail/detail.vue?vue&type=template&id=291918af& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=291918af& */ 31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_291918af___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 31:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/hxws/uni-co/uni-co/pages/detail/detail.vue?vue&type=template&id=291918af& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 32:
/*!******************************************************************************!*\
  !*** E:/hxws/uni-co/uni-co/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 33);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/hxws/uni-co/uni-co/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var API = __webpack_require__(/*! ../../utils/api */ 25);

var app = getApp();
var isFocusing = false;var _default =

{
  data: function data() {
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
      article_article: "" };

  },

  components: {},
  props: {},

  /**
              * 生命周期函数--监听页面加载
              */
  onLoad: function onLoad(options) {
    var that = this;
    wx.getSystemInfo({
      success: function success(a) {
        that.setData({
          isIphoneX: a.model.match(/iPhone X/gi) });

      } });

    this.setData({
      options: options });

    this.getPostsbyID(options.id);
    this.getAdvert();
  },

  /**
      * 生命周期函数--监听页面初次渲染完成
      */
  onReady: function onReady() {},

  /**
                                   * 生命周期函数--监听页面显示
                                   */
  onShow: function onShow() {
    var user = app.globalData.user;

    if (!user) {
      user = '';
    }

    this.setData({
      user: user });

  },

  /**
      * 生命周期函数--监听页面隐藏
      */
  onHide: function onHide() {},

  /**
                                 * 生命周期函数--监听页面卸载
                                 */
  onUnload: function onUnload() {},

  /**
                                     * 页面相关事件处理函数--监听用户下拉动作
                                     */
  onPullDownRefresh: function onPullDownRefresh() {
    this.setData({
      page: 1,
      detail: '',
      comments: [] });

    this.getPostsbyID(this.options.id);
    this.getComments();
  },

  /**
      * 页面上拉触底事件的处理函数
      */
  onReachBottom: function onReachBottom() {
    if (!this.isLastPage) {
      this.getComments();
    }
  },

  /**
      * 用户点击右上角分享
      */
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: this.detail.title.rendered,
      path: '/pages/detail/detail?id=' + this.detail.id,
      imageUrl: this.detail.meta.thumbnail };

  },
  methods: {
    foo: function foo() {
      console.log('评论内容： ', this.comments);
    },
    getPostsbyID: function getPostsbyID(id) {var _this = this;
      var that = this;
      API.getPostsbyID(id).then(function (res) {
        that.setData({
          id: id,
          detail: res });

        //WxParse.wxParse('article', 'html', res.content.rendered, this, 5)
        setTimeout(function () {
          _this.article_article = res.content.rendered;
        }, 200);

        if (res.comments != 0) {
          _this.getComments();
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getAdvert: function getAdvert() {var _this2 = this;
      API.detailAdsense().then(function (res) {
        console.log(res);

        if (res.status === 200) {
          _this2.setData({
            advert: res.data });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getComments: function getComments() {var _this3 = this;
      API.getComments({
        id: this.options.id,
        page: this.page }).
      then(function (res) {
        var data = {};

        if (res.length < 10) {
          _this3.setData({
            isLastPage: true,
            loadtext: '到底啦',
            showloadmore: false });

        }

        if (_this3.isBottom) {
          data.comments = [].concat(_this3.comments, res);
          data.page = _this3.page + 1;
        } else {
          data.comments = [].concat(_this3.comments, res);
          data.page = _this3.page + 1;

        }
        data.comments.map(function (i, idx) {
          _this3.splitComments[idx] = i.content.split('<br>');
          console.log('哈哈哈哈', _this3.splitComments);
        });
        _this3.setData(data);
      });
    },
    bindFavTap: function bindFavTap(e) {var _this4 = this;
      console.log(e);
      var args = {};
      var detail = this.detail;
      args.id = detail.id;
      API.fav(args).then(function (res) {
        //console.log(res)
        if (res.status === 200) {
          detail.isfav = true;
          _this4.setData({
            detail: detail });

          wx.showToast({
            title: '加入收藏!',
            icon: 'success',
            duration: 900 });

        } else if (res.status === 202) {
          detail.isfav = false;
          _this4.setData({
            detail: detail });

          wx.showToast({
            title: '取消收藏!',
            icon: 'success',
            duration: 900 });

        } else {
          wx.showModal({
            title: '温馨提示',
            content: '数据出错, 建议清除缓存重新尝试',
            success: function success(response) {
              wx.removeStorageSync('user');
              wx.removeStorageSync('token');
              wx.removeStorageSync('expired_in');
            } });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    bindLikeTap: function bindLikeTap(e) {var _this5 = this;
      console.log(e);
      var args = {};
      var detail = this.detail;
      args.id = detail.id;
      API.like(args).then(function (res) {
        //console.log(res)
        if (res.status === 200) {
          detail.islike = true;
          _this5.setData({
            detail: detail });

          wx.showToast({
            title: '谢谢点赞!',
            icon: 'success',
            duration: 900 });

        } else if (res.status === 202) {
          detail.islike = false;
          _this5.setData({
            detail: detail });

          wx.showToast({
            title: '取消点赞!',
            icon: 'success',
            duration: 900 });

        } else {
          wx.showModal({
            title: '温馨提示',
            content: '数据出错, 建议清除缓存重新尝试',
            success: function success(response) {
              wx.removeStorageSync('user');
              wx.removeStorageSync('token');
              wx.removeStorageSync('expired_in');
            } });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    addComment: function addComment(e) {var _this6 = this;
      console.log(e);
      var args = {};
      var that = this;
      args.id = this.detail.id;
      args.content = this.content;
      args.parent = this.parent;

      if (!this.user) {
        wx.showModal({
          title: '提示',
          content: '必须授权登录才可以评论',
          success: function success(res) {
            if (res.confirm) {
              that.getProfile();
            }
          } });

      } else if (args.content.length === 0) {
        wx.showModal({
          title: '提示',
          content: '评论内容不能为空' });

      } else {
        API.addComment(args).then(function (res) {
          console.log(res);

          if (res.status === 200) {
            _this6.setData({
              page: 1,
              showTextarea: false,
              content: "",
              comments: [],
              placeholder: "",
              isFocus: false });

            setTimeout(function () {
              wx.showModal({
                title: '温馨提示',
                content: res.message });

            }, 900);

            if (!_this6.isComments) {
              _this6.setData({
                isComments: true,
                placeholder: '' });

            }

            _this6.bindSubscribe();
            _this6.getComments();
          } else if (res.status === 500) {
            wx.showModal({
              title: '提示',
              content: '评论失败，请稍后重试。' });

          } else {
            wx.showModal({
              title: '提示',
              content: '必须授权登录才可以评论',
              success: function success(res) {
                if (res.confirm) {
                  that.getProfile();
                }
              } });

          }
        }).catch(function (err) {
          console.log(err);
          wx.showModal({
            title: '提示',
            content: '评论失败，请稍后重试。' });

        });
      }
    },
    replyComment: function replyComment(e) {
      console.log(e);
      isFocusing = true;
      var parent = e.currentTarget.dataset.parent;
      var reply = e.currentTarget.dataset.reply;
      this.setData({
        isFocus: true,
        isReply: true,
        parent: parent,
        placeholder: " 回复 " + reply + ":" });

    },
    subscribeMessage: function subscribeMessage(template, status) {
      var args = {};
      args.openid = this.user.openId;
      args.template = template;
      args.status = status;
      args.pages = getCurrentPages()[0].route;
      args.platform = wx.getSystemInfoSync().platform;
      args.program = 'WeChat';
      API.subscribeMessage(args).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    },
    bindSubscribe: function bindSubscribe() {
      var that = this;
      var templates = API.template().comments;
      wx.requestSubscribeMessage({
        tmplIds: templates,

        success: function success(res) {
          if (res.errMsg == "requestSubscribeMessage:ok") {
            for (var i = 0; i < templates.length; i++) {
              var template = templates[i];
              that.subscribeMessage(template, "accept");
            }

            wx.showToast({
              title: "订阅完成",
              icon: 'success',
              duration: 1000 });

          }
        },

        fail: function fail(res) {
          console.log(res);
        } });

    },
    getProfile: function getProfile(e) {var _this7 = this;
      console.log(e);
      wx.showLoading({
        title: '正在登录...' });

      API.getProfile().then(function (res) {
        console.log(res);
        _this7.setData({
          user: res });

        wx.hideLoading();
      }).catch(function (err) {
        console.log(err);
        wx.hideLoading();
      });
    },
    onRepleyFocus: function onRepleyFocus(e) {
      isFocusing = false;
      console.log('onRepleyFocus', isFocusing);

      if (!this.isFocus) {
        this.setData({
          isFocus: true });

      }
    },
    onReplyBlur: function onReplyBlur(e) {
      var that = this;

      if (!that.focus) {
        var text = e.detail.value.trim();

        if (text === '') {
          that.setData({
            parent: "0",
            placeholder: "评论...",
            commentdate: "" });

        }
      } else {
        that.setData({
          placeholder: "不说算了，口亨",
          focus: false });

      }

      console.log(isFocusing);
    },
    bindInputContent: function bindInputContent(e) {
      if (e.detail.value.length > 0) {
        this.setData({
          content: e.detail.value,
          textNum: e.detail.value.length,
          iscanpublish: true });

      } else {
        this.setData({
          iscanpublish: false });

      }
    },
    tapcomment: function tapcomment(e) {
      var self = this;
      var id = e.currentTarget.id;

      if (id) {
        this.setData({
          id: id,
          showTextarea: true });

      } else {
        this.setData({
          showTextarea: true });

      }

      setTimeout(function () {
        self.setData({
          focus: true });

      }, 100);
    },
    closeCommentary: function closeCommentary() {
      this.setData({
        showTextarea: false });

    },
    bindBack: function bindBack() {
      wx.navigateBack();
    },
    shareClick: function shareClick() {
      this.setData({
        shareshow: true });

    },
    handleZanActionsheetMaskClickFun: function handleZanActionsheetMaskClickFun() {
      this.setData({
        shareshow: false });

    },
    downloadPrefix: function downloadPrefix() {
      var that = this;
      var args = {};
      var qrcodePath = '';
      var prefixPath = '';
      var title = this.detail.title.rendered;
      var excerpt = this.detail.excerpt.rendered;
      args.id = this.detail.id;
      API.getCodeImg(args).then(function (res) {
        if (res.status === 200) {
          var downloadTaskqrCode = wx.downloadFile({
            url: res.qrcode,
            success: function success(qrcode) {
              if (qrcode.statusCode === 200) {
                qrcodePath = qrcode.tempFilePath;
                console.log("二维码图片本地位置：" + qrcode.tempFilePath);
                var downloadTaskCoverPrefix = wx.downloadFile({
                  url: res.cover,
                  success: function success(response) {
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
                        duration: 2000 });

                    }
                  } });

                downloadTaskCoverPrefix.onProgressUpdate(function (res) {
                  wx.showLoading({
                    title: "正在下载封面...",
                    mask: true });

                  console.log('下载下载封面进度：' + res.progress);
                });
              } else {
                wx.hideLoading();
                wx.showToast({
                  title: "下载二维码失败",
                  mask: true,
                  duration: 2000 });

              }
            } });

          downloadTaskqrCode.onProgressUpdate(function (res) {
            wx.showLoading({
              title: "正在下载二维码...",
              mask: true });

            console.log('下载二维码进度', res.progress);
          });
        }
      });
    },
    //将canvas转换为图片保存到本地，然后将路径传给image图片的src
    createPostPrefix: function createPostPrefix(prefixPath, qrcodePath, title, excerpt) {
      //console.log(excerpt);
      wx.showLoading({
        title: "正在生成海报",
        mask: true });

      var textTitle = title.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "").replace(/ /g, "");
      var textExcerpt = excerpt.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "").replace(/ /g, "");
      var context = wx.createCanvasContext('prefix');
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
          success: function success(res) {
            wx.hideLoading();
            wx.previewImage({
              current: res.tempFilePath,
              urls: [res.tempFilePath] });

            console.log("海报图片路径：" + res.tempFilePath);
          },
          fail: function fail(res) {
            console.log(res);
            wx.hideLoading();
          } });

      }, 900);
    },
    CanvasTextContent: function CanvasTextContent(context, title, excerpt) {
      var textLength = title.replace(/[\u0391-\uFFE5]/g, "aa").length;
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
    } } };exports.default = _default;

/***/ }),

/***/ 34:
/*!**************************************************************************************!*\
  !*** E:/hxws/uni-co/uni-co/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=css& */ 35);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 35:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/hxws/uni-co/uni-co/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[28,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map