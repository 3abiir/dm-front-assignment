<template>
  <div class="products-page">
    <div v-if="carsData" class="product-grid">
      <div v-for="(car, index) in carsData" :key="car.id" class="product-item p-6">
        <!-- Tile section -->
        <div class="flex justify-between items-center">
          <div>
            <span class="product-name">{{ car.name }}</span>
          </div>
          <FavoriteCar :productId="car.id.toString()" />
        </div>

        <div class="type-image-section">
          <!-- Type section -->
          <div class="type">
            {{ car.type }}
          </div>

          <!-- Image section --> 
          <div class="product-image py-16">
            <img :src="car.img" alt="Product Image" />
          </div>
        </div>

        <!-- Data car section -->
        <div class="flex justify-between items-center pt-16 caracteristics">

          <div class="gasolineLiter-info">
            <div class="icon-and-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF"/>
              </svg>
              <span>{{ car.gasolineLiter }} L</span>
            </div>
          </div>

          <div class="gasolineLiter-info">
            <div class="icon-and-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF"/>
                <rect x="4" y="4" width="16" height="16" rx="8" fill="white"/>
                <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF"/>
                <rect x="8" y="8" width="8" height="8" rx="4" fill="white"/>
                <rect x="11" y="17" width="2" height="4" fill="#90A3BF"/>
                <rect x="17" y="11" width="4" height="2" fill="#90A3BF"/>
                <rect x="3" y="11" width="4" height="2" fill="#90A3BF"/>
              </svg>
              <span>{{ car.kindOfTransition }} </span>
            </div>
          </div>

          <div class="gasolineLiter-info">
            <div class="icon-and-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF"/>
                <path d="M14.08 14.15C11.29 12.29 6.74002 12.29 3.93002 14.15C2.66002 15 1.96002 16.15 1.96002 17.38C1.96002 18.61 2.66002 19.75 3.92002 20.59C5.32002 21.53 7.16002 22 9.00002 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="#90A3BF"/>
                <path d="M19.99 7.33998C20.15 9.27998 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.47998 15.73 8.09998 15.61 6.59998C15.54 5.78998 15.26 5.04998 14.84 4.41998C15.22 4.22998 15.66 4.10998 16.11 4.06998C18.07 3.89998 19.82 5.35998 19.99 7.33998Z" fill="#90A3BF"/>
                <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="#90A3BF"/>
              </svg>
              <span>{{ car.people }} People</span>
            </div>
          </div>
          
        </div>


        <div class="price-info flex justify-between items-center">
          <div>
            <span class="product-price custom-span">${{ car.pricePerDay }}/</span>
            <p class="product-price-p">day</p>
          </div>

          <div class="custom-div custom-div-style">
            <button class="button-text" @click="storeSelectedCar(car)">Rent Now</button>
          </div>
        </div>

      </div>

    </div>

    <!-- Pagination -->
    <div v-if="showButton" class="flex justify-center">
      <button v-if="shouldShowButton" @click="showAllProducts" class="custom-button-show">
        Show more car
      </button>
    </div>

  </div>
</template>

<script lang="ts">
import FavoriteCar from "./FavoriteCar.vue";
import CarService from "~/services/CarService";
import { ref, onMounted } from 'vue';

