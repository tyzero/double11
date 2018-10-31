<template>
  <div class="login">
    <h1>需要输入你的淘口令进行标识</h1>
    <h3>添加好友前，需要进行注册</h3>

    <Field
        v-model="command"
        type="textarea"
        placeholder="黏贴您的淘口令呗~"
        rows="4"
        autosize
    />
    <Loading v-if="isLoading" type="spinner" color="white"/>

  </div>
</template>

<script>
import { Field, Loading } from 'vant'
import { ACTION_REGISTER } from '../store/actions.type';
import { mapState } from 'vuex'

export default {

  data () {
    return {
      command: ''
    }
  },

  components: { Field, Loading },

  computed: {
    taobaoCommandReg () {
      return /[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/
    },
    ...mapState(['isLoading'])
  },

  watch: {
    command: function (newVal) {
      if (newVal === '') return
      if (this.taobaoCommandReg.test(newVal)) {
        const link = this.taobaoCommandReg.exec(newVal)[0]
        console.log(link)
        this.$store.dispatch(ACTION_REGISTER, { link }).then(() => {
          this.$router.push('/')
        }).catch(() => {
          this.command = ''
        })

      } else {
        this.command = ''
        this.$dialog.alert({ title: '警告', message: '解析口令失败QAQ' })
      }

    }
  },

  metaInfo: () => ({
    title: '标识',
    meta: [
      { // set meta
        name: 'keyWords',
        content: '性感码农，在线点赞'
      },
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=2.0, maximum-scale=1.0, user-scalable=no'

      }
    ]

  })
}
</script>

<style scoped>
  .login {
    text-align: center;
  }
</style>
