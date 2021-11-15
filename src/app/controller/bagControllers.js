const Bag = require('../models/bag');
const {mongooseToObject} = require('../../util/mongoose');

class BagController {
    
    // [get] /bag
    index(req,res,next) {
        Bag.find({})
        .then(bags=>{
            bags = bags.map(bag => bag.toObject())
            res.render('bag',{bags})
        })
        .catch(err=>next(err));
       
    };
    show(req,res,next){
        Bag.findOne({slug: req.params.slug})
            .then(bags=>{
                res.render('products/show', { bags: mongooseToObject(bags) })
                // res.json(bags)
            })
            .catch(err=>next(err));
    }

}

module.exports = new BagController;