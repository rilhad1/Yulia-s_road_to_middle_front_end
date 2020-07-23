const User = require('../models/users.model');
const {abstractActionResult, voidAbstractActionResult} = require('./controller.utils');
//Simple version, without validation or sanitation
module.exports =  {
    getUser(req, res) {
        console.log(req.body)
        User.findOne({login: req.body.login, password: req.body.password}, function (err, user) {
            console.log(err)
            console.log(user)
            res.send(abstractActionResult(user, err));
        })
    },
    create(req, res) {
        const user = new User({
            _id: req.body._id,
            login: req.body.login,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            createdAt: Date.now(),
        });

        user.save((err) => {
            res.send(voidAbstractActionResult(err));
        })
    },
    update(req, res) {
        res.send('Greetings from the Test controller!');
    },
    delete(req, res) {
        res.send('Greetings from the Test controller!');
    }
}