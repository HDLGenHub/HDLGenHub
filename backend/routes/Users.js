const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + uuidv4(); // Generate unique filename
    const extension = path.extname(file.originalname); // Extract file extension
    cb(null, uniqueSuffix + extension); // Set filename
  },
});
/////start to edit
/*
router.get('/',(req,res)=>{
  try{
    this.post.find({}).then(data=>{
      res.json(data)
    }).catch(error=>{
      res.json({error})
    })
  }catch(error){
    
    res.json({error})
  }
})*/
router.post(" /uploads",async(req,res)=>{
  const body=req.body;
  try{
    const newImage=await this.post.create(body)
    newImage.save();
    res.status(201).json({msg:" new image uploaded!"})

  }catch(error){

    res.status(409).json({message:error.message})
  }
})
/*/ Multer file filter to accept only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

// Multer upload configuration
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Route to handle file upload
router.post("/upload", upload.single("avatar"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const dpUrl = req.file.path; // Save file path to database
    return res.status(200).json({ message: "File uploaded", dpUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error uploading file" });
  }
});*/

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

/*
router.route("/").get((req,res)=>{
    User.find().then((User)=>{
        res.json(User)
    }).catch((err)=>{
        console.log(err);
    })
})*/
router.get('/', async (req, res) => {
  try {
      const users = await User.find();
      res.json(users);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

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

  router.post("/enroll/:userId/:courseId",async(req, res) => {
    try {
        const userId = req.params.userId;
        const courseId = req.params.courseId;

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the course is already enrolled
        if (user.enrolledCourses.includes(courseId)) {
            return res.status(400).json({ message: 'User already enrolled in this course' });
        }

        // Add the course to the enrolledCourses array
        else{
          //user.enrolledCourses.pop()
          user.enrolledCourses.push(courseId);
        }

        // Save the updated user document
        await user.save();

        res.status(200).json({ message: 'Course enrolled successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error enrolling in course' });
    }
});

router.post("/unenroll/:userId/:courseId",async(req, res) => {
  try {
      const userId = req.params.userId;
      const courseId = req.params.courseId;

      // Find the user by ID
      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Add the course to the enrolledCourses array
      else{
        var index = user.enrolledCourses.indexOf(courseId);
        user.enrolledCourses = user.enrolledCourses.slice(0,index).concat(user.enrolledCourses.slice(index+1,user.enrolledCourses.length));
      }

      // Save the updated user document
      await user.save();

      res.status(200).json({ message: 'Course enrolled successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error enrolling in course' });
  }
});

module.exports = router;