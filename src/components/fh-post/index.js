Component({
  props: {
    className: '',
    isLoading: false,
    post: {
      id: '',
      name: '',
      image: '',
      price: '',
      list_price: '',
      discount_rate: 0,
    },
    onTapPost: () => {},
  },

  methods: {
    _onTapPost() {
      this.props.onTapPost(this.props.post);
    },
  },
});