interface Car {
  name: string;
  type: string;
  gasolineLiter: number;
  kindOfTransition: string;
  people: number;
  pricePerDay: number;
  id: string;
  img: string;
}

  export default {
    setup() {
      const carsData = ref<Car[] | null>(null);
      const error = ref<string | null>(null);
      const selectedCar = ref<Car | null>(null); //tore the selected car data

      return {
        carsData,
        error,
        selectedCar,
      };
    },
    props: {
      maxProducts: {
        type: [Number, String],
        required: true,
      },  
      totalProducts: Number,
      showButton: {
        type: Boolean,
        default: true,
      }
    },

    computed: {
      shouldShowButton() {
        return +this.maxProducts >= 8 && +this.maxProducts < this.products.length;
      },
    },

    data() {
      return {
        cars: [] as Car[],
        isLoading: false,
        error: null,
        products: [
        {
            "id" : "1",
            "name" : "Toyota Camry1",
            "type" : "Sedan",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/35.png",
            "gasolineLiter" : "65",
            "kindOfTransition" : "Manual",
            "people" : "5",
            "pricePerDay":"60"
          },
          {
            "id" : "2",
            "name" : "BMW 3 Series1",
            "type" : "Sedan",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/5.png",
            "gasolineLiter" : "24",
            "kindOfTransition" : "Automatic",
            "people" : "2",
            "pricePerDay":"55"
          },
          {
            "id" : "3",
            "name" : "C-Class1",
            "type" : "Sedan",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/6.png",
            "gasolineLiter" : "11",
            "kindOfTransition" : "Manual",
            "people" : "3",
            "pricePerDay":"45"
          },
          {
            "id" : "4",
            "name" : "Ford Mustang1",
            "type" : "Sports car",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/7.png",
            "gasolineLiter" : "37",
            "kindOfTransition" : "Automatic",
            "people" : "5",
            "pricePerDay":"45"
          },
          {
            "id" : "5",
            "name" : "Ford Mustang1",
            "type" : "Sports car",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/7.png",
            "gasolineLiter" : "37",
            "kindOfTransition" : "Automatic",
            "people" : "5",
            "pricePerDay":"45"
          },
          {
            "id" : "6",
            "name" : "Toyota Camry1",
            "type" : "Sedan",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/35.png",
            "gasolineLiter" : "65",
            "kindOfTransition" : "Manual",
            "people" : "5",
            "pricePerDay":"60"
          },
          {
            "id" : "7",
            "name" : "BMW 3 Series1",
            "type" : "Sedan",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/5.png",
            "gasolineLiter" : "24",
            "kindOfTransition" : "Automatic",
            "people" : "2",
            "pricePerDay":"55"
          },
          {
            "id" : "8",
            "name" : "C-Class1",
            "type" : "Sedan",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/6.png",
            "gasolineLiter" : "11",
            "kindOfTransition" : "Manual",
            "people" : "3",
            "pricePerDay":"45"
          },
          {
            "id" : "9",
            "name" : "Ford Mustang1",
            "type" : "Sports car",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/7.png",
            "gasolineLiter" : "37",
            "kindOfTransition" : "Automatic",
            "people" : "5",
            "pricePerDay":"45"
          },
          {
            "id" : "10",
            "name" : "Ford Mustang1",
            "type" : "Sports car",
            "img": "https://dm-assignment-commonshare.koyeb.app/img/7.png",
            "gasolineLiter" : "37",
            "kindOfTransition" : "Automatic",
            "people" : "5",
            "pricePerDay":"45"
          },
        ],
        visibleProducts: 4,
      };
    },
    
    methods: {
      fetchCars() {
        fetch('/api/cars')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((jsonData) => {
            if (Array.isArray(jsonData.data)) {
              // Add unique IDs to each car
              this.carsData = jsonData.data.map((car: any, index: number) => ({ ...car, id: index + 1 }));
            } else {
              throw new Error('Invalid data structure received from the API.');
            }
          })
          .catch((err) => {
            this.error = err.message || 'An error occurred while fetching cars';
            console.error('Error fetching cars:', this.error);
          });
      },

      storeSelectedCar(selectedCar: { name: string; type: string; gasolineLiter: number; kindOfTransition: string; people: number; pricePerDay: number; id: string; img: string; } | null) {
        if (selectedCar) {
          // Store the selected car in localstorage
          localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
          this.$router.push("/detail-car");
        } else {
          console.error('Selected car is null.');
        }
      },

      storeProductInLocalStorage() {
        if (this.selectedCar) {
          this.storeSelectedCar(this.selectedCar);
        }
      },

      getDisplayedProducts() {
        if (this.maxProducts === 'all') {
          return this.products;
        } else if (typeof this.maxProducts === 'number') {
          return this.products.slice(0, this.maxProducts);
        } else {
          return [];
        }
      },

      showAllProducts() {
        this.$emit("show-all-products");
      }
    },

    mounted() {
      this.fetchCars();
    }

  };
</script>

<style scoped>
@import "../assets/common.scss";

.button-text{
  font-weight: 600;
}

.product-name {
  /* width: 125px; */
  height: 24px;
  color: #1A202C;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-item {
  height: 388px;
  border-radius: 10px;
  background: #FFF;
}

.type {
  height: 20px;
  color: #90A3BF;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.28px;
}

.product-image {
  width: 232px;
  height: 72px;
  background-position: -16.331px -34.759px, center;
  background-size: 109.391% 172.414%, cover;
  background-repeat: no-repeat;
}

.caracteristics {
  color: #90A3BF;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.28px;
}

.gasolineLiter-info .icon-and-text {
  display: flex;
  align-items: center;
}

.gasolineLiter-info svg {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.gasolineLiter-info span {
  color: #90A3BF;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.28px;
}

.custom-span {
  font-size: 20px;
}

.product-price-p {
  font-size: 14px;
}

.custom-div {
  width: 116px;
}

.custom-div {
  height: 44px;
}

.custom-button-show {
  width: 156px;
  height: 44px;
  padding: 0 20px;
  background: #3563E9;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 4px;
  margin:56px 0;
}

</style>