// const jwt = require('jsonwebtoken')
// const User = require('../model/user.model')

// exports.verityToken = async (req, res, next) => {
//     try {
//         let authorization = req.header['authorization']
//         if (!authorization)
//             return res.json({ message: "Not Authorization" });
//         let token = authorization.split(' ')[1]
//         let { userId } = await jwt.verify(token, process.env.JWT_TOKEN)
//         let user = await User.findOne({ _id: userId, isDelete: false })
//         if (!user)
//             return res.json({ message: 'User not Found' })
//         req.user = user
//         next()
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Internal Server Error...' })
//     }
// }

