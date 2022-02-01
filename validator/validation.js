const Joi = require("joi");

const inputValidation = (data) => {
  const schema = Joi.object({
    login: Joi.string().alphanum().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().required().min(4).max(130),
  }).unknown();

  return schema.validate(data);
};
module.exports ={inputValidation}
