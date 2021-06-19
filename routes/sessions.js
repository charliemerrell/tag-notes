const User = require("../models/user");
const { generateAccessToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user === null) {
        res.sendStatus(404);
        return;
    }
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
        res.sendStatus(404);
        return;
    }
    const token = await generateAccessToken(user.id);
    res.status(201).json(token);
});

module.exports = router;
