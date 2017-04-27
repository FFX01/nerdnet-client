<template>
  <div class="flex just-start bg-secondary-1 p1 mt1 b2 bc-accent-2">
    <div class="shrink-1 pr1">
      <img v-if="article.main_image"
        :src="article.main_image.image_small"
      />
    </div>
    <div class="flex column">
      <div>
        <router-link class="link"
          :to="{name: 'article-detail-page', params: {id: article.id}}"
        >
          <h3 class="s2 m0">{{article.title}}</h3>
        </router-link>
      </div>
      <div>
        <router-link v-if="showAuthor"
          class="link s1"
          :to="{name: 'people-detail-page', params: {id: article.author}}"
        >
          {{article.author_name}}
        </router-link>
        <br>
        <span><strong>Published:</strong> {{pubDate}}</span>
      </div>
      <div v-html="bodyPreview"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-box',
  props: ['article', 'showAuthor'],
  computed: {
    bodyPreview() {
      if (this.article.body) {
        return this.$marked(this.article.body.substring(0, 255), {sanitize: true})
      } else {
        return "<p>Loading...</p>"
      }
    },
    pubDate() {
      if (this.article.created) {
        return this.$moment(this.article.created).format('YYYY/MM/DD - h:mm a')
      } else {
        return "Loading..."
      }
    }
  }
}
</script>
