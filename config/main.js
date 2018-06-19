/** General Configurations Like PORT, HOST names and etc... */

let config = {
  env: process.env.NODE_ENV || 'development',
  // host: process.env.HOST || 'localhost',
  host: process.env.HOST || '192.168.88.33',
  port: process.env.PORT || 9000,
  karmaPort: 9876,

  // This part goes to React-Helmet for Head of our HTML
  app: {
    head: {
      title: 'site-catalog',
      titleTemplate: 'site-catalog: %s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'React Redux Typescript' },
      ]
    }
  }
};

module.exports = config;
