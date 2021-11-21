const T_shirt = require('../models/T_shirt');

module.exports={
    createT_shirt : async function (req, res, next) { 
            try {         
              const { Name, image, slug, Price } = req.body;
                const newShirt = new T_shirt({ 
                    image: String,
                    slug: String,
                    Name: String,
                    Price: String,
                });
                await newShirt.save();
                res.status(201).json({ product_created: newShirt }); 
                } catch (err) { 
                    res.status(500).json({ mess: err.message }); 
                }    
    },
    update:async function (req, res, next){
        try{
            const id = req.params.id;
            const updates =req.body;
            const options = {new:true};
            const result = await T_shirt.findByIdAndUpdate(id, updates);
            res.send(result);
        }catch(err){
            console.log(err);
        }
        // res.send('hello');
    },  
}