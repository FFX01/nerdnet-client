<template>
  <div id="articles-create-page">
    <h2>Create Article</h2>
    <article-form-create></article-form-create>
  </div>
</template>

<script>
import ArticleFormCreate from '@components/article/forms/Create.vue'

export default {
  name: 'articles-create-page',
  components: {
    ArticleFormCreate
  }
}
</script>
