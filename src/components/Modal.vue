<template>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col>
          <h1><span>R</span>999</h1>
        </ion-col>
        <ion-col class="quantity">
          <ion-buttons>
            <ion-button size="small" @click="quantityFn(-1)" :disabled="quantity < 2">
              <ion-icon :icon="remove" class="quantity-icon"></ion-icon>
            </ion-button>
            <span class="q-count">{{ quantity }}</span>
            <ion-button size="small" @click="quantityFn(1)">
              <ion-icon :icon="add" class="quantity-icon"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <div class="size-label">Size</div>
          <div class="size-row">
            <span 
              v-for="(item, index) in sizes" 
              :key="index"
              :class="selectedSize === index ? 'selected' : null"
              @click="selectedSizeFn(index)"
            >
              {{ item }}
            </span>
          </div>
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
        <ion-button class="close-btn" @click="closeForm()">
          <ion-icon :icon="close"></ion-icon>
        </ion-button>
        <ion-button>Purchase</ion-button>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonIcon,
  IonContent,
  IonButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

import { heart, add, close, remove } from "ionicons/icons"

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
    IonIcon,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons
  },
  data() {
    return {
      quantity: 1,
      selectedSize: 0,
      sizes: [5,6,7,8]
    }
  },
  setup() {
    return {
      heart,
      add,
      close,
      remove
    }
  },
  methods: {
    quantityFn(count) {
      this.quantity = this.quantity + count;
    },
    selectedSizeFn(index) {
      this.selectedSize = index;
    },
    closeForm() {
      this.modalInstance.dismiss();
      this.context.$emit("toggleImageFn", false);
    }
  }
}
</script>

<style scoped lang="scss">
ion-modal { 
  // --background: green;
  --height: 386px;
  margin-top: 430px;
  border-radius: 50px 50px 0 0;
}

ion-content {
  --background: #fff;
}

h1 {
  font-size: 50px;
  color: #000;
  margin: 0;
  padding: 0;
  span {
    font-size: 18px;
    margin-bottom: 20px;
  }
}

.item-name {
  border-top: 1px solid var(--brand-primary); 
  padding-top: 25px; 
  color: #000;
}

.size-label {
  margin-bottom: 20px;
}

.size-row {
  margin-left: -5px;
  padding: 0;
  
  span {
    background: #fff3b9;
    border: 1px solid #f9ebab; 
    border-radius: 5px; 
    padding: 6px 14px;
    margin: 3px;
    color: var(--brand-primary);
    &.selected {
      color: #000;
    }
  }
}

.description, .size-label {
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

ion-col.quantity {
    text-align: right;
    width: 50%;
    margin: auto auto auto 100px;
    .q-count {
      background: #fff3b9;
      padding: 0px 15px;
      margin: -6px;
    }

    .quantity-icon {
      font-weight: 700;
    }

  ion-buttons {
    ion-button {
      font-weight: bold;
      --border-radius: 20px;
      --background: #fff;
      color: #000;
      border: 1px solid #f9edb6;
      width: 29px;
      height: 27px;
    }
  }
}
</style>
