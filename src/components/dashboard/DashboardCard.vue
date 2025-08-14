<template>
  <div class="dashboard-card p-4 rounded" :class="twColor">
    <div class="icon-container p-2 rounded-full mb-4 space-y-4">
      <div :class="iconColor" v-html="icon"></div>
      <p
        class="text-sm"
        :class="iconColor == 'text-[#ffffff]' ? 'text-white' : ''"
      >
        {{ title }}
      </p>
    </div>
    <h3 class="text-2xl font-bold text-end" v-html="value"></h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: String,
  icon: String,
  value: String,
  iconColor: String,
  twColor: String,
});
</script>

<style lang="scss" scoped></style>
