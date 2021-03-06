import {debounce} from "./utils"
import BackTop from "components/content/backTop/BackTop"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);

    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log('混入的内容');
  }
}
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTops() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000
    }
  }
}