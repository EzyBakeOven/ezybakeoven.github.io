
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/matthewhoy/Desktop/dev/ezybakeoven.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/matthewhoy/Desktop/dev/ezybakeoven.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/matthewhoy/Desktop/dev/ezybakeoven.github.io/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/matthewhoy/Desktop/dev/ezybakeoven.github.io/src/pages/using-typescript.tsx"))
}

