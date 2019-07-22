var counter = 0;

var timeleft;

function setup() {
  noCanvas();
  timer = select('#timer');
  timeleft = Number((getURLParams().min || 0) * 60);
  timeleft += Number(getURLParams().sec || 0)
  timeleft = timeleft || 25 * 60;
  song  = loadSound("./assets/ding.mp3");
  timer.html(convertToMinutes(timeleft - counter));
  setInterval(timeIt, 1000);
}

function timeIt() {
  counter++;
  if (timeleft == counter) {
    song.play();
    counter = 0;
  }
  timer.html(convertToMinutes(timeleft - counter));
}

function convertToMinutes(seconds) {
  return `${nf(floor(seconds / 60), 2)} : ${nf(seconds % 60, 2)}`;
}
