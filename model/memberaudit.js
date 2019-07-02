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


exports.getallmemberaudit = function(id, callback){
    let sql = `SELECT * From memberaudit`;

    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.getmemberaudit = function(id, callback){
    let sql = `SELECT * From memberaudit WHERE idmemberaudit = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.insertmemberaudit = function(data, callback){
    
  let sql = "INSERT INTO memberaudit SET ?";

    db.query(sql,[data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}



exports.updatememberaudit = function(id, data, callback){
    let sql = "update memberaudit set ? where idmemberaudit = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.deletememberaudit = function(id, callback){
    let sql = "DELETE from memberaudit where idmemberaudit = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}