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
}
}