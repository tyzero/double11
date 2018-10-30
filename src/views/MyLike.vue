<template>
  <div>

    <PullRefresh v-model="isLoading" @refresh="onRefresh">
      <div class="my-like">
        <Cell class="desc" title="互赞的朋友" label="根据双十一的规定，你每天最多能给6个战队点赞，所以你能添加6个好友" status="">
        </Cell>

        <div class="item">
          <h2>互赞列表</h2>
          <Row gutter="20" type="flex">
            <van-col v-for="(item,index) in friends" :key='index' v-if="index<3" span="8">
              <ItemFriend>
                <a :href="'taobao://'+item.link">
                  {{item.name}}
                </a>
              </ItemFriend>
            </van-col>
          </Row>
          <Row gutter="20" type="flex" v-if="friends.length>3">
            <van-col v-for="(item,index) in friends" :key='index' v-if="index>2 &&index<6" span="8">
              <ItemFriend>
                {{item.name}}
                {{item.link}}
              </ItemFriend>
            </van-col>
          </Row>

        </div>

        <p>已添加: {{ friends.length}}</p>

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
      friends: [],
      showss: false,
      message: '',
      nickName: ''
    }
  },

  computed: {
    kouLinReg () {
      return /[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g
    }
  },

  metaInfo: function () {
    return {
      title: '我的'
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count--
        if (this.count < 0) {
          this.count = 0
        }
      }, 500)
    },

    addFriend () {
      this.showss = !this.showss
    },


    getUserLink () {
      const result = this.kouLinReg.exec(this.message)
      if (result) {
        return result[0]
      }else {
        return null
      }
    },

    beforeClose (action, done) {
      if (action === 'confirm') {
        // setTimeout(done, 1000)

        this.friends.push({ name: this.nickName ? this.nickName : 'Hero', link: this.getUserLink() })
        this.message = ''
        this.nickName = null
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
