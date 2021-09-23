export const configRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "数据分析",
          key: "1",
        },
        component: () => import("@/view/dashboard/dashboard.vue"),
      },
      {
        path: "/log",
        name: "log",
        meta: {
          title: "日志管理",
          key: "2",
        },
        component: () => import("@/view/log/log.vue"),
      },
      {
        path: "/book",
        name: "book",
        meta: {
          title: "图书管理",
          key: "3",
        },
        children: [
          {
            path: "/book/add",
            name: "book-add",
            meta: {
              title: "添加图书",
              key: "3-1",
            },
            component: () => import("@/view/book/book-add.vue"),
          },
          {
            path: "/book/list",
            name: "book-list",
            meta: {
              title: "图书目录",
              key: "3-2",
            },
            component: () => import("@/view/book/book-list.vue"),
          },
          {
            path: "/book/detail",
            name: "book-detail",
            hidden: true,
            meta: {
              title: "图书详情",
              key: "3-3",
            },
            component: () => import("@/view/book/book-detail.vue"),
          },
        ],
      },
      {
        path: "/admin",
        name: "admin",
        meta: {
          title: "权限管理",
          key: "4",
        },
        children: [
          {
            path: "/admin/user",
            name: "admin-user",
            meta: {
              title: "用户管理",
              key: "4-1",
            },
            children: [
              {
                path: "/admin/user/add",
                name: "user-add",
                meta: {
                  title: "添加用户",
                  key: "4-1-1",
                },
                component: () => import("@/view/admin/user/user-add.vue"),
              },
              {
                path: "/admin/user/list",
                name: "user-list",
                meta: {
                  title: "用户列表",
                  key: "4-1-2",
                },
                component: () => import("@/view/admin/user/user-list.vue"),
              },
            ],
          },
          {
            path: "/admin/group",
            name: "group-list",
            meta: {
              title: "分组管理",
              key: "4-2",
            },
            component: () => import("@/view/admin/group/group-list.vue"),
          },
        ],
      },
    ],
  },
];
