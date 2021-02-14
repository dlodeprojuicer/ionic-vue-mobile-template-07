import { createStore } from "vuex";

const store = createStore({
  state: {
    popular: [
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
    ],
    allProducts: [
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S2",
        image: "assets/images/s4.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
      {
        name: "S3",
        image: "assets/images/s3.png"
      },
      {
        name: "S4",
        image: "assets/images/s5.png"
      },
      {
        name: "S1",
        image: "assets/images/s1.png"
      },
      {
        name: "S2",
        image: "assets/images/s2.png"
      },
    ]
  },
  getters: {
    popular({ popular }) {
      return popular;
    },
    allProducts({ allProducts }) {
      return allProducts;
    }
  },
});

export default store;
