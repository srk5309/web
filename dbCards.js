import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchema); //here cards is the collecion name
//in no sql
//collection -> [documents] -> collection -> [documents] - - - -

























