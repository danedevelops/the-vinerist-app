const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//function to add a winery
const insertWinery = async (body) => {
  return await prisma.wineries.create({
    data: {
      winery_name: body.winery_name,
      winery_address: body.winery_address,
      winery_desc: body.winery_desc,
      coordinates: body.coordinates,
    },
  });
};

//function to add a wineryIMG
const insertWineryImg = async (body) => {
  return await prisma.wineriesImages.create({
    data: {
      imageLink: body.imageLink,
      Wineries: { connect: { id: body.wineryID } },
    },
  });
};

//function to find list of all wineries
const findWineries = async () => {
  return await prisma.wineries.findMany();
};

//function to find winery by ID
const findWineryByID = async (id) => {
  return await prisma.wineries.findUnique({ where: { id: id } });
};

//function to find winery name and ID
const getWineriesIDAndName = async () => {
  return await prisma.wineries.findMany({
    select: { id: true, winery_name: true },
  });
};

const getWineryImagesByID = async (winid) => {
  return await prisma.wineriesImages.findFirst({
    where: { wineryID: winid },
  });
};

module.exports = {
  insertWinery,
  findWineries,
  findWineryByID,
  getWineriesIDAndName,
  insertWineryImg,
  getWineryImagesByID,
};
