import antfu from '@antfu/eslint-config'

import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu({
  plugins: {
    'better-tailwindcss': eslintPluginBetterTailwindcss,
  },
  extends: [
    'plugin:better-tailwindcss/recommended-warn',
    'plugin:better-tailwindcss/recommended-error',
  ],
  rules: {
    ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
    ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

    'better-tailwindcss/enforce-consistent-line-wrapping':
    ['warn', { printWidth: 80 }],
    'better-tailwindcss/no-unregistered-classes': 'off',

    'max-len': ['warn', {
      code: 80,
      ignoreUrls: true,
      ignorePattern: '^import\\s.+\\sfrom\\s.+',
    }],
    'vue/custom-event-name-casing': 'warn',
  },
})
