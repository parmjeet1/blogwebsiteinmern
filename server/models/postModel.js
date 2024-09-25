
const mongoose=require('mongoose');
const postSchema=mongoose.Schema({


    title: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        enum: {
            values: ['Agriculture', 'Business', 'Education', 'Entertainment', 'Art', 'Investment', 'Uncategorized', 'Weather'],
            message: '{VALUE} is not supported'
        }
    },
    description:{
        type: String,
        required: true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    },
    thumbnail:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
