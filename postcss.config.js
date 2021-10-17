const rege = [
  /el-.+$/,
  /::-webkit/,
  /v-/,
  /^!/,
  /class/,
  /-(leave|enter|appear)(|-(to|from|active))$/,
  /^(?!(|.*?:)cursor-move).+-move$/,
  /^router-link(|-exact)-active$/,
]
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/**/*.html', './src/**/*.vue'],
  // rejected: true,  //开启这个会报 错  TypeError: Cannot read property 'messages' of undefined
  // https://github.com/FullHuman/purgecss/issues/439
  safelist: {
    standard: rege,
    deep: rege,
    greedy: [],
    keyframes: [],
    variables: [],
  },

  defaultExtractor: content => {
    const tailwind = content.match(/[\w-/:]+(?<!:)/g) || []
    // !w-full
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    // // el-table--scrollable-x
    // const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    // const style = contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []

    return tailwind.concat(innerMatches) // .concat(style)
  },
})

module.exports = {
  plugins: [
    // require('tailwindcss'),
    // require('autoprefixer'),
    // // ...[purgecss]
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
