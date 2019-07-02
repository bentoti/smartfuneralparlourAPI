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


exports.getallaction = function(id, callback){
    let sql = `SELECT * From action`;

    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.getaction = function(id, callback){
    let sql = `SELECT * From action WHERE idaction = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.insertaction = function(data, callback){
    
  let sql = "INSERT INTO action SET ?";

    db.query(sql,[data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}



exports.updateaction = function(id, data, callback){
    let sql = "update action set ? where idaction = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.deleteaction = function(id, callback){
    let sql = "DELETE from action where idaction = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}