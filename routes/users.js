const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

//View details
router.get("/", user.details);
// Save user
router.post("/user", user.create);

// Edit or create a user
router.get("/user/:id?", user.edit);

// Edit update
router.put("/user/:id", user.update);

router.delete("/user/:id", user.delete);

module.exports = router;