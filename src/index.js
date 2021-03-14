// import './styles.css';

class CountdownTimer {
      constructor(selector, time) {
            this.element = document.querySelector(selector);
            this.timeLeft = time;
            this.interval = null;
      }

      getDays() {
            return String(Math.floor(this.timeLeft / (1000 * 60 * 60 * 24))).padStart(2,'0');
       }

      getHours() {
            return String(Math.floor(this.timeLeft / (1000 * 60 * 60 * 24))).padStart(2,'0');
       }
      
      getMinutes() {
            return String(Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)),).padStart(2, '0');
       }
      
      getSecoonds() {
            return String(Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)),).padStart(2, '0');
      }


      timerMarkup() {
            return `
                  <div class="field">
                  <span class="value" >${this.getDays()}</span>
                  <span class="label">Days</span>
                  </div>

                  <div class="field">
                  <span class="value" >${this.getHours()}</span>
                  <span class="label">Hours</span>
                  </div>

                  <div class="field">
                  <span class="value" >${this.getMinutes()}</span>
                  <span class="label">Minutes</span>
                  </div>

                  <div class="field">
                  <span class="value" >${this.getSecoonds()}</span> 
                  <span class="label">Seconds</span>
                  </div>
                  `;
      }
      
      render() {
            this.element.innerHTML = this.timerMarkup();
      }

      timerTick() {
            this.timeLeft = this.timeLeft - 1000;
            if (this.timeLeft <= 0) {
                  this.timeLeft = 0;
                  clearInterval(this.interval);
            }

            this.render();
      }
      
      createInterval() {
            return setInterval(() => {
                  this.timerTick();
            }, 1000);
      }

      init() {
      this.interval = this.createInterval();
      }
};

const targetDate = new Date('Jul 17, 2019');

const timer = new CountdownTimer('#timer-1', targetDate);
timer.init();





