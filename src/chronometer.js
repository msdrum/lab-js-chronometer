class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0; //property
    this.intervalId = null; //property
  }

  start(printTimeCallback) {
    //printTimeCallback é uma função que vem do index.js
    //precisamos checar se essa função foi realmente passada
    //CASO a função tenha sido passada ->>>> vamos invocar a função

    this.intervalId = setInterval(() => {
      this.currentTime++;

      //checando se printTimeCallback existe
      if (printTimeCallback) {
        //caso exista, invoque a função
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // receber o total de minutos
    const totalMinutes = this.currentTime / 60;
    return Math.floor(totalMinutes);
  }

  getSeconds() {
    // receber o total de secundos, apenas os números quebrados, após os minutos ex: 210 s = 3 min e 30 sec.
    const totalSeconds = this.currentTime % 60;
    return Math.floor(totalSeconds);
  }

  computeTwoDigitNumber(value) {
    // should always return a string of length 2
    const towDigit = String(value);
    let newString;
    if (towDigit.length < 2) {
      newString = `0${towDigit}`;
      return newString;
    }
    return towDigit;
  }

  stop() {
    // ... your code goes here
    const stopInterval = this.intervalId;
    clearInterval(stopInterval);
  }

  reset() {
    // ... your code goes here
    return (this.currentTime = 0);
  }

  split() {
    // ... your code goes here
  }
}
