const CONFIG = {
  // profile setting
  profile: {
    name: '제로',
    image: '/profile.jpg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: '게으른 개발자',
    bio: '영화보는 것을 좋아합니다.',
    email: 'yyi9647@gmail.com',
    github: 'yoon-young-il',
    linkedin: '',
    instagram: '',
  },
  // projects: [
  //   {
  //     name: 'Untilled',
  //     href: 'https://untilled.web.app'
  //   }
  // ],
  // blog setting
  blog: {
    title: 'zero.log',
    description: '게으른 개발자의 잡다한 기록',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: 'https://morethan-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
