
<template>
	<ion-buttons class="reactions">
		<ion-button @click="likeFn">
			<ion-icon :icon="heart"></ion-icon>
		</ion-button>
		<ion-button>
			<ion-icon :icon="addCircle"></ion-icon>
		</ion-button>
	</ion-buttons>
</template>

<script>
import {
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/vue";

import { 
  addCircle, 
  heart 
} from "ionicons/icons";

export default {
	name: "Reactions",
  props: {
    likePost: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    IonIcon,
    IonButton,
    IonButtons
	},
  setup() {
    return {
      addCircle,
      heart
    };
  },
  methods: {
    likeFn() {
			this.$emit("likeClick", !this.likePost);
    }
  }
};
</script>

<style lang="scss" scoped>
.reactions {
  float: right;
  color: #fff;
  ion-button, button {
    margin: 0;
    padding: 0;
  }
}
</style>
  