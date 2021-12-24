const crew = document.getElementById("crew")
document.getElementById("btn").addEventListener("click", launch)

function launch() {
    crew.classList.add("bounce-out-top")
    setTimeout(setfunction,1000)
}


// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

const countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();
const audioPlay = document.getElementById("myAudio");

function setfunction(){
    let x = setInterval(function() {
        
        let now = new Date().getTime();
        
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        let seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));
        
        crew.classList.add("bounce-in-top")
        crew.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
          clearInterval(x);
          crew.innerHTML = "Merry Christmas";
          audioPlay.play();
          var duration = 15 * 1000;
          var animationEnd = Date.now() + duration;
          var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }

          var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
          }, 250);
          
        }
      
      }, 1000);
      
      function pad(number) {
          return number < 10 ? `0${number.toString()}` : number
 
        }
}