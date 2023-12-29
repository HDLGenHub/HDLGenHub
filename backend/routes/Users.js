const router = require("express").Router();
const { response } = require("express");
let User = require("../models/User");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const solid = req.body.solid;
    const role = req.body.role;
    const password = req.body.password;

    const NewUser =  new User({
        name,
        email,
        age,
        gender,
        solid,
        role,
        password
    })
    NewUser.save().then(()=>{
        res.json(NewUser);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    User.find().then((User)=>{
        res.json(User)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { name, email, age, gender, solid, role, password } = req.body;

    const UpdateUser = {
        name,
        email,
        age,
        gender,
        solid,
        role,
        password
    };

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, UpdateUser, { new: true });
        if (updatedUser) {
            res.status(200).json({ status: "User updated", user: updatedUser });
        } else {
            res.status(404).json({ status: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "Error with updating data" });
    }
});


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status : "User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete"});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await User.findById(userId).then((user)=>{
        res.status(200).send({status : "User Found",user:user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "User not Found",error : err.message});
    })
})

router.route("/getRole/:role").get(async(req,res)=>{
    let userRole = req.params.role;
    const user = await User.findOne(userRole).then((user)=>{
        res.status(200).send({status : "User Found",user:user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "User not Found",error : err.message});
    })
})

router.route("/login").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log("Received login request:", { email, password });
    try {
      // Find user by email
      const user = await User.findOne({ email });
      console.log("User:", { user });
      if (user) {
        // Compare the provided password with the password in the database
        if (password === user.password) {
          // Passwords match, login successful
          const p = user.password;
          console.log("Password:", { p });
          res.status(200).json({ status: "success", user });
        } else {
          // Passwords do not match, login failed
          res.status(401).json({ status: "Incorrect password" });
        }
      } else {
        // User not found, login failed
        res.status(404).json({ status: "User not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "Error with login" });
    }
  });
module.exports = router;