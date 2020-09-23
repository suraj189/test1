const express=require('express');
const app =express();
const port =5000;


app.set('view engine','ejs')//setting ejs as template engines

app.get('/',(req,res)=>{// route for the home page
    let drinks=[
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    let tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/home',{
        drinks:drinks,
        tagline:tagline})
})

app.get('/about',(req,res)=>{//route for the about page
    let animals=[
        {name:'Alligator'},
        {name:'Crocodile'},
        {name:'Snake'}
    ]

    let tagline="Any of the code is working dont change it let it work"

    res.render('pages/about',{
        animals:animals,
        tagline:tagline})
})

app.listen(port,()=>{console.log("App is living on port 5000")})


