import Login from "./pages/Login.vue";
import Products from "./pages/Products.vue";
import altaProducts from "./pages/AltaProducts.vue";

export default [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/products/alta",
    component: altaProducts,
  },
];
