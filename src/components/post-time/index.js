Component({
  mixins: [],
  data: {
    formatedTime: "",
  },
  props: {},

  didMount() {
    this.setData({
      formatedTime: this.timeDifference(new Date(), this.props.time),
    });
  },
  didUpdate() {},
  didUnmount() {},

  methods: {
    timeDifference(current, previous) {
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerWeek = msPerDay * 7;

      var elapsed = current - previous;

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + "s";
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + "m";
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + "h";
      } else if (elapsed < msPerWeek) {
        return Math.round(elapsed / msPerDay) + "d";
      } else {
        let date = new Date(previous);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear()
        );
      }
    },
  },
});
