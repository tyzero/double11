<template>
  <div class="make-friend">
    <h1>求赞</h1>
  </div>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: '求赞'
    }
  }
}
</script>

<style scoped lang="less">
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
</style>
