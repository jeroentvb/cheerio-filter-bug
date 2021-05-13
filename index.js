import cheerio from 'cheerio'

const HTML = `<body>
    <div style="color: black;">Hello</div>
    world
    <small>!</small>
</body>`

const $ = cheerio.load(HTML)
const bodyContents = $('body').contents()

const filteredItems = bodyContents.filter((i, item) => {
    console.log('filter ' + i, item.type)
    return item.type === 'text'
})

console.log('Filtered items: ')
filteredItems.each((i, item) => console.log(item))

console.log(' ')

bodyContents.each((i, item) => {
    console.log('each ' + i, item.type)
})
