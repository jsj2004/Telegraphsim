import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    conversationId : {
        type : String
    },
    senderId : {
        type : String
    },
    recieverId : {
        type : String
    },
    text : {
        type : String
    }
},{
    timestamps : true
});

const message = new mongoose.model('Message',messageSchema);
export default message;
