Page({
  data: {
    fixedHeader: true,
    activeTab: 0,
  },
  onTabClick({ index, tabsName }) {
    console.log("onTabClick");
  },
});