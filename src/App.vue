<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},

  data () {
    return {
      USER_AGENT: navigator.userAgent.toLowerCase()
    }
  },

  mounted () {
    if (this.isWechat) {
      this.$router.push('/wechat')
    }
  },

  computed: {
    isWechat () {
      const isWechat = /MicroMessenger/i
      return isWechat.test(this.USER_AGENT)
    }
  }
}

</script>

<style lang="less">
  body {
    font-size: 16px;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .fade-enter-active {
    transition: opacity 0.5s;
  }

  .fade-leave-active {
    transition: opacity 0s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
