const cliProgress = require('cli-progress')
const path = require('path')
const fs = require('fs')

const colors = require('colors')
const count = 1e7 + 1
const file = path.resolve('../10m.csv')
if (fs.existsSync(file)) fs.unlinkSync(file)
const bar = new cliProgress.SingleBar({
  format: `progress |${colors.cyan(
    '{bar}'
  )}| {percentage}% | {total} / {value} | {duration}s  `,
  barCompleteChar: `\u2588`,
  barIncompleteChar: '.'
})

bar.start(count, 0)
const stream = fs.createWriteStream(file)
stream.on('err', err => console.error(err))
stream.on('close', () => {
  bar.stop()
  console.log('finished writing')
})
const randomNum = max => {
    return Math.floor(Math.random() * max);
    }
let i = 0
write()
function write() {
  let ok = true
  for (i; i < count; i++) {
    let room = randomNum(5) + 1;
    var str = `${i}	{https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}}	${room}	${room * 2}	${randomNum(200)}	${randomNum(100)}	${randomNum(500)}	{${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)}} `

    if (ok) {
      if (i === count - 1) {
        ok = stream.write(str)
        bar.update(i + 1)
        stream.end()
      } else {
        ok = stream.write(str +  '\n')
        bar.update(i + 1)
      }
    } else {
      stream.once('drain', write)
      break
    }
  }
}