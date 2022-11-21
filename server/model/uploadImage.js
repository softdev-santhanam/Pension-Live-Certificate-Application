import mongoose from 'mongoose';

const uploadSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    }
    
});


const post = mongoose.model('uploadimage', uploadSchema);

export default uploadImage;