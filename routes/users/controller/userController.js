const User = require ('../model/User')

module.exports = {
    getAllUsers: function(callback) {
        User.find({}, function (err, payload){
            if(err){
                callback(err, null)
            } else {
                callback(null, payload)
            }
        })
    },
    createUser: function(body, callback){
        let createdUser = new User({
            firstName:body.firstName,
            lastName:body.lastName,
            password: body.password,
            email:body.email,
            username:body.username
        })

        createdUser.save(function(err, payload){
            if(err){
                callback(err, null)
            } else{
                callback(null, payload)
            }
        })
    },
    updateUserByID: function(id, body, callback){
        User.findByIdAndUpdate(
            {_id:id},
            body,
            {new: true},
            function (err, updatedPayload){
                if(err){
                    callback(err, null)
                } else {
                    callback(null, updatedPayload)
                }
            }
        )
    },
    deleteUserByID:function(id, callback){
        User.findByIdAndDelete(
            {_id:id},
            function(err, deletedPayload){
                if(err){
                    callback(err, null)
                }else {
                    callback(null, deletedPayload)
                }
            }

        )
    }

}