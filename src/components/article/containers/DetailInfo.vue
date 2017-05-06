<template>
  <div id="article-container-detail-info">
    <div class="article-header"
      v-bind:style="backgroundImageSrc"
    >
      <div class="title-wrapper">
        <h1 id="article-title">{{article.title}}</h1>
      </div>
    </div>
    <div>
      <p>Created on: {{created}}</p>
      <p>Last Updated: {{updated}}</p>
      <div>
        <label>Author</label>
        <user-atom-info-small v-if="user.id" :user="user"></user-atom-info-small>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import UserAtomInfoSmall from '@components/user/atoms/InfoSmall.vue'

export default {
  name: 'article-container-detail-info',
  props: ['article'],
  components: {
    UserAtomInfoSmall
  },
  computed: {
    created() {
      return moment(this.article.created).format("YYYY/MM/DD - h:mm a")
    },
    updated() {
      return moment(this.article.updated).format("YYYY/MM/DD - h:mm a")
    },
    user() {
      return this.$store.getters['user/detail']
    },
    backgroundImageSrc() {
      let url = "http://placehold.it/1200x1200"
      if (this.article.main_image) {
        url = this.article.main_image.image
      }
      return 'background-image: url('+url+')'
    }
  },
  methods: {
    fetchAuthor() {
      this.$store.dispatch('user/getDetail', this.article.author)
    }
  },
  watch: {
    article(val, oldVal) {
      if (val.author) {
        this.fetchAuthor()
      }
    }
  }
}
</script>

<style scoped lang="scss">
#article-title {
  margin: 0;
}
.article-header {
  background-position: center;
  padding-top: 150px;
  padding-bottom: 50px;
}
.title-wrapper {
  max-width: 50%;
  background-color: rgba(20,20,20, 0.5);
  padding: 1em;
}
</style>
