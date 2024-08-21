const users = require("../friend.json");

// const User = require('../model/user.model')

// exports.addNewUser = async (req, res) => {
//     // users.push(req.body)
//     // res.json({ message: "User Added Success" });
//     try {
//         let user = await User.findOne({ email: req.body.email })
//         if (user) {
//             return res.status(200).json({ message: "User already existing..." });
//         }
//         else {
//             user = await User.create(req.body)
//             res.status(201).json({ message: 'User Added Successfully...' })
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error...' })
//     }
// };

// exports.getAllUser = async (req, res) => {
//     try {
//         let user = await User.find()
//         // console.log(user);
//         res.status(200).json(user)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error...' })
//     }
// };

// exports.getUser = async (req, res) => {
//     try {
//         let user = await User.findOne({ firstName: req.query.firstName })
//         // let user = await User.findOne({ _id: req.query.userId })
//         // let user = await User.findById(req.query.userId)
//         console.log(user);
//         if (!user) {
//             return res.status(404).json({ message: "User not Found..." })
//         }
//         res.status(200).json(user)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error...' })
//     }
// }

// exports.updateUser = async (req, res) => {
//     try {
//         let user = await User.findById(req.query.userId)
//         if (!user) {
//             return res.status(404).json({ message: "User not Found..." })
//         }
//         // user = await User.UpdateOne({ _id: user._id }, req.body, { new: true })
//         // user = await User.findOneAndUpdate({ _id: user._id }, req.body, { new: true })
//         user = await User.findByIdAndUpdate(user._id, { $set: req.body }, { new: true })
//         res.status(200).json(user)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error...' })
//     }
// }

// exports.deleteUser = async (req, res) => {
//     try {
//         let user = await User.findById(req.query.userId)
//         if (!user) {
//             return res.status(404).json({ message: "User not Found..." })
//         }
//         // user = await User.deleteOne({ _id: user._id })
//         // user = await User.findOneAndDelete({ _id: user._id })
//         user = await User.findByIdAnddelete(user._id)
//         res.status(200).json(user)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error...' })
//     }
// }
