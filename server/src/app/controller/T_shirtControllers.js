const T_shirt = require('../models/T_shirt');
const {mongooseToObject} = require('../../util/mongoose');

class T_shirtController {
    
    // [get] /T_shirt
    index(req,res,next) {
        T_shirt.find({})
        .then(t_shirts=>{
            t_shirts = t_shirts.map(T_shirt => T_shirt.toObject())
            res.render('T_shirt',{t_shirts})
        })
        .catch(err=>next(err));
        // res.render('T_shirt');
    };
    show(req,res,next){
        T_shirt.findOne({slug: req.params.slug})
            .then(t_shirts=>{
    //             res.render('products/show', { t_shirts: mongooseToObject(t_shirts) })
                res.json(t_shirts)
            })
            .catch(err=>next(err));
    }
    show_id(req,res,next){
        T_shirt.findOne({id: req.params.id})
            .then(t_shirts=>{
    //             res.render('products/show', { t_shirts: mongooseToObject(t_shirts) })
                res.json(t_shirts)
            })
            .catch(err=>next(err));
    }  
};


module.exports = new T_shirtController;
