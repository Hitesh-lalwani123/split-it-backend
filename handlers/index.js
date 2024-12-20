const User = require('./models/User');

async function createSampleUser() {
  const user = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'securepassword',
  });

  await user.save();
  console.log('User saved:', user);
}

module.exports = createSampleUser;
