const express = require("express");
const router = express.Router();

// dữ liệu giả user
let users = [
    {
        id: 1,
        username: "admin",
        role: "admin"
    },
    {
        id: 2,
        username: "user01",
        role: "user"
    }
];


// 📌 GET ALL USERS
router.get("/", (req, res) => {
    res.json(users);
});


// 📌 GET USER BY ID
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user);
});


// 📌 CREATE USER
router.post("/", (req, res) => {
    const newUser = {
        id: users.length + 1,
        ...req.body
    };

    users.push(newUser);

    res.json(newUser);
});


// 📌 UPDATE USER
router.put("/:id", (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);

    users[index] = {
        ...users[index],
        ...req.body
    };

    res.json(users[index]);
});


// 📌 DELETE USER
router.delete("/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id);

    res.json({ message: "Deleted user successfully" });
});

module.exports = router;