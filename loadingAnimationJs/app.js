// console.log(start)
// train.onclick = function() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;

//       train.style.left = timePassed / 5 + 'px';

//       console.log(train.style.left)

//       if (timePassed > 2000) clearInterval(timer);

//     }, 20);
//   } 


//   let prev = performance.now();
//   let times = 0;

//   requestAnimationFrame(function measure(time) {
//     document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
//     prev = time;

//     if (times++ < 10) requestAnimationFrame(measure);
//   })

const train = document.querySelector('#train')
var currentPos = 0

function moveThing() {
    currentPos += 5
    train.style.left = currentPos + "px";
    if (Math.abs(currentPos) >= 400) {
        currentPos = 0
    }
    requestAnimationFrame(moveThing)
}

moveThing();

//pos
// optimized for animation and runs as fast as your diplay allow (nearly 60fps)
// support all browser
// some other pos