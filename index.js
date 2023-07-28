const {generateSlug} = require('random-word-slugs')

const numWords = parseInt(process.argv[2])

const randomSlug = generateSlug(numWords, { format: 'title' })
console.log(randomSlug)