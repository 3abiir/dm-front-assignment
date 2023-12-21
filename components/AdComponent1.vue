<template>
  <!-- Ad 1 -->
  <div class="relative w-full rounded-md overflow-hidden bg-blue-500 mobile-style">
      <!-- Background Ellipses -->
      <div class="absolute bottom-0 left-5 transform scale-150 translate-x-1/3 translate-y-1/3">
        <div class="ellipse ellipse-775"></div>
        <div class="ellipse ellipse-650"></div>
        <div class="ellipse ellipse-525"></div>
        <div class="ellipse ellipse-400"></div>
        <div class="ellipse ellipse-275"></div>
      </div>
      
      <!-- Ad Content -->
      <div class="relative z-10 p-6 text-white">
        <h2 v-if="showTitle" class="custom-h2">
          The Best Platform for Car Rental
        </h2>
        <p v-if="showSubTitle" class="custom-p my-4">
          Ease of doing a car rental safely and reliably. Of course at a low price.
        </p>
        <button v-if="showButton" class="custom-button">
          Rental Car
        </button>
      </div>

      <slot name="image"></slot>
      
      <!-- Car Image -->
      <div v-if="showImage" class="image-car-ad1 absolute bottom-0">
        <img src="~/assets/images/ad1-image.webp" >
      </div>

      <!-- SVG Circle -->
      <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="170" height="140" viewBox="0 0 170 140" fill="none">
        <circle cx="40" cy="85" r="50" stroke="white" stroke-opacity="0.06" stroke-width="20"/>
      </svg>
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
.ellipse {
  position: absolute;
  border: 20px solid rgba(255, 255, 255, 0.06);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.ellipse-775 { width: 775px; height: 775px; }
.ellipse-650 { width: 650px; height: 650px; }
.ellipse-525 { width: 525px; height: 525px; }
.ellipse-400 { width: 400px; height: 400px; }
.ellipse-275 { width: 275px; height: 275px; }

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
  background: #3563E9;
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
    background: #54A6FF;
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
