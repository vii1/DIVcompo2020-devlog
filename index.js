var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');

Metalsmith(__dirname)
  .metadata({
    title: 'vii @ DIVcompo 2020',
    description: "Haciendo un matamarcianos en un mes",
    generator: 'Metalsmith',
    url: 'http://www.metalsmith.io/',
  })
  .source('./src')
  .destination('./public')
  .clean(false)
  .use(collections({
    articles: {
      pattern: 'articles/**/*.md',
      sortBy: 'date',
      reverse: true
    },
  }))
  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      engine: 'handlebars',
      directory: './layouts',
      default: 'article.html',
      pattern: ["*/*/*html","*/*html","*html"],
      partials: {
        header: 'partials/header',
        footer: 'partials/footer'
      }
    })
  )
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
