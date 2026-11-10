import { cp, mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { stripTypeScriptTypes } from 'node:module'
import { extname, join, resolve, sep } from 'node:path'
import { languages } from './content.ts'
import { render, localePath } from './page.ts'

const dist = resolve('dist')
await mkdir(dist, { recursive: true })
await cp('public', dist, { recursive: true })
const client = await readFile('client.ts', 'utf8')
await writeFile(join(dist, 'client.js'), stripTypeScriptTypes(client, { mode: 'strip' }))
for (const locale of languages) {
  const folder = join(dist, localePath(locale))
  await mkdir(folder, { recursive: true })
  await writeFile(join(folder, 'index.html'), render(locale))
}

const mime: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
}

if (process.argv.includes('--serve')) {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname)
      let path = resolve(dist, '.' + pathname)
      if (path !== dist && !path.startsWith(dist + sep)) {
        response.writeHead(403).end()
        return
      }
      if ((await stat(path)).isDirectory()) path = join(path, 'index.html')
      const file = await readFile(path)
      response.writeHead(200, { 'Content-Type': mime[extname(path)] ?? 'application/octet-stream' }).end(file)
    } catch {
      response.writeHead(404).end('404')
    }
  })
  server.listen(4173, '127.0.0.1', () => console.log('http://127.0.0.1:4173/'))
}
