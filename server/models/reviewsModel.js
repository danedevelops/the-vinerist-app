const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const insertReview = async (body) => {
  return await prisma.reviews.create({
    data: {
      User: { connect: { id: body.user_id } },
      user_level: body.user_level,
      user_review: body.user_review,
      star_review: parseInt(body.star_review),
      Vintages: { connect: { id: parseInt(body.vintageID) } },
    },
  });
};

const insertReviewImg = async (body) => {
  return await prisma.reviewsImages.create({
    data: {
      imageLink: body.imageLink,
      Reviews: { connect: { id: body.reviewsID } },
    },
  });
};

const findReviewsByID = async (id) => {
  return await prisma.reviews.findUnique({ where: { id: id } });
};

const findReviewsByVintagesID = async (id) => {
  return await prisma.reviews.findMany({
    where: { vintageID: id },
    include: { User: true },
  });
};

const getReviewsImagesByID = async (reviewid) => {
  return await prisma.reviewsImages.findFirst({
    where: { reviewsID: reviewid },
  });
};

const getNumberofReviewersByID = async (id) => {
  return await prisma.reviews.findMany({
    where: { vintageID: id },
  });
};

const getAverageofReviewsByID = async (id) => {
  return await prisma.reviews.aggregate({
    where: { vintageID: id },
    avg: {
      star_review: true,
    },
  });
};

const getLikes = async (reviewid) => {
  return await prisma.reviews.findUnique({
    where: { id: reviewid },
  });
};

const addLike = async (reviewid) => {
  console.log(reviewid);
  return await prisma.reviews.update({
    where: { id: reviewid },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
};

module.exports = {
  insertReview,
  findReviewsByID,
  findReviewsByVintagesID,
  insertReviewImg,
  getReviewsImagesByID,
  getNumberofReviewersByID,
  getAverageofReviewsByID,
  getLikes,
  addLike,
};
