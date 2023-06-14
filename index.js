function witaj(imie) {
    console.log("Witaj " + imie + "!");
}

const czesc = function (imie) {
    console.log("Cześć " + imie + "!");
}

witaj("Wojtek");
czesc("Wojtek");

const path = require('path');
const os = require('os');

let sciezka = path.parse(__filename);
console.log(sciezka);

let calkowitaPamiec = os.totalmem();
let wolnaPamiec = os.freemem();
console.log('Całkowita pamięć: ' + calkowitaPamiec);
console.log(`Wolna pamięć: ${wolnaPamiec}`);

const fs = require('fs');
const pliki = fs.readdirSync('./');
console.log(pliki);

fs.readdir(__dirname, function (err, files) {
    if (err) console.log('Błąd: ', err);
    else console.log('Wynik: ', files);
});

const modul = require('./modul');
console.log(modul);

modul.log("wiadomość");
console.log(modul.endPoint);

const Klasa = require('./klasa');

const klasa = new Klasa();
klasa.log("treść do modułu w klasie", 1, {dane: 123});

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('wiadomosc', function () {
    console.log('Listener wywołany');
});

emitter.on('wiadomoscArg', (arg) => {
    console.log('Listener wywołany z argumentem ', arg);
});

emitter.emit('wiadomosc');

emitter.emit('wiadomoscArg', 'abc');
emitter.emit('wiadomoscArg', { id: 1, url: 'http://abc.pl'});

const Logger = require('./logger');
const logger = new Logger();

logger.on('wiadomoscLogger', (arg) => {
    console.log('Listener Logger wywołany: ', arg);
})
logger.loguj('wiadomość dal loggera', 2, 'abc');

const http = require('http');
const serwer1 = http.createServer();
serwer1.on('connection', (socket) => {
    console.log('Nowe połączone...');
});
serwer1.on('request', (req, res) => {
    res.setHeader('Content-type', 'text/html; charset=utf-8');
    res.write('Witaj Świecie!<br/>');
    res.end(`Hello World ${new Date()}`);
    console.log('Nowe żądanie');
});
serwer1.listen(3001);
console.log('serwer1 oczekuje na porcie 3001...');

const duzyPlik = fs.createWriteStream('./duzy.plik');
for (let i=0; i<=1e5; i++) {
    // duzyPlik.write('Drogi Marszałku, Wysoka Izbo. PKB rośnie Nikt inny was nie zaś teorię, okazuje się iż rozszerzenie naszej kompetencji w określaniu systemu szkolenia kadr ukazuje nam horyzonty kierunków postępowego wychowania. Jednakże, inwestowanie w wypracowaniu postaw uczestników wobec zadań stanowionych przez organizację. Praca wre. Mając na aktualna struktura organizacji jest to, że wyeliminowanie korupcji wymaga sprecyzowania i bogate doświadczenia pozwalają na uwadze, że rozszerzenie bazy o nowe rekordy zabezpiecza udział szerokiej grupie w przyszłościowe rozwiązania spełnia ważne zadanie w większym stopniu tworzenie systemu szkolenia kadr powoduje docenianie wag modelu rozwoju. Tak samo istotne jest to, że inwestowanie w kształtowaniu modelu rozwoju. W związku z szerokim aktywem spełnia ważne z dotychczasowymi zasadami odpowiednich warunków aktywizacji. Gdy za sobą proces wdrożenia i miejsce szkolenia kadr rozszerza nam efekt istniejących kryteriów zmusza nas do tej sprawy zmusza nas do tej sprawy pomaga w większym stopniu tworzenie obecnej sytuacji. Z drugiej strony, usprawnienie systemu powszechnego uczestnictwa. Reasumując. dalszy rozwój różnych form działalności rozszerza nam efekt modelu rozwoju. Prawdą jest, iż usprawnienie systemu powszechnego uczestnictwa. Nie damy się. W sumie inwestowanie w tym zakresie pomaga w przyszłościowe.\n');
    duzyPlik.write('test.\n');
}
duzyPlik.end();

const serwer2 = http.createServer();
serwer2.on('request', (req, res) => {
    const zrodlo = fs.createReadStream('./duzy.plik');
    res.setHeader('Content-type', 'text/html; charset=utf-8');
    zrodlo.pipe(res);
    console.log('Nowe żądanie na porcie 3002')
});

serwer2.listen(3002);
console.log('serwer2 oczekuje na porcie 3002...')

const serwer3 = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.write('Witaj Świecie!<br/>');
        res.end();
    }
    if (req.url === '/api/liczby') {
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

serwer3.listen(3003);
console.log('serwer3 oczekuje na porcie 3003...')
