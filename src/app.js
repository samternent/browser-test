class Playground {
  constructor(props) {
  }

  log(str) {
    console.log(`%c::${str}--::`, 'background: #222; color: #bada55');
  }
}
const PG = new Playground();
PG.log('Starting playground');

// imports here
