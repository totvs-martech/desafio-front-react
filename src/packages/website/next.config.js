const withTM = require("next-transpile-modules")(["@monorepo/components"]);
module.exports = {
  ...withTM(),
  images: {
    domains: ['i.annihil.us'],
  },
};
