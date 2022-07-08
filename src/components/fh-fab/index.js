Component({
    data: { 
      isShowActions: false,
    },
    props: { 
      actions: [
      { label: "Đăng Bài", icon: "edit", onClick: "onClickCreatePost" },
      { label: "Food Matcher", icon: "geometry", onClick: "onClickFoodMatcher" },
      { label: "Đầu Trang", icon: "arrow_up", onClick: "onClickScrollTop" },
      { label: "Làm Mới", icon: "refresh", onClick: "onClickRefresh" },
    ],
    onBackToTop() {},
   },
  
    didMount() {},
    didUpdate() {},
    didUnmount() {},
  
    methods: {
      onClick() {
        this.setData({
          isShowActions: !this.data.isShowActions
        })
      },

      onClickCreatePost() {
        console.log("onClickCreatePost");
      },
      onClickFoodMatcher() {
        console.log("onClickFoodMatcher");
      },
      onClickScrollTop() {
        console.log("onClickScrollTop");
      },
      onClickRefresh() {
        console.log("onClickRefresh");
      },
    }
  });