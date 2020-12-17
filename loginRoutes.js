const express = require('express');

const loginsRouter = express.Router();


loginsRouter.get('/',function(req,res){
    res.render("logins",
    {
        nav:[{link:'/logins',name:'Log In'},{link:'/signups',name:'Sign Up'}],
        title:'Library',
        
    })

});

loginsRouter.get('/',function(req,res){

    res.render("books",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title:'Library',
        
    })
});


module.exports = loginsRouter;