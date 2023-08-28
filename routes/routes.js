const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers.js");

router.use("/", userControllers);
router.use("/add", userControllers);
router.use("/edit/:id", userControllers);
router.use("/update/:id", userControllers);
router.use("/delete/:id", userControllers);

module.exports = router;

