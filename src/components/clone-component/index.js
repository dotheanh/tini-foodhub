Component({
    mixins: [], // các minxin sử dụng trong Component
    data: { x: 1 }, // data của component
    props: { y: 1 }, // các thuộc tính
  
    // các hàm life cycles
    didMount() {},
    didUpdate() {},
    didUnmount() {},
  
    // các methods
    methods: {
      handleTap() {
        this.setData({ x: this.data.x + 1 });
      }
    }
  });