const {Bread, Cart} = require("../models/bread")

module.exports = {
  show: (req,res) => {
    Bread.findAll({_id: req.params.id})
    .populate("/")
    
  }
}
