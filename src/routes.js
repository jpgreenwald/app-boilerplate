export default [{
    path: '/',
    redirect: '/home'
},{
    path: '/home',
    component: require('./views/main.vue')
}, {
    path: '/about',
    component: require('./views/about.vue')
}, {
    path: '/login',
    component: require('./views/login.vue')
}, {
    path: '*',
    component: require('./views/404.vue')
}];
