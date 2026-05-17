const express = require("express");
const router = express.Router();

// dữ liệu giả history
let histories = [
    {
        id: 1,
        userId: 1,
        drugName: "Paracetamol",
        diseaseName: "Tiểu đường",
        result: "Cảnh báo: không nên dùng"
    }
];

// 📌 GET ALL HISTORY
router.get("/", (req, res) => {
    res.json(histories);
});

// 📌 GET HISTORY BY USER
router.get("/user/:userId", (req, res) => {
    const data = histories.filter(h => h.userId == req.params.userId);
    res.json(data);
});

// 📌 CREATE HISTORY
router.post("/", (req, res) => {
    const newHistory = {
        id: histories.length + 1,
        ...req.body
    };

    histories.push(newHistory);

    res.json(newHistory);
});

// 📌 DELETE HISTORY
router.delete("/:id", (req, res) => {
    histories = histories.filter(h => h.id != req.params.id);
    res.json({ message: "Deleted history" });
});

module.exports = router;