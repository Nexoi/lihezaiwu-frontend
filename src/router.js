const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/zhibo',
    component: (resolve) => require(['./views/zhibo.vue'], resolve)
},{
    path: '/touzi',
    component: (resolve) => require(['./views/touzi.vue'], resolve)
},{
    path: '/user',
    component: (resolve) => require(['./views/user.vue'], resolve)
}];
export default routers;