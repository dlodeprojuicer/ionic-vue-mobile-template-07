<template>
  <div class="wrapper">
    <ion-grid>
      <ion-row>
        <ion-col>
          <span>Popular</span> Footwear
        </ion-col>
        <ion-col class="slide-count">
          1/16
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-slides>
      <ion-slide v-for="(item, index) in data" :key="index">
        <ion-card>
          <img :src="item.image"  />
        </ion-card>
      </ion-slide>
    </ion-slides>
    <p>
      View All
    </p>
  </div>
</template>

<script>
import { 
  IonSlides, 
  IonSlide,
  IonCard,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";

export default {
  name: "people",
  components: { 
    IonSlides, 
    IonSlide, 
    IonCard,
    IonGrid,
    IonRow,
    IonCol
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  top: 5vh;
}

ion-slide {
  background: #fff;
  border-radius: 10px;
  height: 85px;
  margin: 8px;
  width: 80px !important;
  padding: 0;
}

ion-card {
  --background: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
}

img {
  border-radius: 10px;
  // height: 70px;
  width: 70px;
}

ion-card-title {
  font-size: 13px !important;
  text-align: left;
  color: #fff;
}

ion-col {
  color: #fff;
  span {
    font-weight: 700;
  }

  &.slide-count {
    text-align: right;
  }
}

ion-col.slide-count {
  float: right !important;
}

p {
  color: #fff;
  text-align: right;
  font-weight: 700;
  margin: 15px 0 0 0;
}
</style>
