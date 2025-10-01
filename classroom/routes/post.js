const express = require("express");
const router = express.Router();
// POST
// INDEX 
router.get("/", (req, res)=>{
    res.send("GET for post.");
});

// SHOW 
router.get("/:id", (req, res)=>{
    res.send("GTE for post id.");
});

// POST
router.post("/", (req, res)=>{
    res.send("POST for post.");
});
// DELETE
router.delete("/:id", (req, res)=>{
    res.send("DELETE for post id.");
})
module.exports = router;