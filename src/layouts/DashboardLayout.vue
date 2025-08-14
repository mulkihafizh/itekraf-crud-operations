<template>
  <main id="dashboard-layout" class="flex">
    <DashboardSidebar />
    <main class="flex-1 px-8">
      <DashboardTop />
      <RouterView />
    </main>
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import DashboardTop from "@/components/dashboard/DashboardTop.vue";
</script>

<style lang="scss" scoped></style>
