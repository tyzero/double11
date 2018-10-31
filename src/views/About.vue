<template>
  <div class="about">
    <h5>基于Vue + Vuex + Router + Vant 的简单实践</h5>
    <p>
      github: <a href="https://github.com/tyzero/double11">https://github.com/tyzero/double11</a>
    </p>
  </div>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: '关于',
      meta: [
        { // set meta
          name: 'keyWords',
          content: '程序员'
        },
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=2.0, maximum-scale=1.0, user-scalable=no'

        }
      ]

    }
  }
}
</script>

<style scoped lang="less">
  .about {
    padding: 15px;
    h5 {
      text-align: center
    }

  }

</style>
