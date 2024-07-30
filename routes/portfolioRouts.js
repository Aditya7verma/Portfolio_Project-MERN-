const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Certificate,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const certificates = await Certificate.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      contact: contacts[0],
      experiences: experiences,
      certificate: certificates,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
