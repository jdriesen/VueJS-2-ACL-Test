<template>
  <div class="dsnHeader">
    <h3>{{ msg }}</h3>
    <p>This is the Header Component</p>
    <button type="button" @click="btnLoginAdmin()">Login as Admin</button>
    <button type="button" @click="btnLoginUser()">Login as User</button>
    <hr  />
  </div>
</template>

<script>
export default {
  name: 'dsnHeader',
  data () {
    return {
      msg: 'Welcome to the ACL Demo'
    }
  },

  methods: {

    btnLoginAdmin() {
      this.$router.push ( { name: 'loggedInAsAdmin' } );
    }, // End of btnLoginAdmin

    btnLoginUser() {
      this.$router.push ( { name: 'loggedInAsUser' } );
    }, // End of btnLoginAdmin

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
