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


exports.getalldocumentupload = function(id, callback){
    let sql = `SELECT * From documentupload`;

    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getdocumentupload = function(id, callback){
    let sql = `SELECT * From documentupload WHERE iddocumentupload = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}



exports.insertdocumentupload = function(data, callback){
    
  let sql = "INSERT INTO documentupload SET ?";

    db.query(sql,[data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}



exports.updatedocumentupload = function(id, data, callback){
    let sql = "update documentupload set ? where iddocumentupload = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}


exports.deletedocumentupload = function(id, callback){
    let sql = "DELETE from documentupload where iddocumentupload = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}