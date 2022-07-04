import { getPosts } from '../../services/index';

Page({
  data: {
    isLoading: true,
    fixedHeader: true,
    activeTab: 0,
    posts: []
  },

  onReady() {
    this.loadData();
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [posts] = await Promise.all([
        getPosts()
      ]);

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