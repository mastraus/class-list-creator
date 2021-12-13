const router = require("express").Router({ mergeParams: true });
const controller = require("./classes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.use(cors())

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route("/:classId")
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;

//should see list of all classroom teachers
//should be able to click on classroom teacher to see class list
//should be able to make a new class