<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Button>test</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Cell } from 'vant'

export default {
  name: 'home',
  components: {
    Button,
    Cell
  }
}
</script>
