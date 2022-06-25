const BLOG = {
  title: '胖虎',
  author: '胖虎',
  email: 'i@zuolan.me',
  link: 'https://panghuu.xyz',
  newsletter: '左蓝的周刊',
  description: '一个静悄悄的博客.',
  notes: '左蓝的笔记',
  notesNav: {
    index: '全部笔记',
    blog: '返回博客',
    contact: '联系我'
  },
  notesLink: {
    index: '/',
    blog: 'https://panghuu.xyz',
    contact: 'https://zuolan.me/contact'
  },
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2015, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  showTitlebarText: false, // Craft Docs page show title bar text on desktop
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: {
    twitter: 'https://twitter.com/izuolan',
    github: 'https://github.com/izuolan',
    telegram: 'https://t.me/zuolan'
  },
  seo: {
    keywords: ['胖虎', 'Panghu', 'Blog'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '263895784', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://channel.zuolan.me/', // The link of your Telegram channel
  telegramChannelName: 'zuolan_channel', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/8gQSdBtbuPjpp1', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee and Umami, please fill with 'ga' or 'ackee' or 'umami', leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    },
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: utterances, cusdis, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://vfnvdomtwskgjtjusuus.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbnZkb210d3NrZ2p0anVzdXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyMDA0ODEsImV4cCI6MTk3MTc3NjQ4MX0.KYiGTb-y3gk9G18HU4Bu284yiR1hyH92_6ZG08kFjPo', // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: '', // data-host, change this if you're using self-hosted version
      scriptSrc: '' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
