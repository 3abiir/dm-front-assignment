<template>
  <!-- Ad Section -->
  <div class="relative w-full rounded-md overflow-hidden bg-[#3563E9] mobile-style">
    <!-- SVG Background Pattern -->
    <div class="svg-background-pattern absolute inset-0"></div>

    
    <!-- Ad Content -->
    <div class="relative z-10 p-6 text-white">
      <h2 v-if="showTitle" class="custom-h2">
        Easy way to rent a car at a low price
      </h2>
      <p v-if="showSubTitle" class="custom-p my-4">
        Providing cheap car rental services and safe and comfortable facilities.
      </p>
      <button v-if="showButton" class="custom-button">
        Rental Car
      </button>
    </div>

    <slot name="image"></slot>
    
    <!-- Car Image -->
    <div v-if="showImage" class="image-car-ad1 absolute bottom-0">
        <img src="~/assets/images/ad2-image.webp" >
      </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: String,
  showTitle: {
    type: Boolean,
    default: true,
  },
  showSubTitle: {
    type: Boolean,
    default: true,
  },
  showImage: {
    type: Boolean,
    default: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.ad-section {
  width: 640px;
  height: 360px;
}


.svg-background-pattern {
  background-image: 
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="75" height="120" viewBox="0 0 150 240" fill="none"><path d="M25 60L0 0H25H50L75 60L50 120H25H0L25 60Z" fill="white" fill-opacity="0.06"/><path d="M125 180l25 60h-25h-50l-25-60 25-60h25h50l-25 60Z" fill="white" fill-opacity="0.06"/></svg>');
  background-repeat: repeat;
  background-size: 150px 240px;
  background-position: 0 0, 75px 120px;
  height: 100%;
}

.custom-h2,
.custom-p {
  width: 272px;
  color: #FFF;
  line-height: 150%;
  letter-spacing: -0.96px;
}

.custom-h2 {
  font-size: 32px;
  font-weight: 600;
}

.custom-button {
  display: flex;
  width: 130px;
  height: 44px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #54A6FF;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

.mobile-style {
  height: 360px;
  margin-right: 13px;
}

@media (max-width: 768px) {
  .custom-h2 {
    font-size: 16px;
    font-weight: 600;
    padding:0;
    margin:0;
  }

  .custom-p {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.2px;
  }

  .custom-button {
    font-size: 12px;
    letter-spacing: -0.24px;
    width: 128px;
    height: 44px;
  }

  .mobile-style {
    width: 327px;
    height:232px;
    margin-bottom: 0;
    margin: 24px;
  }

  .image-car-ad1 {
    width: 196px;
    height: 56px;
    margin-left: 53px;
    margin-right: 78px;
    margin-bottom: 4px;
  }

}

</style>
