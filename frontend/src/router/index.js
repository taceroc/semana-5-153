import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

import store from '../store'

// import swal from 'sweetalert';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
     meta:{
      public: true
    }
  },
  {
    path: '/registrarse',
    name: 'RegisterVisit',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterVisit.vue'),
    meta:{
      public: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      public: true
    }
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue'),
    meta:{
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      public: true
    }
  },
  {
    path: '/autenticado',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Autenticado.vue'),
    meta:{
      auth: true
    },
    children:[
      {
        path: '/',
        name: 'Autenticado',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AutenticadoVista.vue'),
        meta:{
          auth:true
        }
      },
      {
        path: 'categoria',
        name: 'Categoria',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Categoria.vue'),
        meta:{
          auth:true
        }
      },
      {
        path: 'articulo',
        name: 'Articulo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue'),
        meta:{
          auth:true
        }
      },
      {
        path: 'usuario',
        name: 'Usuario',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue'),
        meta:{
          admin: true
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const swal = require('sweetalert');

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.public)){
    next();
    //console.log("store.state.user");
  }else if(to.matched.some(record => record.meta.auth)){
    if(store.state.user && store.state.user.rol !== "Visitante"){
      next();
    }else{
      next({name: 'Login'});
      swal("Por favor ingrese como usuario autorizado", "Debe estar autenticado", "warning");
      //console.log(store.state.user);
    }
  }
    // if(store.state.user && store.state.user.rol === "Administrador"){
    //   next();
    // }else{

    // }
  if(to.matched.some(record => record.meta.admin)){
    if(store.state.user && store.state.user.rol === "Administrador"){
      next();
      // console.log(store.state.user);
    }else{
      next({name: 'Login'});
      swal("No es administrador", "Contacte al administrador", "error");
      // console.log(store.state.user);
    }
  }
})

export default router
