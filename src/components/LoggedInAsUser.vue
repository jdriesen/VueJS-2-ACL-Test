<template>
  <div class="LoggedInAsUser">
    <h1 class='title'>{{ msg }}</h1>
    <p>
      You're currently logged in as <strong>USER</strong><br />
      <ul>
        <li>
          It should <strong>NOT be possible</strong> to go the the admin section via the URL.... <br />
          When a user types <strong>'/admin'</strong> in the URL, the error page should be shown... <br /><br />
        </li>
        <li>The <strong>Login as Admin</strong> button may not be shown</li>
      </ul>

    </p>
  </div>
</template>

<script>
export default {
  name: 'LoggedInAsUser',
  data () {
    return {
      msg: 'Your are logged in as a USER with limited Access'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: blue;
}
</style>
