var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
const collect = require('metalsmith-auto-collections');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');


Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
  .metadata({                 // add any variable you want
                              // use them in layout-files
    sitename: "All About Vision Labs",
    siteurl: "http://labs.allaboutvision.com/",
    description: "Storage for allaboutvision.com ideas, frameworks, UI elements, and advertising.",
    generatorname: "Metalsmith",
    generatorurl: "http://metalsmith.io/"
  })
  .source('./src/_pages')            // source directory
  .destination('./dist')     // destination directory
  .clean(true)                // clean destination before
  .use(collect({
    pattern: ['**/*.md','!*.md']
  }
  ))                        // use `collections.posts` in layouts
  .use(markdown())            // transpile all md into html
  .use(permalinks({           // change URLs to permalink URLs
    relative: false           // put css only in /css
  }))
  .use(layouts({              // wrap layouts around html
    engine: 'handlebars',       // use the layout engine you like
    directory: 'src/_templates',
    partials: 'src/_templates/_partials',
    partialExtension: ".html"
  }))
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });