
  const randomNum = max => {
  return Math.floor(Math.random() * max);
  }
for(var i = 1; i < 1e7 + 1; i++){
  let room = randomNum(5) + 1;
 var str = `${i}	{https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))},https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}}	${room}	${room * 2}	${randomNum(200)}	${randomNum(100)}	${randomNum(600)}	{${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)}} `
 console.log(str )
}




































