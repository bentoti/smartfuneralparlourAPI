const express = require('express');
const bodyParser = require('body-parser');
const Cors = require("cors");

const user = require("./model/user");
const user = require("./model/balance");

const app = express();
app.listen(3000);

// parse application/json
app.use(bodyParser.json());
app.use(Cors());+


//user
app.get("/api/user/:id", function(req, res){
    try {
        user.getuser(req.params.id,function(err, data){
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

app.post("/api/user", function(req, res){
    try {
        user.insertuser(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                user.getuser(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
});

app.put("/api/user/:id", function(req, res){
    try {
        user.updateuser(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                user.getuser(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
})

app.delete("/api/user/:id", function(req, res){
    try {
        user.deleteuser(req.params.id, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


//balance
app.get("/api/balance/:id", function(req, res){
    try {
        balance.getbalance(req.params.id,function(err, data){
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

app.post("/api/balance", function(req, res){
    try {
        balance.insertbalance(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                balance.getbalance(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
});

app.put("/api/balance/:id", function(req, res){
    try {
        balance.updatebalance(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                balance.getbalance(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
})

app.delete("/api/balance/:id", function(req, res){
    try {
        balance.deletebalance(req.params.id, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})





