module.exports = {
  siteMetadata: {
    title: `Esther Itolima`,
    description: `Frontend Developer`,
    image: `./src/images/logo.png`,
    author: `@esther`,
    keywords: `frontend developer, web developer, mobile-friendly, user-experience, nigeria`,
    siteUrl: `https://www.example.com`,
    twitterUsername: "@Ur_melanin_dev",
  },
  assetPrefix: "assets/",
  flags : { DEV_SSR: true},
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
        wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
      },
    },
    `gatsby-remark-lazy-load`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            debug: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `minimal-ui`,
        icon: `src/images/favicon_io/favicon-32x32.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/welcome/`, `/about/`],
      },
    },
    {
    resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        paths: ["static"],
        removeMapFiles: true
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    
    // `gatsby-plugin-no-javascript`

  ],
}
