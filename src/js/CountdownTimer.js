import refs from './refs'

class CountdownTimer {
  constructor(params) {
    this.selector = document.querySelector(params.selector);
    this.targetDate = params.targetDate;
  }


  step(targetDate) {
    const currentDate = Date.now();
    let data = targetDate - currentDate;
    return data;
  }
  
  
  getDays() {
    return this.pad(Math.floor(this.step(this.targetDate) / (1000 * 60 * 60 * 24)));
  }


  
  
  getDays() {
    return this.pad(Math.floor(this.step(this.targetDate) / (1000 * 60 * 60 * 24)));
  }
  getHours() {
    return this.pad(Math.floor((this.step(this.targetDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  }

  getMins() {
    return this.pad(Math.floor((this.step(this.targetDate) % (1000 * 60 * 60)) / (1000 * 60)));
  }

  getSecs() {
    return this.pad(Math.floor((this.step(this.targetDate) % (1000 * 60)) / 1000));
  }


  pad(value) {
      return String(value).padStart(2, '0');
  };


  textFormat() {
    refs.days.textContent = this.getDays();
    refs.hours.textContent = this.getHours();
    refs.mins.textContent = this.getMins();
    refs.secs.textContent = this.getSecs();
  }


  startTimer(){
    this.textFormat();
  }
}


export default CountdownTimer;
