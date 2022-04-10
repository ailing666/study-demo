import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index"),
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("@/views/user"),
      },
      {
        path: "/safe",
        name: "Safe",
        component: () => import("@/views/safe"),
      },
      {
        path: "/bankCard",
        name: "BankCard",
        component: () => import("@/views/safe/BankCard.vue"),
      },
      {
        path: "/addPhone",
        name: "AddPhone",
        component: () => import("@/views/safe/AddPhone.vue"),
      }

    ]
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
