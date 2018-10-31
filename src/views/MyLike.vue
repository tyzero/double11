<template>
  <div>
    <PullRefresh v-model="isLoading" @refresh="onRefresh">
      <div class="my-like">
        <Cell class="desc" title="互赞的朋友" label="根据双十一的规定，你每天最多能给6个战队点赞，所以你能添加6个好友" status="">
        </Cell>

        <div class="item">
          <h2>互赞列表</h2>
          <Row gutter="20" type="flex">
            <van-col v-for="(item,index) in myFriends" :key='index' v-if="index<3" span="8">
              <ItemFriend>
                <a :href="'taobao://'+item.link">
                  {{item.name}}
                </a>
              </ItemFriend>
            </van-col>
          </Row>
          <Row gutter="20" type="flex" v-if="myFriends.length>3">
            <van-col v-for="(item,index) in myFriends" :key='index' v-if="index>2 &&index<6" span="8">
              <ItemFriend>
                <a :href="'taobao://'+item.link">
                  {{item.name}}
                </a>
              </ItemFriend>
            </van-col>
          </Row>

        </div>

        <p>已添加: {{ myFriends.length}}</p>
        <p>点击名字，自动跳转淘宝，不支持微信内置浏览器</p>

      </div>
    </PullRefresh>
    <div class="footer">

      <Button @click="addFriend" size="normal" square type="default">添加好友口令</Button>
      <van-dialog
          v-model="showss"
          show-cancel-button
          :before-close="beforeClose"
      >
        <Field
            v-model="message"
            type="textarea"
            placeholder="请黏贴输入好友的淘口令"
            rows="4"
            autosize
        />
        <Field
            v-model="nickName"
            placeholder="起个别名（可选）"
            rows="1"
        />

      </van-dialog>

    </div>
  </div>
</template>

<script>
import { Panel, Button, PullRefresh, Cell, CellGroup, Row, Col, Dialog, Field } from 'vant'
import ItemFriend from '../components/ItemFriend'
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { ACTION_ADD_FRIEND, ACTION_LOGIN } from '../store/actions.type';

Vue.use(Dialog)

export default {
  components: {
    Button,
    Panel,
    PullRefresh,
    Cell,
    CellGroup,
    ItemFriend,
    Row,
    [Col.name]: Col,
    [Dialog.name]: Dialog,
    Field
  },

  data () {
    return {
      isLoading: true,
      showss: false,
      message: '',
      nickName: ''
    }
  },

  computed: {
    taobaoCommandReg () {
      return /[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/
    },
    ...mapGetters([
      'isAuthenticated',
      'myFriends'
    ])
  },

  metaInfo: function () {
    return {
      title: '我的'
    }
  },

  mounted(){
    this.$store.dispatch(ACTION_LOGIN).then()
  },

  methods: {
    onRefresh () {
      this.$store.dispatch(ACTION_LOGIN).then(()=>{
        this.$toast('刷新成功')
        this.isLoading = false
        this.count--
        if (this.count < 0) {
          this.count = 0
        }
      })
    },

    addFriend () {
      if (this.myFriends.length>=6){
        this.$toast('只能跟6个好友互赞')
        return
      }
      console.log(this.isAuthenticated)
      if (this.isAuthenticated) {
        this.showss = !this.showss
      } else {
        this.$router.push('/login')
      }
    },

    getUserLink () {
      const result = this.taobaoCommandReg.exec(this.message)
      if (result) {
        return result[0]
      } else {
        return null
      }
    },

    checkTaobaoCommand () {
      if (this.taobaoCommandReg.test(this.message)) {
        const link = this.getUserLink();
        const name = this.nickName ? this.nickName : 'Hero'
        this.$store.dispatch(ACTION_ADD_FRIEND, { name, link }).then(() => {
          // this.friends.push({ name, link })
        })
      } else {
        this.$dialog.alert({ title: '警告', message: '解析口令失败QAQ' })
      }
      this.message = ''
      this.nickName = null
    },

    beforeClose (action, done) {
      if (action === 'confirm') {
        // setTimeout(done, 1000)
        this.checkTaobaoCommand()
        done()
      } else {
        done()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .my-like {
    min-height: 90vh;
    min-width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }

  .desc {
    width: 100%;
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

  .content {
    padding: 20px;
  }
</style>
