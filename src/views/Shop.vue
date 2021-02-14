<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon :icon="menuOutline"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-title>
          <img
            src="/assets/images/logo.png"
            alt="Instagram"
            width="50"
          />
        </ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="cartOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-card>
        <img :src="`assets/images/${toggleImage ? 's6' : 'tekkie'}.png`"
          alt="Drip - Simo Mafuxwana - App Concept"
          :width="toggleImage ? '250' : '350'"
        />
      </ion-card>
      <Reactions @toggleImageFn="toggleImageFn" v-if="!toggleImage" />
      <h1 class="product-name">Lidwidz Yellow</h1>
      <Popular :data="popular" />
    </ion-content>
  </ion-page>
</template>

<script>
import Reactions from "./../components/Reactions";
import Popular from "./../components/Popular";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCard,
  IonTitle
} from "@ionic/vue";

import { 
  cartOutline,
  menuOutline,
  heart
} from "ionicons/icons";

export default {
  name: "Shop",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonCard,
    Reactions,
    Popular,
    IonTitle
  },
  data() {
    return {
      toggleImage: false
    }
  },
  setup() {
    return {
      cartOutline,
      menuOutline,
      heart
    };
  },
  computed: {
    popular() {
      return this.$store.getters.popular;
    }
  },
  methods: {
    toggleImageFn(toggle) {
      this.toggleImage = toggle;
    }
  }
};
</script>

<style lang="scss" scoped>
//ion-content {
  // width: fit-content;
  // height: 100%;
  // block-size: fit-content;
//}

ion-header {
  box-shadow: none;
}

ion-toolbar {
  box-shadow: none;
  --background: var(--brand-primary);
  --border-color: var(--brand-primary);
  color: #ffffff;
}

ion-title {
    img {
    filter: grayscale(60%);
  }
}

ion-card {
  --background: none;
  margin: 0 20%;
  box-shadow: none;
}

.product-name {
  color: #fff;
  text-align: center;
}

ion-card-header {
  padding: 10px;
}

</style>
