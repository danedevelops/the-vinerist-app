const wineries = require("../models/wineriesModel");

const getAllWineries = async (_req, res) => {
  const data = await wineries.findWineries();
  res.status(200).json(data);
};

const getWineriesIDAndName = async (req, res) => {
  const data = await wineries.getWineriesIDAndName();
  res.status(200).json(data);
};

async function getWineryByID(req, res) {
  const data = await wineries.findWineryByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function getWineryImagesByID(req, res) {
  const data = await wineries.getWineryImagesByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function postNewWineryImg(req, res) {
  console.log(req);
  if (!req.body.wineryID || !req.body.imageLink) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: [""],
    });
  }
  const data = await wineries.insertWineryImg(req.body);
  res.json(data);
}

async function postNewWinery(req, res) {
  console.log(req);
  if (
    !req.body.winery_name ||
    !req.body.winery_address ||
    !req.body.winery_desc ||
    !req.body.coordinates
  ) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: [
        "winery_name, winery_address, winery_desc, coordinates",
      ],
    });
  }
  const data = await wineries.insertWinery(req.body);
  res.json(data);
}

module.exports = {
  getAllWineries,
  getWineryByID,
  postNewWinery,
  getWineriesIDAndName,
  postNewWineryImg,
  getWineryImagesByID,
};
