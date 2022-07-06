Component({
  props: {
    isLoading: false,
    type: 'vertical',
    skeletons: 0,
    className: '',
    posts: [],
    onTapPost: () => {},
  },

  methods: {
    _onTapPost(post) {
      this.props.onTapPost(post);
    },
  },
});
