<template>
  <div class="flex row just-start mt1 bg-secondary-1 p1 b2 bc-accent-2">
    <div class="pr1 shrink-1">
      <a :href="image.image">
        <img :src="image.image_medium" />
      </a>
    </div>
    <div>
      <span>{{actionText}}</span>
      <hr>
      <span class="s2">{{image.title}}</span>
      <br>
      <span>{{pubDate}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-atom-feed-image',
  props: ['obj', 'user'],
  computed: {
    image() {
      return this.obj.content_object
    },
    pubDate() {
      return this.$moment(this.obj.timestamp).format('YYYY-MM-DD - h:mm a')
    },
    actionText() {
      let username = this.user.username
      let action = this.obj.action_type
      let message = ""
      switch (action) {
        case "create":
          message = `${username} added a new Image.`
          break
        case "update":
          message = `${username} updated an Image.`
          break
        default:
          message = `${username} did something.`
          break
      }
      return message
    }
  }
}
</script>

<style scoped lang="scss">
</style>
