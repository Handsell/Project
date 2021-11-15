const Jean = require('../models/jean');
const {mongooseToObject} = require('../../util/mongoose');
class JeanController {
    
    // [get] /jean
    index(req,res,next) {
        Jean.find({})
        .then(jeans=>{
            jeans = jeans.map(jean => jean.toObject())
            res.render('jeans',{jeans})
        })
        .catch(err=>next(err));
        // res.render('jean');
    };
    show(req,res,next){
        Jean.findOne({slug: req.params.slug})
            .then(jeans=>{
                res.render('products/show', { jeans: mongooseToObject(jeans) })
                // res.json(bags)
            })
            .catch(err=>next(err));
    }
}

module.exports = new JeanController;
