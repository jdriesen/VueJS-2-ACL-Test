<template>
  <div class="notLoggedIn">
    <h1>{{ msg }}</h1>
    <p>
      This is the 'default' component <br />
      Currently, Nobody is logged in ... <br  />
      <br  />
      <strong>The ACL Permission = {{curPermission}}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'notLoggedIn',
  data () {
    return {
      msg: 'Nobody is Logged in'
    }
  },

  computed: {
    curPermission() {
      return this.$access()
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
