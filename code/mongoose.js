// User schema
var userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true},
});

// Create a model from the schema
var User: mongoose.model('User', userSchema);

// Create a new User document
var newUser = new User({
	username: 'user1',
	email: 'user1@example.com',
	password: '1234'
});

// Save the user
newUser.save(function (error, user) {
	if (error) { console.log(error); }
	console.log(user);
});
