<template>
  <div class="flex py-4 justify-between items-center">
    <svg
      class="text-gray-300 justify-self-start"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="m296 352l-96-96l96-96"
      />
    </svg>
    <div class="right-menu flex items-center gap-2">
      <div
        class="search-bar border border-gray-300 rounded-md p-2 flex text-gray-300"
      >
        <input
          type="text"
          placeholder="Search..."
          class="bg-transparent outline-none"
        />
        <svg
          class="text-sm"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          class="text-gray-300"
          fill="none"
          d="M5.5 18.77q-.213 0-.356-.145T5 18.268t.144-.356t.356-.143h1.116V9.846q0-1.96 1.24-3.447T11 4.546V4q0-.417.291-.708q.291-.292.707-.292t.709.292T13 4v.546q1.904.365 3.144 1.853t1.24 3.447v7.923H18.5q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm6.497 2.615q-.668 0-1.14-.475t-.472-1.14h3.23q0 .67-.475 1.142q-.476.472-1.143.472M7.616 17.77h8.769V9.846q0-1.823-1.281-3.104T12 5.462t-3.104 1.28t-1.28 3.104z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
