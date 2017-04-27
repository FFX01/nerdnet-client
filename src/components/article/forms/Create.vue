<template>
  <div class="article-form-create">
    <div>
    </div>

    <div>
      <div>
        <label>Title</label>
        <input type="text" v-model="article.title">
      </div>
      <div>
        <label>Set as Draft?</label>
        <input type="checkbox" v-model="article.is_draft">
      </div>
      <div>
        <label>Main Image</label>
        <div v-if="article.main_image !== null">
          <img :src="article.main_image.image_small">
        </div>
        <button v-if="!showMainImageChooser"
          @click="handleShowMainImageChooser"
        >Choose Image</button>
        <image-container-chooser
          v-if="showMainImageChooser"
          @cancel="handleMainImageCancel"
          @select="handleMainImageSelect"
        ></Image-container-chooser>
      </div>
      <div>
        <label>Body</label>
        <textarea v-model="article.body"></textarea>
      </div>
      <div>
        <label>Gallery</label>
        <div>
          <image-atom-small-box v-for="image in article.images"
            :image="image"
            :key="image.id"
          ></image-atom-small-box>
        </div>
        <button @click="handleShowGalleryImageChooser"
          v-if="!showGalleryImageChooser"
        >+</button>
        <image-container-chooser v-if="showGalleryImageChooser"
          @select="handleGalleryImageSelect"
          @cancel="handleGalleryImageCancel"
        ></image-container-chooser>
      </div>
    </div>

    <div>
      <input type="submit" value="Save" @click="handleArticleSubmit">
      <a id="cancel" @click="handleArticleCancel">Cancel</a>
    </div>
  </div>
</template>

<script>
import ImageContainerChooser from '@components/image/containers/Chooser.vue'
import ImageAtomSmallBox from '@components/image/atoms/SmallBox.vue'

export default {
  name: 'article-form-create',
  components: {
    ImageContainerChooser,
    ImageAtomSmallBox
  },
  data() {
    return {
      article: {
        title: "",
        is_draft: false,
        main_image: null,
        images: [],
        body: ""
      },
      showMainImageChooser: false,
      showGalleryImageChooser: false
    }
  },
  computed: {
    authUser() {
      return this.$store.getters['auth/authUser']
    },
    newArticle() {
      return this.$store.getters['article/detail']
    }
  },
  methods: {
    handleMainImageSelect(image) {
      this.article.main_image = image
      this.showMainImageChooser = false
    },
    handleMainImageCancel() {
      this.showMainImageChooser = false
    },
    handleShowMainImageChooser() {
      this.showMainImageChooser = true
    },
    handleShowGalleryImageChooser() {
      this.showGalleryImageChooser = true
    },
    handleGalleryImageSelect(image) {
      this.article.images.push(image)
      this.showGalleryImageChooser = false
    },
    handleGalleryImageCancel() {
      this.showGalleryImageChooser = false
    },
    handleArticleSubmit() {
      let payload = Object.assign({}, this.article, {
        author: this.authUser.pk
      })
      this.$store.dispatch('article/create', {data: payload, redirect: true})
    },
    handleArticleCancel() {
      this.$router.push({name: 'article-index-page'})
    }
  }
}
</script>

<style scoped>
</style>
