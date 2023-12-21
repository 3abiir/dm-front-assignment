<template>
  <div class="flex">
    <div v-for="(image, index) in images" :key="index" class="dynamic-image">
      <img :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://dm-assignment-commonshare.koyeb.app/img/9.png', alt: 'Image 1' },
        { src: 'https://dm-assignment-commonshare.koyeb.app/img/9.png', alt: 'Image 2' }
      ]
    };
  }
};
</script>

<style scoped>
.dynamic-image {
  border-radius: 10px;
  width: 148px;
  height: 124px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px rgb(196, 195, 195) solid;
  margin-right: 12px;
  margin-bottom: 12px;
}

.dynamic-image:last-child {
  margin-right: 0;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .dynamic-image {
    width: 96px;
    height: 56px;
    margin-right: 12px;
  margin-bottom: 12px;
  }
}
</style>
