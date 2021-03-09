module.exports = {
  siteMetadata: {
    title: `World Theatre Map`,
    description: ``,
    author: `HowlRound`,
    siteUrl: `https://worldtheatremap.com`
  },
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
