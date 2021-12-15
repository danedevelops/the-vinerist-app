const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//function to add a vintage
const insertVintage = async (body) => {
  return await prisma.vintages.create({
    data: {
      vintage_name: body.vintage_name,
      vintage_year: body.vintage_year,
      description: body.description,
      Wineries: {
        connect: {
          id: parseInt(body.wineries),
        },
      },
    },
  });
};

const insertVintageImg = async (body) => {
  return await prisma.vintagesImages.create({
    data: {
      imageLink: body.imageLink,
      Vintages: { connect: { id: body.vintagesID } },
    },
  });
};

//function to find list of all vintages
const findVintages = async () => {
  return await prisma.vintages.findMany();
};

//function to find winery by ID
const findVintageByID = async (id) => {
  return await prisma.vintages.findUnique({
    where: { id: id },
    include: { Wineries: true },
  });
};

//function to find
const findVintageByWineryID = async (id) => {
  return await prisma.vintages.findMany({ where: { assoc_winery: id } });
};

const getVintagesImagesByID = async (vinid) => {
  return await prisma.vintagesImages.findFirst({
    where: { vintagesID: vinid },
  });
};

module.exports = {
  insertVintage,
  findVintages,
  findVintageByID,
  findVintageByWineryID,
  insertVintageImg,
  getVintagesImagesByID,
};
