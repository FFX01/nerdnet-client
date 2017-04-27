<template>
  <div id="app">
    <main-header></main-header>
    <div id="body-container">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from '@components/common/MainHeader.vue'
import MainFooter from '@components/common/MainFooter.vue'

export default {
  name: 'app',
  components: {
      MainHeader,
      MainFooter
  },
  beforeMount() {
    if(window.sessionStorage.getItem('token')) {
      this.$store.commit('auth/receivedLoggedIn', true)
      this.$store.dispatch('auth/getAuthUser')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/style/main.scss';
@import '../node_modules/font-awesome/css/font-awesome.css';
</style>
