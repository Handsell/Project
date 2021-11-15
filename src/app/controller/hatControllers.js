const Hat = require('../models/hat');
const {mongooseToObject} = require('../../util/mongoose');
class HatController {
    
    // [get] /hat
    index(req,res,next) {
        Hat.find({})
        .then(hats=>{
            hats = hats.map(hat => hat.toObject())
            res.render('hat',{hats})
        })
        .catch(err=>next(err));
        // res.render('hat');
    };
    show(req,res,next){
        Hat.findOne({slug: req.params.slug})
            .then(hats=>{
                res.render('products/show', { hats: mongooseToObject(hats) })
                // res.json(bags)
            })
            .catch(err=>next(err));
    }
}

module.exports = new HatController;

