<template>
  <div class="home">
    <NoticeBar text="本应用基于相互信任，请谨慎点赞"
               :left-icon="iconTips"/>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <tabbar v-model="active">
      <TabbarItem icon="chat" dot to="/home">我的互赞</TabbarItem>
      <TabbarItem icon="shop" to="/home/friend">求赞</TabbarItem>
      <TabbarItem icon="records" info="5" to="/home/about">关于</TabbarItem>
    </tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  Button, Cell, NavBar, Toast, Tabbar, TabbarItem,
  CellGroup, NoticeBar
} from 'vant'

export default {
  name: 'home',
  components: {
    Button,
    Cell,
    CellGroup,
    NavBar,
    Tabbar,
    TabbarItem,
    NoticeBar
  },
  data() {
    return {
      iconTips: require('../assets/icon_tips.png'),
      active: 0
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    }
  }
}
</script>

<style lang="less">
  .bottom-line {
    padding: 15px;

  }
</style>
