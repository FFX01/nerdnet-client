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
import moment from 'moment'

export default {
  name: 'user-atom-feed-image',
  props: ['obj', 'user'],
  computed: {
    image() {
      return this.obj.content_object
    },
    pubDate() {
      return moment(this.image.timestamp).format('YYYY-MM-DD - h:mm a')
    },
    actionText() {
      return `${this.user.username} ${this.obj.action_type} a new Image!`
    }
  }
}
</script>

<style scoped lang="scss">
</style>
