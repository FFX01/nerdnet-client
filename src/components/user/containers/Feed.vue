<template>
  <div class="container">
    <ul v-if="feed.results.length > 0"
      class="list-reset"
    >
      <li v-for="obj in feed.results" key="obj.id">
        <user-atom-feed-article v-if="obj.content_type === 'article'"
          :obj="obj"
          :user="user"
        ></user-atom-feed-article>
        <user-atom-feed-image v-if="obj.content_type === 'image'"
          :obj="obj"
          :user="user"
        ></user-atom-feed-image>
      </li>
    </ul>
    <div class="section">
      <div v-if="feed.results.length < 1">
        This user has not been active lately.
      </div>
    </div>
    <paginator :previous="feed.previous"
      :next="feed.next"
      :count="feed.count"
      @previous="onPreviousPage"
      @next="onNextPage"
    />
  </div>
</template>

<script>
import UserAtomFeedArticle from '@components/user/atoms/FeedArticle.vue'
import UserAtomFeedImage from '@components/user/atoms/FeedImage.vue'
import Paginator from '@components/common/Paginator.vue'

export default {
  name: 'user-container-feed',
  props: ['user'],
  components: {
    UserAtomFeedArticle,
    UserAtomFeedImage,
    Paginator
  },
  computed: {
    feed() {
      return this.$store.getters['user/feed']
    }
  },
  methods: {
    getFeed() {
      this.$store.dispatch('user/getFeed', this.user.id)
    },
    onPreviousPage() {
      this.$store.dispatch('user/getFeedPreviousPage')
    },
    onNextPage() {
      this.$store.dispatch('user/getFeedNextPage')
    }
  },
  mounted() {
    this.getFeed()
  }
}
</script>

<style scoped lang="scss">
</style>
