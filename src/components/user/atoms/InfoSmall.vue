<template>
  <div class="user-atom-info-small">
    <div>
      <img v-if="user.avatar" :src="user.avatar.image_thumb"
        :alt="user.avatar.title"
      />
    </div>
    <div>
      <router-link :to="{name: 'people-detail-page', params: {id: user.id}}">
        {{user.username}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-atom-info-small',
  props: ['user']
}
</script>
