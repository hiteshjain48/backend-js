const User = require('../models/users');

async function handleUserSignup(req, res) {
    const body = req.body;
    User.create({
        name: body.name,
        email: body.email,
        password: body.password
    });
    return res.redirect('/')
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({email, password});

    if(!user) {
        return res.render("login", {
            error: "Invalid email or password.",
        });
    }

    return res.redirect('/')
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}