import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Architect/",
  title: "Architect",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
    ],

    sidebar: [
      {
        text: "",
        items: [
          { text: "相关资源链接", link: "/relations" },
          { text: "笔记", link: "/docs" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/PishoLu/Architect" },
    ],
  },
});
