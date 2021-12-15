const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const vintagesData = require("./data/vintages");
const wineriesData = require("./data/wineries");

//vintages bulk insert
const insertInitialVintages = async () => {
  vintagesData.forEach(async (item) => {
    await prisma.vintages
      .create({
        data: {
          vintage_name: item.vintage_name,
          vintage_year: item.vintage_year,
          description: item.description,
          Wineries: {
            connect: {
              id: item.assoc_winery,
            },
          },
        },
      })
      .then((res) => console.log(res));
  });
};

//wineries bulk insert
const insertInitialWineries = async () => {
  wineriesData.forEach(async (item) => {
    await prisma.wineries
      .create({
        data: {
          winery_name: item.winery_name,
          winery_address: item.winery_address,
          winery_desc: item.winery_desc,
          coordinates: item.coordinates,
        },
      })
      .then((res) => console.log(res));
  });
};

insertInitialVintages().then((res) => console.log(res));

// insertInitialWineries().then((res) => console.log(res));
