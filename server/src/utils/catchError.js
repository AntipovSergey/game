const catchError = (error, res) => {
  console.log(error);
  return res.status(500).json({ message: error.message });
};

module.exports = catchError;
