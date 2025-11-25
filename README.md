# Deploy

This will build the site with gatsby and then push it up to the repository and
make it live!

I think this also removed the CNAME file from the repository which Git Hub
Pages uses to verify the custom domain for the site. To get it back, go to the
Pages configuration here:
https://github.com/howlround/world-theatre-map-visualizations/settings/pages
and put in "www.worldtheatremap.org" for the "Custom domain" and click the
"Save" button.

```
yarn install
yarn run deploy
```

# Dev

```
yarn run dev
```
