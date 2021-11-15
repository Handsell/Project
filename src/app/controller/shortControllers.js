const Short = require('../models/short');
const {mongooseToObject} = require('../../util/mongoose');
class ShortController {
    
    // [get] /short
    index(req,res,next) {
        Short.find({})
        .then(shorts=>{
            shorts = shorts.map(short => short.toObject())
            res.render('short',{shorts})
        })
        .catch(err=>next(err));
        // res.render('short');
    };
    show(req,res,next){
        Short.findOne({slug: req.params.slug})
            .then(shorts=>{
                res.render('products/show', { shorts: mongooseToObject(shorts) })
                // res.json(bags)
            })
            .catch(err=>next(err));
    }

}

module.exports = new ShortController;
