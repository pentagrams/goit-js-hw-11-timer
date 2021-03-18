import refs from './refs'

class CountdownTimer {
  constructor(params) {
    this.run(params.targetDate);
    counter = null;
  }


  step(targetDate) {
    const currentDate = Date.now();
    let delta = targetDate - currentDate;
    const counter = {
      days: Math.floor(delta / (1000 * 60 * 60 * 24)),
      hours: Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((delta % (1000 * 60)) / 1000),
    };
  }


  pad(value) {
      return String(value).padStart(2, '0');
    };


  padFormat() {
    refs.days.textContent = pad(counter.days);
    refs.hours.textContent = pad(counter.hours);
    refs.mins.textContent = pad(counter.mins);
    refs.secs.textContent = pad(counter.secs);
  }


  startTimer(){
      step();
      setInterval(step, 1000);
    };
}


export default CountdownTimer;
