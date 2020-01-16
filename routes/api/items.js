const express= require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All  items
// @access public 
router.get('/',(req,res)=> {
    Item.find()
        .sort({date : -1})
        .then(items=> res.json(items))
})

router.post('/',(req,res)=> {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
            .then(item=> res.json(item))
})

router.delete('/:id',(req,res)=> {
    console.log('id is ',req.params.id);
    Item.findById(req.params.id)
        .then(item=> item.remove().then(()=> res.json({success: true})))
})
module.exports = router;

