const db = require("../../initialiseDb");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

const seedData = {
    users: [
        {
            email: "charlie.merrelleco@gmail.com",
            password: "passWord123",
        },
    ],
};

async function seedDb() {
    db.sync({ force: true });
    for (const user of seedData.users) {
        const passwordHash = await bcrypt.hash(user.password, 10);
        await User.create({ email: user.email, passwordHash });
    }
}

module.exports = { seedDb, seedData };
