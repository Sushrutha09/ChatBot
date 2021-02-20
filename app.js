var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const { response } = require("express")
const app = express()
app.use(bodyParser.json())
var router = express.Router();
var loggeduser = null;

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static(__dirname + '/template'));
mongoose.connect('mongodb://localhost:27017/test3',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var message = req.body.message;
    //var message=.
    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password,
        "message":message
    }

    db.collection('user2').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
        console.log(collection);
        loggeduser=collection.insertedId;
    });

    return res.redirect('chat.html')

})

app.post("/login",(req,res)=>{
   
    var email = req.body.email;
     var password = req.body.password;
     var user=db.collection('user2');
     user.findOne({email:email,password:password},function(err,user){
         console.log(user);
         if(err){
             console.log(err);
             return res.status(500).send();
         }
         if(!user){
             return res.status(404).send();
         }
         console.log("Login Succss");
         loggeduser=user._id;
          return res.redirect('chat.html')
     })
});

    const UserSchema2 = new mongoose.Schema ({
        name : { type : String, required : true, unique : true},
        email : { type : String, required : true },
        phone : { type : String, required : true},
        password : { type : String, required : true },
        message: {type: mongoose.Schema.Types.ObjectId, ref: 'message'},
        created_at: Date,
        updated_at: { type: Date, default: Date.now() },
    },
    {collection : 'user2'}) ;
    
app.post('/chatbot', async(req, res) => {
    console.log(req.body);
    var hum = req.body.hum.toLowerCase();
    var conv =db.collection('conversation');
    conv.insertOne({
        id:String(loggeduser),
        message:hum,
        sent_by:"hum",
        create_ts:Date.now()
    },(err,collection)=>{
        console.log(err);
        console.log(collection);
    })
    var coll = db.collection('chat');
    var outputFromDb = await coll.findOne({hum:hum});
    console.log(outputFromDb);
    var ourResp = "I don't know what you are asking";
     console.log(ourResp);
     if(outputFromDb) {
        ourResp = outputFromDb.bot
    }
     conv.insertOne({
        id:String(loggeduser),
        message:ourResp,
        sent_by:"bot",
        create_ts:Date.now()
    },(err,collection)=>{
        console.log(err);
        console.log(collection);
    })
    
    return res.json({ "data" : ourResp})
})
app.get("/logout", function (req, res) { 
    loggeduser=null;
    res.redirect("/index.html"); 
});
app.get("/prevchat", function(req, res){
    var user=db.collection('conversation');
    user.find({id:String(loggeduser)}).toArray(function(err,user){
        console.log(user);
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        return res.json(user)
    })
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");
