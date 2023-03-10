module.exports = {
    lang: 'en-US',
    title: 'Datepicker vue',
    description: 'Vue.js 3 date picker component',
  
    base: '/datepicker-vue/',
  
    themeConfig: {
      repo: 'rameshjs/datepicker-vue',
      docsRepo: 'rameshjs/datepicker-vue',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      socialLinks: [{ icon: 'github', link: 'https://github.com/rameshjs/datepicker-vue' }],
      nav: [{ text: 'Home', link: '/' }],
      sidebar: [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/installation' },
          ],
        },
        {
            text: 'Props',
            items: [
              { text: 'General configuration', link: '/general-configuration' },
              { text: 'Modes', link: '/modes' },
              { text: 'Formatting', link: '/formatting' },
            ],
          },
          {
            text: 'Slots',
            items: [
              { text: 'Trigger', link: '/trigger' },
              { text: 'Input', link: '/input' },
            ],
          },
          {
            text: 'Customization',
            items: [
              { text: 'css', link: '/css' },
            ],
          },
      ],
    },
  }