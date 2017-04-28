<template>
  <div>
    <ul class="tabs bg-secondary-1 b2 bc-accent-2">
      <li class="tab"
        :class="{active: isActive('home')}"
        @click="onTabChange('home')"
      >
        <i class="fa fa-home"></i>
        <span>Home</span>
      </li>
      <li class="tab"
        :class="{active: isActive('articles')}"
        @click="onTabChange('articles')"
      >
        <i class="fa fa-book"></i>
        <span>Articles</span>
      </li>
      <li class="tab"
        :class="{active: isActive('images')}"
        @click="onTabChange('images')"
      >
        <i class="fa fa-picture-o"></i>
        <span>Images</span>
      </li>
      <li class="tab"
        :class="{active: isActive('discussion')}"
        @click="onTabChange('discussion')"
      >
        <i class="fa fa-commenting-o"></i>
        <span>Discussion</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user-atom-profile-tabs',
  props: ['activeTab'],
  methods: {
    onTabChange(tab) {
      this.$emit('changeTab', tab)
    },
    isActive(tab) {
      return this.activeTab === tab
    }
  }
}
</script>
