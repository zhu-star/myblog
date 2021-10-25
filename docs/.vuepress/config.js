module.exports = {
    title: '无敌你辉哥',
    description: '朱登辉的个人博客',
    dest: './dist',//默认在.vuepress下，在打包（build）命令下才会执行
    port: '7777', //改端口在这里改
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}],  //图标
        ['link', {rel: 'stylesheet', href: '/css/style.css'}], //引入css样式
        ['script', {charset: 'utf-8', src: '/js/main.js'}] //引入js方法，都是在public中引入
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {  //主题配置
        type: 'blog',
        blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
              },
            //   socialLinks: [     // 信息栏展示社交信息
            //     { icon: 'reco-github', link: 'https://github.com/recoluan' },
            //     { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            //   ]
        },
        nav:  require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    theme: 'reco',

    plugins: [
        [
         //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
        "@vuepress-reco/vuepress-plugin-kan-ban-niang", //下面的小人。
        {
          theme: ['haru2','blackCat', 'whiteCat', 'haru1',  'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
          clean: false,
          messages: {
            welcome: '我是lookroot欢迎你的关注 ',
            home: '心里的花，我想要带你回家。',
            theme: '好吧，希望你能喜欢我的其他小伙伴。',
            close: '再见哦'
          },
          width: 240,
          height: 352
        }
    ],
    [
        //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
        "ribbon",
        {
          size: 90,     // width of the ribbon, default: 90
          opacity: 0.8, // opacity of the ribbon, default: 0.3
          zIndex: -1    // z-index property of the background, default: -1
        }
      ],
      [
        //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
        "cursor-effects",
        {
          size: 3,                    // size of the particle, default: 2
          shape: ['circle'],  // shape of the particle, default: 'star'
          zIndex: 999999999           // z-index property of the canvas, default: 999999999
        }
      ],
      [
        //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
        "dynamic-title",
        {
          showIcon: "/favicon.ico",
          showText: "(/≧▽≦/)咦！又好了！",
          hideIcon: "/failure.ico",
          hideText: "(●—●)喔哟，崩溃啦！",
          recoverTime: 2000
        }
      ],

    ],
    
}
