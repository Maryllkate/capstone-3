const userModel = require("../models/user.model");

module.exports.addUser = async (req, res) => {
    try {
        //declaring database JSON from model file
        const newUser = new userModel({
            firstName : req.body.firstName,
            middleName : req.body.middleName,
            lastName : req.body.lastName,
            email : req.body.email,
            userName : req.body.userName,
            password : req.body.password
        });
        
        const emailExist = await userModel.findOne({email : req.body.email});
            if (emailExist){
                return res.json({error: "an email Exists"});
            } await newUser.save();
            res.status(200).json({message: "a new user successfully created"});
    
    } catch (error) {
        console.error("Error adding new user", error);
        res.status(404).json({message: "an error occured while adding new user"});
    }
};

module.exports.allUsers = async (req, res) => {
    
}

module.exports.editUser = async (req, res) => {
    try {  
        const updateUser = await userModel.findByIdAndUpdate(
             _id = req.params.id,
             {
                firstName : req.body.firstName,
                middleName : req.body.middleName,
                lastName : req.body.lastName
             },
            {
                new : true
            }
             
        );

        if(!updateUser){
            return res.status(404).json({message : "user not found"})
        }

        res.status(200).json({message : "user successfully updated", userModel: updateUser});

    } catch (error) {
        console.error("Error updating user", error);
        res.status(404).json({message: "an error occured while updating the user"});
    }
}

module.exports.login = async(req, res) => {
    try {
        const checkUserExist = await userModel.findOne({
            email : req.body.email
        })

        if(checkUserExist.password===req.body.password){
            res.status(200).json({msg : "user is logged in"})
        } else {
            res.status(401).json({error : "wrong password"})
        }
    } catch (error) {
        res.status(401).json({error : "wrong credentials"})
    }
}

// if(checkUserExist.isAdmin === true){
//     return res.status(200).json({msg: "login as admin"})
// } else {
//     return res.status(401).json({ error: "unauthorized user"})
// }