

class CountdownTimer {
  constructor(params) {
    this.selector = params.selector;
    this.targetDate = params.targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }


  step(targetDate) {
    const currentDate = Date.now();
    let data = targetDate - currentDate;
    return data;
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
    this.refs.days.textContent = this.getDays();
    this.refs.hours.textContent = this.getHours();
    this.refs.mins.textContent = this.getMins();
    this.refs.secs.textContent = this.getSecs();
  }


  startTimer(){
    setInterval(() => {
      this.textFormat();
    },1000)
  }
}


export default CountdownTimer;
