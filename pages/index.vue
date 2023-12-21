<template>

  <div>
    <TopNavbar />
  </div>

  <div class="content-page">
    <div class="flex">
      <div class="w-[640px] h-[360px]">
        <AdComponent1 />
      </div>

      <div class="display-mobile" style="padding: 14px;"></div>

      <div class="display-mobile w-[640px] h-[360px]">
        <AdComponent2 />
      </div>
    </div>


    <div class="title-section py-5">
      <p class="left">Popular Car</p>
      <a class="right" href="#">View All</a>
    </div>

    <!-- Popular Car -->
    <div class="display-mobile">
      <!-- to adapt in responsive by abir -->
      <Products :maxProducts="4" />
    </div>

    <div class="title-section py-5">
      <p class="left">Recomendation Car</p>
    </div>

    <!-- Recomendation Car -->
    <div  class="display-mobile">
      <Products :maxProducts="maxProducts" :totalProducts="totalProducts" @show-all-products="loadMoreProducts" />
    </div>
    

  </div>


  <div>
    <Footer />
  </div>

</template>

<script>
import Products from "../components/Products";

export default {
  components: {
    Products,
  },

  data() {
    return {
      maxProducts: 8,
      totalProducts: 0,
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    loadMoreProducts() {
      this.maxProducts += 8;
    },
  },
};
</script>

<style>

.title-section {
    display: flex;
    justify-content: space-between;
  }

  .title-section p {
    display: flex;
    height: 24px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #90A3BF;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin-left: 20px;
  }

  .right {
    color: #3563E9;
    font-size: 16px;
    font-weight: 600;
  }



/* AD SECTION */
.ad-1 {
  border-radius: 10px;
  background: #54A6FF;
}


.image-car-ad1 {
  width: 406px;
  height: 116px;
  flex-shrink: 0;
  margin-left: 137px;
  margin-right:97px;
  margin-top:210px;
  margin-bottom: 10px;
}

.image-car-ad2 {
  width: 340px;
  height: 108px;
  flex-shrink: 0;
  margin-left: 201px;
  margin-right: 97px;
  margin-top:210px;
  margin-bottom: 10px;
}

.custom-p {
  font-size: 16px;
  font-weight: 500;
}

.ad-1 {
  margin:0;
  padding: 0;
  height: 232px;
}

@media (max-width: 768px) {
  .display-mobile {
    display:none;
  }

  .content-page {
    margin: 0;
  }
}

</style>