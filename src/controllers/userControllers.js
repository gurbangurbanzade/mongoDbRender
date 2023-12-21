const User = require("./../models/userModel");

const postUser = (req, res) => {
  console.log(req.body);

  const newUser = new User(req.body);
  newUser.save();
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

const getUserById = async (req, res) => {
  console.log("salam", req.params.id);
  let findUser = await User.findOne({ id: req.params.id });
  console.log(findUser);
  findUser ? res.send(findUser) : res.send({ id: "bele istifadeci yoxdur" });
};

const getUserDeleteById = async (req, res) => {
  console.log("salam", req.params.id);
  let findUser = await User.findOne({ id: req.params.id });
  console.log(findUser);
  await User.findByIdAndDelete(findUser._id);
};
const getUserUpdate = async (req, res) => {
  console.log("salam", req.params.id);
  console.log(req.body.name);
  const update = { name: req.body.name };
  let findUser = await User.findOne({ id: req.params.id });
  console.log(findUser);

  console.log(findUser._id);
  const filter = { _id: findUser._id };

  const doc = await User.findOneAndUpdate(filter, update, {
    new: true,
  });
};
const getUserPut = async (req, res) => {
  // console.log("salam", req.params.id);
  // console.log(req.body.name);
  // const update = { name: req.body.name };
  // let findUser = await User.findOne({ id: req.params.id });
  // console.log(findUser);
  // console.log(findUser._id);
  // const filter = { _id: findUser._id };
  // const doc = await User.replaceOne(filter, update, {
  //   new: true,
  // });
};

module.exports = {
  postUser,
  getAllUser,
  getUserById,
  getUserDeleteById,
  getUserUpdate,
  getUserPut,
};
