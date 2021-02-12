import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        name: "SnoopDogg",
        image: "assets/images/brazil.jpg",
        id: 1,
        likes: 22349,
        description:
          "all about Brazil, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor."
      },
      {
        name: "BrookeShaden",
        image: "assets/images/hawaii.jpg",
        id: 3
      },
      {
        name: "ThisIsRory",
        image: "assets/images/panama.jpg",
        id: 2,
        likes: 390,
        description:
          "all about panama. Nam fermentum, leo ac lobortis tincidunt, justo felis semper nisi, sed facilisis quam ante a justo. Nam pulvinar nibh nec mi vestibulum cursus quis eget orci. Aenean faucibus faucibus ex, a imperdiet nibh luctus faucibus. Mauris porttitor, velit ac eleifend mattis, sem justo accumsan odio, ut mattis nulla nulla eu nibh."
      },
      {
        name: "Jamaican_tourism",
        slug: "jamaica",
        image: "assets/images/jamaica.jpg",
        id: 4
      },
    ],
    stories: [
      {
        name: "Makazol",
        image: "assets/images/s1.png"
      },
      {
        name: "snoop",
        image: "assets/images/s2.png"
      },
      {
        name: "max",
        image: "assets/images/s3.png"
      },
      {
        name: "snoop",
        image: "assets/images/s4.png"
      },
      {
        name: "lewis",
        image: "assets/images/s5.png"
      },
      {
        name: "Makazol",
        image: "assets/images/s1.png"
      },
      {
        name: "snoop",
        image: "assets/images/s2.png"
      },
      {
        name: "max",
        image: "assets/images/s3.png"
      },
      {
        name: "snoop",
        image: "assets/images/s4.png"
      },
      {
        name: "lewis",
        image: "assets/images/s5.png"
      },
    ]
  },

  getters: {
    posts({ posts }) {
      return posts;
    },
    stories({ stories }) {
      return stories;
    }
  },
  mutations: {},
  actions: {},
});

export default store;
