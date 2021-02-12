<template>
  <ion-slides>
    <ion-slide v-for="(item, index) in data" :key="index">
      <ion-card>
        <img :src="item.image"  />
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>

<script>
import { IonSlides, IonSlide, IonCard } from "@ionic/vue";

export default {
  name: "people",
  components: { IonSlides, IonSlide, IonCard },
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
</style>
