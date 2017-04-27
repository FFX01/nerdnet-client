<template>
  <div class="container bg-secondary-1 b3 bc-accent-2">
    <div class="section flex row flex-wrap">
      <div class="p1">
        <img :src="user.avatar.image_medium"
          v-if="user.avatar"
        />
      </div>
      <div class="flex column p1 pl2 pt0">
        <div>
          <h1>{{user.username}}</h1>
        </div>
        <div>
          <span><strong>Joined on:</strong> {{dateJoined}}</span>
        </div>
        <div v-html="bio">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-container-info',
  props: ['user'],
  computed: {
    bio() {
      if (this.user.bio !== undefined) {
        return this.$marked(this.user.bio, {sanitize: true})
      } else {
        return "<p>Loading...</p>"
      }
    },
    dateJoined() {
      if (this.user.date_joined) {
        return this.$moment(this.user.date_joined).format('YYYY-MM-DD - h:mm a')
      } else {
        return "Loading..."
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
