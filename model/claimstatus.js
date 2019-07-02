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


exports.getallclaimstatus = function(id, callback){
    let sql = `SELECT * From claimstatus`;

    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getclaimstatus = function(id, callback){
    let sql = `SELECT * From claimstatus WHERE idclaimstatus = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.insertclaimstatus = function(data, callback){
    
  let sql = "INSERT INTO claimstatus SET ?";

    db.query(sql,[data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}



exports.updateclaimstatus = function(id, data, callback){
    let sql = "update claimstatus set ? where idclaimstatus = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.deleteclaimstatus = function(id, callback){
    let sql = "DELETE from claimstatus where idclaimstatus = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}