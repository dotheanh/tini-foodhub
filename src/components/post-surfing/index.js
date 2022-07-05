Component({
  data: {
    isSavedPost: false,
    votedPost: 0,
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
      voted: 0, // -1 = downvoted, 1 = upvoted, 0 = not voted 
    },
  },
  
    // các hàm life cycles
    didMount() {
      console.log("Render post-surfing");
      console.log(this.props.post);
      this.setData({
        isSavedPost: this.props.post.isSaved,
        votedPost: this.props.post.voted,
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
      onClickUpVote() {
        // TODO: TA call API to UpVote
        console.log("// TODO: TA call API to UpVote");
        let newVotedPost;
        if (this.data.votedPost === 0) newVotedPost = 1;
        else if (this.data.votedPost === 1) newVotedPost = 0;
        this.setData({
          votedPost: newVotedPost
        });
      },
      onClickComment() {
        // TODO: TA call API to Comment
        console.log("// TODO: TA call API to Comment");
      },
    }
  });