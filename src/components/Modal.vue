<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <h1><span>R</span>999</h1>
          </ion-col>
          <ion-col>
            <ion-icon :icon="heart"></ion-icon>
            <ion-icon :icon="add"></ion-icon>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            Size
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <h2 class="item-name">Lidwidz Yellow</h2>
            <p class="description">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-button class="close-btn">
            <ion-icon :icon="close"></ion-icon>
          </ion-button>
          <ion-button>Purchase</ion-button>
        </ion-row>
      </ion-grid>

    
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonIcon,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";

import { heart, add, close } from "ionicons/icons"

export default {
  name: 'ModalOne',
  props: {
    data: {
      type: Object
    },
    context: {
      type: Object
    },
    modalInstance: {
      type: Object
    }
  },
  components: {
    IonPage,
    IonIcon,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
  },
  setup() {
    return {
      heart,
      add,
      close
    }
  },
  methods: {
    closeForm() {
      // this.$ionic.modalController.dismiss();
      this.modalInstance.dismiss();
    }
  }
}
</script>

<style scoped lang="scss">
ion-modal { padding-top: 80%; }

ion-content {
  --background: #fff;
}

h1 {
  font-size: 35px;
  margin: 0;
  padding: 0;
  span {
    font-size: 18px;
    // margin-bottom: 20px;
  }
}

.item-name {
  border-top: 1px solid var(--brand-primary); 
  padding-top: 25px; 
  color: #000;
}

.description {
  font-size: 13px;
}

ion-button {
  --background: var(--brand-primary);
  border-radius: 11px;

  &.close-btn {
    --background: #fff;
    color: #000;
    border: 1px solid var(--brand-primary);
  }
}
</style>
