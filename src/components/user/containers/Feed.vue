<template>
  <div class="container">
    <div class="section">
        <h3>{{title}}</h3>
    </div>
    <div class="section">
      <ul v-if="objects.length > 0"
        class="list-reset"
      >
        <li v-for="obj in objects">
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
      <div v-if="objects.length < 1">
        This user has not been active lately.
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import UserAtomFeedArticle from '@components/user/atoms/FeedArticle.vue'
import UserAtomFeedImage from '@components/user/atoms/FeedImage.vue'

export default {
  name: 'user-container-feed',
  props: ['objects', 'user'],
  components: {
    UserAtomFeedArticle,
    UserAtomFeedImage
  },
  computed: {
    title() {
      return `${this.user.username}'s Feed`
    }
  }
}
</script>

<style scoped lang="scss">
</style>
