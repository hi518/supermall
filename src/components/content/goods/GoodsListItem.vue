<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-list-price">{{ goodsItem.price }}</span>
      <span class="collect-icon">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imageLoad() {
      // console.log('imageLoad')
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}
.goods-list-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-list-price {
  /* display: flex;
  justify-content: space-between; */
  margin: 6px 0;
  padding-right: 20px;
  color: brown;
}

.collect-icon {
  position: relative;
  left: 5px;
  /* background-color: pink; */
  /* padding: 0 10px; */
}
.collect-icon::before {
  content: "";
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/home/collect.png) no-repeat;
}
/* .collect-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  background: url(~assets/img/home/collect.png) no-repeat;
  vertical-align: bottom;
} */
</style>
