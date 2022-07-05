Component({
  data: {
    isSavedPost: false,
  },

  props: {
    isLoading: true,
    post: {
      id: '',
      title: '',
      images: [],
      content: "",
      foodTag: [],
      reviewerId: 0,
      reviewerName: "",
      reviewerAvt: "",
      postedTime: 0,
      votesCount: 0,
      commentsCount: 0,
      viewsCount: 0,
      isSaved: false,
    },
  },
  
    // các hàm life cycles
    didMount() {
      console.log("Render post-surfing");
      console.log(this.props.post);
      this.setData({
        isSavedPost: this.props.post.isSaved
      });
    },
  
    // các methods
    methods: {
      onClickBookmarkButton() {
        // TODO: TA call API to save post
      console.log("// TODO: TA call API to save post");
        this.setData({
          isSavedPost: !this.data.isSavedPost
        });
      },
    }
  });