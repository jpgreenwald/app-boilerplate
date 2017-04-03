import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue';
import axios from 'axios';
import jquery from 'jquery';

// css libraries
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'hint.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//custom less
import './main.less';

//site Router
import routes from './routes';

//restore rest client
Vue.prototype.$http = axios;
Vue.$http = Vue.prototype.$http;

Vue.prototype.$swal = swal;

//custom components
import SampleView from './components/sample.vue';
Vue.component('sample-view', SampleView);


//init the app
new Vue({
    el: '#app',
    render: r => r(App),
    router: new VueRouter({
        mode: 'history',
        routes
    })
});
