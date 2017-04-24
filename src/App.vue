<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import header from '@/components/Header'
import footer from '@/components/Footer'
export default {
  name: 'app',

  components: {
    'myHeader': header,
    'myFooter': footer,
  },

}
</script>

<style>
</style>
