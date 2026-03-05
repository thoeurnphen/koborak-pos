const Category = require('../models/category.model')

exports.addCategory = async (req, res) => {
    try {

        const data = req.body;
        // console.log(data);
        const newData = await new Category(data).save();
        res.status(201).json({
            success: true,
            message: newData
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

exports.getAllCategory = async (req, res) => {

    try {

        const allData = await Category.find({});
        res.status(200).json({
            success: true,
            data: allData,
            message: 'get all category'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getCategoryById = async (req, res) => {
  const { id }  = req.params;
  // const id = req.params.id; ( អាចប្រើប្រាស់ជំនួសបាន )
  // console.log(id);
  try{
    const newCategory = await Category.findById(id);
    if(!newCategory){
      return res.status(404).json({
        success: false,
        message: `Category not found !!!`
      })
    }
    res.status(200).json({
      success: true,
      data: newCategory,
      message: `show one Category `
    })

  }catch(error){
    res.status(500).json({
      success: false,
      message: `Error Sever ${error.message}`
    })
  }
}

exports.updateCategory = async (req, res) => {
  try{
    const { id } = req.params;
    const newCategory = await Category.findByIdAndUpdate(id, req.body,{
      new: true,          // return updated data
      runValidators: true // (optional) validate update fields
    });
    if(!newCategory){
      return res.status(404).json({
        success: false,
        message: `Category Id ${id} not Found !!!`
      })
    }
    res.status(200).json({
      success: true,
      data: newCategory,
      message: "Category update successful"
    })
    
  }catch(error){
    res.status(500).json({
      success: false,
      message: `${error.message}`
    })
  }
}

exports.removeCategory = async (req, res) => {
  try{
    const { id } = req.params;
    const newCategory = await Category.findByIdAndDelete(id);
    if(!newCategory){
      return res.status(404).json({
        success: false,
        message: `Category Id ${id} not Found !!!`
      })
    }
    res.status(200).json({
      success: true,
      data: newCategory,
      message: "Remove Category successful"
    })

  }catch(error){
    res.status(500).json({
      success: false,
      message: `${error.message}`
    })
  }
}