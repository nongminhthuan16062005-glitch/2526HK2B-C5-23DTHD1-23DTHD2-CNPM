const express = require("express");
const router = express.Router();

// dữ liệu user giả (sau này sẽ dùng database)
let users = [
    {
        id: 1,
        username: "admin",
        password: "123456"
    },
    {
        id: 2,
        username: "user",
        password: "123456"
    }
];

// 📌 LOGIN
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Sai tài khoản hoặc mật khẩu"
        });
    }

    res.json({
        message: "Đăng nhập thành công",
        user: {
            id: user.id,
            username: user.username
        }
    });
});

module.exports = router;