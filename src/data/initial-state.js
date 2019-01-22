import productsData from "./products";

const initialState = {
  products: [...productsData],
  map: {
    center: {
      lat: 55.734168,
      lng: 37.623938
    },
    points: [],
    directions: null,
    zoom: 16
  }
};

export default initialState;
