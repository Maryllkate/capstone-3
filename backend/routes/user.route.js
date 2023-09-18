const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

//add new user information
router.post("/signup", userController.addUser);

//update user information
router.put("/update/:id", userController.editUser);

//view user information
router.get("/users", userController.allUsers);

//login user 
router.post('/login', userController.login);











module.exports = router;