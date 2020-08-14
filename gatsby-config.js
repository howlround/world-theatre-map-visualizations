module.exports = {
  pathPrefix: "/world-theatre-map-visualizations",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald:400,500`
        ],
        display: 'swap'
      }
    },
  ],
}
