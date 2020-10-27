<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/detail/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item.index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNav",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },
};
</script>

<style scoped>
/* .detail-nav {
  height: 100px;
} */
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: deeppink;
}
.back img {
  margin: 14px 0 0 10px;
}
</style>
