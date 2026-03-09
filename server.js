import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const port = process.env.PORT || 3000
const distDir = path.join(__dirname, 'dist')

const getContentType = (filePath) => {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8'
    case '.js':
      return 'application/javascript; charset=utf-8'
    case '.css':
      return 'text/css; charset=utf-8'
    case '.json':
      return 'application/json; charset=utf-8'
    case '.svg':
      return 'image/svg+xml'
    case '.png':
      return 'image/png'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.webp':
      return 'image/webp'
    case '.avif':
      return 'image/avif'
    case '.ico':
      return 'image/x-icon'
    default:
      return 'application/octet-stream'
  }
}

const safeJoin = (base, target) => {
  const targetPath = path.normalize(path.join(base, target))
  if (!targetPath.startsWith(base)) return null
  return targetPath
}

const server = http.createServer((req, res) => {
  try {
    const urlPath = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`).pathname

    const requestPath = decodeURIComponent(urlPath)
    const filePath = safeJoin(distDir, requestPath === '/' ? 'index.html' : requestPath.slice(1))

    if (filePath && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) })
      fs.createReadStream(filePath).pipe(res)
      return
    }

    const indexPath = path.join(distDir, 'index.html')
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      fs.createReadStream(indexPath).pipe(res)
      return
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not Found')
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Internal Server Error')
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
