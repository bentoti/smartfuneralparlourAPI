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



exports.getallpolicystatus = function(id, callback){
    let sql = `SELECT * From policystatus`;

    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.getpolicystatus = function(id, callback){
    let sql = `SELECT * From policystatus WHERE idpolicystatus = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.insertpolicystatus = function(data, callback){
    
  let sql = "INSERT INTO policystatus SET ?";

    db.query(sql,[data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}



exports.updatepolicystatus = function(id, data, callback){
    let sql = "update policystatus set ? where idpolicystatus = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.deletepolicystatus = function(id, callback){
    let sql = "DELETE from policystatus where idpolicystatus = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}