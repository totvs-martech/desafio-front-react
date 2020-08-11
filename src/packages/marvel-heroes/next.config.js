module.exports = {
  env: {
    NODE_ENV: 'DEV'
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  }
}

const withTM = require("next-transpile-modules")(["monorepo/components"]);
module.exports = withTM();