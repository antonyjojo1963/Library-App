const express = require('express');

const booksRouter = express.Router();

var books = [
    {
        title: 'Becoming',
        author: 'Michelle Obama',
        genre:'Autobiography',
        img:'michelle.jpg',
        description: 'Hi... This is the story you all have been waiting for'
    },
    {
        title: 'The Time Machine',
        author: 'H.G. Wells',
        genre:'Sci-Fi',
        img:'time.jpg',
        description: 'Hi... This is the story you all have been waiting for'
    },
    {
        title: 'The Justice League',
        author: 'Scott Synder',
        genre:'Cartoon',
        img:'justice.jpg',
        description: 'Hi... This is the story you all have been waiting for'
    }
]

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
        books 
    })

});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
        book: books[id]
    })
})

module.exports = booksRouter;