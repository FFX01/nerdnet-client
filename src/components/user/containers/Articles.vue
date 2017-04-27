<template>
  <div class="container">
    <div class="flex column"
      v-if="articles.results"
    >
      <article-box v-for="article in articles.results"
        key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import ArticleBox from '@components/article/atoms/ArticleBox.vue'

export default {
  name: 'articles',
  props: ['user'],
  components: {
    ArticleBox
  },
  computed: {
    articles() {
      return this.$store.getters['article/list']
    }
  },
  methods: {
    getArticles() {
      this.$store.dispatch('article/getList', {'author': this.user.id})
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>
