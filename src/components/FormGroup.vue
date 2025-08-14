<template>
  <div class="form-group space-y-2">
    <label :for="name" class="text-md">{{ label }}</label>
    <input
      :id="name"
      :type="type"
      v-model="localValue"
      :placeholder="placeholder || `Enter your ${label.toLowerCase()}`"
      class="w-full border border-gray-500 rounded-md text-sm p-2"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  label: String,
  name: String,
  type: { type: String, default: "text" },
  placeholder: String,
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
