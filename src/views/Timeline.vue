
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
        <img
          src="/assets/images/tekkie.png"
          
          alt="Drip - Simo mafuxwana - App Concept"
        />
      </ion-card>
      <Reactions :likePost="likePost" @likeClick="likeClick" />
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
      <Stories :data="stories" />
      <p>
        View All
      </p>
    </ion-content>
  </ion-page>
</template>

<script>
import Reactions from "./../components/Reactions";
import Stories from "./../components/Stories";

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
    Stories,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol
  },
  setup() {
    return {
      cartOutline,
      menuOutline,
      heart
    };
  },
  data() {
    return {
      likePost: false,
      click: undefined,
      clickType: 'Click or Doubleclick ME'
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    stories() {
      return this.$store.getters.stories;
    }
  },
  methods: {
    likeDoubleClick() {
      return new Promise ((resolve) => {
        if (this.click) {
          clearTimeout(this.click)
          resolve('Detected DoubleClick');
          this.likePost = !this.likePost;
          this.click = undefined;
          return;
        }

        this.click = setTimeout(() => {
         this.click = undefined;
         resolve('Detected SingleClick')
        }, 400)
      })
    },
    likeClick() {
      this.likePost = !this.likePost;
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

.post-author {
  margin: 10px;
  color: #ffffff;
  font-weight: 500;
  text-transform: lowercase;
  ion-icon {
    margin-bottom: -10px;
    font-size: 30px;
  }
  span {
    font-size: 16px;
    margin: 0 0 0 5px;
  }
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
  