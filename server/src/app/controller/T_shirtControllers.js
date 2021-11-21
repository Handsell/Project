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
    update(req, res,next){
      
        return T_shirt.updateOne(
            { id: req.params.id },  // <-- find stage
            { $set: {                // <-- set stage
               id: req.body.id,     // <-- id not _id
               img: req.body.img,
               slug: req.body.slug,
               Name: req.body.Name,
               Price: req.body.Price
              } 
            }   
          ).then(result => {
            res.status(200).json({ message: "Update successful!" });
          })
    }
}

module.exports = new T_shirtController;
