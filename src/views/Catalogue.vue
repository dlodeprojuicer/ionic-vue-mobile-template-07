<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-back-button defaultHref="/"></ion-back-button>
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
    <ion-grid>
      <ion-row>
        <ion-col v-for="(item, index) in popular" :key="index" size="4">
          <ion-card>
            <img :src="item.image"  />
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
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
  name: "Shop",
  components: {
    IonBackButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonCard,
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
      return this.$store.getters.allProducts;
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
}

ion-title {
    img {
    filter: grayscale(60%);
  }
}

ion-card {
  --background: none;
  margin: 7%;
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
