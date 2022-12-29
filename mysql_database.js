class mysql_database {

    getData(callBack) {

        const mysql = require('mysql');

        const mysql_con = mysql.createConnection({
            host: "localhost",
            user: "node_users",
            password: "Nodejs_password14",
            database: "nodejs_redis"
         });

        mysql_con.connect(function(err) {
            if (err) {
                console.log(err.message);
            }
        });

       var queryString = "select * from countries";

       mysql_con.query(queryString , [], function (err, result) {
           if (err) {
               callBack(err, null);
           } else {
               callBack(null, result);
           }
      });

    }
}

module.exports = mysql_database;
