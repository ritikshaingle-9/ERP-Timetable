const express = require("express");
const router = express.Router();
const controller = require("../controllers/timetable.controller");

router.post("/", controller.createEntry);
router.get("/class/:classId", controller.getByClass);
router.put("/:id", controller.updateEntry);
router.delete("/:id", controller.deleteEntry);

module.exports = router;
