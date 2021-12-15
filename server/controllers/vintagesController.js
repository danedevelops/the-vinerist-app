const vintages = require("../models/vintagesModel");

async function getAllVintages(_req, res) {
  const data = await vintages.findVintages();
  res.status(200).json(data);
}

async function getVintageByID(req, res) {
  const data = await vintages.findVintageByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function getVintageByWineryID(req, res) {
  const data = await vintages.findVintageByWineryID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function postNewVintageImg(req, res) {
  if (!req.body.vintagesID || !req.body.imageLink) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: [""],
    });
  }
  const data = await vintages.insertVintageImg(req.body);
  res.json(data);
}

async function postNewVintage(req, res) {
  if (
    !req.body.vintage_name ||
    !req.body.vintage_year ||
    !req.body.description ||
    !req.body.wineries
  ) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: [
        "vintage_name, vintage_year, description, associatedwinery",
      ],
    });
  }
  const data = await vintages.insertVintage(req.body);
  res.json(data);
}

async function getVintagesImagesByID(req, res) {
  const data = await vintages.getVintagesImagesByID(parseInt(req.params.id));
  res.status(200).json(data);
}

module.exports = {
  getAllVintages,
  getVintageByID,
  postNewVintage,
  getVintageByWineryID,
  postNewVintageImg,
  getVintagesImagesByID,
};
