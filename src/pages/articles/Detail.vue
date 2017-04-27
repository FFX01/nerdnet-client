<template>
  <div id="article-detail-page">
    <article-container-detail-info :article="article"
      v-if="article.id"
    ></article-container-detail-info>
    <article-container-detail-body :article="article"></article-container-detail-body>
    <article-container-image-gallery :images="article.images"></article-container-image-gallery>
  </div>
</template>

<script>
import ArticleContainerDetailInfo from '@components/article/containers/DetailInfo.vue'
import ArticleContainerImageGallery from '@components/article/containers/ImageGallery.vue'
import ArticleContainerDetailBody from '@components/article/containers/DetailBody.vue'

export default {
  name: 'article-detail-page',
  components: {
    ArticleContainerDetailInfo,
    ArticleContainerImageGallery,
    ArticleContainerDetailBody
  },
  computed: {
    article() {
      return this.$store.getters['article/detail']
    }
  },
  methods: {
    requestArticle() {
      this.$store.dispatch('article/getDetail', this.$route.params.id)
    }
  },
  mounted() {
    this.requestArticle()
  }
}
</script>

<style scoped lang="scss">
</style>
