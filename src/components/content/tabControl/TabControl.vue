<template>
  <div class='tab-control'>
    <div v-for="(item, index) in titles"
         :class="{active: index === currentIndex}"
         :key="item.index" class="tab-control-item"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-control',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: deeppink
  }
  .active span {
    border-bottom: 3px solid deeppink;
  }
</style>
