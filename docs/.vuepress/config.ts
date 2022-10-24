/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'blog.orochi.press:8888' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "大蛇空间",
      description: '后端技术栈汇总与支撑亿级流量的架构演进之路',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Java',
        link: '/java/',
        items: [
          { text: 'JVM', link: '/note/jvm/classLoader/' },
          { text: '基础', link: '/note/basis/thread/' },
          { text: 'jdk源码', link: '/note/jdkSource/HashMap/' },
          { text: '算法', link: '/note/algorithm/bubbleSort/' },
          { text: '设计模式', link: '/note/designPatterns/singleton/' },
          { text: '网络开发', link: '/note/network/tcp/' },
          { text: '微服务', link: '/note/microService/springCloud/' },
        ],
      },
      {
        text: '中间件',
        link: '/middleware/',
        items: [
          { text: 'NoSql', link: '/node/nosql/es/' },
          { text: '关系型数据库', link: '/node/db/mysql/' },
          { text: '消息队列', link: '/node/mq/rocketMq/' },
          { text: 'zookeeper', link: '/node/zk/zookeeper/' },
        ],
      },
      {
        text: '源码',
        link: '/sourceCode/',
        items: [
          { text: 'spring全家桶', link: '/node/sourceCode/springframework/' },
          { text: 'ORM', link: '/node/sourceCode/mybatis/' },
          { text: '分布式组件', link: '/node/sourceCode/redission/' },
          { text: '消息队列', link: '/node/sourceCode/rocketMq/' },
        ],
      },
      {
        text: '架构',
        link: '/framework/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          { text: '消息平台架构设计', link: '/note/fwk/msgPlatform/' },
          { text: '财务平台架构设计', link: '/note/fwk/financialPlatform/' },
          { text: '物流操作平台架构设计', link: '/note/fwk/opsPlatform/' },
          { text: '海量IM推送架构设计', link: '/note/fwkIm/imPush/' },
          { text: '海量实时分布式日志采集架构设计', link: '/note/fwkElk/elk/' },
          { text: '自制PVP游戏架构设计', link: '/note/fwkGame/pvpGame/' },
          { text: '三高设计', link: '/note/fwk3H/seckillSystem/' },
          { text: '其他设计', link: '/note/fwkOther/fullChainTraceId/' },
          { text: '实验室', link: '/note/fwkLab/millionConnection/' },
        ],
      },
      {
        text: '问题汇总',
        link: '/accidentSummary/',
        items: [
          { text: '生产事故', link: '/node/proAccident/serviceAvalanche/' },
          { text: '日常问题', link: '/node/normal/ece/' },
          { text: '其他事故收录', link: '/node/otherAccident/mqTransactionIdTooLong/' },
        ],
      },
      {
        text: '优化集锦',
        link: '/performance/',
        items: [
          { text: 'JVM优化', link: '/node/performance/jvm/' },
          { text: '中间件优化', link: '/node/performance/es/' },
          { text: '框架优化', link: '/node/performance/hystrix/' },
          { text: '代码优化', link: '/node/performance/waybillNoSplit/' },
          { text: '自研组件', link: '/node/performance/vertxWebContainer/' },
        ],
      },
      {
        text: '监控',
        link: '/monitor/',
        items: [
          { text: 'ELK', link: '/node/monitor/elk/' },
          { text: '微服务监控', link: '/node/monitor/microservice/' },
          { text: '响应式服务监控', link: '/node/monitor/vertxWebContainer/' },
          { text: '钉钉微信定制推送', link: '/node/monitor/ddPush/' },
          { text: 'Hystrix监控', link: '/node/monitor/hystrix/' },
          { text: '其他监控', link: '/node/monitor/bizThread/' },
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '技术文档', link: '/node/normal/piSetup/', },
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3' },
          { text: '《Git》笔记', link: '/pages/8292d8/' },
          { text: '博客搭建', link: '/pages/41f87d890d0a02af' },
        ],
      },
      { text: '友情链接', link: '/friends/' },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/黑洞.jpg', // 导航栏logo
    // repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // bodyBgImg: [
    //   'http://lsjqn.orochi.press/blog/创生之柱.jpg',
    //   'http://lsjqn.orochi.press/blog/蟹状星云2.jpg',
    //   'http://lsjqn.orochi.press/blog/蝴蝶星云.jpg',
    //   'http://lsjqn.orochi.press/blog/玫瑰星系.jpg',
    //   'http://lsjqn.orochi.press/blog/黑洞.jpg',
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    updateBar: { // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Orochi', // 必需
      link: 'https://github.com/765741668', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'http://lsjqn.orochi.press/blog/蟹状星云2.jpg',
      name: 'Orochi',
      slogan: '比你优秀的并不可怕,勤能补拙,但比你优秀的人比你还努力,这太可怕了',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:765741668@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/765741668',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=603285922',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        'Orochi | <a href="https://github.com/765741668/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Orochi',
        link: 'https://github.com/765741668'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '后端博客,个人技术博客,后端,后端开发,后端框架,技术文档,git,github,markdown,es,elasticsearch,redis,mq,mysql,oracle,rest,elk',
      },
    ],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-image-viewer", // 放大图片
      {
        selector: ".theme-vdoing-content",
      },
    ],
    // [
    //   'vuepress-plugin-zooming', // 放大图片
    //   {
    //     selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
    //     options: {
    //       bgColor: 'rgba(0,0,0,0.6)',
    //     },
    //   },
    // ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'a6e1355287947096b88b',
    //       clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //       repo: 'blog-gitalk-comment', // GitHub 仓库
    //       owner: 'xugaoyi', // GitHub仓库所有者
    //       admin: ['xugaoyi'], // 对仓库有写权限的人
    //       // distractionFreeMode: true,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body:
    //         '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
