const express = require('express');
const admin1Router = express.Router();

admin1Router.get('/',function(req,res){
    res.render('addbook',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
    })
})

module.exports = admin1Router;