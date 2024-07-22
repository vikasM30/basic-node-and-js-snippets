const { body, validationResult, param, check } = require("express-validator");

module.exports = (app) => {
  app.post(
    "/user",
    body("username").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
    body("firstname").exists({ checkFalsy: true }),
    body("passwordConfirmation").custom((value, { req }) => {
      if (value !== req.body.password) {
        console.log(value);
        throw new Error("Password confirmation does not match password");
      }
      // Indicates the success of this synchronous custom validator
      return true;
    }),
    param("id").customSanitizer((value) => {
      return value;
    }),
    check("password", "The password must be 5+ chars long and contain a number")
    .not()
    .isIn(["123", "password", "god"])
    .withMessage("Do not use a common word as the password")
    .isLength({ min: 5 })
    .matches(/\d/),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      res.json(req.body);
    }
  );

};
