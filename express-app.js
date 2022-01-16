const express=require('express')

const app=express()

//listening to port requests .
app.listen(5000,'localhost',()=>{
    console.log('Server Listening on port 5000----')
});




app.get('/',(req,res)=>{
    //res.send('<p>home Page</p>');
     res.sendFile('/views/index.html',{root: __dirname});
    });

app.get('/about',(req,res)=>{
        //res.send('<p>About  Page</p>');
        res.sendFile('/views/about.html',{root: __dirname});
        });

app.get('/about-us',(req,res)=>{
res.redirect('/about');
});

app.use((req,res)=>{
    res.sendFile('/views/404.html',{root: __dirname});

});

    



