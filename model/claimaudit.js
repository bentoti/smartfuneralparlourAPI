const mysql = require("mysql");

const db = mysql.createConnection({
    host    : "greenlinks1.dedicated.co.za",
    user    : "guest",
    password    : "password#123",
    database    : "smartfuneralmanagement"
});

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected to database test");
    }
});


exports.getallclaimaudit = function(id, callback){
    let sql = `SELECT * From claimaudit`;

    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.getclaimaudit = function(id, callback){
    let sql = `SELECT * From claimaudit WHERE idclaimaudit = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.insertclaimaudit = function(data, callback){
    
  let sql = "INSERT INTO claimaudit SET ?";

    db.query(sql,[data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}



exports.updateclaimaudit = function(id, data, callback){
    let sql = "update claimaudit set ? where idclaimaudit = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.deleteclaimaudit = function(id, callback){
    let sql = "DELETE from claimaudit where idclaimaudit = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}