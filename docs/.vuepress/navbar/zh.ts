import { navbar } from "vuepress-theme-hope"

export const zh = navbar([
  // "/zh/",
  { text: "使用指南", icon: "iconfont icon-creative", link: "/zh/guide/" },
  { text: "配置", icon: "iconfont icon-config", link: "/zh/config/" },
  { text: "常见问题", icon: "iconfont icon-question", link: "/zh/faq/" },
  // { text: "定价", icon: "iconfont icon-tag", link: "/zh/pricing" },
  // { text: "工具", "iconfont icon-tool", link: "/tool/" },
  {
    text: "社区",
    icon: "iconfont icon-community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/NewAlist/alist/discussions",
      },
     // { text: "Telegram", link: "https://t.me/alist_chat" },
     // { text: "微信/QQ", link: "zh/community/"  },
    ],
  },
  {
    text: "更多",
    icon: "iconfont icon-more",
    children: [
      { text: "演示", link: "https://alist.pages.dev/" },
      { text: "V2", link: "https://doc.newalist.top" },
      // { text: "桌面版", link: "https://ad.nn.ci/" },
    ],
  },
  {
    text: "Github",
    icon: "iconfont icon-github",
    link: "https://github.com/NewAlist/alist",
  },
])
