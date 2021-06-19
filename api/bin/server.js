const app = require("../app");

app.get("/api/hello", (req, res) => {
    res.send("Hello, World");
});

app.listen(4000);
