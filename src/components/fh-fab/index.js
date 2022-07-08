Component({
    data: { 
      isShowActions: false,
    },
    props: { 
      actions: [
      { label: "Đăng Bài", icon: "edit", onClick: "" },
      { label: "Food Matcher", icon: "geometry", onClick: "" },
      { label: "Đầu Trang", icon: "arrow_up", onClick: "" },
      { label: "Làm Mới", icon: "refresh", onClick: "" },
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

      catchClick() {
        
      }
    }
  });