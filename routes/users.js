const User = require("../models/user");
const { generateAccessToken, authenticateToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash });
    const jwt = await generateAccessToken(user.id);
    res.status(201).json({ jwt });
});

module.exports = router;
