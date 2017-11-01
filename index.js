const Metalsmith  = require('metalsmith');
const collect = require('metalsmith-auto-collections');
const layouts     = require('metalsmith-layouts');
const markdown    = require('metalsmith-markdown');
const permalinks  = require('metalsmith-permalinks');
const watch = require('metalsmith-watch');
const helpers = require('metalsmith-register-helpers')
const metadata = require('metalsmith-metadata');


Metalsmith(__dirname)

  .metadata({
    sitename: "All About Vision Labs",
    siteurl: "http://labs.allaboutvision.com/",
    description: "Storage for allaboutvision.com ideas, frameworks, UI elements, and advertising."
  })
  .source('./src/_pages')
  .destination('./dist')
  .clean(false)
  .use(metadata({
      authors: '_data/authors.json'
    }
  ))
  .use(collect({
    pattern: ['**/*.md','!*.md']
  }
  ))
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: 'src/_templates',
    partials: 'src/_templates/_partials',
    partialExtension: ".html"
  }))
  .use(helpers({
    directory: "src/_templates/_helpers"
  }))
  .use(watch({
    paths: {
      "${source}/**/*":true,
      "src/_templates/**/*": "**/*",
    }
  }))
  .build(function(err) {
    if (err) throw err;
  });