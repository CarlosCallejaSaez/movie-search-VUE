<template>
  <div>
    <h1 class="app-title">Demo Video</h1>
    <iframe
      width="560"
      height="315"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    ></iframe>
<div>
    <button @click="goToHome">Back Home Page</button>
    </div>
     <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
export default {
 components: {
    FooterComponent,
  },
  data() {
    return {
      videoUrl: "https://www.youtube.com/embed/y8IPr1Cdkzc",
    };
  },
  methods: {
    goToHome() {
      
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

</style>
