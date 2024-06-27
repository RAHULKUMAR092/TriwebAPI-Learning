const User = require("../models/user");

const postUser = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send({ result, status: "success" });
};
module.exports.postUser = postUser;
