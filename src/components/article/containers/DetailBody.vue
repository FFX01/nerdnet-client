<template>
  <div class="article-container-detail-body">
    <div v-if="article.id" v-html="body"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'article-container-detail-body',
  props: ['article'],
  computed: {
    body() {
      return marked(this.article.body, {sanitize: true})
    }
  }
}
</script>
