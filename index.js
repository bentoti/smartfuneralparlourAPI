const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const member = require("./model/member");

const app = express();
app.listen(3000);

app.use(bodyparser.urlencoded({extended : false}));


/// Get members by ID
app.get("/api/member/:id", function(req, res){
    try {
        member.getMemberById(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

/// Get members by membership
app.get("/api/memberbymembershipnumber/:id", function(req, res){
    try {
        member.getMembersByMembershipNumber(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

/// Get members by ID Number
app.get("/api/memberbyidnumber/:id", function(req, res){
    try {
        member.getMembersByIdNumber(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

/// Get members by surname
app.get("/api/memberbysurname/:id", function(req, res){
    try {
        member.getMembersBySurname(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});