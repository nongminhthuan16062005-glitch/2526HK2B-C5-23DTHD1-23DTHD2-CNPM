const express = require("express");
const router = express.Router();

/*
👉 Giả lập dữ liệu:
thuốc + bệnh nền không tương thích
*/
let contraindications = [
    {
        id: 1,
        drug: "Ibuprofen",
        disease: "Tiểu đường",
        level: "HIGH",
        message: "Nguy hiểm: có thể gây biến chứng"
    },
    {
        id: 2,
        drug: "Aspirin",
        disease: "Suy gan",
        level: "HIGH",
        message: "Không khuyến cáo sử dụng"
    }
];


// 📌 GET ALL
router.get("/", (req, res) => {
    res.json(contraindications);
});


// 📌 CHECK CHỐNG CHỈ ĐỊNH (LOGIC CHÍNH)
router.post("/check", (req, res) => {
    const { drug, disease } = req.body;

    const result = contraindications.find(
        item =>
            item.drug.toLowerCase() === drug.toLowerCase() &&
            item.disease.toLowerCase() === disease.toLowerCase()
    );

    if (result) {
        return res.json({
            safe: false,
            level: result.level,
            message: result.message
        });
    }

    res.json({
        safe: true,
        message: "Thuốc an toàn với bệnh nền này"
    });
});


// 📌 CREATE CONTRAINDICATION
router.post("/", (req, res) => {
    const newItem = {
        id: contraindications.length + 1,
        ...req.body
    };

    contraindications.push(newItem);

    res.json(newItem);
});


// 📌 DELETE
router.delete("/:id", (req, res) => {
    contraindications = contraindications.filter(
        c => c.id != req.params.id
    );

    res.json({ message: "Deleted successfully" });
});

module.exports = router;