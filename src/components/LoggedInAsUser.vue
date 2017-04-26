<template>
  <div class="LoggedInAsUser">
    <h1 class='title'>{{ msg }}</h1>
    <p>
      You're currently logged in as <strong>USER</strong><br />
      <br  />
      <strong>The ACL Permission = {{curPermission}}</strong>
    </p>
    <ul>
      <li>
        It should <strong>NOT be possible</strong> to go the the admin section via the URL.... <br />
        When a user types <strong>'/admin'</strong> in the URL, the error page should be shown... <br /><br />
      </li>
      <li>Notice that the <strong>"Login as Admin"</strong> button is not shown</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'LoggedInAsUser',
  data () {
    return {
      msg: 'You are logged in as a USER with limited Access'
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
  color: blue;
}
</style>
