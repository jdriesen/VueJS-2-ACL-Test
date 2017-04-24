<template>
  <div class="dsnFooter">
    <hr  />
    <h3>{{ msg }}</h3>
    It will be shown on every page...
    <hr  />
  </div>
</template>

<script>
export default {
  name: 'dsnFooter',
  data () {
    return {
      msg: 'This is the Footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
