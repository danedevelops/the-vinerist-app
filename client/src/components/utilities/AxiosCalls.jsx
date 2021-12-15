import axios from "axios";
const PORT = 8080;

export const postWinery = (newWinery) => {
  return axios.post("http://localhost:8080/wineries", newWinery);
};

export const postWineryImg = (newWineryImg) => {
  return axios.post("http://localhost:8080/wineries/images", newWineryImg);
};

export const postVintageImg = (newVintageImg) => {
  return axios.post("http://localhost:8080/vintages/images", newVintageImg);
};

export const postVintage = (newVintage) => {
  return axios.post("http://localhost:8080/vintages", newVintage);
};

export const getWineryIDandName = () => {
  return axios
    .get("http://localhost:8080/wineries/abbreviated")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getWineries = () => {
  return axios
    .get("http://localhost:8080/wineries")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getWineryById = (id) => {
  return axios
    .get(`http://localhost:8080/wineries/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getWineryImagesById = (id) => {
  return axios
    .get(`http://localhost:8080/wineries/images/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getVintagesImagesById = (id) => {
  return axios
    .get(`http://localhost:8080/vintages/images/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getVintages = () => {
  return axios
    .get("http://localhost:8080/vintages")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getVintageById = (id) => {
  return axios
    .get(`http://localhost:8080/vintages/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getReviewsById = (id) => {
  return axios
    .get(`http://localhost:8080/reviews/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getReviewsImagesById = (id) => {
  return axios
    .get(`http://localhost:8080/reviews/images/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getVintageByWineryID = (id) => {
  return axios
    .get(`http://localhost:8080/vintages/wineries/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getReviewsByVintageID = (id) => {
  return axios
    .get(`http://localhost:8080/reviews/selected/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const postReview = (newReview) => {
  return axios.post("http://localhost:8080/reviews", newReview);
};

export const postReviewImg = (newReviewImg) => {
  return axios.post("http://localhost:8080/reviews/images", newReviewImg);
};

export const getReviewNumber = (id) => {
  return axios.get("http://localhost:8080/reviews/number", id);
};

export const login = (email, password) => {
  return axios
    .post(`http://localhost:${PORT}/users/login`, {
      username: email,
      password: password,
    })
    .then((res) => res)
    .catch((error) => error.response);
};

export const registerUser = (user) => {
  return axios
    .post(`http://localhost:${PORT}/users/register`, user)
    .then((res) => res)
    .catch((error) => error.response);
};

export const getUser = (id) => {
  return axios
    .post(`http://localhost:${PORT}/users`, { id: id })
    .then((res) => res)
    .catch((error) => error.response);
};

export const postUserImg = (newUserImg) => {
  return axios.post("http://localhost:8080/users/img", newUserImg);
};

export const getAverageReviews = (id) => {
  return axios
    .get(`http://localhost:${PORT}/reviews/average/${id}`)
    .then((res) => res)
    .catch((error) => error.response);
};

export const getLikes = (id) => {
  return axios
    .get(`http://localhost:8080/reviews/likes/${id}`)
    .then((res) => res)
    .catch((error) => error.response);
};

export const addLike = (id) => {
  return axios
    .patch(`http://localhost:8080/reviews/likes/${id}`)
    .then((res) => res)
    .catch((error) => error.response);
};
