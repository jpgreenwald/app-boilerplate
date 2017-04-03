export default [{
    path: '/',
    component: require('./views/main.vue')
}, {
    path: '*',
    component: require('./views/404.vue')
}];