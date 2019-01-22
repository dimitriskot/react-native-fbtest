import productsData from "./products";

const initialState = {
  market: { products: [...productsData] },
  routeEditor: {
    map: {
      center: {
        lat: 55.734168,
        lng: 37.623938
      },
      zoom: 16
    },
    points: [],
    directions: null
  }
};

export default initialState;
