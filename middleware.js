const accessControl = (req, res, next) => {
  const access = false;
  if (!access) {
    res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }

  next();
};

const defaultControl = (req, res, next) => {
  console.log("default Middleware Control");

  next();
};

module.exports = {
  accessControl,
  defaultControl,
};
