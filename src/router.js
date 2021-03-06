import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ProductsShow from "./views/ProductsShow.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/products/:id", name: "products-show", component: ProductsShow }
  ]
});
