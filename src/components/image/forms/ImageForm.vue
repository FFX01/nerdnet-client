<template>
  <div class="bg-secondary-2 p1">
    <form @submit.prevent="onSubmit">
      <div v-if="preview !== null">
        <img class="img-small" :src="preview" />
      </div>
      <div>
        <label>Image</label>
        <input type="file" accept="image"
          @change="handleImageChange"
        />
      </div>
      <div>
        <label>Title</label>
        <input type="text" v-model="image.title" />
      </div>
      <div>
        <label>Source</label>
        <input type="url" v-model="image.source" />
      </div>
      <div>
        <label>Description</label>
        <textarea v-model="image.description"></textarea>
      </div>
      <div v-if="image.tags.length > 0">
        <tag-list :tags="image.tags" />
      </div>
      <div>
        <label>Tags</label>
        <input type="text" v-model="tagText" />
      </div>
      <div>
        <button @click.prevent="onSubmit">Save</button>
        <Button @click.prevent="onCancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import TagList from '@components/common/TagList.vue'

export default {
  name: 'image-form',
  props: ['editImage'],
  components: {
    TagList
  },
  data() {
    return {
      image: {
        title: "",
        description: "",
        image: null,
        tags: [],
        source: ""
      },
      tagText: "",
      preview: null
    }
  },
  methods: {
    onSubmit() {
      let payload = new FormData()
      let image = this.image
      payload.append('title', image.title)
      payload.append('description', image.description)
      payload.append('image', image.image)
      payload.append('owner', this.$store.getters['auth/authUser'].pk)
      let tags = `[]`
      payload.append('tags', JSON.stringify(image.tags))
      this.$store.dispatch('image/createNew', payload)
      this.$emit('complete')
    },
    onCancel() {
      this.$emit('cancel')
    },
    handleImageChange(e) {
      let file = e.target.files[0]
      this.image.image = file
      this.renderPreview()
    },
    renderPreview() {
      let reader = new FileReader()
      reader.addEventListener('load', () => {
        this.preview = reader.result
      }, false)
      reader.readAsDataURL(this.image.image)
    },
  },
  watch: {
    tagText(val, oldVal) {
      console.log(val)
      if (val.indexOf(',') !== -1) {
        this.image.tags.push(val.split(',')[0])
        this.tagText = ""
      }
    },
  },
  mounted() {
    if (this.editImage !== undefined) {
      this.image = this.editImage
    }
  }
}
</script>
