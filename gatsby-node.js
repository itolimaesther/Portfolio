/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type Site implements Node {
        siteMetadata: SiteSiteMetadata!
      }
      
      type SiteSiteMetadata {
        title: String!
        description: String!
        author: String!
        keywords: String!
        siteUrl: String!
      }
    `
    createTypes(typeDefs)
  }

