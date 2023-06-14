let url = 'http://api.ti.wieik.pk.edu.pl/log';

function log(wiadomosc) {
    console.log("wiadomość: ", wiadomosc);
}

module.exports.log = log;
module.exports.endPoint = url;