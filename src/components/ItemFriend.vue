<template>
  <div class="friend">
    <Icon name="contact"/>
    <p>
      <slot></slot>

    </p>
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'ItemFriend',
  components: {
    Icon
  }
}
</script>

<style scoped lang="less">

  .friend {
    text-align: center;

    .van-col {
      height: 100px;
      float: none;
      display: inline-block;
      vertical-align: middle;
    }

    .van-icon {
      display: block;
      font-size: 32px;
      margin: 15px 0;
      color: rgba(69, 90, 100, .8);
    }

  }


</style>
