<template>
    <div id="auth-sign-in-page">
        <form @submit.prevent="submitForm">
          <div class="field">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username">
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">
          </div>
          <div class="field">
            <input type="submit" name="submit" @click.prevent="submitForm">
          </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'auth-sign-in-page',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
