exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/climate`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
