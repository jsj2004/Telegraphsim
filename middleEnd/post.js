import express from 'express'
import axios from 'axios'
const app=express();
app.use(express.json());
app.post('/messages/add',async(req,res)=>{
    console.log(req.body);
    res.send('received');
});
async function post(text,sender_id,receiver_id,conversation_id){

try{
const getinput=document.getElementsByClassName('tosend');
const response=await axios.post('http://localhost:8000/messages/add',

{
    'conversationID':conversation_id,
    'text':getinput,
'senderId':sender_id,
'receiverId':receiver_id
}
);
console.log('POST sucessful',response.data)
}
catch(error)
{
    console.log('POST Error');
}
}

post();
app.listen(8000,()=>{
    console.log('listening');
});