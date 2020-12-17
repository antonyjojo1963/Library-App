const express = require('express');
const admin1Router = require('./src/routes/admin1Routes');
const adminRouter = require('./src/routes/adminRoutes');
const authorsRouter = require('./src/routes/authorRoutes');
const app = express();
const port = process.env.PORT || 3000;


const booksRouter = require('./src/routes/bookRoutes');
const loginsRouter = require('./src/routes/loginRoutes');
const signupsRouter = require('./src/routes/signupRoutes');

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/logins',loginsRouter);
app.use('/signups',signupsRouter);
app.use('/admin',adminRouter);
app.use('/admin1',admin1Router);

app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/logins',name:'Log In'},{link:'/signups',name:'Sign Up'}],
        title:'Library'
    });
});


// app.listen(3000);
app.listen(port,()=>{console.log("Server is ready at" + port)});