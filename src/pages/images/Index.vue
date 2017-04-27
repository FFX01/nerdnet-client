<template>
    <div id="images-index-page">
        <div class="flex row just-around flex-wrap"
          v-if="images.results"
        >
          <image-box-medium v-for="image in images.results"
            key="image.id"
            :image="image"
            :showOwner="true"
          />
        </div>
        <paginator v-if="images.results"
          :previous="images.previous"
          :next="images.next"
          :count="images.count"
          @previous="lastPage"
          @next="nextPage"
        />
    </div>
</template>

<script>
import ImageBoxMedium from '@components/image/atoms/MediumBox.vue'
import Paginator from '@components/common/Paginator.vue'

export default {
    name: 'images-index-page',
    components: {
      ImageBoxMedium,
      Paginator
    },
    computed: {
      images() {
        return this.$store.getters['image/list']
      }
    },
    methods: {
        getImages() {
            this.$store.dispatch('image/getList')
        },
        lastPage() {
            this.$store.dispatch('image/previousPage')
        },
        nextPage() {
            this.$store.dispatch('image/nextPage')
        }
    },
    mounted() {
        this.getImages()
    }
}
</script>
