module.exports = {
  port: "3000",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/TypeScript-start/",
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  lang: "zh-CN",
  title: "TypeScript-start",
  description: "TypeScript 学习入门",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "TypeScript-start",
      description: "TypeScript 学习入门"
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "TypeScript-start",
    //   description: "Getting started with typescript"
    // }
  },
  head: [
    ["link", {
      rel: "icon",
      href: "/favicon.ico"
    }]
  ],
  themeConfig: {
    repo: "Sogrey/TypeScript-start",
    docsRepo: "Sogrey/TypeScript-start",
    editLinks: true,
    docsDir: 'source',
    locales: {
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [{
            text: "指南",
            link: "/zh/guide/"
          },
          {
            text: "配置",
            link: "/zh/config/"
          },
          {
            text: "链接",
            items: [{
                text: "TypeScript官网",
                link: "http://www.typescriptlang.org/"
              },
              {
                text: "TypeScript中文网",
                link: "https://www.tslang.cn/"
              },
              {
                text: "TypeScript中文网文档",
                link: "https://www.tslang.cn/docs/home.html"
              },
              {
                text: "TypeScript github",
                link: "https://github.com/Microsoft/TypeScript"
              }
            ]
          }
        ],
        sidebar: {
          "/zh/guide/": genGuideSidebar(true),
          "/zh/config/": genConfigSidebar(true)
        }
      },
      // "/en/": {
      //   label: "English",
      //   selectText: "Languages",
      //   editLinkText: "Edit this page on GitHub",
      //   lastUpdated: "Last Updated",
      //   nav: [{
      //       text: "Guide",
      //       link: "/en/guide/"
      //     },
      //     {
      //       text: "Config",
      //       link: "/en/config/"
      //     },
      //     {
      //       text: "Ecosystem",
      //       items: [{
      //         text: "Baidu",
      //         link: "https://www.baidu.com"
      //       },
      //       {
      //         text: "Taobao",
      //         link: "http://www.taobao.com"
      //       },
      //       {
      //         text: "Iqiyi",
      //         link: "http://www.iqiyi.com/"
      //         }
      //       ]
      //     }
      //   ],
      //   sidebar: {
      //     "/en/guide/": genGuideSidebar(false),
      //     "/en/config/": genConfigSidebar(false)
      //   }
      // }
    }
  }
};

function genGuideSidebar(isZh) {
  // return [{
  //     title: isZh ? "快速入门" : "Getting Start",
  //     collapsable: false,
  //     children: ["", "quick-start"]
  //   },
  //   {
  //     title: isZh ? "核心功能" : "Core",
  //     collapsable: false,
  //     children: ["generator"]
  //   }
  // ];
  return [{
      title: "快速入门",
      collapsable: true,
      children: ["", /*Typescript 介绍*/
        "01-install" /*Typescript 安装及开发工具*/
      ]
    },
    {
      title: "TypeScript基础",
      collapsable: true,
      children: [
        "02-data-type"/*基础数据类型 */
      ]
    }
  ];
}

function genConfigSidebar(isZh) {
  return [{
    title: isZh ? "配置" : "Config",
    collapsable: false,
    children: [""]
  }];
}