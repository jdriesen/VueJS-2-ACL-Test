<template>
  <div class="dsnHeader">
    <h3>{{ msg }}</h3>
    <p><strong>The ACL Permission (computed) = {{curPermission}}</strong></p>
    <p><strong>The ACL Permission (via data property) = {{dtaCurPersmission}}</strong></p>

    <button
      class   = "btnGreen"
      type    = "button"
      v-show  = '$can("notloggedin")'
      @click  = "btnLoginAdmin()">Login as Admin
    </button>

    <button
      class   = "btnBlue"
      type    = "button"
      v-show  = '$can("notloggedin|admin")'
      @click  = "btnLoginUser()">Login as User
    </button>

    <button
      class   = "btnOrange"
      type    = "button"
      v-show  = '$can("admin|user")'
      @click="btnLogout()">Logout
    </button>

    <hr  />
  </div>
</template>

<script>
export default {
  name: 'dsnHeader',
  data () {
    return {
      dtaCurPersmission: this.$access(),
      msg: 'Hi Yavor, Welcome to the ACL Demo',
    }
  },

  methods: {

    btnLoginAdmin() {
      let permission = 'admin'
      this.$access(permission)
      this.dtaCurPersmission = this.$access()
      this.$forceUpdate()
      this.$router.push ( { name: 'loggedInAsAdmin' } )
    }, // End of btnLoginAdmin

    btnLoginUser() {
      let permission = 'user'
      this.$access(permission)
      this.dtaCurPersmission = this.$access()
      this.$forceUpdate()
      this.$router.push ( { name: 'loggedInAsUser' } )
    }, // End of btnLoginUser


    btnLogout() {
      let permission = 'notloggedin'
      this.$access(permission)
      this.dtaCurPersmission = this.$access()
      this.$forceUpdate()
      this.$router.push ( { name: 'notLoggedIn' } )
    }, // End of btnLoginUser


  },

  computed: {
    curPermission() {
      console.log("curPermession Executed")
      return this.$access()
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btnGreen {
  color: green;
}

.btnOrange {
  color: orange;
}

.btnBlue {
  color: blue;
}


</style>
