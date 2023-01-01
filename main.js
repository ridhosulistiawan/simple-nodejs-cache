const mysql_database = require('./mysql_database');
const redis_server = require('./redis_server');

const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer(httpHandler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function httpHandler(req, res) {

    const mysqlDatabase = new mysql_database();
    const redisServer = new redis_server();

    redisServer.getData( (redisErr, redisResult) => {

        if (redisErr) {
            console.log(redisErr.message);
        } else {

            if (redisResult == null )  {

                mysqlDatabase.getData((mysqlErr, mysqlResult) => {

                    jsonData = JSON.stringify(mysqlResult, null, 4)
                    redisServer.setData(jsonData);

                    var countries = {_source:'MySQL Server', data: JSON.parse(jsonData)};

                    res.write(JSON.stringify(countries, null, 4));
                    res.end();
                });

            } else {

                var countries = {_source:'Redis Server', data: JSON.parse(redisResult)};

                res.write(JSON.stringify(countries, null, 4));
                res.end();
            }
    }

    });


}
