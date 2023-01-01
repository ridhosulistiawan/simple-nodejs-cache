class mysql_database {

    getData(callBack) {

        const mysql = require('mysql');

        const mysql_con = mysql.createConnection({
            host: "mysql.techtest-ridho.svc.cluster.local",
            user: "nodeuser",
            password: "nodepassword",
            database: "nodejs_app"
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
