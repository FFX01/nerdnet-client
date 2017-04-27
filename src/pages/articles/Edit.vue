<template>
  <div id="article-edit-page">
  </div>
</template>

<script>
export default {
  name: 'article-edit-page',
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
