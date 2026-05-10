import { copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')

writeFileSync(join(dist, '.nojekyll'), '')
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
