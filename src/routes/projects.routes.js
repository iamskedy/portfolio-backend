const express = require("express");
const router = express.Router();
const Controller = require("../controllers/projects.controller");

// GET all
router.get("/", Controller.getAll);

// GET by ID
router.get("/:id", Controller.getOne);

// CREATE
router.post("/", Controller.create);

// UPDATE
router.put("/:id", Controller.update);

// DELETE
router.delete("/:id", Controller.remove);

module.exports = router;
