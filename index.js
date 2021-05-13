import cheerio from 'cheerio'

const HTML = `<body>
    <div style="color: black;">Hello</div>
    world
    <small>!</small>
</body>`

const $ = cheerio.load(HTML)
const bodyContents = $('body').contents()

/**
 * Only dom elements are passed into the filter method
 */
const filteredItems = bodyContents.filter((i, item) => {
    console.log('filter ' + i, item.type)
    return item.type === 'text'
})

/**
 * No items are logged, as textNodes aren't passed into the filter method, so it's not possible to filter on textNodes
 */
console.log('Filtered items: ')
filteredItems.each((i, item) => console.log(item))

console.log(' ')

/**
 * All dom nodes are passed into the each method
 */
bodyContents.each((i, item) => {
    console.log('each ' + i, item.type)
})
