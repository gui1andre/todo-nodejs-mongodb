const { json } = require("express");
const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");


router.get("/", async (req, res) => {
  try {
    let checklist = await Checklist.find({});
    console.log(checklist);
    res.status(200).json(checklist);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { titulo, data, prioridade, categorias, etapas, concluido } = req.body;

    let checklist = await Checklist.create({
      titulo,
      data,
      prioridade,
      categorias,
      etapas,
      concluido,
    });
    res.status(200).json(checklist);
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let { titulo, data, prioriedade, categorias, etapas, concluida } = req.body;

    let checklist = await Checklist.findByIdAndUpdate(
      req.param.id,
      { titulo, data, prioriedade, categorias, etapas, concluida },
      { new: true }
    );
    res.sendStatus(200).json(checklist);
  } catch (error) {
    res.sendStatus(422).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});




module.exports = router;
