<template>
  <div class="dsnError">
    <h1 class="title">{{ msg }}</h1>
    <p>This is the ERROR Component</p>
  </div>
</template>

<script>
export default {
  name: 'dsnError',
  data () {
    return {
      msg: 'This is the ERROR Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: red;
}
</style>
