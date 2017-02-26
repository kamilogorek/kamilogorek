const fs = require('fs')
const path = require('path')
const glob = require('glob')
const assert = require('assert')
const mkdirp = require('mkdirp')

const showdown = require('showdown')
const converter = new showdown.Converter()

const DIST = 'build'
const TEMPLATE_FILE = 'template.html'
const PAGES_DIR = 'pages'

/**
 * Available metadata:
 * - permalink
 * - title
 **/

function parse (file, isMarkdown = false) {
  const fileContent = fs.readFileSync(file, 'utf8').trim()
  const metadataDivider = '---'

  if (!fileContent.startsWith(metadataDivider)) console.log('[ WARNING ] No metadata for file', file)

  const metadataDividerIndex = fileContent.indexOf(metadataDivider, metadataDivider.length)

  const meta = fileContent
    .slice(0, metadataDividerIndex)
    .split(metadataDivider)
    .map(x => x.trim())
    .filter(x => x)[0]

  const content = fileContent
    .slice(metadataDividerIndex + metadataDivider.length)
    .trim()

  const defaultMetadata = {
    title: ''
  }

  const metadata = meta.split('\n')
    .map(line => {
      const index = line.indexOf(':')
      return [
        line.slice(0, index).trim(),
        line.slice(index + 1).trim()
      ]
    })
    .reduce((acc, tag) => {
      acc[tag[0]] = tag[1]
      return acc
    }, {})

  return {
    metadata: Object.assign({}, defaultMetadata, metadata),
    filestats: path.parse(file),
    content: isMarkdown ? converter.makeHtml(content) : content
  }
}

function getReplaceTagFor (name) {
  return new RegExp(`\\{\\{ ?${name} ?\\}\\}`, 'g')
}

function transform ({ metadata, filestats, content }) {
  const template = fs.readFileSync(TEMPLATE_FILE, 'utf8')

  const transformedContent = template
    .replace(getReplaceTagFor('title'), ` — ${metadata.title}`)
    .replace(getReplaceTagFor('content'), content)
    .replace(getReplaceTagFor('date'), metadata.date)

  return {
    metadata,
    filestats,
    content: transformedContent
  }
}

function store ({ metadata, filestats, content }) {
  let fileDir
  let filePath

  switch (filestats.name) {
    case 'index':
    case '404':
      fileDir = path.join(DIST)
      filePath = path.join(fileDir, filestats.base)
      break

    default:
      fileDir = metadata.permalink ? path.join(DIST, metadata.permalink) : path.join(DIST, filestats.dir.split(PAGES_DIR)[1], filestats.name)
      filePath = path.join(fileDir, 'index.html')
  }

  console.log('[ SUCCESS ] Built file', filestats.base)

  mkdirp.sync(fileDir)
  fs.writeFileSync(filePath, content)
}

function copy (file) {
  Array.isArray(file) ? file.forEach(_copy) : _copy(file)
}

function _copy (file) {
  fs.writeFileSync(
    path.join(DIST, file),
    fs.readFileSync(file, 'utf8')
  )
  console.log('[ SUCCESS ] Copied file', file)
}

function build () {
  console.log('[ INFO ] Building static pages')

  glob.sync(`./${PAGES_DIR}/**/*.{html,md}`)
    .map((file) => {
      const isMarkdown = path.extname(file) === '.md'
      return parse(file, isMarkdown)
    })
    .map(transform)
    .map(store)

  console.log('[ INFO ] Copying required files')

  copy([
    'CNAME',
    'favicon.ico',
    'cv.pdf'
  ])

  console.log('[ INFO ] Done!')
}

build()
