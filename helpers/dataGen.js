const cliProgress = require('cli-progress');
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const randomNum = max => {
  return Math.floor(Math.random() * max);
  }
  bar1.start(1e5, 0);
for(var i = 1; i <  1e5 + 1; i++){
 
  bar1.update(i)
  let room = randomNum(5) + 1;
  var str = `${i}	{https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}}	${room}	${room * 2}	${randomNum(200)}	${randomNum(100)}	${randomNum(600)}	{${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)}} `
  console.log(str)
}
bar1.stop()