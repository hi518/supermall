<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goods"
      :goods-item="item"
      :key="item.index"
    ></goods-list-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
}
</style>
