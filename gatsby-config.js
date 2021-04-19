module.exports = {
  siteMetadata: {
    title: `Esther Itolima`,
    description: `Esther Itolima is a Frontend Developer from Lagos, Nigeria that create sleek and appealing web application with seamless user interface. She is also community builder`,
    image: `./src/images/logo.png`,
    author: `@esther`,
    keywords: `Frontend Developer in Nigeria, Nigerian Female Software Developer, Nigerian Female Web Developer, Community Manager, Web Developer in Nigeria, Nigeria Software Developer`,
    siteUrl: `https://www.example.com`,
    twitterUsername: "@qween_esta",
  },
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
        name: `Esther Itolima`,
        short_name: `itolimaesther.netlify.app`,
        start_url: `/`,
        background_color: `#1a292d`,
        theme_color: `#1a292d`,
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
        host: 'https://itolimaesther.netlify.app',
        sitemap: 'https://itolimaesther.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    

  ],
}
