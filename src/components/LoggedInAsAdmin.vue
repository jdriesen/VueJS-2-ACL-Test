<template>
  <div class="LoggedInAsAdmin">
    <h1 class='title'>{{ msg }}</h1>
    <p> You're currently logged in as <strong>Administrator</strong><br />
      <br  />
      <strong>The ACL Permission = {{curPermission}}</strong>
    </p>
    <ul>
      <li>YOU CAN go the /user via the URL</li>
      <li>The <strong>Login as User</strong> button should be visible</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoggedInAsAdmin',
  data () {
    return {
      msg: 'Your are logged in as ADMINISTRATOR'
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
.title {
  color: green;
}
</style>
