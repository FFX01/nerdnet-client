<template>
  <div id="main-header" class="flex just-between p1 items-center bg-black">
    <div class="flex just-start">
        <router-link :to="{name: 'home-page'}"
          class="nav-link"
        >
            <h1 class="m0 c-accent-2">NerdNet</h1>
        </router-link>
    </div>
    <div class="flex just-end">
        <nav id="main-nav">
          <ul class="list-reset flex just-between">
              <li class="p1">
                  <router-link :to="{name: 'people-index-page'}"
                    class="nav-link"
                  >
                      People
                  </router-link>
              </li>
              <li class="p1">
                  <router-link :to="{name: 'article-index-page'}"
                    class="nav-link"
                  >
                      Articles
                  </router-link>
              </li>
              <li class="p1">
                  <router-link :to="{name: 'images-index-page'}"
                    class="nav-link"
                  >
                      Images
                  </router-link>
              </li>
          </ul>
        </nav>
        <nav id="main-auth-nav">
          <ul class="list-reset flex just-between">
            <li v-if="!loggedIn" class="p1">
              <router-link :to="{name: 'auth-sign-in-page'}"
                tag="button"
              >
                Sign In
              </router-link>
            </li>
            <li v-if="!loggedIn" class="block p1">
              <router-link :to="{name: 'auth-sign-up-page'}"
                tag="button"
              >
                Sign Up
              </router-link>
            </li>
            <li v-if="loggedIn" class="p1">
              <button @click="handleSignOut">Sign Out</button>
            </li>
          </ul>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn']
    }
  },
  methods: {
    handleSignOut() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
