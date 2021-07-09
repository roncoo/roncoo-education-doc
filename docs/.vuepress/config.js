module.exports = {
    base: "/opensource/",
    port: 80,
    title: '领课教育系统(开源版)-官方文档',
    themeConfig: {
        head: [
            ['link', {rel: 'icon', href: '/favicon.ico'}]
        ],
        nav: [
            {
                text: 'Alibaba分支',
                items: [
                    {text: '开发指南', link: '/alibaba/guide/'},
                    {text: '部署文档', link: '/alibaba/deploy/'}
                ]
            },
            {text: 'Netflix分支', link: '/netflix/'},
            {text: '开源版', link: 'http://edu.os.roncoo.com/'},
            {text: '商业版', link: 'https://demo.edu.roncoo.net/'},
            {text: 'GitHub', link: 'https://github.com/roncoo/roncoo-education'},
            {text: 'Gitee', link: 'https://gitee.com/roncoocom/roncoo-education'}
        ],
        sidebar: 'auto',
        lastUpdated: '上次更新'
    }
}
