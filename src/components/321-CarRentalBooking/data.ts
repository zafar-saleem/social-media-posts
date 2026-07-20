import CarSide from "./assets/car_side.png";
import CarFront from "./assets/car_front.png";
import CarBack from "./assets/car_back.png";
import CarDiagnol from "./assets/car_diagnol.png";

export const CAR_DATA = {
  id: 1,
  title: "Audi R8 Performance",
  car_rating: {
    received: 90,
    total: 100,
    reviews_received: 154,
  },
  photos: [
    {
      id: 1,
      src: CarSide,
      width: 1000,
      height: 1000,
      alt: "",
    },
    {
      id: 2,
      src: CarFront,
      width: 1000,
      height: 1000,
      alt: "",
    },
    {
      id: 3,
      src: CarBack,
      width: 1000,
      height: 1000,
      alt: "",
    },
    {
      id: 4,
      src: CarDiagnol,
      width: 1000,
      height: 1000,
      alt: "",
    },
  ],
  car_specs: {
    speed: {
      label: "0 - 100 km/h",
      value: "3.2s",
    },
    engine: {
      label: "Engine",
      value: "610 hp 5.2 I",
    },
    drive: {
      label: "Drive",
      value: "All",
    },
    color: {
      label: "Color",
      value: "Orange",
    },
  },
  plans: {
    minute: {
      label: "Minute Rate",
      value: "0.5",
      unit: "min",
    },
    hourly: {
      label: "Hourly",
      value: "24",
      unit: "hourly",
    },
    daily: {
      label: "Daily",
      value: "200",
      unit: "daily",
    },
    monthly: {
      label: "Monthly",
      value: "1100",
      unit: "monthly",
    },
  },
  agency: {
    avatar: "CA",
    name: "Car Agency",
    ratings: {
      received: 5,
      reviews: 20,
    },
    rental_rules: [],
  }
}
