const express = require('express');

const signupsRouter = express.Router();


signupsRouter.get('/',function(req,res){
    res.render("signups",
    {
        nav:[{link:'/logins',name:'Log In'},{link:'/signups',name:'Sign Up'}],
        title:'Library',
        
    })

});

module.exports = signupsRouter;