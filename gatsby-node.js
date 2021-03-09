exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/african-diaspora`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
