const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"adomicilio",
    multioleStatements:true
});
mysqlConnection.connect(function(err){
    if(err){
        console.log("Error ",err);

    }else{
        console.log("DB is conected");
    }
});
module.exports = mysqlConnection;