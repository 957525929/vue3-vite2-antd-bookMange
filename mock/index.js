export default [
  {
    url: "/api/test",
    method: "get",
    response: () => {
      return {
        name: "@cname()",
      };
    },
  },
];
