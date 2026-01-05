const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

/* ➕ ADD EXPENSE */
router.post("/", auth, async (req, res) => {
  try {
    const { amount, category } = req.body;

    const expense = await Expense.create({
      userId: req.userId,   // ✅ MATCHES SCHEMA
      amount,
      category,
    });

    res.json(expense);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add expense" });
  }
});

/* 📥 GET EXPENSES */
router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.userId }).sort({
    createdAt: -1,
  });
  res.json(expenses);
});

/* ❌ DELETE */
router.delete("/:id", auth, async (req, res) => {
  await Expense.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId,
  });
  res.json({ message: "Deleted" });
});

module.exports = router;
