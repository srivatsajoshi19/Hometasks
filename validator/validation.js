const Joi = require("joi");

const schema = Joi.object({
  login: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().required(),
  age: Joi.number().required().min(4).max(130),
}).unknown();

const validator = (req, res, next) => {
  const user = req.body;
  const response = schema.validate(user);
  if (response.error.isJoi) {
    return res.status(422).send(response.error.details[0].message);
  }
  if (!response.error) {
    next();
  } else {
    return res.status(400).send(response.error.details[0].message);
  }
};
module.exports = { schema, validator };
