import {
  getSuggestions,
} from '../../services/index';
import {
  navigateToPDP,
} from '../../utils/navigate';

Page({
  data: {
    isLoading: false,
    suggestions: [],
    viewAsGrid: true,
  },

  onTapProduct(product) {
    navigateToPDP(product.id);
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [suggestions] =
        await Promise.all([
          getSuggestions(),
        ]);

      this.setData({
        suggestions,
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  onShow() {
  },

  onReady() {
    this.loadData();
  },


  onTapToggleViewMode() {
    // TODO: TA onTapToggleViewMode
    console.log("// TODO: TA onTapToggleViewMode");
    this.setData({
      viewAsGrid: !this.data.viewAsGrid
    });
  },
});
