const { sitemapBuilder, paramsApplier } = require('react-router-sitemap')
const routes = require('./routes');
const path = require('path');
const fs = require('fs')

const hostname = 'http://localhost:3000';

const dest = path.resolve('./public', 'sitemap.xml');

const posts = ['Smartphone', 'Laptop', 'Tableta', 'Smartwatch', 'Televizor'];

const config = {
    '/shop/:category': [
        { category: posts }
    ]
};

const paths = paramsApplier(routes, config);

const sitemap = sitemapBuilder(hostname, paths);

// write sitemap.xml file
fs.writeFileSync(dest, sitemap.toString());