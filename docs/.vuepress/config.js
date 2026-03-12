module.exports = {
  title: "Chocolate Docs",
  description: "A chocolate-themed VuePress site",
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/index.css' }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Our Guide for Whimsical Chocolate!", link: "/guide/" },
      { text: "Our Next Chocolate is....", link: "/chocolate/" },
      { text: "Help Center", link: "/help-center/" }
    ],
    sidebar: [
      {
        title: "Our Chocolately Guide",
        collapsable: false,
        children: [
          "/guide/",
          { text: "Our Chocolate Machine Setup", link: "/guide/setup" },
          "/guide/layout"
        ]
      },
      {
        title: "Chocolate Pages",
        collapsable: false,
        children: [
          "/chocolate/",
          "/chocolate/flavors",
          "/chocolate/inventory"
        ]
      },
      {
        title: "Help Center",
        collapsable: false,
        children: [
          "/help-center/",
          {
            title: "Top 4 Features",
            collapsable: false,
            children: [
              "/help-center/order-management/",
              "/help-center/subscription-billing/",
              "/help-center/inventory-tracking/",
              "/help-center/analytics-reporting/"
            ]
          }
        ]
      }
    ]
  }
}
