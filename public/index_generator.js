const apiConfig = require('../src/utils/apiConfig.json')
console.log('env', process.env.NODE_ENV)
const gtmID = apiConfig && apiConfig[process.env.NODE_ENV].gtmId
const isGTMRequired = apiConfig[process.env.NODE_ENV].gtmRequired
const generateIndexHtml = function () {
  let indexTemplate =
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/fav.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <title>Full Of Africa</title>
    </head>
    ${isGTMRequired && gtmID
      ? `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmID}');</script>`
      : ''
    }
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      ${isGTMRequired
        ? `<noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>`
        : ''
      }
    </body>
    `+ ((process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'uat')
    ? `<script>
        console.log = function() {
        // do nothing here
      }</script>`
    : ''
  ) +
  `
  </html>
  `
  return indexTemplate.toString()
}

module.exports = generateIndexHtml;
