const express=require ('express');
const router=express.Router();
const User=require('../models/users.js');
const multer=require('multer');
const fs=require('fs/promises')

// image upload 
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

var upload =multer({
    storage:storage
}).single("image");

// Insert an user into the database 
router.post("/add", upload, async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone, 
            image: req.file.filename,
        });
        
        await user.save();

        req.session.message = {
            type: 'success',
            message: 'User added Successfully 🌟'
        };
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});
// Get All users 
router.get("/", async (req, res) => {
    try {
        const users = await User.find().exec();
        res.render("index.ejs", {
            title: "Home Page",
            users: users,
        });
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});



    // res.render("index.ejs", {title:"Home page"})


router.get("/add",(req,res)=>{
    res.render("../views/add.ejs", {title:"Home page"})
});

// edit a user route 
router.get("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).exec();

    if (!user) {
      return res.redirect("/");
    }

    res.render("edit.ejs", {
      title: "Edit User",
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
});
// update user post 
router.post('/update/:id', upload, async (req, res) => {
  try {
    const id = req.params.id;
    let new_image = '';

    if (req.file) {
      new_image = req.file.filename;
      try {
        await fs.unlink('../uploads/' + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }

    await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: new_image,
    });

    req.session.message = {
      type: 'success',
      message: 'User updated successfully 😍'
    };
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.json({ message: error.message, type: 'danger' });
  }
});
// delete user data 
router.get('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndRemove(id);

    if (user) {
      if (user.image) {
        try {
          fs.unlinkSync('../uploads/' + user.image);
        } catch (err) {
          console.error(err);
        }
      }
      req.session.message = {
        type: 'info',
        message: 'User deleted successfully 🙌',
      };
    } else {
      req.session.message = {
        type: 'danger',
        message: 'User not found',
      };
    }
  } catch (error) {
    console.error(error);
    req.session.message = {
      type: 'danger',
      message: 'Error deleting user',
    };
  } finally {
    res.redirect('/');
  }
});

module.exports = router;











// router.get("/users",(req,res)=>{
//     res.send("All users are Registered 🌟")
// });
