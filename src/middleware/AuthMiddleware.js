const secret = "abcd";
const authMiddleware = (req, res, next) => {
  const token = req.headers.token;
  console.log(token);
  if (token == undefined) {
    res.status(401).json({
      message: "UnAuthorized Token not found",
    });
  } else {
    if (token == secret) {
      next();
    } else {
      res.status(401).json({
        message: "UnAuthorized Invalid Token",
      });
    }
  }
};
module.exports = {
  authMiddleware,
};
