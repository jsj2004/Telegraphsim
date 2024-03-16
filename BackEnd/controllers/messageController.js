import message from "../models/message.js";
import toMorseCode from "../util/toMorseCode.js";

export const getMessage = async (req,res) => {
    try {
        const allMessages = await message.find({conversationId : req.params.id});
        return res.status(200).json(allMessages);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const newMessage = async (req,res) => {
    try {
        req.body.text = toMorseCode(req.body.text);
        const newMessage = new message(req.body);
        await newMessage.save();
        return res.status(200).json("message sent successfully");
    } catch (error) {
        return res.status(500).json(`message was NOT sent successfully, error : ${error.message}`);
    }
}

