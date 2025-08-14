<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border-separate border-spacing-y-6">
      <thead>
        <tr class="text-gray-500 text-xs">
          <th class="text-left px-4"></th>
          <th class="text-left px-4">Name</th>
          <th class="text-left px-4">Email</th>
          <th class="text-left px-4">Phone</th>
          <th class="text-left px-4">Enroll Number</th>
          <th class="text-left px-4">Date of admission</th>
          <th class="px-4"></th>
        </tr>
      </thead>
      <tbody class="bg-white text-sm">
        <tr
          v-for="(row, index) in rows"
          :key="index"
          class="rounded-lg shadow-sm"
        >
          <td class="py-3">
            <img
              :src="row.avatar"
              alt=""
              class="w-16 h-16 rounded-lg object-cover"
            />
          </td>
          <td class="px-4 py-3">
            <span class="font-medium">{{ row.name }}</span>
          </td>
          <td class="px-4 py-3">{{ row.email }}</td>
          <td class="px-4 py-3">{{ row.phone }}</td>
          <td class="px-4 py-3">{{ row.enroll }}</td>
          <td class="px-4 py-3">{{ row.date }}</td>
          <td class="items-center space-x-3 px-4">
            <button class="text-custom-yellow hover:text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <!-- Icon from Sargam Icons by Abhimanyu Rana - https://github.com/planetabhi/sargam-icons/blob/main/LICENSE.txt -->
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="m14.828 6.343l2.829 2.829m.566-5.092l1.697 1.697a.8.8 0 0 1 0 1.132L8.464 18.364l-3.535.707l.707-3.536L17.091 4.08a.8.8 0 0 1 1.132 0"
                />
              </svg>
            </button>
            <button class="text-custom-yellow hover:text-yellow-600">
              <svg
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
                  stroke-width="1.5"
                  d="m18 7l-.886 10.342c-.111 1.29-.166 1.936-.453 2.424a2.5 2.5 0 0 1-1.078.99c-.511.244-1.16.244-2.455.244h-2.256c-1.296 0-1.944 0-2.455-.244a2.5 2.5 0 0 1-1.078-.99c-.287-.488-.342-1.134-.453-2.424L6 7m-1.5-.5h4.615m0 0l.386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const rows = [
  {
    avatar:
      "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: "7305477760",
    enroll: "1234567305477760",
    date: "08-Dec, 2021",
  },
  {
    avatar:
      "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: "7305477760",
    enroll: "1234567305477760",
    date: "08-Dec, 2021",
  },
  {
    avatar:
      "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: "7305477760",
    enroll: "1234567305477760",
    date: "08-Dec, 2021",
  },
  {
    avatar:
      "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    name: "Karthi",
    email: "karthi@gmmail.com",
    phone: "7305477760",
    enroll: "1234567305477760",
    date: "08-Dec, 2021",
  },
];
</script>
