const express = require("express");
const validate = require("../middlewares/validate"); // Validate Middleware
const schemas = require("../validations/Forms"); // validations
const { create} = require("../controllers/Forms");
const router = express.Router();

router.route("/").post(validate(schemas.formValidation),create)


module.exports = router;
