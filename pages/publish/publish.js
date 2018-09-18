// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"点击选择，要勾选哦~"
  },
  obj:{
    type:"sell"
  },
  typeChange(e){
    this.obj.type=e.detail.value;
  },
  selAddress(){
    wx.chooseLocation({
      success: (res)=>{
          this.setData({
             address:res.address
          })
          Object.assign(this.obj,{
            address:res.address,
            longitude:res.longitude,
            latitude:res.latitude
          })
      }
    })
  },
  inputcontact(e) {
    this.obj.contact = e.detail.value
  },
  inputdesc(e) {
    this.obj.desc = e.detail.value
  },
  save(){
    wx.request({
      url: 'http://localhost:3000/list',
      data: this.obj,
      header: {'content-type':'application/json'},
      method: 'POST',
      success: (res)=>{
        this.setData({
          suc:true
        })
      }
    })
  },
  go(){
    wx.navigateBack({
      delta: 1,
    })
  }






})