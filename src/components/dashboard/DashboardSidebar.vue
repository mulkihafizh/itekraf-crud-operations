<template>
  <aside class="bg-[#f2e9e0] w-[250px] h-screen p-4 flex flex-col gap-12">
    <h1
      class="sidebar-title text-xl font-bold border-l-4 border-yellow-500 pl-2"
    >
      CRUD OPERATIONS
    </h1>
    <div class="user-info flex flex-col items-center gap-2">
      <img
        src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
        alt="User Avatar"
        class="user-avatar object-cover rounded-full w-[100px] h-[100px]"
      />
      <p class="user-name font-bold">{{ user?.email || "Guest" }}</p>
      <p class="user-role text-sm text-custom-yellow font-semibold">Admin</p>
    </div>
    <nav class="nav-links flex flex-col gap-4 p-4">
      <RouterLink
        active-class="bg-custom-yellow"
        class="nav-item p-2 rounded-sm hover:bg-custom-yellow duration-300 w-full flex items-center gap-2 pl-4 text-sm"
        v-for="item in navItems"
        :key="item"
        :to="item.link"
      >
        <div v-html="item.icon"></div>
        <span>{{ item.text }}</span>
      </RouterLink>
    </nav>
    <div class="logout-button flex justify-center">
      <button
        @click="handleLogout"
        class="py-2 px-4 rounded flex gap-2 items-center"
      >
        Logout

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 16 16"
        >
          <!-- Icon from Codicons by Microsoft Corporation - https://github.com/microsoft/vscode-codicons/blob/main/LICENSE -->
          <path
            fill="#000000"
            fill-rule="evenodd"
            d="M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46l5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984zM7 14.28l-4-1.34V3.72l4 1.34zm6.52-5.8H8.55v-1h4.93l-1.6-1.6l.71-.7l2.47 2.46v.71l-2.49 2.48l-.7-.7z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const user = computed(() => store.state.auth.user);
const parentRoute = "/dashboard";
const navItems = [
  {
    text: "Dashboard",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from IconaMoon by Dariush Habibpour - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M19.75 10a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm14.72 2.53a.75.75 0 1 0 1.06-1.06zM12 3l.53-.53a.75.75 0 0 0-1.06 0zm-9.53 8.47a.75.75 0 1 0 1.06 1.06zM7 21.75h10v-1.5H7zM19.75 19v-9h-1.5v9zm-14 0v-9h-1.5v9zm15.78-7.53l-9-9l-1.06 1.06l9 9zm-10.06-9l-9 9l1.06 1.06l9-9zM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75z"/></svg>`,
    link: `${parentRoute}/`,
  },
  {
    text: "Course",
    icon: `  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor"  d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"/></svg>`,
    link: `${parentRoute}/course`,
  },
  {
    text: "Student",
    icon: ` <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="m250.82 90.71l-120-64a5.94 5.94 0 0 0-5.64 0l-120 64a6 6 0 0 0 0 10.58L34 116.67v49.62a14 14 0 0 0 3.55 9.32C50.42 189.94 79.29 214 128 214a127.2 127.2 0 0 0 50-9.73V240a6 6 0 0 0 12 0v-41.65a113.2 113.2 0 0 0 28.45-22.75a13.9 13.9 0 0 0 3.55-9.31v-49.62l28.82-15.38a6 6 0 0 0 0-10.58M128 202c-44 0-70-21.56-81.52-34.41a2 2 0 0 1-.48-1.3v-43.22l79.18 42.22a6 6 0 0 0 5.64 0L178 140.13v51c-13 6.22-29.55 10.87-50 10.87m82-35.71a2 2 0 0 1-.48 1.3A100.3 100.3 0 0 1 190 184.3v-50.57l20-10.66Zm-22.15-45a6.3 6.3 0 0 0-1-.71l-56-29.86a6 6 0 0 0-5.64 10.58l50.04 26.7L128 153.2L20.75 96L128 38.8L235.25 96Z"
        />
      </svg>`,
    link: `${parentRoute}/student`,
  },
  {
    text: "Payment",
    icon: `  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from Bitcoin Icons by Bitcoin Design Community - https://github.com/BitcoinDesign/Bitcoin-Icons/blob/main/LICENSE-MIT --><g fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8.5"/><path stroke-linejoin="round" stroke="currentColor" d="m5.75 5.75l12.5 12.5"/><path stroke-linecap="round" d="M12 6v12"/><path stroke-linecap="round" stroke-linejoin="round" d="M14.567 9.37c-.17-.755-1.145-1.595-2.57-1.595s-2.52.925-2.52 2.094c0 2.655 5.285 1.291 5.285 4.372c0 1.114-1.34 2.059-2.765 2.059s-2.411-.877-2.703-1.815"/></g></svg>`,
    link: `${parentRoute}/payment`,
  },
  {
    text: "Report",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><!-- Icon from Fluent UI System Icons by Microsoft Corporation - https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE --><path  fill="currentColor" d="M8 8.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 3.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m3-1.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3zm5.5 4h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5"/></svg>`,
    link: `${parentRoute}/report`,
  },
  {
    text: "Settings",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="13" height="13" x=".5" y=".5" rx="1"/><path d="M3 4.5h5"/><circle cx="9.5" cy="4.5" r="1.5"/><path d="M11 9.5H8m-3 0H3"/><circle cx="6.5" cy="9.5" r="1.5"/></g></svg>`,
    link: `${parentRoute}/settings`,
  },
];

const handleLogout = () => {
  const success = store.dispatch("auth/logout");
  if (success) {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped></style>
