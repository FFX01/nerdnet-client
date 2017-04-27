<template>
  <div class="flex row m1 bg-secondary-1 p1 b3 bc-accent-2">
    <div>
      <a :href="image.image">
        <img :src="image.image_medium" />
      </a>
    </div>
    <div class="flex column pl1">
      <div>
        <h3 class="s2 m0">{{title}}</h3>
        <router-link class="link s1"
          v-if="showOwner"
          :to="{name: 'people-detail-page', params: {id: image.owner}}"
        >
          {{image.owner_name}}
        </router-link>
        <p class="m0">Last Updated: {{lastUpdated}}</p>
      </div>
      <div v-html="description">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'medium-box',
  props: ['image', 'showOwner'],
  computed: {
    title() {
      return this.image.title ? this.image.title : "Untitled"
    },
    description() {
      return this.$marked(this.image.description, {sanitize: true})
    },
    lastUpdated() {
      return this.$moment(this.image.updated).format('YYYY/MM/DD - h:mm a')
    }
  }
}
</script>
