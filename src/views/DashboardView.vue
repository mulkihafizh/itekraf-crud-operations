<template>
  <section>
    <div class="dashboard-cards grid grid-cols-4 gap-4">
      <DashboardCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :value="card.value"
        :icon="card.icon"
        :iconColor="card.iconColor"
        :twColor="card.twColor"
      />
    </div>
    <div class="dashboard-content">
      <DashboardTable />
    </div>
  </section>
</template>

<script setup>
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import DashboardTable from "@/components/dashboard/DashboardTable.vue";

const cards = [
  {
    title: "Students",
    icon: `
     <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="m250.82 90.71l-120-64a5.94 5.94 0 0 0-5.64 0l-120 64a6 6 0 0 0 0 10.58L34 116.67v49.62a14 14 0 0 0 3.55 9.32C50.42 189.94 79.29 214 128 214a127.2 127.2 0 0 0 50-9.73V240a6 6 0 0 0 12 0v-41.65a113.2 113.2 0 0 0 28.45-22.75a13.9 13.9 0 0 0 3.55-9.31v-49.62l28.82-15.38a6 6 0 0 0 0-10.58M128 202c-44 0-70-21.56-81.52-34.41a2 2 0 0 1-.48-1.3v-43.22l79.18 42.22a6 6 0 0 0 5.64 0L178 140.13v51c-13 6.22-29.55 10.87-50 10.87m82-35.71a2 2 0 0 1-.48 1.3A100.3 100.3 0 0 1 190 184.3v-50.57l20-10.66Zm-22.15-45a6.3 6.3 0 0 0-1-.71l-56-29.86a6 6 0 0 0-5.64 10.58l50.04 26.7L128 153.2L20.75 96L128 38.8L235.25 96Z"
        />
      </svg>`,
    twColor: "bg-[#f0f9ff]",
    iconColor: "text-[#73c2ed]",
    value: `243`,
  },
  {
    title: "Course",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor"  d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"/></svg>
    `,
    iconColor: "text-[#f2aed3]",
    twColor: "bg-[#fff6fb]",
    value: `13`,
  },
  {
    title: "Payments",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Bitcoin Icons by Bitcoin Design Community - https://github.com/BitcoinDesign/Bitcoin-Icons/blob/main/LICENSE-MIT --><g fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8.5"/><path stroke-linejoin="round" stroke="currentColor" d="m5.75 5.75l12.5 12.5"/><path stroke-linecap="round" d="M12 6v12"/><path stroke-linecap="round" stroke-linejoin="round" d="M14.567 9.37c-.17-.755-1.145-1.595-2.57-1.595s-2.52.925-2.52 2.094c0 2.655 5.285 1.291 5.285 4.372c0 1.114-1.34 2.059-2.765 2.059s-2.411-.877-2.703-1.815"/></g></svg>`,

    iconColor: "text-custom-yellow",
    twColor: "bg-[#fefbec]",
    value: `<small class='text-xs'>INR</small> 500,000`,
  },
  {
    title: "Users",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path  fill="currentColor" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601" clip-rule="evenodd"/></svg>`,
    iconColor: "text-[#ffffff]",
    twColor: "bg-yellow-gradient-reverse",
    value: `3`,
  },
];
</script>

<style lang="scss" scoped></style>
