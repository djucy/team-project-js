//Timer
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.date = targetDate;
    this.timerSelector = selector;
  }
  getRefs() {
    const refs = {
      daysSpan: document.querySelector(`${this.timerSelector} span[data-value="days"]`),
      hoursSpan: document.querySelector(`${this.timerSelector} span[data-value="hours"]`),
      minsSpan: document.querySelector(`${this.timerSelector} span[data-value="mins"]`),
      secsSpan: document.querySelector(`${this.timerSelector} span[data-value="secs"]`),
    };
    return refs;
  }

  #intervalId = null;

  #getTimerMarkup() {
    return `
      <div class="timer-box">
      <span>ПРЕМЬЕРА:</span>
      <br>
      <span class="amount" data-value="days">00</span><span class="text">д</span>
      <span class="amount" data-value="hours">00</span> <span class="text">ч</span>
      <span class="amount" data-value="mins">00</span><span class="text">мин</span>
      <span class="amount" data-value="secs">00</span> <span class="text">сек</span>
      </br>
      </div>
  `;
  }

  #newDate() {
    const dateRules = this.timerSelector.replace('#', '');
    return newDate;
  }

  #getTimerSelector() {
    const newDate = this.#newDate();
    const timerMarkUp = this.#getTimerMarkup();
    document.body.insertAdjacentHTML('beforeend', `${newDate} ${timerMarkUp}`);
  }

  makeATime() {
    const timerMarkUp = this.#getTimerMarkup();
    const timerContainer = document.querySelector(`${this.timerSelector}`);
    if (!timerContainer) {
      this.#getTimerSelector();
      return;
    }
    timerContainer.insertAdjacentHTML('afterbegin', timerMarkUp);
  }

  getTimerTime() {
    if (!this.date.getTime()) {
      console.log('Invalid targetDate');
      this.date = new Date();
    }
    return this.date.getTime() - Date.now();
  }

  runTime(number) {
    return String(number).padStart(2, 0);
  }

  getTimerUnits(time) {
    const days = this.runTime(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.runTime(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.runTime(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.runTime(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  runFullDate(refs, timerUnits) {
    const { days, hours, mins, secs } = timerUnits;
    const { daysSpan, hoursSpan, minsSpan, secsSpan } = refs;
    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minsSpan.textContent = mins;
    secsSpan.textContent = secs;
  }

  getTimer() {
    const time = this.getTimerTime();
    const refs = this.getRefs();
    if (time < 0) {
      console.log('Премьера');
      clearInterval(this.#intervalId);
      this.#intervalId = null;
      alert('Start watching!');
      return;
    }
    const timerUnits = this.getTimerUnits(time);
    this.runFullDate(refs, timerUnits);
  }

  startTimer() {
    this.makeATime();
    if (this.getTimerTime() <= 0) {
      console.log('Datetime <= current time or Invalid targetDate');
      return;
    }
    this.getTimer();
    this.#intervalId = setInterval(this.getTimer.bind(this), 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 15 2021 00:00'),
});

timer.startTimer();
