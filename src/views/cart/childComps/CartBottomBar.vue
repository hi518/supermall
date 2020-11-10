<template>
  <div class="bottom-bar">
    <div class="content">
      <div class="left">
        <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"></check-button>
        <span>全选</span>
      </div>

      <div class="total">
        合计:{{totalPrice}}
      </div>

      <div class="calculate">
        去计算 ({{checkLength}})
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.cartList.length === 0) return false
      // 1.使用filter
      // return !(this.cartList.filter(item => !item.checked).length)
      // 2.使用find
      // return !this.cartList.find(item => !item.checked)
      // 3.遍历
      for (let item of this.cartList) {
        if (!item.checked) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {//全部选中
        this.cartList.forEach(item => item.checked = false)
      } else {//部分或全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
  }
  .content {
    display: flex;
  }
  .left,.total,.calculate {
    flex: 1;
  }
  .left {
    position: relative;
  }
  .total {
    margin-left: 0;
  }
  .calculate {
    background-color: red;
    text-align: center;
    color: #fff;
  }
  .check-button {
    position: relative;
    top: 8px;
    margin: 0 10px;
    width: 20px;
    height: 20px;
  }
  span {
    position: absolute;
    top: 10px;
    left: 38px;
  }
  .total,.calculate {
    line-height: 40px;
  }
</style>
