const User = require('../models/userModel');

const listUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: 'Error', error});
    }
};


// i havent used the changeUserType because i supposed there is will be a single administrators who gonna be assign the userType, 
// if the case is  this so then the below code should be used also be used, in that case a admin user can changetype of user.



// const changeUserType = async(req, res) => {
//     const {userId, userType} = req.body;

//     // incase if there is a administrator who can modify the usertype.....
//     if (userType !== 'admin') {
//         return res.status(403).json({ message: 'Only admins can change user types' });
//     }
    
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({message: `User not Found !`});
//         }
//         user.userType = userType;
//         await user.save();

//         res.json({message: `User type updated successfully !`});
//     } catch (error) {
//         res.status(500).json({message: `Error: ${error}`})
//     }
// }

module.exports = {listUsers}   // add "changeUserType" to make it in use if required//