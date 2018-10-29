<template>
  <div>
    <PullRefresh v-model="isLoading" @refresh="onRefresh">
      <div class="my-like">
        <Cell class="desc" title="互赞的朋友" label="根据双十一的规定，你每天最多能给6个战队点赞，所以你能添加6个好友" status="">
        </Cell>

        <div class="item">
          <h2>互赞列表</h2>
          <Row gutter="20" type="flex" justify="space-between">
            <van-col v-for="(item,index) in count" :key='index' v-if="index<3" span="8">
              <ItemFriend>
                {{index}}
              </ItemFriend>
            </van-col>
          </Row>

        </div>

        <p>jjj: {{ count }}</p>

      </div>
    </PullRefresh>
    <div class="footer">
      <Button @click="addFriend" size="normal" square type="default">添加好友口令</Button>
    </div>
  </div>

</template>

<script>
import { Panel, Button, PullRefresh, Cell, CellGroup, Row, Col } from 'vant'
import ItemFriend from '../components/ItemFriend'

export default {
  components: {
    Button,
    Panel,
    PullRefresh,
    Cell,
    CellGroup,
    ItemFriend,
    Row,
    [Col.name]: Col
  },

  data() {
    return {
      isLoading: true,
      count: 0
    }
  },

  metaInfo: function () {
    return {
      title: '我的'
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count--
        if (this.count < 0) {
          this.count = 0
        }
      }, 500)
    },

    addFriend() {
      this.count++
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
