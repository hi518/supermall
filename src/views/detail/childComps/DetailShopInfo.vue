<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-name-info">
      <img :src="shop.logo" alt="" class="shop-img" />
      <div class="shop-name">{{ shop.name }}</div>
    </div>
    <div class="shop-other-info">
      <div class="shop-other-item shop-other-sell">
        <div class="shop-count">
          <p class="f16">{{ shop.cSells | saveNum }}</p>
          <p>总销量</p>
        </div>
        <div class="shop-bao">
          <p class="f16">{{ shop.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div v-for="item in shop.score" :key="item.index">
          {{ item.name }}&ensp;
          <span class="score" :class="{ active: item.isBetter }">{{
            item.score
          }}</span>
          <span class="score-bg" :class="{ active: item.isBetter }">{{
            item.isBetter ? "低" : "高"
          }}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    saveNum(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style lang="less" scoped>
.f16 {
  font-size: 16px;
}
.shop-name-info {
  align-items: center;
  margin: 20px 10px;
}
.shop-img {
  display: inline-block;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  vertical-align: middle;
}
.shop-name {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.shop-other-info {
  font-size: 12px;
  align-items: center;
  line-height: 22px;
  display: flex;
  justify-content: space-around;
  .shop-other-item {
    flex: 1;
  }
  .shop-other-sell {
    border-right: 1px solid #ececec;
    flex: 1;
    display: flex;
    div {
      text-align: center;
    }
  }
  .shop-count,
  .shop-bao {
    flex: 1;
  }
  .shop-other-right {
    flex: 1;
    padding-left: 60px;
    .score {
      display: inline-block;
      width: 30px;
      color: #006666;
      &.active {
        color: #880000;
      }
    }
    .score-bg {
      background-color: #006666;
      color: #fff;
      padding: 1px 4px;
      font-size: 12px;
      &.active {
        background-color: #880000;
      }
    }
  }
}
.enter-shop-wrap {
  text-align: center;
  .enter-shop {
    display: inline-block;
    background-color: #f2f2f2;
    font-size: 16px;
    padding: 6px 50px;
    border-radius: 100px;
    margin: 10px;
  }
}
</style>
