import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  // "/",
  { text: "Guide", icon: "iconfont icon-creative", link: "/guide/" },
  { text: "Config", icon: "iconfont icon-config", link: "/config/" },
  { text: "FAQ", icon: "iconfont icon-question", link: "/faq/" },
  // { text: "Pricing", icon: "iconfont icon-tag", link: "/pricing" },
  // { text: "Tool", icon: "tool", link: "/tool/" },
  {
    text: "Community",
    icon: "iconfont icon-community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/NewAlist/alist/discussions",
      },
     //  { text: "Telegram", link: "https://t.me/alist_chat" },
     //  { text: "Wechat/QQ", link: "/community/" }
    ],
  },
  {
    text: "More",
    icon: "iconfont icon-more",
    children: [
      { text: "Demo", link: "https://alist.pages.dev/" },
      { text: "V2", link: "https://doc.newalist.top" },
      // { text: "Desktop", link: "https://ad.nn.ci/" },
    ],
  },
  {
    text: "Github",
    icon: "iconfont icon-github",
    link: "https://github.com/NewAlist/alist",
  },
]);
