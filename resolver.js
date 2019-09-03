const bcrypt = require('bcryptjs');
const validator = require('validator');

const User = require('./usermodel');

module.exports = {
  createUser: async function({ userInput }, req) {
      const errors = [];
    //   const email = args.userInput.email;
    if (!validator.isEmail(userInput.email)) {
        errors.push({message: 'Email in invalid'});
    }
    if(validator.isEmpty(userInput.password) ){
        errors.push({message: 'Password must be minimum 5 character'});
        
    };
    if (errors.length > 0) {
        const error = new Error('Invalid Input please input valid data');
        error.data = errors;
        error.code = 422;
        throw error;
    }
    const existingUser = await User.findOne({ email: userInput.email });
    if (existingUser) {
      const error = new Error('User exists already!');
      throw error;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new User({
      email: userInput.email,
      name: userInput.name,
      password: hashedPw
    });
    const createdUser = await user.save();
    return { ...createdUser._doc, _id: createdUser._id.toString() };
  }
};