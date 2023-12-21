<template>

  <div>
    <TopNavbar />
  </div>

  <div class="content-page">
    <div class="flex responsive-container">
      <div class="mr-8" style="width: 492px;">

        <!-- section 1 -->
       <div class="pb-6">
        <AdComponent2
          :showImage="false"
          :showButton="false">
          <template #image>
            <div class="px-14">
              <img src="~/assets/images/ad2-image.webp" alt="Car Image">
            </div>
          </template>
        </AdComponent2>
       </div>


       <!-- section 2  -->
       <div class="flex section-images">

        <div class="dynamic-image rounded-lg flex-shrink-0">
          <AdComponent2
            style="width: 148px; height: 124px;"
            class="responsive-ad"
            :showImage="false"
            :showButton="false"
            :showTitle="false"
            :showSubTitle="false"
          >
            <template #image>
              <div style="margin-left: 26px;margin-right: 26px;">
                <img src="~/assets/images/ad2-image.webp">
              </div>
            </template>
          </AdComponent2>
        </div>

        <ImagesCarDetail />

       </div>
      </div>

      <!-- section 3 -->
      <div v-if="selectedProduct" class="detail-car detail-car-detail container px-4 sm:px-0">
        
        <div class="flex">
          <div>
            <span class="product-name pr-3">{{ selectedProduct.name }}</span>
          </div>
          <div>
            <FavoriteCar :productId="selectedProduct.id.toString()" />
          </div>
        </div>

        <div>
          <span v-for="star in starRating(selectedProduct.id)" :key="star">⭐</span>
        </div>

        <div>
          <p class="custom-description pt-8">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </p>
        </div>

        <div class="car-informations py-8">
          <span class="title-property">Type Car</span>
          <span class="value-property">{{ selectedProduct.type }}</span>
          <span class="title-property">Capacity</span>
          <span class="value-property">{{ selectedProduct.people }} Person</span>
          <span class="title-property">Gasoline</span>
          <span class="value-property">{{ selectedProduct.gasolineLiter }}L</span>
          <span class="title-property">Steering</span>
          <span class="value-property">{{ selectedProduct.kindOfTransition}}</span>
        </div>

        <div class="price-info price-info-detail price-data price-data-detail flex justify-between items-center bottom-0 px-4 sm:px-8">
          <div class="flex flex-col">
            <div>
              <span class="product-price custom-span custom-span-detail">${{ selectedProduct.pricePerDay}}/</span>
              <p class="product-price-p product-price-p-detail">day</p>
            </div>

            <div>
              <span class="old-price">
                $100.00
              </span>
            </div>

          </div>

          <div class="custom-div custom-div-detail custom-div-style">
            <button class="text-btn">Rent Now</button>
          </div>
        </div>

      </div>

    </div>

    <div class="title-section py-5">
      <p class="left">Recomendation Car</p>
    </div>

    <div class="display-mobile">
      <Products :maxProducts="maxProducts" :totalProducts="totalProducts" @show-all-products="loadMoreProducts" :showButton="false"/>
    </div>
  </div>

  <div>
    <Footer />
  </div>
</template>

<script>
import Products from "../components/Products";
import ImagesCarDetail from '../components/ImagesCarDetail.vue';
import { useFavoritesStore } from '~/stores/favorites';

export default {
  components: {
    Products,
    ImagesCarDetail
  },

  data() {
    return {
      maxProducts: 8,
      totalProducts: 0,
      selectedProduct: null
    };
  },

  computed: {
    starRating() {
      return () => {
        return 5;
      };
    },
  },

  mounted() {
    window.scrollTo(0, 0);
    const productString = localStorage.getItem('selectedCar');
    if (productString) {
      this.selectedProduct = JSON.parse(productString);
    }
  },

  methods: {
    loadMoreProducts() {
      this.maxProducts += 8;
    },
  },
};
</script>

<style>
@import "../../assets/common.scss";

.text-btn {
  font-weight: 700;
}

.title-property {
  color: #90A3BF;
  font-family: "Plus Jakarta Sans";
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  margin-right: 16px;
}

.value-property {
  height: 28px;
  padding-right:44px;
  color: #596780;
  font-family: "Plus Jakarta Sans";
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.4px;
}


.title-layout {
  width: 92px;
  height: 28px;
}

.product-name {
  display: flex;
  height: 40px;
  flex-direction: column;
  color: #1A202C;
  font-family: "Plus Jakarta Sans";
  font-size: 32px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.96px;
}

.custom-description {
  /* width: 740px; */
  color: #596780;
  font-family: "Plus Jakarta Sans";
  font-size: 20px;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: -0.4px;
}

.detail-car-detail {
  width: 788px;
  height: 508px;
  border-radius: 10px;
  background:  #FFF;
  padding:24px;
}

.price-info-detail {
  position: relative;
  height: 250px;
}

.custom-span-detail {
  font-size: 28px;
}

.product-price-p-detail {
  font-size: 16px;
}

.price-data-detail {
  padding-bottom: 34px;
}

.custom-div-detail {
  width: 140px;
  height: 56px;
}

.old-price {
  display:none;
}

@media (max-width: 768px) {
  .display-mobile{
    display:none;
  }

  .responsive-container {
    flex-direction: column;
  }

  .responsive-container > div {
    width: 100%;
    margin-right: 0;
  }

  .responsive-ad {
    width: 96px;
    height: 56px;
  }

  .responsive-ad[style] {
    width: 96px !important;
    height: 56px !important;
    margin:0 20px 0 0;
  }

  .pb-6 {
    padding-bottom: 0 !important;
  }

  .section-images {
    margin-left: 26.5px;
  }

  .product-name,
  .custom-span-detail{
    font-size: 20px;
  }

  .price-info-detail {
    height: 0;
  }

  .custom-description,
  .title-property,
  .value-property{
    font-size: 12px;
  }

  .car-informations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
  }

  .title-property {
    text-align: left;
    margin-right:0;
  }

  .value-property {
    text-align: right;
    padding-right:0;
  }

  .car-informations > :last-child {
    grid-column: span 1;
  }

  .old-price {
    display:block;
    color: #90A3BF;
    font-size: 12px;
    font-weight: 700;
    text-decoration-line: line-through;
  }

    
  
}
</style>