const Joi = require("joi");

const formValidation = Joi.object({
  soru1: Joi.string().required(),
  soru2: Joi.string().required(),
  soru3: Joi.string().required(),
  soru4: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  description: Joi.string().required(),
});


module.exports = {
  formValidation
};
