---
title: 【vue】跨域解决方案之proxyTable12
date: 2017-12-22
tags:
- vue
- webpack
---

## 二

### 插件

   [      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save      "dynamic-title",      {        showIcon: "/favicon.ico",        showText: "(/≧▽≦/)咦！又好了！",        hideIcon: "/failure.ico",        hideText: "(●—●)喔哟，崩溃啦！",        recoverTime: 2000      }    ],    [      //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save      '@vuepress\plugin-medium-zoom', {        selector: '.page img',        delay: 1000,        options: {          margin: 24,          background: 'rgba(25,18,25,0.9)',          scrollOffset: 40        }      }    ],    [     //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save      'flowchart'    ],    [      //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save      'sitemap', {        hostname: 'https://www.glassysky.site'      }    ],    ['@vuepress/pwa', {      serviceWorker: true,  //vuepress插件PWA 先安装在配置 npm install @vuepress/pwa --save      updatePopup: {        message: "发现新内容可用",        buttonText: "刷新"      }     }    ],    ["vuepress-plugin-nuggets-style-copy", {      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save      tip: {        content: "复制成功!"      }    }],    ["@vuepress-yard/vuepress-plugin-window",{      title: "远方有你伴余生の公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save      contentInfo: {        title: "欢迎进来的小耳朵 🎉🎉🎉",        needImg: true,        imgUrl: "https://reinness.com/avatar.png",        content: "喜欢博皮可以到博客园关注教程",        contentStyle: ""      },      bottomInfo: {        btnText: '关于',        linkTo: 'https://cnblogs.com/glassysky'      },      closeOnce: false    }]  ] } 
