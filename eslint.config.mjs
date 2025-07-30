// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  ignores: ['node_modules', '.next', 'dist', 'build', 'coverage', '*.log'],
});
// Your custom configs here
