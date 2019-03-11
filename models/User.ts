import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserShema = new Schema({

    timestamp: {
        type: Date,
        default: Date.now
    },
    name:{
        type: String,
        default: 'noname',
        required: true
    },
    username:{
        type:String,
        default: '',
        required: true
    },
    password:{
        type:String,
        default: '',
        required: true
    },
    rut:{
        type: String,
        default: '',
        required: true
    },
    age:{
        type: String,
        default : '',
        required : false

    }
});

export default mongoose.model('User', UserShema);