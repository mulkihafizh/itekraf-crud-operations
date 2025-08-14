import { createApp } from 'vue'

import App from './App.vue'

import store from './stores'
import "@/assets/css/tailwind.css"
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-regular-svg-icons'




const app = createApp(App);

const icons = [faGraduationCap, faHouse];
library.add(...icons);
app.component("font-awesome-icon", FontAwesomeIcon);


app.use(router);
app.use(store);
app.mount('#app');

