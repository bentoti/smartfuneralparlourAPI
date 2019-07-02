const express = require('express');
const bodyParser = require('body-parser');
const Cors = require("cors");
const action = require("./model/action");
const claimaudit = require("./model/claimaudit");
const memberaudit = require("./model/memberaudit");
const user = require("./model/user");
const balance = require("./model/balance");
const bankingdetails = require("./model/bankingdetails");
const beneficiary = require("./model/beneficiary");

const claim = require("./model/claim");
const claimstatus = require("./model/claimstatus");
const claimtype = require("./model/claimtype");
const funeralarrangement = require("./model/funeralarrangement");
const informant = require("./model/informant");

const lifestatus = require("./model/lifestatus");
const member = require("./model/member");
const payment = require("./model/payment");
const payouttype = require("./model/payouttype");
const policydetails = require("./model/policydetails");
const policystatus = require("./model/policystatus");
const policytype = require("./model/policytype");
const role = require("./model/role");

const app = express();
app.listen(3000);

// parse application/json
app.use(bodyParser.json());
app.use(Cors());


//user


app.get("/api/user/", function(req, res){
    try {
        
        var id;
        user.getalluser(id,function(err, data){
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

app.post("/api/login", function(req, res){
    try {
        user.login(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
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



//bankingdetails
app.get("/api/bankingdetails/:id", function(req, res){
    try {
        bankingdetails.getbankingdetails(req.params.id,function(err, data){
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

app.post("/api/bankingdetails", function(req, res){
    try {
        bankingdetails.insertbankingdetails(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                bankingdetails.getbankingdetails(data.insertId, function(err, data){
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

app.put("/api/bankingdetails/:id", function(req, res){
    try {
        bankingdetails.updatebankingdetails(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                bankingdetails.getbankingdetails(req.params.id, function(err, data){
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

app.delete("/api/bankingdetails/:id", function(req, res){
    try {
        bankingdetails.deletebankingdetails(req.params.id, function(err, data){
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

//beneficiary   



app.get("/api/beneficiarybyidmember/:id", function(req, res){
    try {
        beneficiary.getbeneficiarybyidmember(req.params.id,function(err, data){
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


app.get("/api/beneficiary/:id", function(req, res){
    try {
        beneficiary.getbeneficiary(req.params.id,function(err, data){
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

app.post("/api/beneficiary", function(req, res){
    try {
        beneficiary.insertbeneficiary(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                beneficiary.getbeneficiary(data.insertId, function(err, data){
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

app.put("/api/beneficiary/:id", function(req, res){
    try {
        beneficiary.updatebeneficiary(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                beneficiary.getbeneficiary(req.params.id, function(err, data){
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

app.delete("/api/beneficiary/:id", function(req, res){
    try {
        beneficiary.deletebeneficiary(req.params.id, function(err, data){
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

//claim
app.get("/api/claim/:id", function(req, res){
    try {
        claim.getclaim(req.params.id,function(err, data){
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


app.get("/api/getclaimbyidmember/:id", function(req, res){
    try {
        claim.getclaimbyidmember(req.params.id,function(err, data){
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


app.post("/api/claim", function(req, res){
    try {
        claim.insertclaim(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claim.getclaim(data.insertId, function(err, data){
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

app.put("/api/claim/:id", function(req, res){
    try {
        claim.updateclaim(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claim.getclaim(req.params.id, function(err, data){
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

app.delete("/api/claim/:id", function(req, res){
    try {
        claim.deleteclaim(req.params.id, function(err, data){
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

//claimtype

app.get("/api/claimtype/", function(req, res){
    try {
        
        var id;
        claimtype.getallclaimtype(id,function(err, data){
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


app.get("/api/claimtype/", function(req, res){
    try {
        
        var id;
        claimtype.getallclaimtype(id,function(err, data){
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




app.post("/api/claimtype", function(req, res){
    try {
        claimtype.insertclaimtype(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claimtype.getclaimtype(data.insertId, function(err, data){
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

app.put("/api/claimtype/:id", function(req, res){
    try {
        claimtype.updateclaimtype(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claimtype.getclaimtype(req.params.id, function(err, data){
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

app.delete("/api/claimtype/:id", function(req, res){
    try {
        claimtype.deleteclaimtype(req.params.id, function(err, data){
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


//claimstatus

app.get("/api/getclaimsdeclined/", function(req, res){
    try {
        
        var id;
        claimstatus.getclaimsdeclined(id,function(err, data){
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


app.get("/api/getclaimsapproved/", function(req, res){
    try {
        
        var id;
        claimstatus.getclaimsapproved(id,function(err, data){
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




app.get("/api/getclaimsdraft/", function(req, res){
    try {
        claimstatus.getclaimsdraft(req.params.id,function(err, data){
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



app.get("/api/claimstatus/", function(req, res){
    try {
        
        var id;
        claimstatus.getallclaimstatus(id,function(err, data){
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


app.get("/api/claimstatus/:id", function(req, res){
    try {
        claimstatus.getclaimstatus(req.params.id,function(err, data){
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

app.post("/api/claimstatus", function(req, res){
    try {
        claimstatus.insertclaimstatus(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claimstatus.getclaimstatus(data.insertId, function(err, data){
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

app.put("/api/claimstatus/:id", function(req, res){
    try {
        claimstatus.updateclaimstatus(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claimstatus.getclaimstatus(req.params.id, function(err, data){
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

app.delete("/api/claimstatus/:id", function(req, res){
    try {
        claimstatus.deleteclaimstatus(req.params.id, function(err, data){
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




//funeralarrangement
app.get("/api/funeralarrangement/:id", function(req, res){
    try {
        funeralarrangement.getfuneralarrangement(req.params.id,function(err, data){
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

app.post("/api/funeralarrangement", function(req, res){
    try {
        funeralarrangement.insertfuneralarrangement(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                funeralarrangement.getfuneralarrangement(data.insertId, function(err, data){
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

app.put("/api/funeralarrangement/:id", function(req, res){
    try {
        funeralarrangement.updatefuneralarrangement(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                funeralarrangement.getfuneralarrangement(req.params.id, function(err, data){
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

app.delete("/api/funeralarrangement/:id", function(req, res){
    try {
        funeralarrangement.deletefuneralarrangement(req.params.id, function(err, data){
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


//informant
app.get("/api/informant/:id", function(req, res){
    try {
        informant.getinformant(req.params.id,function(err, data){
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

app.post("/api/informant", function(req, res){
    try {
        informant.insertinformant(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                informant.getinformant(data.insertId, function(err, data){
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

app.put("/api/informant/:id", function(req, res){
    try {
        informant.updateinformant(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                informant.getinformant(req.params.id, function(err, data){
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

app.delete("/api/informant/:id", function(req, res){
    try {
        informant.deleteinformant(req.params.id, function(err, data){
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


//lifestatus

app.get("/api/lifestatus/", function(req, res){
    try {
        lifestatus.getalllifestatus(req.params.id,function(err, data){
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


app.get("/api/lifestatus/:id", function(req, res){
    try {
        lifestatus.getlifestatus(req.params.id,function(err, data){
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

app.post("/api/lifestatus", function(req, res){
    try {
        lifestatus.insertlifestatus(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                lifestatus.getlifestatus(data.insertId, function(err, data){
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

app.put("/api/lifestatus/:id", function(req, res){
    try {
        lifestatus.updatelifestatus(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                lifestatus.getlifestatus(req.params.id, function(err, data){
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

app.delete("/api/lifestatus/:id", function(req, res){
    try {
        lifestatus.deletelifestatus(req.params.id, function(err, data){
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


//member
app.get("/api/member/:id", function(req, res){
    try {
        member.getmember(req.params.id,function(err, data){
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

app.get("/api/getmemberbysurname/:id", function(req, res){
    try {
        member.getmemberbysurname(req.params.id,function(err, data){
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


app.get("/api/getmemberbymembershipnumber/:id", function(req, res){
    try {
        member.getmemberbymembershipnumber(req.params.id,function(err, data){
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


app.get("/api/getmemberbyidentitynumber/:id", function(req, res){
    try {
        member.getmemberbyidentitynumber(req.params.id,function(err, data){
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



app.post("/api/member", function(req, res){
    try {
        member.insertmember(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                member.getmember(data.insertId, function(err, data){
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

app.put("/api/member/:id", function(req, res){
    try {
        member.updatemember(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                member.getmember(req.params.id, function(err, data){
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

app.delete("/api/member/:id", function(req, res){
    try {
        member.deletemember(req.params.id, function(err, data){
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



//payment
app.get("/api/payment/:id", function(req, res){
    try {
        payment.getpayment(req.params.id,function(err, data){
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

app.get("/api/paymentbymembershipnumber/:id", function(req, res){
    try {
        payment.getpaymentbymembershipnumber(req.params.id,function(err, data){
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


app.post("/api/payment", function(req, res){
    try {
        payment.insertpayment(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                payment.getpayment(data.insertId, function(err, data){
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

app.put("/api/payment/:id", function(req, res){
    try {
        payment.updatepayment(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                payment.getpayment(req.params.id, function(err, data){
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

app.delete("/api/payment/:id", function(req, res){
    try {
        payment.deletepayment(req.params.id, function(err, data){
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



//payouttype

app.get("/api/payouttype/", function(req, res){
    try {
        
        var id;
        payouttype.getallpayouttype(id,function(err, data){
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


app.get("/api/payouttype/:id", function(req, res){
    try {
        payouttype.getpayouttype(req.params.id,function(err, data){
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

app.post("/api/payouttype", function(req, res){
    try {
        payouttype.insertpayouttype(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                payouttype.getpayouttype(data.insertId, function(err, data){
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

app.put("/api/payouttype/:id", function(req, res){
    try {
        payouttype.updatepayouttype(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                payouttype.getpayouttype(req.params.id, function(err, data){
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

app.delete("/api/payouttype/:id", function(req, res){
    try {
        payouttype.deletepayouttype(req.params.id, function(err, data){
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



//role

app.get("/api/role/", function(req, res){
    try {
        
        var id;
        user.getallrole(id,function(err, data){
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




app.get("/api/role/:id", function(req, res){
    try {
        role.getrole(req.params.id,function(err, data){
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

app.post("/api/role", function(req, res){
    try {
        role.insertrole(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                role.getrole(data.insertId, function(err, data){
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

app.put("/api/role/:id", function(req, res){
    try {
        role.updaterole(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                role.getrole(req.params.id, function(err, data){
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

app.delete("/api/role/:id", function(req, res){
    try {
        role.deleterole(req.params.id, function(err, data){
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



//policydetails
app.get("/api/policydetails/:id", function(req, res){
    try {
        policydetails.getpolicydetails(req.params.id,function(err, data){
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

app.post("/api/policydetails", function(req, res){
    try {
        policydetails.insertpolicydetails(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                policydetails.getpolicydetails(data.insertId, function(err, data){
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

app.put("/api/policydetails/:id", function(req, res){
    try {
        policydetails.updatepolicydetails(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                policydetails.getpolicydetails(req.params.id, function(err, data){
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

app.delete("/api/policydetails/:id", function(req, res){
    try {
        policydetails.deletepolicydetails(req.params.id, function(err, data){
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


//policystatus

app.get("/api/user/", function(req, res){
    try {
        
        var id;
        user.getalluser(id,function(err, data){
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

app.get("/api/policystatus/", function(req, res){
    try {
        policystatus.getallpolicystatus(req.params.id,function(err, data){
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

app.post("/api/policystatus", function(req, res){
    try {
        policystatus.insertpolicystatus(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                policystatus.getpolicystatus(data.insertId, function(err, data){
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

app.put("/api/policystatus/:id", function(req, res){
    try {
        policystatus.updatepolicystatus(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                policystatus.getpolicystatus(req.params.id, function(err, data){
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

app.delete("/api/policystatus/:id", function(req, res){
    try {
        policystatus.deletepolicystatus(req.params.id, function(err, data){
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

//policytype
app.get("/api/policytype/", function(req, res){
    try {
        
        var id;
        policytype.getallpolicytype(id,function(err, data){
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


app.get("/api/policytype/:id", function(req, res){
    try {
        policytype.getpolicytype(req.params.id,function(err, data){
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

app.post("/api/policytype", function(req, res){
    try {
        policytype.insertpolicytype(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                policytype.getpolicytype(data.insertId, function(err, data){
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

app.put("/api/policytype/:id", function(req, res){
    try {
        policytype.updatepolicytype(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                policytype.getpolicytype(req.params.id, function(err, data){
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

app.delete("/api/policytype/:id", function(req, res){
    try {
        policytype.deletepolicytype(req.params.id, function(err, data){
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



//memberaudit
app.get("/api/memberaudit/:id", function(req, res){
    try {
        memberaudit.getmemberaudit(req.params.id,function(err, data){
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

app.post("/api/memberaudit", function(req, res){
    try {
        memberaudit.insertmemberaudit(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                memberaudit.getmemberaudit(data.insertId, function(err, data){
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

app.put("/api/memberaudit/:id", function(req, res){
    try {
        memberaudit.updatememberaudit(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                memberaudit.getmemberaudit(req.params.id, function(err, data){
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

app.delete("/api/memberaudit/:id", function(req, res){
    try {
        memberaudit.deletememberaudit(req.params.id, function(err, data){
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


//claimaudit
app.get("/api/claimaudit/:id", function(req, res){
    try {
        claimaudit.getclaimaudit(req.params.id,function(err, data){
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

app.post("/api/claimaudit", function(req, res){
    try {
        claimaudit.insertclaimaudit(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claimaudit.getclaimaudit(data.insertId, function(err, data){
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

app.put("/api/claimaudit/:id", function(req, res){
    try {
        claimaudit.updateclaimaudit(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                claimaudit.getclaimaudit(req.params.id, function(err, data){
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

app.delete("/api/claimaudit/:id", function(req, res){
    try {
        claimaudit.deleteclaimaudit(req.params.id, function(err, data){
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

//action

app.get("/api/action/", function(req, res){
    try {
        
        var id;
        action.getallaction(id,function(err, data){
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


app.get("/api/action/:id", function(req, res){
    try {
        action.getaction(req.params.id,function(err, data){
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

app.post("/api/action", function(req, res){
    try {
        action.insertaction(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                action.getaction(data.insertId, function(err, data){
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

app.put("/api/action/:id", function(req, res){
    try {
        action.updateaction(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                action.getaction(req.params.id, function(err, data){
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

app.delete("/api/action/:id", function(req, res){
    try {
        action.deleteaction(req.params.id, function(err, data){
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