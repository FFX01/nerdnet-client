<template>
  <div id="people-detail-page" class="pl1 pr1 pt1">
    <user-container-info :user="user"></user-container-info>
    <router-link :to="{name: 'people-edit-page', params: {id: user.id}}"
      v-if="canEdit"
    >
      Edit
    </router-link>
    <user-atom-profile-tabs :activeTab="activeTab"
      v-on:changeTab="handleTabChange"
    ></user-atom-profile-tabs>
    <user-container-feed :objects="feed.results"
      :user="user"
      v-if="activeTab === 'home'"
    ></user-container-feed>
    <user-container-articles :user="user"
      v-if="activeTab === 'articles'"
    ></user-container-articles>
    <images-feed v-if="activeTab === 'images'"
      :user="user"
    ></images-feed>
  </div>
</template>

<script>
import UserContainerInfo from '@components/user/containers/Info.vue'
import UserContainerFeed from '@components/user/containers/Feed.vue'
import UserAtomProfileTabs from '@components/user/atoms/ProfileTabs.vue'
import UserContainerArticles from '@components/user/containers/Articles.vue'
import ImagesFeed from '@components/user/containers/ImagesFeed.vue'

export default {
  name: 'people-detail-page',
  components: {
    UserContainerInfo,
    UserContainerFeed,
    UserAtomProfileTabs,
    UserContainerArticles,
    ImagesFeed
  },
  data() {
    return {
      activeTab: "home"
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/detail']
    },
    feed() {
      return this.$store.getters['user/feed']
    },
    authUser() {
      return this.$store.getters['auth/authUser']
    },
    loggedIn() {
      return this.$store.getters['auth/loggedIn']
    },
    canEdit() {
      return this.user.permissions.write
    }
  },
  methods: {
    requestUser() {
      this.$store.dispatch('user/getDetail', this.$route.params.id)
    },
    requestFeed() {
      this.$store.dispatch('user/getFeed', this.$route.params.id, {})
    },
    handleTabChange(tab) {
      this.activeTab = tab
    }
  },
  mounted() {
    this.requestUser()
    this.requestFeed()
  }
}
</script>

<style scoped lang="scss">
</style>
