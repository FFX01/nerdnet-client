<template>
  <div class="flex row just-start bg-secondary-1 p1 mt1 b2 bc-accent-2">

    <div class="shrink-1 pr1">
      <img :src="article.main_image.image_small" />
    </div>

    <div class="">
      <span>{{actionText}}</span>
      <hr>
      <router-link :to="{name: 'article-detail-page', params: {id: article.id}}"
        class="link s3"
      >
        {{article.title}}
      </router-link>
      <br>
      <span>{{pubDate}}</span>
      <div class="body-preview-wrapper" v-html="bodyPreview"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'user-atom-feed-article',
  props: ['obj', 'user'],
  computed: {
    article() {
      return this.obj.content_object
    },
    actionText() {
      let username = this.user.username
      let action = this.obj.action_type
      let message = ""
      switch (action) {
        case "create":
          message = `${username} added a new Article.`
          break
        case "update":
          message = `${username} updated an Article.`
          break
        default:
          message = `${username} did something.`
          break
      }
      return message
    },
    pubDate() {
      return this.$moment(this.obj.timestamp).format("YYYY-MM-DD - h:mm a")
    },
    bodyPreview() {
      return this.$marked(this.article.body.substring(0, 255), {sanitize: true})
    }
  }
}
</script>

<style scoped lang="scss">
</style>
