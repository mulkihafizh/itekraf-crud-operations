<template>
  <div class="h-screen w-screen font-montserrat">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    RouterView,
  },
};
</script>

<style></style>
