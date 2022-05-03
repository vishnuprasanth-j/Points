const mongoose =require('mongoose');

const UserModel = new mongoose.Schema(
    {
        googleId:{type:String}
    }
)


module.exports = mongoose.model('UM',UserModel)
