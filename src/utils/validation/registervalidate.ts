import joi from 'joi'

const UserSchema = joi.object({
  username: joi.string().empty().min(2).max(30).required().trim().messages({
    "string.empty": "username must be required",
    "string.min": "username should have a minimun lenght 2",
    "any.required": "username must be required",
  }),
  email: joi.string().empty().required().email().trim().messages({
    "string.empty": "email must be required",
    "any.required": " email must be required",
    "string.email": "invalid email address",
  }),
  password: joi.string().empty().min(6).required().trim().messages({
    "string.empty": "password must be required",
    "string.min": "password must be at least 6 charecters",
    "eny.required": "password must be required",
  }),
  phone: joi
    .string()
    .regex(/^[0-9]{10}$/)
    .allow(null)
    .allow("")
    .trim()
    .messages({
      "string.pattern.base": "Phone Number have must 10 digits",
    }),
});

export default UserSchema;
