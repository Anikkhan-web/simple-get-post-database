const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000



app.get('/', (req,res) =>{

    res.send('hello node i am gone fdgdfdghh')


});


const users = [
    {  id:0, name:"anik khan",email:"anikkhan@gmail.com",phone:'0160000000'},
    {  id:1, name:"n khan",email:"anikkhan@gmail.com",phone:'0160000000'},
    {  id:2, name:"y khan",email:"anikkhan@gmail.com",phone:'0160000000'},
    {  id:3, name:"p khan",email:"anikkhan@gmail.com",phone:'0160000000'},
    {  id:4, name:"b khan",email:"anikkhan@gmail.com",phone:'0160000000'},

]

app.get('/users',(req,res)=>{
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }else{
        res.send(users)
    }
   
});

//app.METHOD 

app.post('/users',(req,res)=>{

    const newUser =req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log("hitting the post",req.body);

    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


app.get('/users/:id',(req,res)=>{
    // res.send({users})
    const id = req.params.id;
    const user=users[id]
    res.send(user)
})

app.get('/fruits',(rew,res)=>{

    res.send(["mango","orange","banana","apple"])
})


app.get('/fruits/mangoes/fazli',(req,res)=>{

    res.send('yummy yummy tok marka fazli');
})




app.listen(port, ()=>{
    console.log('listening to port',port)
  })