import axios from 'axios';

// const baseURL = process.env.BASE_API_URL;

export type Car = {
  name: string;
  type: string;
  gasolineLiter: number;
  kindOfTransition: string;
  people: number;
  pricePerDay: number;
  id: string;
  img: string;
};

interface ApiResponse {
  data: Car[];
}

const CarService = {
  getAllCars(): Promise<Car[]> {
    return axios.get<ApiResponse>("https://dm-assignment-commonshare.koyeb.app/api")
      .then(response => response.data.data)
      .catch(error => {
        console.error("Error fetching cars:", error);
        throw error;
      });
  }
};

export default CarService;
