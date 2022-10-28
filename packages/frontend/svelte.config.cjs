const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  base: '/ijome',
  paths: {
    base: '/ijome',
    assets: '/assets'
  }
};
