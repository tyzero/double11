<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: '关于作者',
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
