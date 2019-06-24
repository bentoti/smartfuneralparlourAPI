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


exports.getMemberById = function(id, callback){
    let sql = `SELECT * FROM members WHERE idMembers = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getMembersByMembershipNumber = function(membershipnumber, callback){
    let sql = "SELECT * FROM members WHERE membershipnumber LIKE '%" + membershipnumber + "%'                       ";
    db.query(sql,function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getMembersByIdNumber = function(idnumber, callback){
    let sql = "SELECT * FROM members WHERE idnumber LIKE'%" + idnumber + "%'";
    db.query(sql,function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getMembersBySurname = function(surname, callback){
    let sql = "SELECT * FROM members WHERE surname LIKE '%" + surname + "%'                       ";
    db.query(sql,function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}