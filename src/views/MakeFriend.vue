<template>
  <div class="make-friend">
    <h1>求赞</h1>
    <a href="taobao://m.rijni.top/h.3QSTi6P ">
      <img :src="avatar" class="avatar"/>
    </a>
    <br/>
    <p>↑</p>
    <p>↑</p>
    <p>↑</p>
    <p>٩(๑´3‘๑)۶帮我点赞，点击头像自动跳淘宝</p>


    <Button class="footer" @click="post" size="normal" square type="primary">发布我的求赞！！</Button>

  </div>
</template>

<script>

import { Button } from 'vant'

export default {
  data () {
    return {
      avatar: require('../assets/avatar.jpeg')
    }
  },

  components: {
    Button
  },

  methods: {
    post () {
      this.$toast('不好意思兄弟，这只是一个demo')
    }
  },

  metaInfo: function () {
    return {
      title: '求赞'
    }
  }
}
</script>

<style scoped lang="less">
  .make-friend {
    text-align: center;
  }

  .item {
    padding: 10px;

    ::before {
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      position: absolute;
      background: repeating-linear-gradient(
          -45deg,
          #ff6c6c 0,
          #ff6c6c 20%,
          transparent 0,
          transparent 25%,
          #3283fa 0,
          #3283fa 45%,
          transparent 0,
          transparent 50%
      );
      background-size: 80px;
    }

  }

  .avatar {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  .footer {
    right: 0;
    display: flex;
    bottom: 50px;
    margin: 10px;
    position: fixed;
    text-align: right;
    .van-button {
      margin-left: 5px;
      text-align: center;

    }
  }
</style>
