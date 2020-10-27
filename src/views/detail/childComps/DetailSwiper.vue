<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt="" @load="topImagesLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    topImagesLoad() {
      if (!this.isLoad) {
        // console.log("topload");
        this.$emit("imageTopLoad");
        this.isLoad = true
      }
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
