const express = require('express');

const authorsRouter = express.Router();

var authors = [
    {
        name: 'Chetan Bhagat',
        genre:'Romance, Realistic Fiction, Non-Fiction',
        img:'chetan.jpg',
        description: 'Chetan Prakash Bhagat (born 22 April 1974) is an Indian author and columnist. He was included in Time magazines list of Worlds 100 Most Influential People in 2010. Five of Chetan Bhagats novels have been adapted into Bollywood films like Hello in 2008 (based on One Night @ the Call Center), 3 Idiots in 2009 (based on Five Point Someone), Kai Po Che! in 2013 (based on The 3 Mistakes of My Life); 2 States in 2014 (based on his novel of the same name) and Half Girlfriend in 2017 (based on his novel of the same name). Bhagat has also written the scripts for Bollywood films like Kick in 2014 and adapted his stories for the movies Kai Po Che! and Half Girlfriend. Bhagat won the Filmfare Award for Best Screenplay for Kai Po Che! at the 59th Filmfare Awards in 2014.'
    },
    {
        name: 'Arundhati Roy',
        genre:'Fiction',
        img:'roy.jpg',
        description: 'Suzanna Arundhati Roy (born 24 November 1961) is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author. She is also a political activist involved in human rights and environmental causes.'
    },
    {
        name: 'Amitav Gosh',
        genre:'Historical Fiction',
        img:'amitav.jpg',
        description: 'Amitav Ghosh (born 11 July 1956) is an Indian writer and the winner of the 54th Jnanpith award, best known for his work in English fiction. Ghosh famously withdrew his novel The Glass Palace from consideration for the Commonwealth Writers Prize, where it was awarded the best novel in the Eurasian section, citing his objections to the term commonwealth and the unfairness of the English language requirement specified in the rules. Ghosh received the lifetime achievement award at Tata Literature Live, the Mumbai LitFest on 20 November 2016. He was conferred the 54th Jnanpith award in December 2018 and is the first Indian writer in English to have been chosen for this honour.'
    },
    {
        name: 'Jhumpa Lahiri',
        genre:'Novel, Short Stories,',
        img:'lahiri.jpg',
        description: 'Nilanjana Sudeshna "Jhumpa" Lahiri (born July 11, 1967) is an American author known for her short stories, novels and essays in English, and, more recently, in Italian. Her debut collection of short-stories Interpreter of Maladies (1999) won the Pulitzer Prize for Fiction and the PEN/Hemingway Award, and her first novel, The Namesake (2003), was adapted into the popular film of the same name. Her second story collection Unaccustomed Earth (2008) won the Frank OConnor International Short Story Award, while her second novel, The Lowland (2013), was a finalist for both the Man Booker Prize and the National Book Award for Fiction. In these works, Lahiri explored the Indian-immigrant experience in America. In 2011, Lahiri moved to Rome, Italy and has since then published two books of essays, and in 2019, published her first novel in Italian called Dove mi trovo and also compiled, edited and translated the Penguin Book of Italian Short Stories which consists of 40 Italian short stories written by 40 different Italian writers. She has also translated some of her own writings and those of other authors from Italian into English.'
    }
]

authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
        authors 
    })

});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('author',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'}],
        title:'Library',
        author: authors[id]
    })
})

module.exports = authorsRouter;