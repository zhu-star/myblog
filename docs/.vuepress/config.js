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
    }
}
