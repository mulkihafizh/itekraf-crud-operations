<template>
  <button
    :type="type"
    :class="[
      'w-full font-light py-2 rounded transition duration-300',
      variantClass,
    ]"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  label: { type: String, default: "Button" },
  type: { type: String, default: "button" },
  variant: { type: String, default: "yellow" },
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "yellow":
      return "bg-custom-yellow text-white hover:bg-yellow-600";
    case "red":
      return "bg-red-500 text-white hover:bg-red-600";
    default:
      return "bg-gray-500 text-white hover:bg-gray-600";
  }
});
</script>
