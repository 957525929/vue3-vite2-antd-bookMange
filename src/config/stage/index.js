export const configRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/view/dashboard/dashboard.vue"),
      },
      {
        path: "/log",
        name: "log",
        component: () => import("@/view/log/log.vue"),
      },
      {
        path: "/book",
        name: "book",
        children: [
          {
            path: "/book/add",
            name: "book-add",
            component: () => import("@/view/book/book-add.vue"),
          },
          {
            path: "/book/list",
            name: "book-list",
            component: () => import("@/view/book/book-list.vue"),
          },
        ],
      },
      {
        path: "/admin",
        name: "admin",
        children: [
          {
            path: "/admin/user",
            name: "admin-user",
            children: [
              {
                path: "/admin/user/add",
                name: "user-add",
                component: () => import("@/view/admin/user/user-add.vue"),
              },
              {
                path: "/admin/user/list",
                name: "user-list",
                component: () => import("@/view/admin/user/user-list.vue"),
              },
            ],
          },
          {
            path: "/admin/group",
            name: "group-list",
            component: () => import("@/view/admin/group/group-list.vue"),
          },
        ],
      },
    ],
  },
];
