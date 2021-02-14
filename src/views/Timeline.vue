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
      <Reactions @toggleImageFn="toggleImageFn" />
      <br /><br />
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
      <Popular :data="popular" />
      <p>
        View All
      </p>
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
  IonTitle,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";

import { 
  cartOutline,
  menuOutline,
  heart
} from "ionicons/icons";

export default {
  name: "Explorer",
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
    IonTitle,
    IonGrid,
    IonRow,
    IonCol
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
ion-header {
  box-shadow: none;
}

ion-toolbar {
  box-shadow: none;
  --background: var(--brand-primary);
  --border-color: var(--brand-primary);
  color: #ffffff;
  padding: 10px 0;
}

.card-image {
  width: 100%;
}

ion-title {
    img {
    filter: grayscale(60%);
  }
}

ion-card {
  --background: none;
  margin: 0;
  box-shadow: none;
  margin-top: 60px;
}

ion-card-header {
  padding: 10px;
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
