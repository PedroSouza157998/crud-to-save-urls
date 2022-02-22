const { Users } = require("../../models/Users")

const getAll = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json({ users })
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}
const login = async (req, res) => {
    try {
        console.log(req.body)
        const user = await Users.findOne({ where: req.body })

        res.json({ success: true, user })

    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}

const create = async (req, res) => {
    try {
        if(req.body.name.length<= 4) return res.json({success: false, message: 'Nome de usuário muito pequeno'})
        if(req.body.password.length<= 4) return res.json({success: false, message: 'senha muito pequeno'})
        const user = await Users.findOne({ where: req.body })
        if (user == null) {
            await Users.create(req.body)
            res.json({ success: true, user: req.body })
        }
        else {
            res.json({success: false, message: 'Usuário existente'})
        }
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}


module.exports = {
    getAll,
    create,
    login
}