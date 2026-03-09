module.exports = {
  title: "Chocolate Docs",
  description: "A chocolate-themed VuePress site",
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/index.css' }],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Chocolate", link: "/chocolate/" }
    ],
    sidebar: [
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          "/guide/",
          "/guide/setup",
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
      }
    ]
  }
}