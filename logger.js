const EventEmitter = require('events');

class Logger extends EventEmitter {
    loguj(wiadomosc, id, dane) {
        console.log(`Logger, wiadomość: ${wiadomosc}, id: ${id}, dane: ${dane}`);

        this.emit('wiadomoscLogger', { id: id, dane : dane} );
    }
}

module.exports = Logger;