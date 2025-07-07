// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.js или .eslintrc.js
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
    // Плагины better-tailwindcss
    ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
    ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

    // Правило переноса строк с классами >100 символов
    'better-tailwindcss/enforce-consistent-line-wrapping':
    ['warn', { printWidth: 80 }],

    // Стандартные правила ESLint / Vue
    'max-len': ['warn', {
      code: 80,
      ignoreUrls: true,
      ignorePattern: '^import\\s.+\\sfrom\\s.+',
    }],
    'vue/custom-event-name-casing': 'warn',
  },
})
