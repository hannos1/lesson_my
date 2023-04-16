module.exports = {
    title: 'Blog', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    head:[
        ['link',{rel:'icon',href:'/logo.png'}]
    ],
    themeConfig: {
        smoothScroll: true,
        directories: [
            {
              id: "article",
              dirname: "_article",
              title: "文章",
              path: "/article/",
              itemPermalink: "/article/:year/:month/:day/:slug"
            }
        ],
        nav: [
            {
                text: '主页',
                link: '/',
            },
            {
              text: '文章',
              link: '/article/',
            },
            {
              text: "Github",
              link: "https://github.com/hannos1"
            }
        ],
        footer: {
            contact: [
                {
                type: 'github',
                link: 'https://github.com/hannos1',
                }
            ],
        },
        prevText:'<',
        nextText:'>',
        lengthPerPage:'5',
    }
  }