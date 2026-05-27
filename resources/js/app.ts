// import { createInertiaApp } from '@inertiajs/vue3';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import type { DefineComponent } from 'vue';
// import { createApp, h } from 'vue';
// import '../css/app.css';
//
// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
//
// createInertiaApp({
//     title: (title) => (title ? `${title} - ${appName}` : appName),
//     resolve: (name) =>
//         resolvePageComponent(
//             `./pages/${name}.vue`,
//             import.meta.glob<DefineComponent>('./pages/**/*.vue'),
//         ),
//     setup({ el, App, props, plugin }) {
//         createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .mount(el);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });
import axios from 'axios';
import '../css/app.css';
window.axios = axios;

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Symposium.token,
    'X-Requested-With': 'XMLHttpRequest'
};

import Vue from 'vue';
// import VCalendar from 'v-calendar';
// import Dismiss from './directives/Dismiss';
//
// Vue.use(VCalendar);

// import Clients from './components/passport/Clients.vue';
// import AuthorizedClients from './components/passport/AuthorizedClients.vue';
// import PersonalAccessTokens from './components/passport/PersonalAccessTokens.vue';
// import TalksOnConferencePage from './components/TalksOnConferencePage.vue';
// import LocationLookup from './components/LocationLookup.vue';
// import CfpFields from './components/CfpFields.vue';
// import MenuToggle from './components/MenuToggle.vue';
// import ModalToggle from './components/ModalToggle.vue';
// import CurrencySelection from './components/CurrencySelection.vue';
// import UpdateQueryString from './components/UpdateQueryString.vue';

Vue.directive('dismiss', Dismiss);

new Vue({
    el: "#app",
    // components: {
    //     'passport-clients':  Clients,
    //     'passport-authorized-clients':  AuthorizedClients,
    //     'passport-personal-access-tokens':  PersonalAccessTokens,
    //     'talks-on-conference-page':  TalksOnConferencePage,
    //     'location-lookup':  LocationLookup,
    //     CfpFields,
    //     MenuToggle,
    //     ModalToggle,
    //     CurrencySelection,
    //     UpdateQueryString,
    // }
});
