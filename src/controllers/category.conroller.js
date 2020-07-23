const Category = require('../models/category.model');

//Simple version, without validation or sanitation
module.exports =  {
    getAll(req, res) {
        Category.find({}, function (err, docs) {
            res.send(abstractActionResult(docs, err));
        })
    },
    getById(req, res) {
        Category.findById(req.params.id, function (err, docs) {
            res.send(abstractActionResult(docs, err));
        })
    },
    create(req, res, next) {
        const category = new Category({
            _id: req.body._id,
            name: req.body.name
        });

        category.save((err) => {
            res.send(voidAbstractActionResult(err));
        })
    },
    update(req, res) {
        console.log(Category)
        res.send('Greetings from the Test controller!');
    },
    delete(req, res) {
        console.log(Category)
        res.send('Greetings from the Test controller!');
    }
}