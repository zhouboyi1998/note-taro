// pages/cmd/cmd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    // 在 list.wxml 中点击命令跳转 (url="/pages/cmd/cmd?cmd={{item}}")
    // 携带的参数 cmd 就存放在 onLoad 生命周期函数的 options 中
    let {cmd} = options;
    wx.request({
      url: 'http://127.0.0.1:18091/note/command/one/' + cmd,
      success: function (res) {
        that.setData({detail: res.data});
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
