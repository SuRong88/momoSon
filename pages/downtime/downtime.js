Page({
	/*页面的初始数据*/
	data: {
		countdown: {},
		momo: false,
		endDate2: "2021-09-01 00:00:00",
	},
	/* 生命周期函数--监听页面加*/
	onLoad(options) {
		this.countTime();
	},
	momoSon() {
		this.setData({
			momo: !this.data.momo
		})
	},
	countTime() {
		var that = this;
		var date = new Date();
		var now = date.getTime();
		var endDate = new Date(that.data.endDate2); //设置截止时间
		var end = endDate.getTime();
		var leftTime = end - now; //时间差
		var d, h, m, s, ms;
		if (leftTime >= 0) {
			d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
			h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
			m = Math.floor((leftTime / 1000 / 60) % 60);
			s = Math.floor((leftTime / 1000) % 60);
			ms = ms < 100 ? "0" + ms : ms;
			s = s < 10 ? "0" + s : s;
			m = m < 10 ? "0" + m : m;
			h = h < 10 ? "0" + h : h;
			that.setData({
				countdown: {
					d,
					h,
					m,
					s
				}
			});
			//递归每秒调用countTime方法，显示动态时间效果
			setTimeout(that.countTime, 100);
		} else {
			console.log("已截止");
			that.setData({
				countdown: "00:00:00",
			});
		}
	},
});
