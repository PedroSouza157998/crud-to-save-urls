const {Users} = require("../../models/Users")

const getAll = async (req, res) => {
    try{
    const users = await Users.findAll();
    res.json({users})
    }catch(error){
        res.json({seccess: false, message: 'ERROOOOOU!', error})
    }
}
const login = async (req, res) => {
    try{
        console.log(req.body)
        const user = await Users.findOne({where: req.body})

        res.json({success: true, user})

    }catch(error){
        res.json({seccess: false, message: 'ERROOOOOU!', error})
    }
}

const create = async (req, res) => {
    try{
        await Users.create(req.body)
        res.json({success: true, user: req.body})

    }catch(error){
        res.json({seccess: false, message: 'ERROOOOOU!', error})
    }
}


module.exports = {
    getAll,
    create,
    login
}