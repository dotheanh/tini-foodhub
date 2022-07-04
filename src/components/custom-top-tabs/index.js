Component({
  mixins: [], // các minxin sử dụng trong Component
  data: {}, // data của component
  props: {
    activeTab: 0,
  }, // các thuộc tính

  // các hàm life cycles
  didMount() {
    this.setData({activeTab: this.props.activeTab});
  },
  didUpdate() {},
  didUnmount() {},

  // các methods
  methods: {
    onTapHome() {
      if (this.data.activeTab === 0) return;
      console.log("Go to Home " + this.data.activeTab);
      this.setData({activeTab: 0});
    },
    onTapTrending() {
      if (this.data.activeTab === 1) return;
      console.log("Go to Trending " + this.data.activeTab);
      this.setData({activeTab: 1});
    },
  },
});
