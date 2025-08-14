<template>
  <section
    id="login"
    class="h-screen w-screen bg-yellow-gradient flex flex-col items-center justify-center"
  >
    <div
      class="login-form-container bg-white rounded-xl p-8 flex flex-col items-center gap-8 w-[400px]"
    >
      <h1
        class="login-title text-2xl font-bold border-l-4 border-yellow-500 pl-2"
      >
        CRUD OPERATIONS
      </h1>
      <div class="login-subtitles flex flex-col items-center">
        <h5 class="login-subtitle text-xl font-bold">SIGN IN</h5>
        <h5 class="login-subtitle text-sm text-gray-500">
          Enter your credentials to access your account
        </h5>
      </div>
      <form @submit.prevent="handleLogin" class="w-full space-y-6">
        <FormGroup
          v-for="(data, key) in formData"
          :key="key"
          :label="key"
          :name="key"
          :type="data.type"
          v-model="data.value"
        />
        <PrimaryButton type="submit" variant="yellow" label="Sign In" />
        <p class="text-sm text-gray-500 text-center">
          Forgot your password?
          <a href="#" class="text-custom-yellow">Reset Password</a>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FormGroup from "@/components/FormGroup.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

const store = useStore();
const router = useRouter();

const formData = ref({
  Email: { value: "", type: "email" },
  Password: { value: "", type: "password" },
});
const error = ref("");

const handleLogin = () => {
  const success = store.dispatch("auth/login", {
    email: formData.value.Email.value,
    password: formData.value.Password.value,
  });
  if (success) {
    router.push("/dashboard");
  } else {
    error.value = "Invalid username or password";
  }
};
</script>

<style lang="scss" scoped></style>
