const addRepository = require("../controllers/addRepository");
const getRepositoryDetail = require("../controllers/getRepositoryDetail");
const getUserData = require("../controllers/getUserData");
const getUserRepositories = require("../controllers/getUserRepositories");
const getUserToken = require("../controllers/getUserToken");

const userRouter = require("express").Router();

userRouter.get("/repository", getUserRepositories);
userRouter.get("/token", getUserToken);
userRouter.get("/", getUserData);

// Optional
userRouter.get("/repository/:repoId", getRepositoryDetail);
userRouter.post("/repository", addRepository);

module.exports = userRouter;
