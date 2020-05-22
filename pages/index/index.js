// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    swiperCount: 1,
    food: [
      {
        img: "../../images/food1.jpg",
        title: "每日一测"
      },
      {
        img: "../../images/food2.jpg",
        title: "每日食补"
      }
    ],
    list: []
  },
  changeCount(e) {
    this.setData({
      swiperCount: e.detail.current + 1
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图
    wx.request({
      url: 'http://iwenwiki.com:3002/api/banner',
      success: res => {
        if (res.data.status == 200) {
          this.setData({
            swiperList: res.data.data
          })
        }
      }
    })

    // 请求列表页
    wx.request({
      url: 'http://iwenwiki.com:3002/api/indexlist',
      success: res => {
        if (res.data.status == 200) {
          this.setData({
            list: res.data.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})