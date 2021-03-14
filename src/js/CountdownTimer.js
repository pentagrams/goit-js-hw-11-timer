class CountdownTimer {
  constructor(params) {
    this.generateHtml(params.selector);
    this.run(params.targetDate);
  }
  generateHtml = id => {
    const htmlRef = document.querySelector(id);

    htmlRef.innerHTML = `
      <div class="field">
        <span class="value" data-value="days">11</span>
        <span class="label">Days</span>
      </div>

      <div class="field">
        <span class="value" data-value="hours">11</span>
        <span class="label">Hours</span>
      </div>

      <div class="field">
        <span class="value" data-value="mins">11</span>
        <span class="label">Minutes</span>
      </div>

      <div class="field">
        <span class="value" data-value="secs">11</span>
        <span class="label">Seconds</span>
        </div>
      `;
  };
  run = targetDate => {
    const refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };

    const step = () => {
      const currentDate = Date.now();
      let delta = targetDate - currentDate;
      const counter = {
        days: Math.floor(delta / (1000 * 60 * 60 * 24)),
        hours: Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((delta % (1000 * 60)) / 1000),
      };

      refs.days.textContent = pad(counter.days);
      refs.hours.textContent = pad(counter.hours);
      refs.mins.textContent = pad(counter.mins);
      refs.secs.textContent = pad(counter.secs);
    };

    const pad = value => {
      return String(value).padStart(2, '0');
    };

    const startTimer = () => {
      step();
      setInterval(step, 1000);
    };

    startTimer();
  };
}
export default CountdownTimer;
