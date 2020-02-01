var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var handlebars = require('handlebars');
var assets = require('metalsmith-assets');
const feed = require('metalsmith-feed');

handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'vii @ DIVcompo 2020',
      url: 'https://divcompo2020.now.sh/',
      author: 'vii'
    },
    sitename: 'vii @ DIVcompo 2020',
    siteurl: 'https://divcompo2020.now.sh/',
    author: 'vii',
    description: "Haciendo un matamarcianos en un mes",
    generatorname: 'Metalsmith',
    generatorurl: 'http://www.metalsmith.io/',
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
  .use(permalinks({
    pattern: ':title',
    relative: false,
  }))
  .use(assets({
    source: 'static',
    destination: 'static'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: 'layouts',
    //default: 'article.hbs',
    partialExtension: 'hbs',
    //pattern: ["**/*.hbs"],
    partials: {
      header: 'partials/header',
      footer: 'partials/footer'
    }
  }))
  .use(feed({
    collection: 'articles'
  }))
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
