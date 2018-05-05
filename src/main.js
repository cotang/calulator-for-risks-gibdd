import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';
import App from './App.vue';

Vue.use(VueCustomElement);

Vue.customElement('calc-widget', App);
