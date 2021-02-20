const mongoose = require('mongoose')
var Schema = mongoose.Schema;
//var Message = require.main.require('./app/models/message');
const UserSchema1 = new mongoose.Schema ({
    hum : { type : String, required : true, unique : true},
    bot : { type : String, required : true }
},
{collection : 'chat'}) 

// const UserSchema2 = new mongoose.Schema ({
//     name : { type : String, required : true, unique : true},
//     email : { type : String, required : true },
//     phone : { type : String, required : true},
//     password : { type : String, required : true },
//     message : [
//         { type: mongoose.Schema.Types.ObjectId, ref: 'message', required : true }
//       ],
//     created_at: Date,
//     updated_at: { type: Date, default: Date.now() },
// },
// {collection : 'user2'}) 
// //console.log(message);

// // const mess = new mongoose.Schema ({
// //     name:{type : String, required : true},
// //     message_body: { 
// //         type: mongoose.Schema.Types.ObjectId, 
// //         ref: 'UserSchema2' 
// //       },
// //       message_status:{type: Boolean, default: false},
// //       created_at: Date,
// //     updated_at: { type: Date, default: Date.now },
// // },
// //  {collection : 'message'}
// // ) 
// //module.exports = mongoose.model('message', mess);
// /*
// var room = new mongoose.Schema({
//     name: { type: String, lowercase: true, unique: true },
//     //topic: String,
//     user: {type: Schema.ObjectId, ref: 'UserSchema1'},
//     messages:[
//         { type: mongoose.Schema.Types.ObjectId, ref: 'message' }
//       ],
//     created_at: Date,
//     updated_at: { type: Date, default: Date.now },
// },{collection : 'room'})*/
// //var message = new mongoose.Schema({
//     // room: room,
//     // user: UserSchema1,
//     //message_body: String,
//      //message_status:{type: Boolean, default: false},
//     // created_at: { type: Date, default: Date.now },
//     // message_body: { 
//     //     type: mongoose.Schema.Types.ObjectId, 
//     //     ref: 'UserSchema2' 
//     //   }
//     // },{collection : 'message'})

// // const model4 = mongoose.model('UserSchema2', UserSchema2)
// // module.exports = model4

// // // const model3 = mongoose.model('message', mess)
// // // module.exports = model3

// // const model2 = mongoose.model('UserSchema1', UserSchema1)
// // module.exports = model2
// //module.exports = mongoose.model("UserSchema2", UserSchema2);
// var ConversationSchema = new Schema({
//     name: String,
//     participants: {
//         type: [{
//             type: Schema.Types.ObjectId,
//             ref: 'user2'
//         }],
//         //validate: [minArrayLength, errors.chat.create.insufficientParticipants]
//     }
// },{
//     timestamps: true
// });

// ConversationSchema.pre('save', function(next, done) {
//     var that = this;
//     this.constructor.findOne({participants: this.participants}).then(function(conversation) {
//         if (conversation) {
//             var err = new Error(errors.chat.create.alreadyExists);
//             err.conversation = conversation;
//             return done(err);
//         } else {
//             // Create welcome message
//             var message = new Message({
//                 type: 'new',
//                 conversation: that._id,
//                 text: "Beginning of chat"
//             });
            
//             message.save().then(function() {
//                 next();
//             });
//         }
//     }, function(err) {
//         console.log(err);
//     });
// });

// var Conversation = mongoose.model('Conversation', ConversationSchema);

// module.exports = Conversation;

// var MessageSchema = new Schema({
//     conversation:   {type: Schema.Types.ObjectId, ref: 'Conversation', required: true},
//     text:           {type: String, required: true},
//     user:           {type: Schema.Types.ObjectId, ref: 'user2'}
// },{
//     timestamps: true
// });

// //MessageSchema.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt : true});

// var Message = mongoose.model('Message', MessageSchema);

// module.exports = Message;
// module.exports = mongoose.model("UserSchema1", UserSchema1);
// //module.exports = mongoose.model('message', mess);
// exports.UserSchema2=UserSchema2;

// var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

// var user = new Schema({
// username: String,
// password: String,
// email: String,
// message: [message]
// });

// var message = new Schema({
// name: {type: String, default : ''},
// user: {type: Schema.ObjectId, ref: 'user'},
// createdAt  : {type : Date, default : Date.now}

// })


// var message = mongoose.model('message', message);
// var user = mongoose.model('user', user);