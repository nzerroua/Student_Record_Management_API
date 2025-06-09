// ==== 6. src/middleware/zodMiddleware.js ====
export default (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({
      error: "Validation failed",
      details: err.errors,
    });
  }
};
