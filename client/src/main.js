import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Creación del evento global $bus
export const EventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');
