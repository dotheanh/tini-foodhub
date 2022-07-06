import { getPosts, getMethodTest, getAuthToken } from '../../services/index';

Page({
  data: {
    isLoading: true,
    fixedHeader: true,
    visibleHeader: true,
    activeTab: 0,
    posts: []
  },

  onReady() {
    this.loadData();
  },

  onPageScroll(event) {
    this.setData({ visibleHeader: event.scrollTop < 400 }); // hide header when scroll down
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [posts] = await Promise.all([
        getPosts()
      ]);

      //TEST PURPOSE
      getMethodTest();
      getAuthToken();

      this.setData({
        posts,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setData({
        isLoading: false,
      });
    }
  },
});