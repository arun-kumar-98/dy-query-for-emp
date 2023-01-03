const controller = require("../query/dy_sqlQuery");

const router = require("express").Router();

router.post("/get", controller.fetchRecord);

module.exports = router;
