module.exports = {
    base: "/doc/",
    port: 80,
    title: '领课教育系统(开源版)-官方文档',
    description: '领课教育系统，致力于打造一个各行业都适用的在线教育平台',
    themeConfig: {
        head: [
            ['link', {rel: 'icon', href: '/favicon.ico'}]
        ],
        nav: [
            {
                text: '系统指南',
                items: [
                    {text: '本地开发', link: '/guide/dev/'},
                    {text: '生产部署', link: '/guide/deploy/'},
                ]
            },
            {text: '常见问题', link: '/faq/'},
            {text: '开源版', link: 'http://eduos.roncoo.net/'},
            {text: '商业版', link: 'https://edu.roncoo.net/'},
            {text: 'GitHub', link: 'https://github.com/roncoo/roncoo-education'},
            {text: 'Gitee', link: 'https://gitee.com/roncoocom/roncoo-education'}
        ],
        sidebar: 'auto',
        lastUpdated: '上次更新'
    }
}
