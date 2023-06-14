const http = require('http');
const serwer3 = http.createServer();
const fs = require('fs');


serwer3.on('connection', (socket) => {
    console.log("New connection");
})

serwer3.on('request', (req, res) => {
    if(req.url === '/styl.css'){
        fs.readFile('strona/styl.css', (err, data) => {
            if (err) throw err;
            res.setHeader('Content-type', 'text/css; charset=utf-8');
            res.write(data);
            res.end();
        })
    }
    else if(req.url === '/skrypt.js'){
        fs.readFile('strona/skrypt.js', (err, data) => {
            if (err) throw err;
            res.setHeader('Content-type', 'text/javascript; charset=utf-8');
            res.write(data);
            res.end();
        })
    }
    else {
        fs.readFile('strona/widoki/index.html', (err, data) => {
            if (err) throw err;

            let dane = data.toString();
            let tab = ["TRESC","MENU","NAGLOWEK","STOPKA"];
            for(const _tab of tab){
                fs.readFile('strona/widoki/'+_tab.toLocaleLowerCase()+'.html', (_err, _data) => {
                    if (_err) throw _err;
                    dane = dane.replace("[["+_tab+"]]", _data.toString());
                })
            }
            res.setHeader('Content-type', 'text/html; charset=utf-8');
            setTimeout(() => {
                res.write(dane);
                res.end();
            }, 100)
        })
    }
})

serwer3.listen(3003);
console.log('serwer3 oczekuje na porcie 3003');