const mysql = require("mysql");

const db = mysql.createConnection({
    host    : "greenlinks1.dedicated.co.za",
    user    : "guest",
    password    : "password",
    database    : "mydb"
});

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected to database test");
    }
});


exports.getUserById = function(id, callback){
    let sql = `SELECT * FROM employee WHERE idEmployee = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.updateUser = function(id, data, callback){
    let sql = "UPDATE employee SET name='" + data.name + "', surname='" + data.surname + "', role='" + data.role + "', password='" + data.password + "', branch='" + data.branch + "' WHERE idEmployee='" + id + "'";
   
   
    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.deleteUser = function(id, callback){

    let sql = "DELETE FROM employee WHERE idEmployee=" + id + "";
    db.query(sql,function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

