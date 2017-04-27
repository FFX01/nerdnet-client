<template>
  <div id="articles-index-page" class="container">
    <div class="flex column"
      v-if="articles.results"
    >
      <article-box v-for="article in articles.results"
        key="article.id"
        :article="article"
        :showAuthor="true"
      />
    </div>
    <paginator v-if="articles.results"
      :previous="articles.previous"
      :next="articles.next"
      :count="articles.count"
      @previous="handlePreviousPage"
      @next="handleNextPage"
    />
  </div>
</template>

<script>
import ArticleBox from '@components/article/atoms/ArticleBox.vue'
import Paginator from '@components/common/Paginator.vue'

export default {
  name: 'articles-index-page',
  components: {
    ArticleBox,
    Paginator
  },
  computed: {
    articles() {
      return this.$store.getters['article/list']
    }
  },
  methods: {
    getArticles() {
      this.$store.dispatch('article/getList')
    },
    handlePreviousPage() {
      this.$store.dispatch('article/getPreviousPage')
    },
    handleNextPage() {
      this.$store.dispatch('article/getNextPage')
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>
